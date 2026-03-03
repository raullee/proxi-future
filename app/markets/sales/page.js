"use client";

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const PAIN_POINTS = [
  { problem: 'Leads going cold from slow follow-up', detail: 'You meet 20 people at an event. By the time you follow up three days later, they\'ve forgotten your name. Speed is everything in sales, and admin kills speed.' },
  { problem: 'CRM updates eating selling time', detail: 'Every call needs logging, every meeting needs notes, every deal stage needs updating. Your CRM is supposed to help you sell — instead it\'s a full-time data entry job.' },
  { problem: 'Proposal drafts taking hours', detail: 'Each prospect wants a "customised" proposal. You\'re copy-pasting from old ones, tweaking numbers, reformatting. It\'s not selling — it\'s document processing.' },
  { problem: 'Meeting scheduling back-and-forth', detail: '"How about Tuesday?" "Sorry, I\'m busy." "Wednesday?" "Only after 3pm." Five emails to book one meeting. Multiply that by 15 prospects a week.' },
];

const SOLUTIONS = [
  { title: 'Instant lead follow-up', desc: 'Your PA sends personalised follow-ups within minutes of meeting someone. Warm, relevant, and timed perfectly — before the lead goes cold.' },
  { title: 'CRM-aware conversation tracking', desc: 'Your PA logs calls, updates deal stages, and captures notes automatically. Your CRM stays current without you touching it.' },
  { title: 'Proposal first drafts in minutes', desc: 'Your PA generates customised proposals based on your conversation notes and templates. You polish the last 10% — not the first 90%.' },
  { title: 'Zero-friction scheduling', desc: 'Your PA handles the back-and-forth, finds mutual availability, and books meetings. You just show up and sell.' },
];

export default function SalesPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>💼 Sales & Business Development</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            You should be closing deals.<br /><span className="gradient-text">Not updating spreadsheets.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '48px' }}>
            Every minute spent on admin is a minute not spent selling. Proxi handles the follow-ups, the scheduling, the CRM updates, and the proposal drafts — so you can focus on relationships and revenue.
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
            <ChatBubble who="you" text="Follow up with everyone from last week's event who hasn't replied." />
            <ChatBubble who="proxi" text="Done. 8 personalised follow-ups sent. Each references your conversation topic from the event. I've also flagged 3 who opened your first email but didn't respond — those got a different angle. ✓" />
            <ChatBubble who="you" text="Draft a proposal for the TechCorp deal." />
            <ChatBubble who="proxi" text="Drafted based on your call notes and their requirements. Includes pricing tier B, the case study they asked about, and a timeline. Ready for your review. ✓" />
          </div>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Ready to sell more and admin less?</h2>
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
