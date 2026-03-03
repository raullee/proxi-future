"use client";

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const PAIN_POINTS = [
  { problem: 'Shipment status queries flooding inbox', detail: '"Where\'s my shipment?" — from clients, from sales, from management. You spend half your day looking up tracking numbers instead of actually managing logistics.' },
  { problem: 'Vendor coordination across timezones', detail: 'Your supplier is in Shenzhen, your freight forwarder is in Dubai, your warehouse is in Shah Alam. Coordinating across timezones means someone\'s always waiting on someone else.' },
  { problem: 'Delivery schedule conflicts', detail: 'Double-booked dock slots, overlapping delivery windows, drivers arriving when the warehouse is full. Scheduling conflicts compound fast when volume scales.' },
  { problem: 'Documentation backlog', detail: 'Bills of lading, customs declarations, delivery orders, invoices. The paper trail is endless and every missing document is a delayed shipment.' },
];

const SOLUTIONS = [
  { title: 'Automated shipment tracking', desc: 'Your PA monitors all shipments and responds to status queries instantly. Clients get real-time updates without you lifting a finger.' },
  { title: 'Vendor communication management', desc: 'Your PA coordinates with vendors across timezones, sends follow-ups, and escalates delays. You get a morning briefing, not a hundred messages.' },
  { title: 'Schedule conflict resolution', desc: 'Your PA flags scheduling conflicts before they happen, suggests alternatives, and coordinates changes across all parties.' },
  { title: 'Document processing', desc: 'Your PA organises, tracks, and flags missing documentation. No more shipments held up because someone forgot to attach the packing list.' },
];

export default function LogisticsPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>🚛 Logistics & Supply Chain</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            You move the world.<br /><span className="gradient-text">Stop drowning in status updates.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '48px' }}>
            Supply chains don't wait. But you shouldn't have to spend your day answering "where's my shipment?" and chasing vendors for ETAs. Proxi handles the coordination noise so you can focus on keeping things moving.
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
            <ChatBubble who="you" text="What shipments are delayed this week?" />
            <ChatBubble who="proxi" text="3 shipments delayed: Container MSKU-4821 stuck at Port Klang (customs clearance — missing Form K1), LCL shipment to Penang delayed by 2 days (carrier issue), and the Johor delivery rescheduled to Friday per warehouse request. I've contacted the customs broker about the Form K1. ✓" />
            <ChatBubble who="you" text="Send an update to Client Tan about their shipment." />
            <ChatBubble who="proxi" text="Done. Sent a professional update with current ETA, reason for delay, and next steps. Tone matches your previous communications with them. ✓" />
          </div>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Ready to manage logistics instead of messages?</h2>
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
