import { NextResponse } from "next/server";
import { createInitLink } from "../../../../../lib/oauth/token-store";

export const runtime = "nodejs";

export async function POST(request) {
  const authHeader = request.headers.get("authorization") || "";
  const expectedToken = process.env.NAOISE_INIT_SHARED_SECRET;
  if (!expectedToken || authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { trialId, prospectPhone, prospectName } = body || {};
  if (!trialId || !prospectPhone) {
    return NextResponse.json(
      { error: "missing_fields", required: ["trialId", "prospectPhone"] },
      { status: 400 }
    );
  }

  const token = await createInitLink({
    trialId,
    prospectPhone,
    prospectName: prospectName || null,
  });

  const baseUrl = process.env.NEXT_PUBLIC_PROXI_ORIGIN || "https://proxi.my";
  return NextResponse.json({
    url: `${baseUrl}/connect/g/${token}`,
    expiresInSeconds: 600,
  });
}
