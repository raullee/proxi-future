"use client";

import { useState, useEffect } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const CODES = {
  'FOUNDING5': { tier: 'Proxi Max', trialHours: 72, foundingRate: 499, normalRate: 499, setupWaived: true, label: 'Founding Member', slots: 5 },
  'TRIPTANK': { tier: 'Proxi Max', trialHours: 72, foundingRate: 499, normalRate: 499, setupWaived: true, label: 'Founding Member', slots: 10 },
  'RAUL': { tier: 'Proxi Max', trialHours: 72, foundingRate: 499, normalRate: 499, setupWaived: true, label: 'VIP Access', slots: 3 },
  'TEST200': { tier: 'Test', trialHours: 72, foundingRate: 2, normalRate: 2, setupWaived: true, label: 'Test Access', slots: 999 },
};

export default function InvitePage() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const upper = code.trim().toUpperCase();
    const match = CODES[upper];
    if (match) {
      setSuccess(match);
      setError('');
    } else {
      setError('Invalid invitation code');
      setSuccess(null);
    }
  };

  return (
    <>
      <Nav />

      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: '420px', width: '100%', padding: '24px', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>Limited founding member spots remaining</span>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '20px', marginBottom: '12px' }}>
            Access is by invitation
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.6 }}>
            Proxi is currently available to a limited number of founding members.
          </p>

          {!success ? (
            <>
              <form onSubmit={handleSubmit} style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => { setCode(e.target.value); setError(''); }}
                    placeholder="Enter invitation code"
                    style={{
                      flex: 1,
                      padding: '14px 20px',
                      borderRadius: '12px',
                      border: error ? '1.5px solid #EF4444' : '1.5px solid var(--border)',
                      background: 'var(--bg-card)',
                      color: 'var(--text)',
                      fontSize: '0.95rem',
                      fontFamily: 'monospace',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      textAlign: 'center',
                      outline: 'none',
                    }}
                    autoComplete="off"
                    spellCheck={false}
                  />
                  <button
                    type="submit"
                    disabled={!code.trim()}
                    className="cta-btn"
                    style={{ padding: '14px 24px', borderRadius: '12px', opacity: !code.trim() ? 0.4 : 1, border: 'none', cursor: code.trim() ? 'pointer' : 'default' }}
                  >
                    →
                  </button>
                </div>
                {error && (
                  <p style={{ color: '#EF4444', fontSize: '0.85rem', marginTop: '12px' }}>{error}</p>
                )}
              </form>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Don't have a code?
              </p>
              <a href="/waitlist" style={{ color: 'var(--accent)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 600 }}>
                Join the waitlist →
              </a>
            </>
          ) : (
            <div className="card" style={{ padding: '32px', textAlign: 'left' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px', textAlign: 'center' }}>✓</div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
                You're in.
              </h2>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px', textAlign: 'center', color: 'var(--accent)' }}>
                72 HOURS OF FULL PROXI MAX ACCESS
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '16px', textAlign: 'center' }}>
                Starting the moment you message us on WhatsApp.
              </p>
              
              <div style={{ marginBottom: '20px' }}>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '12px' }}>Here's what happens:</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ fontSize: '0.9rem', marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span>
                    You get a dedicated AI operator — the real thing, not a demo
                  </li>
                  <li style={{ fontSize: '0.9rem', marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span>
                    It handles your actual tasks: email, scheduling, research, follow-ups
                  </li>
                  <li style={{ fontSize: '0.9rem', marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span>
                    After 72 hours, it goes quiet
                  </li>
                </ul>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: '8px', marginBottom: '20px', border: '1px solid var(--border)' }}>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '4px' }}>
                  Founding members: RM499/mo — setup fee waived (save RM2,000).
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Rate locked permanently. No setup fee.
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>
                  <strong>Your code:</strong> {code.toUpperCase()}
                </p>
                <p style={{ fontSize: '0.9rem', marginBottom: '16px' }}>
                  <strong>Your tier:</strong> {success.label}
                </p>
              </div>

              <a
                href={`https://wa.me/60127478227?text=ACTIVATE%20${code.toUpperCase()}`}
                className="cta-btn"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', padding: '14px 32px', display: 'block', textAlign: 'center', marginBottom: '16px' }}
              >
                Message us on WhatsApp to activate →
              </a>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                ⏳ Your code expires in 48 hours
              </p>
            </div>
          )}
          {/* ─── GETTING STARTED STEPS ─── */}
          <div style={{ marginTop: '48px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '24px', textAlign: 'center' }}>How it works</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { num: '01', title: 'Tell us about you', desc: 'A quick chat so we understand your work, preferences, and what you need help with.' },
                { num: '02', title: 'We configure your PA', desc: 'Matched to your tone, your schedule, your priorities. Not a generic bot — a dedicated operator.' },
                { num: '03', title: 'Start talking', desc: 'Message your PA however you want. That\'s it. No dashboards, no learning curve.' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span className="badge" style={{ minWidth: '40px', textAlign: 'center', padding: '6px 10px', fontSize: '0.75rem', fontWeight: 800 }}>{step.num}</span>
                  <div>
                    <p style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '4px' }}>{step.title}</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
