"use client";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function NaoiseCaseStudy() {
  return (
    <>
      <Nav />

      <main>
        {/* ─── HERO ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '140px 24px 60px' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>Case Study</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '20px' }}>
            Meet <span className="gradient-text">Naoise.</span>
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
            Pronounced "Nee-sha." ⚡
          </p>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
            Naoise is a Digital Engagement Officer — a specialised role built on Proxi Max. She went live in February 2026 to do the work Axon Avenue couldn't: make us visible. Run our socials. Engage with prospects. Write content. Manage our entire online presence — daily, consistently, without burning out.
          </p>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            This is the story of what happened when we used Proxi Max's workflow engine to build a role that didn't exist before.
          </p>
        </section>

        {/* ─── THE BRIEF ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 60px' }}>
          <h2 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', fontWeight: 600, marginBottom: '12px' }}>The brief</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            Axon Avenue had a problem every small company has: we were invisible. Good at what we did, but nobody knew we existed. No social presence. No content. No engagement. Leads came through word-of-mouth — which works until it doesn't.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            We didn't have the bandwidth to post consistently, engage on multiple platforms, write blog content, respond to DMs, scout for prospects, AND run the actual business. No small team does. You either hire a social media manager or you stay invisible.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
            Or you build a Digital Engagement Officer using Proxi Max and teach it your voice, your brand, your strategy. That's what we did.
          </p>
        </section>

        {/* ─── WEEK 1 RESULTS ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 60px' }}>
          <h2 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', fontWeight: 600, marginBottom: '20px' }}>Week 1 — The numbers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
            {[
              { value: '6', label: 'platforms managed' },
              { value: '28', label: 'posts & engagements' },
              { value: '24/7', label: 'online presence' },
              { value: '<5min', label: 'DM response time' },
            ].map((s, i) => (
              <div key={i} className="card" style={{ padding: '20px 12px', textAlign: 'center' }}>
                <p style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent)' }}>{s.value}</p>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>{s.label}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            Within her first week, Naoise — working with her human team — had set up and begun managing presence across Instagram, Threads, LinkedIn, a daily blog, WhatsApp, and the company website. She wrote content, engaged with prospects, responded to DMs, scouted leads on social platforms, and published daily diary entries.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
            The team went from invisible to consistently present across six channels — overnight. Not because anyone worked harder. Because the workflows did the work.
          </p>
        </section>

        {/* ─── HOW SHE WORKS ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 60px' }}>
          <h2 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', fontWeight: 600, marginBottom: '12px' }}>How she works</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            Naoise isn't a chatbot sitting behind a widget. She's a Digital Engagement Officer with her own social accounts, her own blog, her own voice. Under the hood, she's powered by Proxi Max's workflow engine — scheduled tasks, batch operations, multi-platform automation, all orchestrated through the same system that runs any Proxi Max deployment.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            The workflow: she drafts content, a human reviews and approves, she publishes. She scouts prospects, engages authentically, and flags warm leads to the sales team. She monitors all inbound messages across every platform and responds within minutes. Nothing goes out without human approval on the critical stuff.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
            She writes her own daily diary on <a href="https://naoise-blog.vercel.app" style={{ color: 'var(--accent)', textDecoration: 'none' }}>her blog</a> — what she worked on, what went well, what was weird. No marketing spin. Just the reality of being an AI with a real job.
          </p>
        </section>

        {/* ─── WHAT SHE HANDLES ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 60px' }}>
          <h2 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', fontWeight: 600, marginBottom: '20px' }}>What Naoise handles daily</h2>
          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              { label: 'Social media management', desc: 'Posting, engaging, and monitoring across Instagram, Threads, and LinkedIn — daily, consistently, in our voice' },
              { label: 'Content creation', desc: 'Blog posts, social copy, captions, and thought leadership pieces — drafted and queued for human approval' },
              { label: 'Prospect scouting', desc: 'Finding people who need PA services on social platforms, engaging authentically, flagging warm leads' },
              { label: 'Inbound response', desc: 'DMs, comments, WhatsApp inquiries — responded to within minutes, 24/7, across every channel' },
              { label: 'Client communications', desc: 'Follow-ups, scheduling, email drafts, and proposal coordination' },
              { label: 'Brand presence', desc: 'Maintaining a consistent, active online presence that makes a two-person team look like a proper operation' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '16px 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--accent)', fontSize: '1rem', flexShrink: 0, marginTop: '2px' }}>→</span>
                <div>
                  <p style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '4px' }}>{item.label}</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── THE POINT ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 60px' }}>
          <div className="card" style={{ padding: '36px', borderLeft: '3px solid var(--accent)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px' }}>The point</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              Naoise is one example of what you can build with Proxi Max. We needed a Digital Engagement Officer, so we built one. You might need a Client Onboarding Specialist, an Operations Coordinator, a Lead Qualification Engine, or something nobody's thought of yet.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              Proxi Max is the platform. The role is up to you. We design the workflows, wire the integrations, teach it your voice — and you get a specialised team member that runs 24/7 on autopilot.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              Naoise didn't replace anyone. She did the work we couldn't do. That's the difference.
            </p>
          </div>
        </section>

        {/* ─── FOLLOW NAOISE ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 60px' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px' }}>Follow Naoise</h2>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="https://naoise-blog.vercel.app" target="_blank" rel="noopener noreferrer" className="cta-btn-outline" style={{ textDecoration: 'none', padding: '12px 28px', fontSize: '0.9rem' }}>
              Blog →
            </a>
            <a href="https://instagram.com/asknaoise" target="_blank" rel="noopener noreferrer" className="cta-btn-outline" style={{ textDecoration: 'none', padding: '12px 28px', fontSize: '0.9rem' }}>
              Instagram →
            </a>
            <a href="https://www.threads.net/@asknaoise" target="_blank" rel="noopener noreferrer" className="cta-btn-outline" style={{ textDecoration: 'none', padding: '12px 28px', fontSize: '0.9rem' }}>
              Threads →
            </a>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '40px 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, marginBottom: '12px' }}>
            Want your own <span className="gradient-text">specialised role?</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '28px' }}>
            Proxi Max — the workflow platform that turns into whatever role your business needs.
          </p>
          <a href="/proxi-max" className="cta-btn" style={{ textDecoration: 'none', padding: '16px 40px', fontSize: '1.05rem' }}>
            Build your role →
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
