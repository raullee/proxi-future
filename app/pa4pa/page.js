"use client";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function PA4PA() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── HERO ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 60px', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '20px', background: 'var(--accent)', color: 'white' }}>Limited offer · One month only</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '20px' }}>
            AI PA for <span className="gradient-text">PAs.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 16px', lineHeight: 1.6 }}>
            A one-month intensive course for personal assistants who want to 10× their output with AI. <span style={{ textDecoration: 'line-through', color: 'var(--text-light)' }}>RM499</span> <span style={{ color: 'var(--accent)', fontWeight: 800 }}>RM75/month</span>
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 36px', lineHeight: 1.6 }}>
            From zero to hero. Daily lessons. Real tools. By the end, you'll be the PA who makes everyone else look like they're still using fax machines.
          </p>
          <a href="/get-started" className="cta-btn" style={{ textDecoration: 'none', padding: '16px 40px', fontSize: '1.05rem' }}>Enrol now — RM75 →</a>
        </section>

        {/* ─── WHY THIS EXISTS ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 60px' }}>
          <div className="card" style={{ padding: '36px', borderLeft: '3px solid var(--accent)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px' }}>The PA industry is about to split in two.</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              PAs who use AI will handle 5× the workload in half the time. PAs who don't will be replaced by PAs who do. This isn't a threat — it's an opportunity. The best PAs will be the ones who learn to work with AI, not against it.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              This course was built by the team behind Proxi — we've spent months building AI PAs that actually work. Now we're teaching human PAs to use the same tools.
            </p>
          </div>
        </section>

        {/* ─── WHAT YOU'LL LEARN ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 60px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '28px' }}>30 days. Zero to hero.</h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              { week: 'Week 1', title: 'Foundations', items: ['What AI can and can\'t do (honestly)', 'Setting up your AI toolkit', 'Prompt engineering for PA work', 'Email triage with AI assistance', 'Calendar management automation'] },
              { week: 'Week 2', title: 'Core PA Skills + AI', items: ['Drafting emails, memos, and letters with AI', 'Research and summarisation in minutes', 'Meeting prep and follow-up automation', 'Document creation and formatting', 'Client communication templates'] },
              { week: 'Week 3', title: 'Advanced Workflows', items: ['Multi-step task automation', 'CRM and contact management with AI', 'Travel planning and logistics', 'Event coordination with AI support', 'Data entry and reporting shortcuts'] },
              { week: 'Week 4', title: 'Superhero Mode', items: ['Content creation for your boss/company', 'Social media management basics', 'Building your own AI workflows', 'Presenting AI wins to your manager', 'Your personal AI PA playbook'] },
            ].map((week, i) => (
              <div key={i} className="card" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span className="badge" style={{ minWidth: '70px', textAlign: 'center', padding: '6px 12px', fontSize: '0.75rem', fontWeight: 800 }}>{week.week}</span>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px' }}>{week.title}</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {week.items.map((item, j) => (
                        <li key={j} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', padding: '4px 0', display: 'flex', gap: '8px' }}>
                          <span style={{ color: 'var(--accent)' }}>→</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── FORMAT ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 60px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '24px' }}>How it works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { icon: '📱', title: 'Daily lessons via WhatsApp', desc: 'Short, actionable lessons delivered to your phone every morning. No apps to install.' },
              { icon: '🎯', title: 'Real exercises', desc: 'Practice on real-world PA scenarios — not theory. Email drafts, scheduling, research tasks.' },
              { icon: '🤖', title: 'AI tools included', desc: 'Access to the same AI tools we use at Proxi. Practice with real technology, not demos.' },
              { icon: '💬', title: 'Support & community', desc: 'Ask questions anytime. Get help when you\'re stuck. Learn alongside other PAs.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '20px' }}>
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginTop: '8px', marginBottom: '4px' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 60px' }}>
          <div className="card" style={{ padding: '40px', textAlign: 'center', border: '2px solid var(--accent)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px', fontWeight: 600 }}>Superhero mode — discounted</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 400, color: 'var(--text-light)', textDecoration: 'line-through', marginBottom: '4px' }}>RM499</p>
            <p style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '4px' }}>RM75<span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-muted)' }}>/month</span></p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '24px' }}>30 days · Daily lessons · AI tools included</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto 28px', maxWidth: '320px', textAlign: 'left' }}>
              {[
                '30 daily lessons via WhatsApp',
                'Hands-on exercises with real AI tools',
                'Access to Proxi AI toolkit',
                'Certificate of completion',
                'Community support group',
                'Lifetime access to course materials',
              ].map((item, i) => (
                <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', padding: '6px 0', display: 'flex', gap: '10px' }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <a href="/get-started" className="cta-btn" style={{ textDecoration: 'none', padding: '16px 40px', fontSize: '1.05rem' }}>
              Enrol now →
            </a>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '12px' }}>
              Starts immediately · Cancel anytime
            </p>
          </div>
        </section>

        {/* ─── WHO IT'S FOR ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 60px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '20px' }}>Built for</h2>
          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              'Personal assistants who want to stay ahead of the curve',
              'Executive assistants managing multiple principals',
              'Office managers drowning in admin',
              'Virtual assistants looking to charge more',
              'Anyone in a PA role who\'s curious about AI but doesn\'t know where to start',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>→</span>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '40px 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, marginBottom: '12px' }}>
            Don't get left behind.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '28px' }}>
            The PAs who learn AI now will be the ones running the show in 12 months.
          </p>
          <a href="/get-started" className="cta-btn" style={{ textDecoration: 'none', padding: '16px 40px', fontSize: '1.05rem' }}>
            Enrol — RM75/month →
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
