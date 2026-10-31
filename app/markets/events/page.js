"use client";

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const PAIN_POINTS = [
  { problem: 'Vendors who go quiet two weeks before showtime', detail: 'You confirmed the AV team in writing. Then radio silence. You don\'t know if they\'re ghosting or just busy until you\'re in panic mode.' },
  { problem: 'Guest list that won\'t stop changing', detail: 'RSVPs trickle in past the deadline, dietary requirements come last-minute, plus-ones materialise on the day. Every change ripples through seating, catering, and budget.' },
  { problem: 'Timeline drift on the run-up week', detail: 'Load-in moved by an hour, soundcheck pushed, the photographer wants a different call time. Each shift needs a dozen people informed; one missed message becomes a broken event.' },
  { problem: 'Post-event follow-up that never happens', detail: 'Sponsor recap decks, vendor invoices, thank-you notes, testimonial requests — all critical for the next gig, all the things you have no energy for the morning after.' },
];

const SOLUTIONS = [
  { title: 'Vendor briefings that get acknowledged', desc: 'Your PA sends call sheets, chases confirmations, and escalates the silent ones to you with context. You stop discovering problems on event day.' },
  { title: 'Guest list management without the spreadsheet pain', desc: 'RSVPs, dietary needs, plus-ones, table changes — your PA logs every update, keeps the master list current, and warns you when a change breaks a downstream booking.' },
  { title: 'Timeline reminders to the whole crew', desc: 'When a slot shifts, your PA pushes the new time to every affected person in the right channel. No more "wait, was that 3pm or 4pm?"' },
  { title: 'Post-event wrap-up on autopilot', desc: 'Thank-you sequences, sponsor recap drafts, testimonial nudges, vendor payment confirmations — all queued up the morning after, ready for your one-line approval.' },
];

export default function EventsPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>🎭 Events & Hospitality</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            You produce the show.<br /><span className="gradient-text">Proxi runs the production line.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '48px' }}>
            The art is on the stage; the work is the hundred messages, run sheets, and changes that get it there. Proxi keeps every vendor, guest, and crew member aligned without you babysitting WhatsApp groups for three weeks straight.
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
            <ChatBubble who="you" text="Vendor status, 10 days out?" />
            <ChatBubble who="proxi" text="Catering and lighting confirmed with signed call sheets. AV unconfirmed — chased twice, still silent. Photographer asked to push call time by 30 mins. Want me to escalate the AV vendor to you? ✓" />
            <ChatBubble who="you" text="Yes, escalate AV. And confirm the new photographer time with everyone." />
            <ChatBubble who="proxi" text="Done. AV team flagged for your call. New photo call time pushed to crew, MC, and venue. Run sheet updated and resent. ✓" />
            <ChatBubble who="you" text="Send recap deck draft to the title sponsor." />
            <ChatBubble who="proxi" text="Drafted using last year's template — attendance, social reach, three quotes from the photographer's audience capture. Sent to you for review before it goes out. ✓" />
          </div>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Ready to produce without burning out?</h2>
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
