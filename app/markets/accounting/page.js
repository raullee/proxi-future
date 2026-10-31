"use client";

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const PAIN_POINTS = [
  { problem: 'Clients who never send the documents on time', detail: 'You ask three times, escalate to a phone call, and still the bank statement arrives the day before the deadline. Their delay becomes your weekend.' },
  { problem: 'Deadlines stacked on top of each other', detail: 'SST returns, payroll filings, audit cut-offs, year-end. Miss one and the penalty conversation with the client is one you have to lead.' },
  { problem: 'Invoices that age silently', detail: 'You sent the invoice. They saw it. Sixty days pass and chasing it feels rude — until your own cash flow starts hurting.' },
  { problem: 'Year-end crunch eating January and April', detail: 'Twenty clients all need attention at once. The intake forms aren\'t back, the books are messy, and you\'re already exhausted before the real work starts.' },
];

const SOLUTIONS = [
  { title: 'Document collection that actually closes', desc: 'Your PA asks for the missing documents in your tone, accepts WhatsApp uploads, and only escalates when something genuinely won\'t come. Submission deadlines stop being your problem to enforce.' },
  { title: 'Deadline reminders for every client, every cycle', desc: 'Your PA tracks every filing window per client and sends the right nudge at the right time — to the client, not just to your calendar. You stop being the deadline keeper.' },
  { title: 'Polite, persistent invoice chasing', desc: 'Your PA runs the dunning sequence — friendly reminder, firm reminder, second-call escalation — exactly the way you would, but every single time without you remembering.' },
  { title: 'Year-end intake on autopilot', desc: 'Your PA runs the annual checklist with each client months early — documents requested, queries answered, books pre-organised by the time you sit down to work.' },
];

export default function AccountingPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>💰 Accounting & Tax</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            You crunch the numbers.<br /><span className="gradient-text">Proxi crunches the chase.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '48px' }}>
            The hard part isn't the accounting — it's the document chase, the deadline reminders, the gentle-but-firm invoice nudge. Proxi runs all of it in your tone, on schedule, so you can do the work that actually requires a chartered mind.
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
            <ChatBubble who="you" text="What's outstanding for SST this cycle?" />
            <ChatBubble who="proxi" text="14 clients filed; 6 outstanding. Of those: 4 sent everything (waiting on you), 1 hasn't responded to two reminders (Mrs Khoo — escalating to call?), 1 sent partial (Bistro Layang — chasing bank statements). ✓" />
            <ChatBubble who="you" text="Yes, escalate Mrs Khoo. Status on overdue invoices?" />
            <ChatBubble who="proxi" text="3 invoices over 60 days: Tan Holdings (RM 4,800, two reminders sent), Lim & Co (RM 2,100, paid yesterday — closing it now), and Wong Tradings (RM 1,500, no reply). Drafted a firmer note for Wong; want me to send? ✓" />
            <ChatBubble who="you" text="Send it. And kick off year-end intake for the construction clients." />
            <ChatBubble who="proxi" text="Wong note sent. Year-end intake started for 8 construction clients — checklist sent, deadline-tracked. First responses already coming back. ✓" />
          </div>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Ready to bill the work, not the chase?</h2>
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
