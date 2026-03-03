"use client";

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const PAIN_POINTS = [
  { problem: 'Client coordination is a full-time job', detail: 'Scheduling calls across time zones, following up on deliverables, chasing approvals. You spend more time coordinating than consulting.' },
  { problem: 'Proposals take days instead of hours', detail: 'Every proposal is a custom job. Research, structuring, formatting, pricing. By the time it\'s done, the client has moved on.' },
  { problem: 'Invoicing falls through the cracks', detail: 'You delivered the work three weeks ago. The invoice still hasn\'t gone out. And the one from last month? Still unpaid. Nobody\'s chasing it.' },
  { problem: 'Meetings without outcomes', detail: 'Back-to-back calls, no minutes, no action items tracked. Decisions made in meetings dissolve by the next day.' },
];

const SOLUTIONS = [
  { title: 'Client coordination on autopilot', desc: 'Your PA schedules, confirms, follows up, and sends pre-meeting briefs. Clients get a professional experience without you lifting a finger.' },
  { title: 'Proposal drafts in hours, not days', desc: 'Brief your PA on the scope, and get a structured first draft back. You refine the strategy — the formatting is handled.' },
  { title: 'Invoicing that actually happens', desc: 'Invoices sent on time, payment reminders on schedule, overdue accounts flagged. Your cash flow improves because the system doesn\'t forget.' },
  { title: 'Meeting notes and follow-ups', desc: 'Every meeting gets a summary, action items are tracked, and follow-up emails go out automatically. Nothing agreed upon gets lost.' },
];

export default function BusinessPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>💼 Business & Consulting</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            Consult. Advise. Lead.<br /><span className="gradient-text">Let someone else handle the rest.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '48px' }}>
            Your clients pay for your expertise, not your ability to schedule Zoom calls and format proposals. Proxi handles the operations so you can focus on delivering value.
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
            <ChatBubble who="you" text="I need a proposal for the Sdn Bhd client. Digital transformation scope, 3-month engagement." />
            <ChatBubble who="proxi" text="Draft ready. Executive summary, scope breakdown, timeline, and pricing based on your standard rates. I've included the case study from the similar project last quarter. Review when you're ready. ✓" />
            <ChatBubble who="you" text="Chase all outstanding invoices over 30 days." />
            <ChatBubble who="proxi" text="3 invoices outstanding: TechCorp (RM15,000, 45 days), Vista Group (RM8,500, 32 days), and KL Ventures (RM12,000, 38 days). Polite follow-up emails sent to all three with payment links. ✓" />
            <ChatBubble who="you" text="What's my week looking like?" />
            <ChatBubble who="proxi" text="Monday: 2 client calls, proposal review. Tuesday: workshop delivery (9am-4pm). Wednesday: clear. Thursday: 3 meetings. Friday: Q1 report due. I'd suggest using Wednesday for the report draft — want me to block it? ✓" />
          </div>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Ready to consult, not coordinate?</h2>
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
