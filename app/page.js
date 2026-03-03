"use client";

import { useState, useEffect } from "react";
import Nav from './components/Nav';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* ─── HERO ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 80px', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>By invitation only</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '20px' }}>
            The operator you<br /><span className="gradient-text">never had to hire.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 36px', lineHeight: 1.6 }}>
            Your AI personal assistant. Your workflow operator. Your admin, automation, and follow-ups — handled by one operator.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/invite" className="cta-btn" style={{ textDecoration: 'none', padding: '14px 24px' }}>Got an invite code? →</a>
            <a href="/waitlist" className="cta-btn-outline" style={{ textDecoration: 'none', padding: '14px 24px' }}>Join the waitlist →</a>
          </div>
        </section>

        {/* ─── PROBLEM ─── */}
        <section style={{ maxWidth: '640px', margin: '0 auto', padding: '80px 24px' }}>
          <span className="badge">The problem</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginTop: '16px', marginBottom: '20px' }}>
            You're great at what you do. But half your day disappears.
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
            Email. Calendar. Follow-ups. Rescheduling. Chasing people who haven't replied. And the other half? You know you should be visible online — writing content, managing social, keeping your presence alive. But who has time?
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, marginTop: '16px' }}>
            Every task switch costs you focus. Every "quick email" turns into twenty minutes. Every follow-up you forget costs you a client. Admin isn't just time — it's attention. And attention is the one thing you can't get back.
          </p>
        </section>

        {/* ─── SOLUTION ─── */}
        <section style={{ maxWidth: '640px', margin: '0 auto', padding: '0 24px 80px' }}>
          <span className="badge">The fix</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginTop: '16px', marginBottom: '20px' }}>
            One operator. Everything covered.
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
            Proxi is a personal assistant that also becomes your workflow operator. It handles your admin — and automates your operations. Custom workflows, process automation, and advanced integrations. All while managing your inbox, your calendar, and your clients.
          </p>
        </section>

        {/* ─── WHY PROXI GRID ─── */}
        <section id="why" style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge">Why Proxi</span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, marginTop: '16px' }}>
              Six reasons to stop doing it yourself.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <ReasonCard icon="⏰" title="Reclaim your time" desc="12 hours a week on admin. 50 working days a year. Imagine what you'd do with that time back." href="/reclaim" />
            <ReasonCard icon="⚙️" title="Workflow automation" desc="The PA doesn't just handle admin — it designs and runs custom workflows. Process automation, integrations, orchestration. All from one operator." href="/proxi-max" />
            <ReasonCard icon="🌙" title="Always on" desc="Your clients don't stop at 6pm. A Proxi PA works all 168 hours of the week. No overtime. No burnout." href="/always-on" />
            <ReasonCard icon="🔒" title="Nothing falls through" desc="Every follow-up tracked. Every commitment remembered. The compound effect of never dropping the ball." href="/nothing-falls" />
            <ReasonCard icon="🧠" title="Not a chatbot" desc="Chatbots answer questions. Operators take initiative. Your PA knows your clients, your tone, your patterns." href="/not-a-chatbot" />
            <ReasonCard icon="🤫" title="Discretion built in" desc="Your data is encrypted. Your PA doesn't gossip or change jobs. Confidentiality isn't a feature — it's the foundation." href="/discretion" />
          </div>
        </section>

        {/* ─── DEMO ─── */}
        <section id="demo" style={{ maxWidth: '640px', margin: '0 auto', padding: '80px 24px' }}>
          <span className="badge">See it in action</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, marginTop: '16px', marginBottom: '32px' }}>
            Real tasks. Handled in seconds.
          </h2>
          <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <ChatBubble who="you" text="I have 23 unread emails. Help." />
            <ChatBubble who="proxi" text="Done — 5 need your attention, 12 are FYI, 6 are junk. I've drafted replies for the 5 important ones. Ready for your review. ✓" />
            <ChatBubble who="you" text="Also clear my Tuesday afternoon." />
            <ChatBubble who="proxi" text="Rescheduled 2 meetings, notified everyone. Tuesday 2–6pm is free. ✓" />
            <ChatBubble who="you" text="Draft a follow-up to Ahmad — he hasn't replied about the proposal." />
            <ChatBubble who="proxi" text="Done. Polite, professional, references your last conversation. Sent to you for approval. ✓" />
          </div>
        </section>

        {/* ─── WHAT IT HANDLES ─── */}
        <section style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge">What Proxi handles</span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, marginTop: '16px' }}>
              Everything a great operator does.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <FeatureCard icon="📧" title="Email triage" desc="Reads, prioritises, drafts replies. You just approve." />
            <FeatureCard icon="📅" title="Calendar" desc="Schedules, reschedules, sends reminders. No double-bookings." />
            <FeatureCard icon="🔔" title="Follow-ups" desc="Tracks who hasn't replied. Chases them — politely." />
            <FeatureCard icon="📝" title="Drafting" desc="First drafts of letters, memos, proposals. You refine." />
            <FeatureCard icon="⚙️" title="Workflow automation" desc="Custom workflows, process automation, advanced integrations." />
            <FeatureCard icon="🔍" title="Research" desc="Clear summaries on any topic. Minutes, not hours." />
          </div>
        </section>

        {/* ─── COST ─── */}
        <section style={{ maxWidth: '640px', margin: '0 auto', padding: '80px 24px' }}>
          <span className="badge">The math</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, marginTop: '16px', marginBottom: '32px' }}>
            One subscription. Not a team.
          </h2>
          <div className="card" style={{ overflow: 'hidden', borderRadius: '16px' }}>
            <CompareRow label="Human PA" detail="RM3,000–5,000/mo + overhead" hours="40 hrs/week" />
            <CompareRow label="Freelance team" detail="RM2,000–4,000/mo" hours="Needs your coordination" />
            <CompareRow label="Content + social + VA" detail="RM4,500–8,000/mo combined" hours="3 people to manage" />
            <CompareRow label="Proxi PA" detail="One subscription" hours="168 hrs/week" highlight />
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginTop: '24px' }}>
            If your hourly rate is RM500 and you're spending 12 hours a week on admin, that's RM6,000 of your time wasted every week. A PA that costs a fraction of that isn't an expense — it's the highest-ROI decision you'll make this year.
          </p>
        </section>

        {/* ─── PRICING ─── */}
        <section id="pricing" style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge">Pricing</span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, marginTop: '16px' }}>
              Simple plans. Real value.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            <div className="card" style={{ padding: '28px 24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>Free</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>RM0</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '20px' }}>Build your own AI PA with OpenClaw. Same tech, self-hosted.</p>
              <a href="/pricing/free" style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>Learn more →</a>
            </div>
            <div className="card" style={{ padding: '28px 24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>Proxi</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>RM199<span style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--text-muted)' }}>/mo</span></p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '20px' }}>Your PA. Email, calendar, follow-ups — handled.</p>
              <a href="/pricing/proxi" style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>Learn more →</a>
            </div>
            <div className="card" style={{ padding: '28px 24px', border: '2px solid var(--accent)', position: 'relative' }}>
              <span className="badge" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.65rem' }}>Top value</span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>Proxi Max</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>RM499<span style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--text-muted)' }}>/mo</span></p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '20px' }}>Your PA on superhero mode. Admin, custom workflows, automation, integrations — one operator.</p>
              <a href="/proxi-max" style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>Go superhero →</a>
            </div>
          </div>
          <div className="card" style={{ padding: '24px 28px', marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>Enterprise</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Custom AI ops for your team. We build the agents, you run the business.</p>
            </div>
            <a href="/pricing/enterprise" style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>Let's talk →</a>
          </div>
          <p style={{ textAlign: 'center', marginTop: '24px' }}>
            <a href="/pricing" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none' }}>See all plans & compare →</a>
          </p>
        </section>

        {/* ─── CASE STUDY ─── */}
        <section id="case-study" style={{ maxWidth: '640px', margin: '0 auto', padding: '80px 24px' }}>
          <span className="badge">Case study</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, marginTop: '16px', marginBottom: '16px' }}>
            Meet Naoise.
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
            Pronounced "Nee-sha." Our first workflow operator went live in February 2026. Working alongside her human team, she automated the entire company's operations — client onboarding, follow-ups, process orchestration, and multi-step workflows running daily. She's the team member that makes everyone else more effective.
          </p>
          <a href="/naoise" style={{ fontSize: '0.95rem', color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>
            Read the full case study →
          </a>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section style={{ maxWidth: '640px', margin: '0 auto', padding: '80px 24px' }}>
          <span className="badge">Getting started</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, marginTop: '16px', marginBottom: '40px' }}>
            10 minutes. No apps to install.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <Step num="01" title="Tell us about you" desc="A quick chat so we understand your work, preferences, and what you need help with." />
            <Step num="02" title="We configure your PA" desc="Matched to your tone, your schedule, your priorities. Not a generic bot — a dedicated operator." />
            <Step num="03" title="Start talking" desc="Message your PA however you want. That's it. No dashboards, no learning curve." />
          </div>
        </section>

        {/* ─── TRUST ─── */}
        <section style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            <TrustBadge icon="🔒" text="End-to-end encrypted" />
            <TrustBadge icon="🔐" text="Your data stays private" />
            <TrustBadge icon="❌" text="Cancel anytime" />
            <TrustBadge icon="✅" text="7-day money-back guarantee" />
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" style={{ maxWidth: '640px', margin: '0 auto', padding: '80px 24px' }}>
          <span className="badge">FAQ</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, marginTop: '16px', marginBottom: '32px' }}>
            Common questions.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <FAQ q="Do I need to install any app?" a="No. Your PA meets you wherever you already work — WhatsApp, email, Slack, whatever. No new tools." />
            <FAQ q="How is this different from ChatGPT or Siri?" a="Those are tools you operate. Proxi is an operator that works for you. It knows your clients, remembers your preferences, takes initiative, and gets better every week." />
            <FAQ q="Is my information safe?" a="Absolutely. All data is encrypted, never shared, never sold, never used for training. We can sign NDAs if required." />
            <FAQ q="What tasks can Proxi handle?" a="Email, calendar, follow-ups, drafting, research, workflow automation, process orchestration, client coordination — essentially anything a sharp operator would do." />
            <FAQ q="Can I try before committing?" a="Yes. Every invitation code unlocks 72 hours of full Proxi Max access. No credit card required. Your AI operator handles your real tasks — scheduling, email, follow-ups, research. After 72 hours, you decide." />
            <FAQ q="What if I want to cancel?" a="Cancel anytime. No contracts, no penalties. 7-day money-back guarantee if it's not right for you." />
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section style={{ maxWidth: '640px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Ready to get your <span className="gradient-text">time back?</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '32px' }}>
            Stop doing work that isn't yours. Proxi handles it.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/invite" className="cta-btn" style={{ textDecoration: 'none', padding: '14px 24px' }}>Got an invite code? →</a>
            <a href="/waitlist" className="cta-btn-outline" style={{ textDecoration: 'none', padding: '14px 24px' }}>Join the waitlist →</a>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '16px' }}>
            Setup within 24–48 hours · 7-day money-back guarantee
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}

// ─── Components ───

function StatCard({ value, label }) {
  return (
    <div className="card" style={{ padding: '20px 16px', textAlign: 'center' }}>
      <div className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '4px' }}>{value}</div>
      <div style={{ fontSize: '0.7rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
    </div>
  );
}

function ReasonCard({ icon, title, desc, href }) {
  return (
    <a href={href} className="card" style={{ padding: '28px 24px', display: 'block', textDecoration: 'none', color: 'inherit' }}>
      <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{icon}</div>
      <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>{title}</div>
      <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</div>
    </a>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
      <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{icon}</div>
      <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '6px' }}>{title}</div>
      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{desc}</div>
    </div>
  );
}

function ChatBubble({ who, text }) {
  const isYou = who === 'you';
  return (
    <div style={{ display: 'flex', justifyContent: isYou ? 'flex-end' : 'flex-start' }}>
      <div style={{
        maxWidth: '80%',
        padding: '14px 18px',
        borderRadius: isYou ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
        background: isYou ? 'var(--cta)' : 'var(--accent-light)',
        color: isYou ? 'var(--cta-text)' : 'var(--text)',
        fontSize: '0.95rem',
        lineHeight: 1.5,
      }}>
        {text}
      </div>
    </div>
  );
}

function CompareRow({ label, detail, hours, highlight }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      borderBottom: '1px solid var(--border)',
      background: highlight ? 'var(--accent-light)' : 'transparent',
      borderLeft: highlight ? '3px solid var(--accent)' : '3px solid transparent',
    }}>
      <div>
        <div style={{ fontSize: '0.95rem', fontWeight: highlight ? 700 : 400 }}>{label}</div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{detail}</div>
      </div>
      <div style={{ fontSize: '0.85rem', color: highlight ? 'var(--accent)' : 'var(--text-light)', fontWeight: 600, textAlign: 'right' }}>{hours}</div>
    </div>
  );
}

function Step({ num, title, desc }) {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
      <div className="badge" style={{ minWidth: '44px', textAlign: 'center', padding: '8px 12px', fontSize: '0.8rem', fontWeight: 800 }}>{num}</div>
      <div>
        <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>{title}</div>
        <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</div>
      </div>
    </div>
  );
}

function TrustBadge({ icon, text }) {
  return (
    <div className="card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
      <span style={{ fontSize: '1.2rem' }}>{icon}</span>
      {text}
    </div>
  );
}

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card" style={{ padding: '20px 24px', cursor: 'pointer' }} onClick={() => setOpen(!open)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{q}</div>
        <span style={{ color: 'var(--accent)', fontSize: '1.2rem', transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
      </div>
      {open && (
        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>{a}</div>
      )}
    </div>
  );
}
