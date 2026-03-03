"use client";

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const PAIN_POINTS = [
  { problem: 'Drowning in client emails', detail: 'Every client thinks their matter is the most urgent. Your inbox is a warzone of competing priorities, and the important stuff gets buried under the noise.' },
  { problem: 'Court dates scattered everywhere', detail: 'Across calendars, WhatsApp messages, case files, and sticky notes. Miss one and it\'s not just embarrassing — it\'s malpractice territory.' },
  { problem: 'Clients calling after hours', detail: 'They need reassurance at 10pm. They want updates on weekends. You can\'t ignore them, but you can\'t be available 24/7 either.' },
  { problem: 'Document drafts taking forever', detail: 'First drafts of letters, memos, and correspondence eat hours that should be spent on strategy and advocacy.' },
];

const SOLUTIONS = [
  { title: 'Email triage by urgency', desc: 'Your PA reads every email, flags what\'s urgent, drafts replies for the routine stuff. You review and approve — that\'s it.' },
  { title: 'Automatic court date management', desc: 'Every date tracked, every reminder sent. Your PA cross-references your calendar and alerts you to conflicts before they happen.' },
  { title: 'Professional client communication 24/7', desc: 'Your PA acknowledges inquiries, provides status updates, and schedules callbacks — in your tone, at any hour.' },
  { title: 'First drafts of legal correspondence', desc: 'Letters to opposing counsel, client updates, memo outlines. Your PA drafts, you refine. Hours become minutes.' },
];

export default function LawyersPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>⚖️ Legal Professionals</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            Your practice is your craft.<br /><span className="gradient-text">Admin shouldn't be.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '48px' }}>
            You didn't spend years studying law to spend your days managing inboxes, chasing clients for documents, and rescheduling meetings. Proxi handles the operational weight so you can focus on the work that actually requires a legal mind.
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
            <ChatBubble who="you" text="I have 30 emails from yesterday. What's urgent?" />
            <ChatBubble who="proxi" text="3 need immediate attention: opposing counsel on the Tan case wants a response by noon, your client Mrs. Lee is asking about the hearing date, and the court registry sent a notice. I've drafted replies for all three. ✓" />
            <ChatBubble who="you" text="When's the next hearing for the Tan case?" />
            <ChatBubble who="proxi" text="March 14, 9:30 AM, High Court KL. I've set reminders for 1 week before, 1 day before, and morning of. Your case file summary is ready if you need it. ✓" />
            <ChatBubble who="you" text="Draft a letter to opposing counsel requesting a 2-week extension." />
            <ChatBubble who="proxi" text="Done. Formal tone, references the relevant practice direction, proposes new dates. Sent to you for review. ✓" />
          </div>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Ready to practise law instead of admin?</h2>
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
