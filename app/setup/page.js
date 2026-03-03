"use client";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Setup() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── HERO ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>One-time setup</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            We build it. You <span className="gradient-text">use it.</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 16px', lineHeight: 1.6 }}>
            Every Proxi PA is custom-configured for your business. The setup fee covers everything we do to make your PA work from day one — not a template, not a default install.
          </p>
        </section>

        {/* ─── WHY A SETUP FEE ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="card" style={{ padding: '36px', borderLeft: '3px solid var(--accent)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px' }}>Why a setup fee?</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              Because your PA isn't a download. It's a custom build. We learn your business, configure your workflows, connect your tools, and tune the personality until it sounds like it's worked for you for years. That takes real engineering time.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              You pay once. Then it runs. We're there if something breaks, but the goal is a PA that doesn't need us after setup.
            </p>
          </div>
        </section>

        {/* ─── PROXI SETUP ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="card" style={{ padding: '32px', borderLeft: '3px solid var(--accent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              <div>
                <span className="badge" style={{ padding: '4px 12px', fontSize: '0.7rem' }}>Proxi Setup</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, marginLeft: '12px' }}>Your admin PA, configured</span>
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>RM500</span>
            </div>

            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>What's included</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { step: 'Discovery call', desc: 'We learn your business, your clients, your pain points, and how you currently handle admin' },
                { step: 'Industry configuration', desc: 'Your PA is tuned for your vertical — legal, property, medical, F&B, whatever you do' },
                { step: 'Personality & tone setup', desc: 'We configure how your PA communicates — professional, casual, bilingual, whatever fits your brand' },
                { step: 'WhatsApp integration', desc: 'Your PA gets its own WhatsApp number, connected, tested, and ready to receive messages' },
                { step: 'Email & calendar connection', desc: 'Gmail/Google Workspace linked — your PA can read, draft, and manage your inbox and calendar' },
                { step: 'Workflow configuration', desc: 'Escalation rules, follow-up schedules, client categories, recurring tasks — all pre-built for your workflow' },
                { step: 'Memory structure', desc: 'Your PA\'s memory is configured to remember your clients, preferences, and business context' },
                { step: 'Skill installation', desc: 'Calendar management, email triage, document drafting, CRM basics — installed and tested' },
                { step: 'Testing & QA', desc: 'We test every workflow before handoff — email replies, calendar bookings, client communication, escalations' },
                { step: 'Handoff session', desc: 'We walk you through your PA live — how to delegate, what to expect, how to get the most out of it' },
              ].map((item, i) => (
                <li key={i} style={{ padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, width: '24px', textAlign: 'center' }}>{i + 1}</span>
                    <div>
                      <p style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '4px' }}>{item.step}</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '20px', padding: '16px', background: 'var(--accent-light)', borderRadius: '8px' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '4px' }}>⏱ Typical timeline: 3–5 business days</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>From discovery call to a working PA in your WhatsApp.</p>
            </div>

            <a href="/pricing/proxi" style={{ display: 'inline-block', marginTop: '16px', fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>
              Proxi: RM199/mo + RM500 setup →
            </a>
          </div>
        </section>

        {/* ─── PROXI MAX SETUP ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="card" style={{ padding: '32px', border: '2px solid var(--accent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              <div>
                <span className="badge" style={{ padding: '4px 12px', fontSize: '0.7rem', background: 'var(--accent)', color: 'white' }}>Proxi Max Setup</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, marginLeft: '12px' }}>Superhero mode, fully wired</span>
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>RM2,000</span>
            </div>

            <div style={{ padding: '12px 16px', background: 'var(--accent-light)', borderRadius: '8px', marginBottom: '20px' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>✦ Everything in Proxi Setup, plus:</p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { step: 'Advanced AI model configuration', desc: 'More powerful model, tuned for complex multi-step tasks — research, content, lead qualification' },
                { step: 'Multi-channel setup', desc: 'WhatsApp + email + business tools connected and orchestrated as one system' },
                { step: 'Custom integrations', desc: 'Stripe, CRM, booking systems, custom APIs — whatever your business stack needs, we wire it up' },
                { step: 'Workflow engine configuration', desc: 'Your PA learns your business processes — custom workflows, automation rules, and multi-step operations tailored to you' },
                { step: 'Lead capture workflows', desc: 'Inbound inquiry handling — your PA qualifies leads, scores them, and routes to you with context' },
                { step: 'Integration wiring', desc: 'APIs, databases, CRM, custom tools — connected and orchestrated as one automated system' },
                { step: 'Extended testing & QA', desc: 'Every integration tested end-to-end — workflow automation, lead routing, multi-channel responses, edge cases' },
                { step: 'Priority support setup', desc: '5-minute response time SLA configured — your PA escalates faster and we respond faster if something breaks' },
              ].map((item, i) => (
                <li key={i} style={{ padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, width: '24px', textAlign: 'center' }}>+{i + 1}</span>
                    <div>
                      <p style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '4px' }}>{item.step}</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '20px', padding: '16px', background: 'var(--accent-light)', borderRadius: '8px' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '4px' }}>⏱ Typical timeline: 5–10 business days</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>More integrations = more wiring = more testing. Worth it.</p>
            </div>

            <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '12px' }}>Need more? Custom scope, multiple PAs, or enterprise integrations → <a href="/pricing/enterprise" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Enterprise</a></p>

            <a href="/proxi-max" style={{ display: 'inline-block', marginTop: '12px', fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>
              Proxi Max: RM499/mo + RM2,000 setup →
            </a>
          </div>
        </section>

        {/* ─── PA4PA BONUS ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="card" style={{ padding: '36px', textAlign: 'center', border: '2px solid #22c55e' }}>
            <span style={{ fontSize: '2rem' }}>🎁</span>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginTop: '12px', marginBottom: '12px' }}>Free with every setup: PA4PA Course</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
              Every Proxi and Proxi Max customer gets our <strong>PA4PA course included</strong> — a 30-day AI training programme delivered via WhatsApp. Worth <span style={{ textDecoration: 'line-through' }}>RM499</span>. Yours free.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
              Daily lessons on how to get the most out of your AI PA — batching instructions, delegation best practices, what to automate first, and tips that turn a good PA into a great one. Whether you're using Proxi yourself or training your team to use it.
            </p>
            <a href="/pa4pa" style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>Learn more about PA4PA →</a>
          </div>
        </section>

        {/* ─── AFTER SETUP ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="card" style={{ padding: '36px', borderLeft: '3px solid var(--accent)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px' }}>What happens after setup?</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              Your PA runs. That's it. It handles your admin, your communications, your workflows — autonomously, 24/7. You talk to it via WhatsApp like you'd talk to a human assistant.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              If something breaks or you need adjustments, we're here. Support is included in your monthly subscription. But the goal is a PA that doesn't need us — and most don't, after the first week.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              No monthly calls. No check-ins you didn't ask for. No "account managers" emailing you about upsells. Just a PA that works.
            </p>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, marginBottom: '24px' }}>
            Ready to get set up?
          </h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/get-started" className="cta-btn" style={{ textDecoration: 'none', padding: '14px 28px', fontSize: '0.95rem' }}>
              Get started →
            </a>
            <a href="/pricing" className="cta-btn-outline" style={{ textDecoration: 'none', padding: '14px 28px', fontSize: '0.95rem' }}>
              Compare plans →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
