"use client";

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const PAIN_POINTS = [
  { problem: 'Subcontractor coordination chaos', detail: 'Electricians, plumbers, tilers, painters — all on different schedules, all needing different materials, all calling you when something goes wrong. Your phone is a construction hotline.' },
  { problem: 'Permit and approval tracking', detail: 'Council approvals, BOMBA clearance, JKR submissions. Each one has different requirements, different timelines, and none of them tell you when they\'re ready.' },
  { problem: 'Project timeline management', detail: 'One delay cascades into ten. The plastering can\'t start until wiring is done, but wiring is delayed because materials haven\'t arrived. Keeping everyone aligned is a full-time job.' },
  { problem: 'Site documentation overhead', detail: 'Daily progress reports, site photos, material receipts, variation orders. The paperwork rivals the actual construction work.' },
];

const SOLUTIONS = [
  { title: 'Subcontractor communication hub', desc: 'Your PA coordinates with all subs, sends schedule updates, and flags conflicts. Everyone stays informed without you making 30 calls a day.' },
  { title: 'Permit deadline tracking', desc: 'Every permit application tracked, every deadline monitored. Your PA alerts you when submissions are due and follows up with authorities.' },
  { title: 'Timeline alerts & updates', desc: 'Your PA monitors project milestones, flags delays early, and notifies affected parties. Cascading delays get caught before they cascade.' },
  { title: 'Site report drafting', desc: 'Your PA compiles daily progress reports from your notes and photos. Professional documentation without the evening paperwork sessions.' },
];

export default function ConstructionPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>🏗️ Construction & Engineering</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            You build things.<br /><span className="gradient-text">Stop being buried in paperwork.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '48px' }}>
            Construction runs on coordination — and coordination runs on communication. Proxi handles the calls, the follow-ups, the permit tracking, and the documentation so you can focus on what's actually going up.
          </p>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 60px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '24px' }}>The pain points</h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {PAIN_POINTS.map((p, i) => (
              <div key={i} className="card" style={{ padding: '24px', borderLeft: '3px solid #EF4444' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px' }}>{p.problem}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 60px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '24px' }}>How Proxi solves it</h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {SOLUTIONS.map((s, i) => (
              <div key={i} className="card" style={{ padding: '24px', borderLeft: '3px solid var(--accent)' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px' }}>{s.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 60px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '24px' }}>A day with Proxi</h2>
          <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <ChatBubble who="you" text="What permits are pending for the Bangsar project?" />
            <ChatBubble who="proxi" text="3 permits pending: BOMBA fire safety (submitted 2 weeks ago — I've followed up, expected next Tuesday), DBKL building plan amendment (awaiting additional documents — list attached), and TNB power supply application (approved, awaiting installation date). ✓" />
            <ChatBubble who="you" text="Tell the tiling sub they can start Level 3 on Monday." />
            <ChatBubble who="proxi" text="Done. Messaged Ah Keat's team confirming Level 3 start on Monday. Also reminded them about the specific tile spec for unit 3-2 that was changed last week. ✓" />
          </div>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Ready to build more and coordinate less?</h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/pricing/proxi" className="cta-btn-outline" style={{ textDecoration: 'none', padding: '16px 32px', fontSize: '1rem' }}>Proxi — handle admin →</a>
            <a href="/proxi-max" className="cta-btn" style={{ textDecoration: 'none', padding: '16px 32px', fontSize: '1rem' }}>Proxi Max — superhero mode →</a>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '16px' }}><a href="/markets" style={{ color: 'var(--accent)', textDecoration: 'none' }}>← Back to all verticals</a></p>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ChatBubble({ who, text }) {
  const isYou = who === 'you';
  return (
    <div style={{ display: 'flex', justifyContent: isYou ? 'flex-end' : 'flex-start' }}>
      <div style={{ maxWidth: '80%', padding: '14px 18px', borderRadius: isYou ? '16px 16px 4px 16px' : '16px 16px 16px 4px', background: isYou ? 'var(--cta)' : 'var(--accent-light)', color: isYou ? 'var(--cta-text)' : 'var(--text)', fontSize: '0.95rem', lineHeight: 1.5 }}>
        {text}
      </div>
    </div>
  );
}
