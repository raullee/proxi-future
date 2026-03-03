"use client";

import { useState, useEffect } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const REASONS = [
  "You have 5 tools that don't talk to each other.",
  "Your team copies data between systems manually. Every day.",
  "That workflow you designed on a whiteboard? Still on the whiteboard.",
  "Someone forgot a step in the process. Again. It cost you a client.",
  "You're paying for Zapier, Make, and still doing things by hand.",
  "Your invoicing process has 7 steps. It should have 1.",
  "Client onboarding takes 3 days. It should take 3 minutes.",
  "Your CRM is out of date because nobody has time to update it.",
  "You built a spreadsheet to track a spreadsheet.",
  "Three people are doing the same follow-up because nobody knows who's responsible.",
  "Your approval process involves 4 emails and a WhatsApp voice note.",
  "The data lives in someone's head. When they're on leave, everything stops.",
  "You automated one thing. The other 47 still run on hope.",
  "Every new client means rebuilding the same workflow from scratch.",
  "Your team spends more time coordinating than executing.",
  "You know exactly what should be automated. You just don't have the bandwidth.",
  "The process works — until someone skips step 3.",
  "You've got APIs for everything. Nothing is connected to anything.",
  "Your ops team is drowning in tasks that a bot could handle.",
  "Someone manually exports a CSV every Monday morning. It's 2026.",
  "Your project management tool has 200 tasks. 50 are duplicates.",
  "Lead comes in → 48 hours before anyone responds. Lead gone.",
  "Your integrations were set up by someone who left 6 months ago.",
  "You're the bottleneck in every approval flow.",
  "Three tools, three logins, three dashboards, one headache.",
  "Your operations run on muscle memory, not documented processes.",
  "Every time you scale, something breaks because the workflow can't handle it.",
  "You need a developer to change a simple workflow. They're booked until March.",
  "The handoff between sales and operations loses information every single time.",
  "Your business runs on WhatsApp threads. And you know that's a problem.",
];

function TickerHeadline() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * REASONS.length));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex(prev => {
          let next;
          do { next = Math.floor(Math.random() * REASONS.length); } while (next === prev);
          return next;
        });
        setVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 style={{
      fontSize: 'clamp(1.6rem, 4.5vw, 2.4rem)',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.2,
      marginTop: '20px',
      marginBottom: '16px',
      minHeight: '3.6em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <span className="gradient-text" style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}>
        {REASONS[index]}
      </span>
    </h1>
  );
}

const CODES = {
  'FOUNDING5': { tier: 'Proxi Max', rate: 299, label: 'Founding Member' },
  'TRIPTANK': { tier: 'Proxi Max', rate: 299, label: 'Founding Member' },
  'RAUL': { tier: 'VIP', rate: 0, label: 'VIP 30-day Trial' },
  'TEST200': { tier: 'Test', rate: 2, label: 'Test Access' },
};

function InviteGate() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const upper = code.trim().toUpperCase();
    const match = CODES[upper];
    if (match) { setSuccess(match); setError(''); }
    else { setError('Invalid invitation code'); setSuccess(null); }
  };

  if (success) {
    return (
      <div className="card" style={{ padding: '32px', textAlign: 'center', maxWidth: '420px', margin: '0 auto' }}>
        <div style={{ fontSize: '2rem', marginBottom: '12px' }}>✓</div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', color: 'var(--accent)' }}>{success.label} Access</h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
          {success.rate > 0 ? `RM${success.rate}/month — ${success.tier} tier` : '30-day free trial'}
        </p>
        <a href="/get-started"
          className="cta-btn" style={{ textDecoration: 'none', padding: '14px 32px', display: 'inline-block' }}>
          Get started →
        </a>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '420px', margin: '0 auto', textAlign: 'center' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <input type="text" value={code} onChange={(e) => { setCode(e.target.value); setError(''); }}
            placeholder="Enter invitation code"
            style={{ flex: 1, padding: '14px 20px', borderRadius: '12px', border: error ? '1.5px solid #EF4444' : '1.5px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text)', fontSize: '0.95rem', fontFamily: 'monospace', letterSpacing: '2px', textTransform: 'uppercase', textAlign: 'center', outline: 'none' }}
            autoComplete="off" spellCheck={false} />
          <button type="submit" disabled={!code.trim()} className="cta-btn"
            style={{ padding: '14px 24px', borderRadius: '12px', opacity: !code.trim() ? 0.4 : 1, border: 'none', cursor: code.trim() ? 'pointer' : 'default' }}>→</button>
        </div>
        {error && <p style={{ color: '#EF4444', fontSize: '0.85rem', marginTop: '12px' }}>{error}</p>}
      </form>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '16px' }}>
        Don't have a code? <a href="/get-started" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>Request a demo →</a>
      </p>
    </div>
  );
}

export default function ProxiMaxPage() {
  return (
    <>
      <Nav />

      <main>
        {/* ─── HERO TICKER ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '130px 24px 40px', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>Proxi Max · RM499/month + <a href="/setup" style={{ color: 'inherit', textDecoration: 'underline' }}>RM2,000 setup</a></span>
          <TickerHeadline />
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 32px', lineHeight: 1.6 }}>
            Proxi Max fixes all of it. One operator that handles your admin, designs custom workflows, automates complex operations, and keeps your entire business running — while you do what you're actually good at.
          </p>
          <a href="#invite" className="cta-btn" style={{ textDecoration: 'none', padding: '16px 40px', fontSize: '1.05rem' }}>Get your invite →</a>
        </section>

        {/* ─── WHAT YOUR PA HANDLES ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 24px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>One operator. Everything covered.</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '28px' }}>Admin, workflows, automation, follow-ups — in one subscription.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { icon: '📧', title: 'Email & calendar', desc: 'Triage, drafts, scheduling, reminders. Your inbox under control.' },
              { icon: '🔄', title: 'Follow-ups & CRM', desc: 'Tracks every thread, nudges every lead, nothing drops.' },
              { icon: '📋', title: 'Admin & ops', desc: 'Invoices, proposals, contracts, data entry, research.' },
              { icon: '⚙️', title: 'Custom workflows', desc: 'Custom workflow design & automation tailored to your business processes.' },
              { icon: '🔗', title: 'Integration engineering', desc: 'APIs, databases, custom tools — advanced integration engineering for your stack.' },
              { icon: '🔀', title: 'Workflow orchestration', desc: 'Multi-step process automation for complex operations across systems.' },
              { icon: '💳', title: 'Payments', desc: 'Stripe integration, invoice chasing, payment reminders.' },
              { icon: '⚡', title: '5-min response', desc: 'Your PA responds fast. Because being there when it matters is everything.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '4px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── THE MATH ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '20px 24px 60px' }}>
          <div className="card" style={{ padding: '36px' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '20px' }}>The math</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Human PA</p>
                <p style={{ fontSize: '1.4rem', fontWeight: 800, textDecoration: 'line-through', color: 'var(--text-muted)' }}>RM3,500</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/month, 9-5 only</p>
              </div>
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Automation dev</p>
                <p style={{ fontSize: '1.4rem', fontWeight: 800, textDecoration: 'line-through', color: 'var(--text-muted)' }}>RM5,000</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/month, workflows + integrations</p>
              </div>
              <div style={{ textAlign: 'center', padding: '16px 0', borderRadius: '12px', background: 'var(--accent-light)' }}>
                <p style={{ fontSize: '1rem', color: 'var(--accent)', marginBottom: '4px', fontWeight: 600 }}>Proxi Max</p>
                <p style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent)' }}>RM499</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>/month, 24/7, everything</p>
              </div>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, textAlign: 'center' }}>
              One subscription replaces a PA and an automation engineer. That's RM8,000+/month in value for RM499. All AI costs included — no API keys, no hidden charges.
            </p>
          </div>
        </section>

        {/* ─── INTEGRATIONS ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 60px' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-muted)' }}>Integrations included</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['WhatsApp', 'Gmail', 'Google Calendar', 'Stripe', 'Custom APIs', 'Databases', 'Zapier', 'Webhooks', 'Google Sheets'].map((t, i) => (
              <span key={i} style={{ padding: '6px 16px', borderRadius: '100px', border: '1px solid var(--border)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t}</span>
            ))}
          </div>
        </section>

        {/* ─── CASE STUDY ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 60px' }}>
          <div className="card" style={{ padding: '32px', borderLeft: '3px solid var(--accent)' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px', fontWeight: 600 }}>How it started</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              We built Naoise because we had the same problem — a company full of ideas and no bandwidth to execute. She now runs our entire company's operations through workflow automation — handling client inquiries on WhatsApp around the clock, orchestrating multi-step processes, managing integrations, and keeping every system in sync. She went from experiment to our most productive team member overnight. <a href="/naoise" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>See how workflow automation runs an entire company →</a>
            </p>
          </div>
        </section>

        {/* ─── INVITE GATE ─── */}
        <section id="invite" style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 24px 80px', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>RM499/month</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, marginTop: '20px', marginBottom: '12px' }}>
            Ready to automate your operations?
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '36px', maxWidth: '400px', margin: '0 auto 36px' }}>
            Proxi Max is available by invitation to founding members.
          </p>
          <InviteGate />
        </section>
      </main>

      <Footer />
    </>
  );
}
