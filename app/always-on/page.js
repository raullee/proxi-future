"use client";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function AlwaysOn() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: '640px', margin: '0 auto', padding: '120px 24px 40px', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '12px', lineHeight: 1.2 }}>Always on.</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '56px', lineHeight: 1.6 }}>Your clients don't stop at 6pm. Neither should your support.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '64px' }}>
          <Section title="The 11pm problem" text="A client texts you at 11pm. It's urgent — to them. You're asleep, or you're with your family, or you're trying to be. By morning, the moment has passed. They've called someone else. Or worse — they haven't, but they're annoyed. That gap between when they need you and when you're available? That's where trust erodes." />
          <Section title="Availability is a competitive advantage" text="The person who responds first usually wins. Not because they're better — but because they showed up. In professional services, responsiveness is a proxy for competence. Fair or not, that's how it works. The question isn't whether you should be available 24/7. It's whether your competition already is." />
          <Section title="You shouldn't have to be the one awake" text="Being always-on doesn't mean you never sleep. It means something intelligent is handling things while you do. A PA that triages your messages at midnight. That acknowledges a client's email at 3am. That schedules a callback for first thing in the morning — before you've even opened your eyes." />
          <Section title="What always-on looks like" items={['Client emails at 11pm — acknowledged in minutes, not hours','Meeting request on a Sunday — calendar checked, slot proposed','Urgent follow-up at 6am — drafted and ready for your approval','Weekend enquiry — responded to professionally, immediately','Public holiday — your PA doesn\'t take them']} />
          <Section title="The math" text="A human PA works 8 hours a day, 5 days a week. That's 40 out of 168 hours — less than 25% coverage. A Proxi PA works all 168. No overtime. No shift differential. No burnout. Just consistent, reliable presence." />
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
