"use client";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Reclaim() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: '640px', margin: '0 auto', padding: '120px 24px 40px', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '12px', lineHeight: 1.2 }}>Reclaim your time.</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '56px', lineHeight: 1.6 }}>You didn't start your career to spend it on admin.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '64px' }}>
          <Section title="Where your time actually goes" text="Email. Calendar. Follow-ups. Rescheduling. Reminders. Drafting replies you've written a hundred times before. Chasing people who haven't responded. Updating spreadsheets. Filing things. Finding things you filed. It's not hard work — but it never stops. And it's eating the hours you should be spending on the work that matters." />
          <Section title="The invisible tax" text="Every task switch costs you focus. Every 'quick email' turns into twenty minutes. Every follow-up you forget costs you a client, a deal, or a relationship. Admin isn't just time — it's attention. And attention is the one thing you can't get back." />
          <Section title="What 12 hours a week looks like" text="That's what most professionals lose to admin. Twelve hours. Every week. That's a day and a half. Fifty full working days a year. Imagine what you'd do with fifty extra days." />
          <Section title="The fix isn't working harder" text="You've tried productivity apps. You've tried batching. You've tried getting up earlier. The problem isn't your system — it's that you're doing work that shouldn't be yours. You need someone else to do it. Not another tool. Not another app. Someone." />
          <Section title="That someone doesn't need to be human" text="A Proxi PA reads your emails, drafts your replies, manages your calendar, follows up with your contacts, and handles the admin that fills your day. It works when you sleep. It doesn't forget. It doesn't need managing. You just tell it what you need — and it gets done." />
          <Section title="What you get back" items={['Mornings that start with real work, not inbox triage','Meetings that are scheduled without 14 back-and-forth emails','Follow-ups that happen automatically — no mental load','Replies drafted in your voice, ready for your approval','The confidence that nothing is falling through the cracks','Time to think. Time to build. Time to lead.']} />
        </div>
        <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '20px', marginBottom: '64px' }}>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.7, fontStyle: 'italic' }}>"The goal isn't to be more productive. It's to stop doing the things that aren't your job."</p>
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
