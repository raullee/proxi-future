"use client";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

function TierCard({ tier, price, tagline, features, cta, ctaLink, highlight, badge, setup }) {
  return (
    <div className="card" style={{
      padding: '40px 32px',
      border: highlight ? '2px solid var(--accent)' : '1px solid var(--border)',
      position: 'relative',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      {badge && (
        <span className="badge" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.7rem' }}>{badge}</span>
      )}
      <div>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>{tier}</h3>
        <p style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '4px' }}>{price}</p>
        {setup && (
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>+ <a href="/setup" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>{setup} one-time setup</a></p>
        )}
        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '28px', lineHeight: 1.5 }}>{tagline}</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {features.map((f, i) => (
            <li key={i} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', padding: '8px 0', borderBottom: '1px solid var(--border)', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent)', flexShrink: 0 }}>✓</span> {f}
            </li>
          ))}
        </ul>
      </div>
      <a href={ctaLink} className={highlight ? "cta-btn" : "cta-btn-outline"} style={{ display: 'block', textAlign: 'center', marginTop: '32px', padding: '14px 24px', textDecoration: 'none' }}>
        {cta}
      </a>
    </div>
  );
}

const COMPARE_ROWS = [
  { feature: 'Dedicated AI PA', free: false, proxi: true, max: true },
  { feature: 'WhatsApp access', free: false, proxi: true, max: true },
  { feature: 'Email management', free: false, proxi: true, max: true },
  { feature: 'Google Calendar sync', free: false, proxi: true, max: true },
  { feature: 'Follow-ups & reminders', free: false, proxi: true, max: true },
  { feature: 'Admin & data entry', free: false, proxi: true, max: true },
  { feature: 'Research & summaries', free: false, proxi: true, max: true },
  { feature: 'Custom workflow design', free: false, proxi: false, max: true },
  { feature: 'Advanced integrations (APIs, databases)', free: false, proxi: false, max: true },
  { feature: 'Workflow orchestration', free: false, proxi: false, max: true },
  { feature: 'Process automation', free: false, proxi: false, max: true },
  { feature: 'Stripe & payments', free: false, proxi: false, max: true },
  { feature: 'Response time', free: '—', proxi: '15 min', max: '5 min' },
  { feature: 'Messages/month', free: '—', proxi: '2,000', max: 'Unlimited' },
  { feature: 'Self-hosted', free: true, proxi: false, max: false },
  { feature: 'Open source', free: true, proxi: false, max: false },
];

function CompareCell({ val }) {
  if (val === true) return <span style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>✓</span>;
  if (val === false) return <span style={{ color: 'var(--text-light)', fontSize: '1rem' }}>—</span>;
  return <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{val}</span>;
}

export default function Pricing() {
  return (
    <>
      <Nav />

      <main>
        {/* ─── HERO ─── */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '140px 24px 40px', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>Pricing</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            Pick your <span className="gradient-text">operator.</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 60px', lineHeight: 1.6 }}>
            From DIY to full workflow automation. Start free, scale when it hurts.
          </p>
        </section>

        {/* ─── TIER CARDS (3 main) ─── */}
        <section style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px 60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <TierCard
              tier="Free"
              price="RM0"
              tagline="Build your own AI PA with OpenClaw. Same tech, self-hosted."
              features={[
                "OpenClaw open-source framework",
                "Same tech that powers Proxi",
                "Self-hosted, full control",
                "Community support",
              ]}
              cta="Learn more →"
              ctaLink="/pricing/free"
            />
            <TierCard
              tier="Proxi"
              price="RM199/mo"
              setup="RM500"
              tagline="Your PA. Email, calendar, follow-ups — handled."
              features={[
                "Dedicated AI personal assistant",
                "All AI costs included — no API keys needed",
                "WhatsApp + Email + Calendar",
                "Google Workspace integration",
                "Follow-ups & reminders",
                "2,000 messages/month",
                "15-minute response time",
              ]}
              cta="Get started →"
              ctaLink="/invite"
            />
            <TierCard
              tier="Proxi Max"
              price="RM499/mo"
              setup="RM2,000"
              tagline="Your PA on superhero mode. Admin + custom workflows + advanced automation."
              highlight={true}
              badge="Founding: setup fee waived — invite only"
              features={[
                "Everything in Proxi",
                "All AI costs included",
                "Custom workflow design & automation",
                "Advanced integration engineering (APIs, databases, custom tools)",
                "Workflow management & orchestration",
                "Stripe & payment integration",
                "Unlimited messages",
                "5-minute response time",
              ]}
              cta="Go superhero →"
              ctaLink="/invite"
            />
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '24px', maxWidth: '600px', margin: '24px auto 0' }}>
            <strong>Founding members</strong> get RM499/mo locked in permanently with setup fee waived (save RM2,000). By invitation only.
          </p>
        </section>

        {/* ─── COMPARISON TABLE ─── */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 80px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '32px', textAlign: 'center' }}>
            Compare plans
          </h2>
          <div className="card" style={{ overflow: 'hidden', borderRadius: '16px' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 80px 80px', padding: '16px 24px', borderBottom: '2px solid var(--border)', background: 'var(--bg-card)' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Feature</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>Free</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>Proxi</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>Max</span>
            </div>
            {/* Rows */}
            {COMPARE_ROWS.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 80px 80px', padding: '12px 24px', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{row.feature}</span>
                <span style={{ textAlign: 'center' }}><CompareCell val={row.free} /></span>
                <span style={{ textAlign: 'center' }}><CompareCell val={row.proxi} /></span>
                <span style={{ textAlign: 'center' }}><CompareCell val={row.max} /></span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── ENTERPRISE ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px' }}>
          <div className="card" style={{ padding: '40px 32px', borderLeft: '3px solid var(--accent)' }}>
            <span className="badge" style={{ marginBottom: '16px' }}>Enterprise</span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>
              Need something bigger?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              You don't want a PA — you want an AI operations team. We sit with your team, audit your workflows, and build custom agents that understand your business, your clients, and your vocabulary. Not SaaS — partnership.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              {['Full AI ops audit', 'Custom agent architecture', 'Multi-agent coordination', 'Team onboarding', 'Monthly strategy reviews', 'Priority SLA'].map((item, i) => (
                <span key={i} style={{ padding: '6px 14px', borderRadius: '100px', border: '1px solid var(--border)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item}</span>
              ))}
            </div>
            <a href="/pricing/enterprise" className="cta-btn-outline" style={{ textDecoration: 'none', padding: '14px 32px', display: 'inline-block' }}>
              Let's talk →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
