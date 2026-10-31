import { consumeInitLink } from "../../../../lib/oauth/token-store";
import { buildAuthUrl } from "../../../../lib/oauth/google";
import { signState } from "../../../../lib/oauth/token-store";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ConnectGooglePage({ params }) {
  const { token } = await params;
  const init = await consumeInitLink(token);

  if (!init) {
    return (
      <main style={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
        background: "#0a0a0a",
        color: "#fafafa",
      }}>
        <div style={{ maxWidth: 480, textAlign: "center" }}>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Link expired</h1>
          <p style={{ opacity: 0.7, lineHeight: 1.5 }}>
            This connection link has expired or already been used. WhatsApp Naoise
            and she&apos;ll send you a fresh one.
          </p>
        </div>
      </main>
    );
  }

  const state = signState({
    trialId: init.trialId,
    prospectPhone: init.prospectPhone,
    issuedAt: Date.now(),
  });

  const authUrl = buildAuthUrl({ state });

  redirect(authUrl);
}
