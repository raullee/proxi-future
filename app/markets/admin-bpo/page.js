"use client";

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const PAIN_POINTS = [
  { problem: 'Managing multiple clients\' calendars', detail: 'Every client has their own schedule, their own priorities, their own "urgent." You\'re juggling five calendars and praying nothing overlaps.' },
  { problem: 'Drowning in repetitive tasks', detail: 'The same data entry, the same follow-ups, the same formatting — over and over. It\'s not hard work, but it\'s endless work that eats your entire day.' },
  { problem: 'Context switching between accounts', detail: 'Client A uses Slack, Client B lives in email, Client C only does WhatsApp. Every switch costs you 15 minutes of mental recalibration.' },
  { problem: 'Tracking deliverables across clients', detail: 'What\'s due when, for whom, and has it been sent? Without a system that actually works, things slip through the cracks — and that\'s your reputation on the line.' },
];

const SOLUTIONS = [
  { title: 'Multi-client inbox management', desc: 'Your PA monitors all client channels, sorts by priority, and surfaces what needs your attention. No more tab-switching chaos.' },
  { title: 'Automated task templates', desc: 'Recurring tasks get templated and triggered automatically. Weekly reports, monthly check-ins, daily summaries — set once, run forever.' },
  { title: 'Smart context switching', desc: 'Your PA maintains context for each client. Switch between accounts instantly with full awareness of where you left off.' },
  { title: 'Deliverable tracking & reminders', desc: 'Every deliverable tracked, every deadline flagged. Your PA reminds you before things are due — not after they\'re late.' },
];

export default function AdminBpoPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>📋 Admin, BPO & Personal Assistants</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            You manage everyone else's chaos.<br /><span className="gradient-text">Who manages yours?</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '48px' }}>
            You're the person everyone relies on to keep things running. But when you're handling five clients, ten inboxes, and a hundred tasks — you need a PA of your own. Proxi is the assistant that makes assistants superhuman.
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
            <ChatBubble who="you" text="I'm handling 5 clients today. What's overdue?" />
            <ChatBubble who="proxi" text="2 items overdue: Client A's weekly report was due yesterday, and Client C's invoice approval has been pending since Monday. I've drafted the report and sent a reminder to Client C's finance team. 3 deliverables due today — all on track. ✓" />
            <ChatBubble who="you" text="Switch to Client B. What's their status?" />
            <ChatBubble who="proxi" text="Client B: 4 emails awaiting response, meeting at 3pm (agenda prepped), and they asked for the social media calendar update. I've drafted it based on last month's template. Ready for your review. ✓" />
          </div>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Ready to manage clients instead of chaos?</h2>
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
