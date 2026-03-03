"use client";

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const PAIN_POINTS = [
  { problem: 'Viewings that eat your entire week', detail: 'Scheduling, rescheduling, no-shows, last-minute changes. You spend more time coordinating viewings than actually showing properties.' },
  { problem: 'Tenant management is a full-time job', detail: 'Maintenance requests, lease renewals, late rent chasers, complaints. Each property multiplies the admin exponentially.' },
  { problem: 'Listings that go stale', detail: 'New photos, updated descriptions, cross-posting across portals. By the time you update one listing, three others are outdated.' },
  { problem: 'Document prep and compliance', detail: 'Tenancy agreements, S&P documents, valuation reports, commission tracking. The paperwork never ends.' },
];

const SOLUTIONS = [
  { title: 'Automated viewing coordination', desc: 'Your PA schedules viewings, sends reminders to buyers/tenants, handles rescheduling, and confirms attendance. You just show up.' },
  { title: 'Tenant communication on autopilot', desc: 'Maintenance logged and tracked, rent reminders sent automatically, lease renewal notices drafted and sent on time.' },
  { title: 'Listings always current', desc: 'Your PA updates listings across platforms, drafts compelling descriptions, and flags properties that need fresh photos.' },
  { title: 'Documents drafted and ready', desc: 'Tenancy agreements, offer letters, commission invoices — first drafts ready for your review, not your creation.' },
];

export default function PropertyPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>🏠 Property & Real Estate</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            Close deals.<br /><span className="gradient-text">Not spreadsheets.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '48px' }}>
            You're juggling viewings, tenants, listings, and paperwork while trying to actually sell properties. Proxi handles the coordination so you can focus on closing.
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
            <ChatBubble who="you" text="Schedule viewings for the Bangsar unit this weekend." />
            <ChatBubble who="proxi" text="Done. 3 interested buyers confirmed — Saturday 10am, 11:30am, 2pm. I've sent them the address, parking instructions, and a reminder set for Friday evening. ✓" />
            <ChatBubble who="you" text="Unit 12B tenant says the aircon is broken again." />
            <ChatBubble who="proxi" text="Logged. I've contacted your usual contractor, Mr. Lim. He can come Tuesday 2-4pm. I've messaged the tenant to confirm the slot. ✓" />
            <ChatBubble who="you" text="Draft a tenancy renewal for the Mont Kiara unit. Same terms, 12 months." />
            <ChatBubble who="proxi" text="Done. Same rental, same deposit structure, new dates. Sent to you for review before I send to tenant. ✓" />
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
