"use client";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function NothingFalls() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: '640px', margin: '0 auto', padding: '120px 24px 40px', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '12px', lineHeight: 1.2 }}>Nothing falls through the cracks.</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '56px', lineHeight: 1.6 }}>The follow-up you forgot is the client you lost.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '64px' }}>
          <Section title="The silent killer" text="You don't lose clients because your work is bad. You lose them because you forgot to reply. Because the follow-up slipped. Because you meant to send that document on Tuesday and it's now Friday. Nobody tells you they're leaving — they just stop calling." />
          <Section title="Your brain isn't built for this" text="Humans are terrible at tracking dozens of open threads. We forget. We prioritise wrong. We tell ourselves 'I'll do it later' and later never comes. It's not a character flaw — it's how memory works. The more things you're juggling, the more things you drop." />
          <Section title="Systems don't forget" text="A Proxi PA tracks every conversation, every commitment, every 'I'll get back to you.' It knows who you promised a proposal to. It knows who hasn't replied in three days. It follows up — politely, professionally, persistently. Not because it's motivated. Because it literally cannot forget." />
          <Section title="What this looks like in practice" items={['Client hasn\'t replied in 48 hours — automatic follow-up sent','You promised a document by Friday — reminder on Thursday, draft ready','Three prospects went cold — reactivation messages queued','Invoice unpaid for 30 days — polite chase sent on your behalf','Birthday of a key contact — greeting sent, relationship maintained']} />
          <Section title="The compound effect" text="One missed follow-up is nothing. A pattern of missed follow-ups is a reputation. The difference between 'reliable' and 'unreliable' isn't talent — it's consistency. A PA that never drops the ball makes you look like someone who never drops the ball." />
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '80px' }}>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '16px' }}>Access is by invitation only.</p>
          <a href="/invite" className="cta-btn" style={{ textDecoration: 'none', padding: '14px 32px', display: 'inline-block' }}>Get started →</a>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, text, items }) {
  return (
    <div>
      <h2 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '10px', fontWeight: 600 }}>{title}</h2>
      {text && <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{text}</p>}
      {items && (
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {items.map((item, i) => (
            <li key={i} style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, paddingLeft: '20px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>{item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
