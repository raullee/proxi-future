"use client";

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const PAIN_POINTS = [
  { problem: 'Renewals slipping through the cracks', detail: 'You meant to call before the policy lapsed. Then a claim happens and the client is uninsured. The phone call you didn\'t make becomes the relationship you didn\'t keep.' },
  { problem: 'Claim status questions, all day, every day', detail: 'Half your inbox is "any update?" Each one needs a courteous, accurate, human-sounding reply. They can\'t wait, and you can\'t scale.' },
  { problem: 'Document chase for underwriting', detail: 'IC copies, bank statements, medical reports — clients send half, forget the rest, blame you when the application stalls.' },
  { problem: 'Cross-sell opportunities buried in the inbox', detail: 'A client mentions a new car, a baby on the way, a business they just started. By the time you remember, the moment\'s gone.' },
];

const SOLUTIONS = [
  { title: 'Renewal alerts before they lapse', desc: 'Your PA tracks every policy expiry, drafts the renewal nudge in your tone, and follows up if the client ghosts. You only step in when underwriting needs you.' },
  { title: 'Claim status updates, on autopilot', desc: 'Your PA acknowledges each enquiry, fetches the latest position from your notes, and replies with the next expected step. Clients feel heard; you stay focused.' },
  { title: 'Document collection that actually closes', desc: 'Your PA chases the missing papers, accepts uploads in WhatsApp, and only escalates when something is genuinely stuck. Underwriting timelines stop bleeding.' },
  { title: 'Surface life-event triggers in real time', desc: 'Your PA flags the throwaway lines that signal new needs — a new car, marriage, business launch — so you follow up while the moment\'s still warm.' },
];

export default function InsurancePage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>🛡️ Insurance & Financial Services</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            Renewals, claims, and follow-ups.<br /><span className="gradient-text">All on autopilot.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '48px' }}>
            Your job is risk and relationships, not chasing IC copies and forwarding "any update?" emails. Proxi keeps the policy lifecycle running between you and your clients without dropping a single deadline.
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
            <ChatBubble who="you" text="Anything urgent today?" />
            <ChatBubble who="proxi" text="Three policies expire this week. Mrs Tan (motor, 27 Apr) hasn't replied to two reminders. Mr Lim (medical, 29 Apr) confirmed renewal — invoice drafted. The Wong household (home, 30 Apr) needs a quote update. ✓" />
            <ChatBubble who="you" text="Draft a status update for the Lee claim." />
            <ChatBubble who="proxi" text="Done. Notes show adjuster site visit on Tuesday, awaiting workshop quote. Replied to Mrs Lee with timeline and a Friday check-in promise. ✓" />
            <ChatBubble who="you" text="Did anyone mention a new car this week?" />
            <ChatBubble who="proxi" text="Yes — Mr Faiz mentioned picking up a Civic on Saturday in Tuesday's chat. I've noted it for a motor quote follow-up after his current policy renews. ✓" />
          </div>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Ready to keep every policy alive?</h2>
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
