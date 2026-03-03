"use client";

import { useState, useEffect } from "react";
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const REASONS = [
  "You spent 40 minutes on an email that should've taken 5.",
  "You missed a follow-up and lost a client.",
  "Your calendar has three conflicting meetings right now.",
  "You forgot to reply to someone important. Again.",
  "You just spent an hour rescheduling one meeting.",
  "There are 47 unread emails in your inbox.",
  "You missed a deadline because you lost track of a thread.",
  "Someone asked 'did you get my email?' and you panicked.",
  "You're doing your own invoicing at 11pm.",
  "Your to-do list has 23 items. It had 23 items last week too.",
  "You just searched your inbox for 15 minutes to find one attachment.",
  "A client followed up three times before you responded.",
  "You cancelled a meeting because you didn't have time to prepare.",
  "Your receipts are in four different folders and your camera roll.",
  "You keep meaning to set up auto-reminders. You keep forgetting.",
  "You double-booked yourself. For the third time this month.",
  "Half your day went to admin. The other half went to recovering from it.",
  "You know exactly what you should delegate. You just have nobody to delegate to.",
  "A lead went cold because you took three days to respond.",
  "You spent your morning sorting emails instead of doing actual work.",
  "Your proposal is late because you got buried in scheduling.",
  "You forgot someone's name mid-email and spent 10 minutes finding it.",
  "You have 6 browser tabs open just to manage your own schedule.",
  "You replied 'sorry for the late response' for the fifth time today.",
  "Someone asked for a meeting and you said 'let me check my calendar' three days ago.",
  "Your client thinks you're disorganised. You're not — you're overwhelmed.",
  "You're answering emails at midnight because the day got away from you.",
  "You turned down a project because you couldn't handle the admin.",
  "You spent more time coordinating than actually doing the work.",
  "Your assistant quit. Your system was 'I'll remember.'",
  "You just copy-pasted the same follow-up email for the tenth time.",
  "You're too busy to take on more clients but too stretched to serve the ones you have.",
  "A simple task took 4 emails, 2 calls, and a WhatsApp voice note.",
  "You know delegation would save you hours. You just don't have anyone to delegate to.",
  "Your Friday was supposed to be strategic. It became entirely reactive.",
  "You've got a great system for managing tasks. You just never have time to use it.",
  "Someone important is waiting for a reply you forgot about.",
  "You woke up at 6am to clear your inbox before your first meeting.",
  "You've been meaning to organise your contacts for months.",
  "Your business is growing but your bandwidth isn't.",
  "You just missed another follow-up. It was worth RM5,000.",
  "You're doing admin a RM20/hr intern could handle, at your RM500/hr rate.",
  "Your weekends are for catching up on the week's admin backlog.",
  "Three people emailed you the same question. You answered it three different ways.",
  "You need help. You just don't want to manage another person.",
  "Your phone has 14 unread WhatsApp messages from clients.",
  "You ghost your own reminders.",
  "Your CRM is a spreadsheet you haven't opened in two weeks.",
  "You keep saying 'I need an assistant' but never hire one.",
  "You're reading this instead of replying to that email.",
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
      fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2,
      marginTop: '20px', marginBottom: '16px',
      minHeight: '3.6em', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
    }}>
      <span className="gradient-text" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease' }}>
        {REASONS[index]}
      </span>
    </h1>
  );
}

export default function ProxiTier() {
  return (
    <>
      <Nav />

      <main>
        {/* ─── HERO TICKER ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '130px 24px 40px', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>RM199/month + <a href="/setup" style={{ color: 'inherit', textDecoration: 'underline' }}>RM500 setup</a></span>
          <TickerHeadline />
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '32px', maxWidth: '540px', margin: '0 auto 32px' }}>
            Proxi gives you a dedicated PA. Email, calendar, follow-ups, admin — handled. You focus on the work that actually matters.
          </p>
          <a href="/invite" className="cta-btn" style={{ textDecoration: 'none', padding: '16px 40px', fontSize: '1.05rem' }}>Get your invite →</a>
        </section>

        {/* ─── WHAT YOU GET ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 24px 48px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '24px' }}>What your PA handles</h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              { icon: '📧', title: 'Email management', desc: 'Drafts replies, flags urgent messages, follows up on unanswered threads. Integrates with Gmail and Google Workspace.' },
              { icon: '📅', title: 'Calendar & scheduling', desc: 'Books meetings, resolves conflicts, sends reminders. Syncs with Google Calendar.' },
              { icon: '🔄', title: 'Follow-ups', desc: 'Tracks who hasn\'t replied. Sends polite nudges. Makes sure nothing falls through the cracks.' },
              { icon: '📋', title: 'Admin & data entry', desc: 'Invoices, expense tracking, document drafts, form filling. The stuff that takes longer than it should.' },
              { icon: '🔍', title: 'Research & summaries', desc: 'Competitive research, market data, document summaries. Get the answer, not the Google rabbit hole.' },
              { icon: '💬', title: 'WhatsApp access', desc: 'Message your PA anytime. Forward emails, share screenshots, delegate on the go.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── THE MATH ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="card" style={{ padding: '32px', borderLeft: '3px solid var(--accent)' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>The math</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              A human PA in Malaysia costs RM2,500–4,000/month. A freelance VA costs RM1,000–2,000/month for limited hours.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              Proxi costs RM199/month — all AI costs included, no API keys needed. Available 24/7. No EPF. No leave. No training period.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              That's not a cost — it's a rounding error on the time you get back.
            </p>
          </div>
        </section>

        {/* ─── LIMITS ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 48px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '24px' }}>Fair use</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)' }}>2,000</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>messages/month</p>
            </div>
            <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)' }}>15 min</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>response time</p>
            </div>
          </div>
        </section>

        {/* ─── UPGRADE NUDGE ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 60px' }}>
          <div className="card" style={{ padding: '32px', borderLeft: '3px solid var(--accent)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px', fontWeight: 600 }}>Go superhero mode</p>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>Proxi handles admin. But who handles your workflows?</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              Proxi keeps your inbox clean and your calendar sorted. But your processes still run on manual steps. Your tools don't talk to each other. Your team is still copying data between systems. Admin is only half the problem.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
              Proxi Max is your PA on superhero mode — everything in Proxi plus custom workflow design, advanced integration engineering, and process automation for complex operations. One operator that runs your business systems while you do the work that matters.
            </p>
            <a href="/proxi-max" className="cta-btn" style={{ textDecoration: 'none', padding: '14px 32px', fontSize: '0.95rem' }}>
              See Proxi Max — workflow powerhouse →
            </a>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Ready to stop doing admin?</h2>
          <a href="/invite" className="cta-btn" style={{ textDecoration: 'none', padding: '16px 40px', fontSize: '1.05rem' }}>
            Get your invite →
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
