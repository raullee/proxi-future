"use client";

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const PAIN_POINTS = [
  { problem: 'You\'re wearing every hat in the company', detail: 'CEO, accountant, sales, HR, IT support, social media manager. You\'re doing the work of five people because you can\'t justify hiring five people.' },
  { problem: 'Cash flow is a mystery', detail: 'Invoices go out late. Payments come in later. You know roughly what\'s owed but the exact number? That requires opening a spreadsheet you haven\'t touched in two weeks.' },
  { problem: 'Supplier follow-ups fall through', detail: 'The quote you requested last week? Still waiting. The delivery that was supposed to arrive Tuesday? Nobody chased it. Small gaps that compound into big delays.' },
  { problem: 'Marketing happens when you remember', detail: 'You know you should be posting on social media. Updating the website. Sending newsletters. But between operations and sales, marketing always loses.' },
];

const SOLUTIONS = [
  { title: 'One operator, many hats', desc: 'Your PA handles email, scheduling, follow-ups, social media, and admin. It doesn\'t replace your team — it becomes the team member you couldn\'t afford to hire.' },
  { title: 'Cash flow visibility', desc: 'Invoices sent on time, payment reminders automated, outstanding amounts tracked. Your PA gives you a weekly summary so you always know where you stand.' },
  { title: 'Supplier and vendor management', desc: 'Follow-ups sent, quotes tracked, deliveries confirmed. Your PA chases the things you forget to chase.' },
  { title: 'Marketing that actually happens', desc: 'Social media posts drafted and scheduled, blog content created, newsletter copy prepared. Consistent presence without the mental load.' },
];

export default function SMEPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>🚀 SME & Startups</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            Stop doing everything.<br /><span className="gradient-text">Start building something.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '48px' }}>
            You started a business to build something great. Instead, you spend 60% of your time on admin that doesn't grow the business. Proxi gives you back the bandwidth to actually scale.
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
            <ChatBubble who="you" text="What invoices are outstanding?" />
            <ChatBubble who="proxi" text="3 unpaid: ABC Trading (RM4,200, 12 days), Mega Corp (RM8,100, 28 days — approaching overdue), and Fresh Foods (RM1,500, 5 days). Want me to send reminders to Mega Corp? ✓" />
            <ChatBubble who="you" text="Yes. Also, did the supplier confirm the delivery for Thursday?" />
            <ChatBubble who="proxi" text="Not yet. I've sent a follow-up to Mr. Tan at 9am this morning. I'll ping you the moment he confirms. ✓" />
            <ChatBubble who="you" text="I need social media content for this week. We just launched a new product line." />
            <ChatBubble who="proxi" text="Done — 4 posts drafted: launch announcement, product feature spotlight, behind-the-scenes story, and customer benefit angle. Scheduled for Mon/Wed/Thu/Sat. Ready for your review. ✓" />
          </div>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Ready to run your business, not your inbox?</h2>
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
