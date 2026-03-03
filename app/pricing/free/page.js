"use client";

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function FreeTier() {
  return (
    <>
      <Nav />

      <main>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>Free · Open Source</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            Build your own <span className="gradient-text">AI PA.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '48px' }}>
            Proxi runs on OpenClaw — and OpenClaw is open-source. Same framework, same capabilities. You bring the time, the API keys, and the know-how.
          </p>
        </section>

        {/* ─── HONEST DISCLAIMER ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="card" style={{ padding: '32px', borderLeft: '3px solid #EF4444' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>Let's be honest about "free"</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              The framework is free. The intelligence isn't.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              You'll need your own AI provider — Claude, GPT, Gemini — and their API keys. That means a subscription to Anthropic, OpenAI, or Google, typically <strong>USD $20–100/month</strong> depending on usage. Plus hosting costs if you want it running 24/7.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              This is genuinely powerful — but it's not "download and go." It's "download, configure, connect APIs, maintain, and troubleshoot." If that sounds fun, you'll love it. If it sounds like work, check out <a href="/pricing/proxi" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Proxi</a> instead.
            </p>
          </div>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="card" style={{ padding: '32px', borderLeft: '3px solid var(--accent)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px' }}>OpenClaw</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              The open-source AI agent framework that powers every Proxi PA. Install it on your own machine, connect your own AI provider, and build your own assistant.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
              {[
                'Runs on Mac, Linux, Raspberry Pi',
                'Connect to Claude, GPT, Gemini — your choice (API keys required)',
                'WhatsApp, Telegram, Discord, Signal integration',
                'Cron jobs, browser automation, memory system',
                'Skills marketplace for extending capabilities',
                'Full source code on GitHub',
              ].map((item, i) => (
                <li key={i} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', padding: '8px 0', borderBottom: '1px solid var(--border)', display: 'flex', gap: '10px' }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="cta-btn" style={{ textDecoration: 'none', padding: '12px 28px', fontSize: '0.9rem' }}>
                Read the docs →
              </a>
              <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="cta-btn-outline" style={{ textDecoration: 'none', padding: '12px 28px', fontSize: '0.9rem' }}>
                GitHub →
              </a>
            </div>
          </div>
        </section>

        {/* ─── REAL COSTS ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 48px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '24px' }}>What "free" actually costs</h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              { item: 'AI API subscription', cost: 'USD $20–100/mo', note: 'Claude Pro, GPT Plus, or Gemini Advanced' },
              { item: 'Hosting (optional)', cost: 'USD $5–20/mo', note: 'If you want 24/7 uptime (VPS or cloud)' },
              { item: 'Your time', cost: 'Significant', note: 'Setup, configuration, maintenance, troubleshooting' },
              { item: 'OpenClaw framework', cost: 'Free', note: 'Open source, MIT license' },
            ].map((row, i) => (
              <div key={i} className="card" style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <p style={{ fontSize: '1rem', fontWeight: 600 }}>{row.item}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{row.note}</p>
                </div>
                <p style={{ fontSize: '1rem', fontWeight: 700, color: row.cost === 'Free' ? 'var(--accent)' : 'var(--text-muted)' }}>{row.cost}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── WHAT PROXI ADDS ON TOP OF OPENCLAW ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 48px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>What Proxi adds on top of OpenClaw</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '32px' }}>
            OpenClaw is the runtime. These are the customisations, integrations, and configurations we layer on top to build a production PA.
          </p>

          <div style={{ display: 'grid', gap: '20px' }}>
            {/* PROXI LAYER */}
            <div className="card" style={{ padding: '28px', borderLeft: '3px solid var(--accent)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span className="badge" style={{ padding: '4px 12px', fontSize: '0.7rem' }}>Proxi</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Custom configuration layer</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Custom SOUL.md — industry-specific personality, tone, and behaviour rules (not the default template)',
                  'Pre-configured AGENTS.md with vertical-specific workflows (legal, medical, property, etc.)',
                  'MEMORY.md structure designed for client context retention across sessions',
                  'WhatsApp channel integration — linked device, configured, tested, monitored',
                  'Google Workspace skill bundle — Gmail triage, Calendar sync, Docs/Sheets access',
                  'Custom cron jobs — follow-up schedules, reminder cadences, inbox check intervals',
                  'Escalation rules in agent config — priority routing, human handoff triggers',
                  'BM/EN bilingual communication templates in agent memory',
                  'Heartbeat configuration — proactive checks (email, calendar, deadlines) tuned to business hours',
                  'Error monitoring and recovery — we detect and fix issues before you notice',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', padding: '8px 0', borderBottom: '1px solid var(--border)', display: 'flex', gap: '10px', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* PROXI MAX LAYER */}
            <div className="card" style={{ padding: '28px', border: '2px solid var(--accent)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span className="badge" style={{ padding: '4px 12px', fontSize: '0.7rem', background: 'var(--accent)', color: 'white' }}>Proxi Max</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Extended integration layer</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Everything in Proxi, plus:',
                  'Higher-tier AI model (Opus-class) — better reasoning for complex multi-step tasks',
                  'Multi-channel config — WhatsApp + email + Telegram/Discord/Signal simultaneously',
                  'Custom workflow design & automation — multi-step processes, approval flows, orchestration',
                  'Advanced integration engineering — APIs, databases, CRM, custom tools via MCP or direct API',
                  'Stripe/payment integration — invoice tracking, payment notifications, subscription management',
                  'Custom API integrations — CRM, booking systems, internal tools via MCP or direct API',
                  'Browser automation skills — web scraping, form filling, monitoring via Peekaboo/Playwright',
                  'Lead capture workflows — inbound message classification, scoring, routing rules in agent config',
                  'Sub-agent orchestration — spawned tasks for parallel processing (research, content, analysis)',
                  '5-minute response SLA with priority monitoring',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: i === 0 ? 'var(--text)' : 'var(--text-muted)', padding: '8px 0', borderBottom: '1px solid var(--border)', display: 'flex', gap: '10px', lineHeight: 1.5, fontWeight: i === 0 ? 600 : 400 }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}>{i === 0 ? '✦' : '→'}</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '20px', textAlign: 'center', lineHeight: 1.6 }}>
            All of this runs on standard OpenClaw. The difference is the configuration depth, integration wiring, and operational experience behind it.
          </p>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px' }}>
          <div className="card" style={{ padding: '32px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>The honest trade-off</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              OpenClaw is genuinely powerful — our own PA Naoise runs on it. Everything she does, the framework supports.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              The difference is setup, configuration, maintenance, and knowing which integrations to wire together. That takes time. If you enjoy building — go for it, seriously.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              If you'd rather skip straight to a PA that works — <a href="/pricing/proxi" style={{ color: 'var(--accent)', textDecoration: 'none' }}>that's Proxi at RM199/mo</a>. If you want the full workflow automation package — <a href="/proxi-max" style={{ color: 'var(--accent)', textDecoration: 'none' }}>that's Proxi Max at RM499/mo</a>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
