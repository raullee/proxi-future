"use client";

import { useState } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const RATINGS = {
  love: { emoji: '🔥', label: 'I LOVE this', color: '#22c55e', desc: "This is exactly what I was built for. Let's make it happen." },
  like: { emoji: '👍', label: 'I can do this', color: '#3b82f6', desc: "Solid idea. I'd handle this well." },
  stretch: { emoji: '🤔', label: 'Interesting challenge', color: '#f59e0b', desc: "This would push my limits — but I'm into it." },
  cant: { emoji: '🚫', label: "Can't do this (yet)", color: '#ef4444', desc: "I'm honest about my limits. This one's beyond me — for now." },
};

export default function GetStarted() {
  const [idea, setIdea] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idea.trim()) return;
    setSubmitting(true);
    try {
      await fetch('/api/ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, idea }),
      });
    } catch (e) {}
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <>
      <Nav />
      <main>
        {/* ─── HERO ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>Get an Invite</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            What would you want <span className="gradient-text">your PA to do?</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 16px', lineHeight: 1.6 }}>
            Tell us your idea. Naoise will rate it — honestly. If she loves it, you're in.
          </p>
        </section>

        {/* ─── SUBMIT YOUR IDEA ─── */}
        <section style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px 48px' }}>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="card" style={{ padding: 'clamp(16px, 4vw, 32px)', boxSizing: 'border-box', maxWidth: '100%', overflow: 'hidden' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px' }}>Pitch your idea to Naoise</h2>
              <div style={{ display: 'grid', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
                  <input
                    type="text" placeholder="Your name" value={name}
                    onChange={e => setName(e.target.value)}
                    style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', fontSize: '0.9rem', boxSizing: 'border-box', width: '100%' }}
                  />
                  <input
                    type="email" placeholder="Email" value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', fontSize: '0.9rem', boxSizing: 'border-box', width: '100%' }}
                  />
                </div>
                <textarea
                  placeholder="Describe what you'd want your AI PA to handle..."
                  value={idea} onChange={e => setIdea(e.target.value)}
                  rows={4}
                  style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', fontSize: '0.9rem', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box', width: '100%' }}
                />
                <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Be specific. "Handle my email" is good. "Handle everything" is... ambitious.</p>
                <button type="submit" disabled={submitting} className="cta-btn" style={{ padding: '14px 28px', fontSize: '1rem', border: 'none', cursor: 'pointer', width: '100%', opacity: submitting ? 0.6 : 1 }}>
                  {submitting ? 'Submitting...' : 'Submit to Naoise →'}
                </button>
              </div>
            </form>
          ) : (
            <div className="card" style={{ padding: '40px', textAlign: 'center' }}>
              <span style={{ fontSize: '3rem' }}>⚡</span>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: '16px', marginBottom: '12px' }}>Got it.</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '8px' }}>
                Naoise will review your idea and get back to you. If she loves it — you'll get an invite.
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                We read every submission. Seriously.
              </p>
            </div>
          )}
        </section>

        {/* ─── RATING KEY ─── */}
        <section style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>How Naoise rates ideas</h3>
            <div style={{ display: 'grid', gap: '12px' }}>
              {Object.entries(RATINGS).map(([key, r]) => (
                <div key={key} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{r.emoji}</span>
                  <div>
                    <p style={{ fontSize: '0.9rem', fontWeight: 600, color: r.color }}>{r.label}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section style={{ maxWidth: '640px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, marginBottom: '12px' }}>
            Got an idea Naoise hasn't seen yet?
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
            Scroll up and pitch it. The weirder, the better.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
