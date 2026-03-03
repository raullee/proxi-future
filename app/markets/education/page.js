"use client";

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const PAIN_POINTS = [
  { problem: 'Parent WhatsApp floods', detail: 'Every parent thinks their message is urgent. Your phone buzzes at 7am, 10pm, and everything in between. Class groups become complaint forums and you\'re the unpaid moderator.' },
  { problem: 'Lesson planning admin', detail: 'The actual teaching is the easy part. It\'s the planning documents, worksheets, scheme of work updates, and curriculum alignment paperwork that eats your weekends.' },
  { problem: 'Fee collection chasing', detail: 'Awkward conversations with parents about overdue payments. You\'re an educator, not a debt collector — but someone has to send those reminders.' },
  { problem: 'Progress report writing', detail: 'Thirty students, each needing personalised comments that sound thoughtful, specific, and encouraging. Copy-paste is obvious. Writing from scratch takes days.' },
];

const SOLUTIONS = [
  { title: 'Parent communication management', desc: 'Your PA handles routine parent queries, sends class updates, and flags only what needs your personal attention. Professional, warm, and always timely.' },
  { title: 'Lesson plan assistance', desc: 'Your PA helps draft lesson plans, worksheets, and activity ideas based on your curriculum. You refine — not start from zero every time.' },
  { title: 'Automated fee reminders', desc: 'Gentle, professional payment reminders sent automatically. No awkward conversations, no chasing — just quiet efficiency.' },
  { title: 'Progress report drafts', desc: 'Your PA drafts personalised comments based on grades and notes you provide. Each one reads like you wrote it. Because you\'ll review every word.' },
];

export default function EducationPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>📚 Teachers, Tutors & Trainers</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            You teach humans.<br /><span className="gradient-text">Let AI handle the paperwork.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '48px' }}>
            You got into education to make a difference — not to spend your evenings writing reports, chasing fees, and answering the same parent questions on repeat. Proxi takes the admin off your plate so you can focus on what you actually love: teaching.
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
            <ChatBubble who="you" text="Send payment reminders to all parents who haven't paid February fees." />
            <ChatBubble who="proxi" text="Done. 12 parents reminded via WhatsApp with a polite, professional message. Each one is personalised with their child's name and the outstanding amount. I'll flag any replies that need your attention. ✓" />
            <ChatBubble who="you" text="Draft progress comments for my Year 5 class." />
            <ChatBubble who="proxi" text="Drafted 28 personalised comments based on your grade sheet. Each highlights strengths, areas for improvement, and next steps. Ready for your review and tweaks. ✓" />
          </div>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Ready to teach more and admin less?</h2>
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
