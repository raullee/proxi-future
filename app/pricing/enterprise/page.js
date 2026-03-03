"use client";

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function Enterprise() {
  return (
    <>
      <Nav />

      <main>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>Enterprise · Custom pricing</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            You don't want a PA.<br /><span className="gradient-text">You want an AI ops team.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '48px' }}>
            We sit with your team, understand your workflows, and build the AI operations layer that makes everything else faster. Not SaaS — partnership.
          </p>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 48px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '24px' }}>How it works</h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              { step: '01', title: 'Discovery', desc: 'We audit your workflows. Where does time disappear? What breaks when someone\'s on leave? Where are the manual handoffs?' },
              { step: '02', title: 'Architecture', desc: 'We design your AI ops layer. Which tasks get agents? How do they coordinate? What stays human?' },
              { step: '03', title: 'Build & deploy', desc: 'Custom agents for your specific workflows. Trained on your business, your clients, your vocabulary.' },
              { step: '04', title: 'Train your team', desc: 'We onboard your people, handle change management, and make sure adoption sticks.' },
              { step: '05', title: 'Iterate', desc: 'Monthly reviews. Your AI ops evolve as your business does. Ongoing collaboration, not set-and-forget.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)', flexShrink: 0, fontFamily: 'monospace' }}>{item.step}</span>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── WHAT'S INCLUDED ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 48px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '24px' }}>What's included</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              'Full AI operations audit',
              'Custom agent architecture',
              'Multi-agent coordination',
              'Dedicated infrastructure',
              'Team onboarding & training',
              'Change management support',
              'Monthly strategy reviews',
              'Priority support & SLA',
              'Custom integrations',
              'Data privacy & compliance',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '8px 0' }}>
                <span style={{ color: 'var(--accent)' }}>✓</span>
                <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Let's talk.</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
            No pitch deck. Just a conversation about what your team needs.
          </p>
          <a href="/get-started" className="cta-btn" style={{ textDecoration: 'none', padding: '16px 40px', fontSize: '1.05rem' }}>
            Start a conversation →
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
