"use client";

import { useState } from 'react';

/* ── palette: matches the reel CTA cards (warm black / gold / cream) ── */
const C = {
  bg: '#0C0B09',
  card: '#14120F',
  border: 'rgba(236,228,213,0.10)',
  gold: '#F59E0B',
  cream: '#ECE4D5',
  muted: '#8A8174',
};

const SECTIONS = [
  {
    id: 'reply',
    keyword: 'REPLY',
    title: 'The Draft Panel',
    explain:
      'For the message you keep rewriting. Paste it in, get three ready-to-send replies in different registers, plus a one-line verdict on which to send.',
    prompt: `You are my draft panel. I will paste a message I received and need to answer.

Give me three ready-to-send replies:
1. WARM — friendly, keeps the relationship.
2. NEUTRAL — polite, professional, zero emotion.
3. FIRM — holds my position, no apology, still civil.

Each reply under 80 words, in my voice, no corporate filler.
Then tell me which one you would send, and why, in one line.

Here is the message:
[PASTE THE MESSAGE HERE]`,
    uses: [
      'A client pushing past the agreed scope',
      'The landlord, the agent, the contractor',
      'Saying no without burning the bridge',
      'The 11pm message from your boss',
      'Replying to a lowball offer',
    ],
  },
  {
    id: 'risk',
    keyword: 'RISK',
    title: 'The Risk Check',
    explain:
      'For the offer that smells off. Paste the message before you reply, click, or pay. It names the manipulation, tells you what they actually want, and hands you a safe response.',
    prompt: `You are my risk check. I will paste a message, offer, or deal.

Score it 1-10 for scam likelihood, then give me:
1. RED FLAGS — every scam or manipulation pattern you detect, named.
2. WHAT THEY WANT — what the sender is actually trying to get from me.
3. VERIFY — three checks I can run in under five minutes.
4. REPLY — one safe response that commits me to nothing.

Do not soften it. If it is a scam, say so plainly.

Here is the message:
[PASTE IT HERE]`,
    uses: [
      '"Investment opportunity" DMs',
      'Job offers that pay too well',
      'Marketplace buyers who overpay',
      'Courier and customs SMS',
      '"Your account will be suspended"',
    ],
  },
  {
    id: 'agree',
    keyword: 'AGREE',
    title: 'The Before-You-Agree Checklist',
    explain:
      'For anything you are about to say yes to. Paste the terms first. It tells you what you are actually agreeing to, where it costs you later, and whether to sign, negotiate, or walk.',
    prompt: `You are my contract guard. I will paste terms I am about to agree to.

Before I say yes, tell me:
1. WHAT I AM AGREEING TO — plain language, five lines max.
2. TRAPS — auto-renewals, penalties, lock-ins, one-sided clauses,
   anything that costs me later.
3. MISSING — what a fair version would include that this one does not.
4. QUESTIONS — three things to ask before signing.
5. VERDICT — sign, negotiate, or walk. One line.

Here are the terms:
[PASTE THE TERMS HERE]`,
    uses: [
      'Tenancy agreements',
      'Gym, telco, and subscription contracts',
      'Freelance scopes and supplier quotes',
      'Employment offer letters',
      'Terms and conditions before checkout',
    ],
    note: 'A thinking tool, not legal advice.',
  },
  {
    id: 'council',
    keyword: 'COUNCIL',
    title: 'The Council',
    explain:
      'For the decision that is too big for one opinion. Describe it, and five advisors argue it out before you commit. They are allowed to disagree.',
    prompt: `You are my council. I am about to make a decision. Convene five advisors:

1. THE SKEPTIC — argues why this fails.
2. THE ACCOUNTANT — what it costs, in money and in time.
3. THE LAWYER — what binds me, what protects me, worst case.
4. THE OPERATOR — what executing this actually takes, step by step.
5. THE FUTURE ME — how this looks in five years.

Each speaks in three lines max. They are allowed to disagree.
Then give me the council's verdict: proceed, modify, or drop. One line.

Here is the decision:
[DESCRIBE THE DECISION HERE]`,
    uses: [
      'The big purchase you keep justifying',
      'Job offers and career moves',
      'Signing a lease or ending one',
      'Launching the thing or shelving it',
      'Anything above your monthly salary',
    ],
  },
];

function CopyButton({ text, id }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'copy_prompt', { prompt_id: id });
    }
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <button
      onClick={copy}
      aria-label={`Copy the ${id} prompt`}
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        padding: '7px 14px',
        fontSize: '0.78rem',
        fontWeight: 600,
        letterSpacing: '0.04em',
        color: copied ? C.bg : C.gold,
        background: copied ? C.gold : 'rgba(245,158,11,0.10)',
        border: `1px solid ${copied ? C.gold : 'rgba(245,158,11,0.35)'}`,
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
      }}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

function Section({ s }) {
  return (
    <section
      id={s.id}
      style={{ scrollMarginTop: '84px', padding: '56px 0 8px', borderTop: `1px solid ${C.border}` }}
    >
      <div
        style={{
          display: 'inline-block',
          padding: '5px 12px',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.14em',
          color: C.gold,
          background: 'rgba(245,158,11,0.10)',
          border: '1px solid rgba(245,158,11,0.30)',
          borderRadius: '999px',
          marginBottom: '14px',
        }}
      >
        {s.keyword}
      </div>
      <h2
        style={{
          fontSize: 'clamp(1.5rem, 4.5vw, 2rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: C.cream,
          marginBottom: '12px',
        }}
      >
        {s.title}
      </h2>
      <p style={{ fontSize: '1rem', lineHeight: 1.7, color: C.muted, marginBottom: '22px', maxWidth: '560px' }}>
        {s.explain}
      </p>

      <div style={{ position: 'relative', marginBottom: '22px' }}>
        <CopyButton text={s.prompt} id={s.id} />
        <pre
          style={{
            margin: 0,
            padding: '48px 18px 20px',
            fontSize: '0.82rem',
            lineHeight: 1.65,
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            color: C.cream,
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: '12px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
        >
          {s.prompt}
        </pre>
      </div>

      <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', color: C.muted, marginBottom: '10px' }}>
        USE IT FOR
      </p>
      <ul style={{ listStyle: 'none', margin: '0 0 26px', padding: 0 }}>
        {s.uses.map((u) => (
          <li key={u} style={{ fontSize: '0.95rem', color: C.cream, padding: '5px 0', opacity: 0.85 }}>
            <span style={{ color: C.gold, marginRight: '10px' }}>—</span>
            {u}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '10px' }}>
        <a
          href="/get-started"
          style={{
            padding: '12px 22px',
            fontSize: '0.92rem',
            fontWeight: 700,
            color: C.bg,
            background: C.gold,
            borderRadius: '10px',
            textDecoration: 'none',
          }}
        >
          Let Proxi run this for you →
        </a>
        <a
          href="https://instagram.com/asknaoise"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.88rem', color: C.muted, textDecoration: 'none', borderBottom: `1px solid ${C.border}` }}
        >
          or DM {s.keyword} to @asknaoise
        </a>
      </div>
      {s.note && (
        <p style={{ fontSize: '0.75rem', color: C.muted, opacity: 0.7, marginTop: '12px' }}>{s.note}</p>
      )}
      <div style={{ height: '40px' }} />
    </section>
  );
}

export default function ProxiPanel() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.cream }}>
      {/* top bar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: 'rgba(12,11,9,0.88)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            padding: '14px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <a href="/" style={{ fontWeight: 800, letterSpacing: '0.08em', color: C.cream, textDecoration: 'none', fontSize: '0.95rem' }}>
            PROXI
          </a>
          <nav style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  padding: '6px 12px',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: C.gold,
                  border: '1px solid rgba(245,158,11,0.30)',
                  borderRadius: '999px',
                  textDecoration: 'none',
                }}
              >
                {s.keyword}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: '640px', margin: '0 auto', padding: '0 20px 80px' }}>
        {/* hero */}
        <section style={{ padding: '56px 0 44px' }}>
          <h1
            style={{
              fontSize: 'clamp(1.9rem, 6vw, 2.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.12,
              color: C.cream,
              marginBottom: '16px',
            }}
          >
            You commented.
            <br />
            <span style={{ color: C.gold }}>Here is the payoff.</span>
          </h1>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: C.muted, maxWidth: '540px' }}>
            Three prompts Naoise actually uses. Copy them, paste them into any AI you like.
            They work everywhere. Proxi just happens to run them for you, on WhatsApp, without the pasting.
          </p>
        </section>

        {SECTIONS.map((s) => (
          <Section key={s.id} s={s} />
        ))}

        {/* closing */}
        <section style={{ padding: '40px 0 0', borderTop: `1px solid ${C.border}`, textAlign: 'center' }}>
          <p style={{ fontSize: '1rem', color: C.muted, marginBottom: '18px' }}>
            Prompts are the manual version. Proxi is the one that answers while you sleep.
          </p>
          <a
            href="/get-started"
            style={{
              display: 'inline-block',
              padding: '14px 28px',
              fontSize: '1rem',
              fontWeight: 700,
              color: C.bg,
              background: C.gold,
              borderRadius: '12px',
              textDecoration: 'none',
            }}
          >
            Try Proxi →
          </a>
        </section>
      </main>
    </div>
  );
}
