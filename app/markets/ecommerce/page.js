"use client";

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const PAIN_POINTS = [
  { problem: '"Where is my order?" twenty times a day', detail: 'Each one needs a real, tracked answer. Each one is impatient. Customer service stops being a function and becomes a permanent state.' },
  { problem: 'Stock vanishing without warning', detail: 'You sell what you don\'t have, refund-storm follows, and reviews tank. Inventory was supposed to be solved in 2010 — it\'s still not solved at small-business scale.' },
  { problem: 'Suppliers who only reply on their schedule', detail: 'You need a restock ETA, a defect report, a pricing change confirmed. They\'ll get back to you when they get back to you.' },
  { problem: 'Returns that eat the entire afternoon', detail: 'Approving the request, generating the label, processing the refund, updating the customer at every step. Each return is a 20-minute relay race.' },
];

const SOLUTIONS = [
  { title: 'Order status replies that don\'t need you', desc: 'Your PA reads the order ID, checks the courier feed, and replies with the real status — in your tone, with the right level of empathy if there\'s a delay.' },
  { title: 'Inventory alerts before stockouts', desc: 'Your PA watches stock levels and flags low-runners early enough to reorder. No more selling air; no more 3am refund spirals.' },
  { title: 'Supplier follow-up that actually closes', desc: 'Your PA chases ETAs, confirms invoice details, and translates back-and-forth into one clean summary for you. You get answers; you don\'t live in the thread.' },
  { title: 'Returns triage on autopilot', desc: 'Your PA validates the return reason, generates the label, queues the refund for your approval, and keeps the customer informed at every step. Twenty-minute relay becomes a one-tap approval.' },
];

export default function EcommercePage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>📦 E-commerce & Retail</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            Sell more, type less.<br /><span className="gradient-text">Customer service on autopilot.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '48px' }}>
            Every "where is my order?" message you answer yourself is a minute you didn't spend sourcing, marketing, or building. Proxi takes the inbox, the returns queue, and the supplier chase off your plate so the storefront actually grows.
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
            <ChatBubble who="you" text="Inbox summary?" />
            <ChatBubble who="proxi" text="42 customer messages overnight. 38 routine — handled with order status, ETAs, return labels. 4 escalations: damaged item from Mr Tan (refund queued), wrong colour for Mrs Lim (replacement initiated), and 2 wholesale enquiries flagged for your call. ✓" />
            <ChatBubble who="you" text="What's running low?" />
            <ChatBubble who="proxi" text="Three SKUs under 10 units: matte black hoodie M, oat tote, the new ceramic mug. I've drafted a reorder message for Sun Yi factory. Want me to send it? ✓" />
            <ChatBubble who="you" text="Send it. And approve the Tan refund." />
            <ChatBubble who="proxi" text="Reorder sent; awaiting their ETA. Tan refund processed; customer notified with apology + 10% next-order code. ✓" />
          </div>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Ready to grow without growing the inbox?</h2>
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
