export const dynamic = "force-dynamic";

const MESSAGES = {
  ok: {
    title: "You're in.",
    body: "Naoise will WhatsApp you in about 5 minutes once she's settled into your inbox. First digest lands tomorrow morning. Reply 'pause' anytime to stop her.",
    tone: "ok",
  },
  denied: {
    title: "No worries.",
    body: "You declined the connection; totally fine. If you change your mind, just tell Naoise on WhatsApp and she'll send a fresh link.",
    tone: "neutral",
  },
  error: {
    title: "Something glitched.",
    body: "The connection didn't complete. WhatsApp Naoise and she'll resend the link.",
    tone: "warn",
  },
};

export default async function SuccessPage({ searchParams }) {
  const params = await searchParams;
  const status = params?.status === "ok"
    ? "ok"
    : params?.status === "denied"
      ? "denied"
      : "error";
  const message = MESSAGES[status];

  const accent =
    status === "ok" ? "#22c55e" : status === "denied" ? "#a3a3a3" : "#f97316";

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
      <div style={{ maxWidth: 520, textAlign: "center" }}>
        <div
          aria-hidden
          style={{
            width: 12,
            height: 12,
            borderRadius: 999,
            background: accent,
            margin: "0 auto 1.25rem",
          }}
        />
        <h1 style={{ fontSize: "1.75rem", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
          {message.title}
        </h1>
        <p style={{ opacity: 0.75, lineHeight: 1.6 }}>{message.body}</p>
        <p style={{ opacity: 0.4, marginTop: "2rem", fontSize: "0.875rem" }}>
          You can close this tab.
        </p>
      </div>
    </main>
  );
}
