import { NextResponse } from "next/server";
import {
  exchangeCodeForTokens,
  fetchUserEmail,
} from "../../../../../lib/oauth/google";
import {
  verifyState,
  storeTrialTokens,
} from "../../../../../lib/oauth/token-store";

export const runtime = "nodejs";

export async function GET(request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const errorParam = url.searchParams.get("error");

  if (errorParam) {
    return NextResponse.redirect(
      new URL(`/connect/g/success?status=denied&reason=${encodeURIComponent(errorParam)}`, url.origin)
    );
  }

  if (!code || !state) {
    return NextResponse.redirect(
      new URL(`/connect/g/success?status=error&reason=missing_params`, url.origin)
    );
  }

  const verified = verifyState(state);
  if (!verified || !verified.trialId) {
    return NextResponse.redirect(
      new URL(`/connect/g/success?status=error&reason=bad_state`, url.origin)
    );
  }

  try {
    const tokens = await exchangeCodeForTokens(code);
    const email = await fetchUserEmail(tokens.access_token);
    await storeTrialTokens({
      trialId: verified.trialId,
      tokens,
      email,
    });

    const naoiseWebhook = process.env.NAOISE_TRIAL_CONNECTED_WEBHOOK;
    if (naoiseWebhook) {
      fetch(naoiseWebhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NAOISE_WEBHOOK_SECRET || ""}`,
        },
        body: JSON.stringify({
          trialId: verified.trialId,
          prospectPhone: verified.prospectPhone,
          email,
          connectedAt: new Date().toISOString(),
        }),
      }).catch(() => {});
    }

    return NextResponse.redirect(
      new URL(`/connect/g/success?status=ok`, url.origin)
    );
  } catch (err) {
    console.error("OAuth callback error", err);
    return NextResponse.redirect(
      new URL(`/connect/g/success?status=error&reason=exchange_failed`, url.origin)
    );
  }
}
