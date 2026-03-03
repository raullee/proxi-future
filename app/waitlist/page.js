"use client";

import { useState, useEffect } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    needs: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [waitlistPosition, setWaitlistPosition] = useState(0);

  useEffect(() => {
    // Get current waitlist count from localStorage
    const currentList = JSON.parse(localStorage.getItem('waitlist') || '[]');
    setWaitlistPosition(currentList.length + 1);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get existing waitlist from localStorage
    const existingList = JSON.parse(localStorage.getItem('waitlist') || '[]');
    
    // Add new submission
    const submission = {
      ...formData,
      timestamp: new Date().toISOString(),
      position: existingList.length + 1
    };
    
    // Save to localStorage
    const updatedList = [...existingList, submission];
    localStorage.setItem('waitlist', JSON.stringify(updatedList));
    
    setWaitlistPosition(submission.position);
    setSubmitted(true);
  };

  return (
    <>
      <Nav />

      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: '480px', width: '100%', padding: '24px', textAlign: 'center' }}>
          
          {!submitted ? (
            <>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>⏳</div>
              <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px' }}>
                Proxi is at capacity
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.6 }}>
                We're currently serving our founding members. New spots open as we scale.
              </p>

              <div className="card" style={{ padding: '32px', textAlign: 'left', marginBottom: '32px' }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>
                  Join the waitlist:
                </h2>
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '8px',
                        border: '1.5px solid var(--border)',
                        background: 'var(--bg-card)',
                        color: 'var(--text)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="WhatsApp number (e.g., +60123456789)"
                      required
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '8px',
                        border: '1.5px solid var(--border)',
                        background: 'var(--bg-card)',
                        color: 'var(--text)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div>
                    <textarea
                      name="needs"
                      value={formData.needs}
                      onChange={handleInputChange}
                      placeholder="What do you need help with?"
                      rows="4"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '8px',
                        border: '1.5px solid var(--border)',
                        background: 'var(--bg-card)',
                        color: 'var(--text)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="cta-btn"
                    style={{ 
                      padding: '14px 24px', 
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      width: '100%'
                    }}
                  >
                    Join waitlist →
                  </button>
                </form>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  Know someone with a code? Skip the line.
                </p>
                <a 
                  href="/invite" 
                  style={{ 
                    color: 'var(--accent)', 
                    fontSize: '0.95rem', 
                    textDecoration: 'none', 
                    fontWeight: 600 
                  }}
                >
                  Enter invite code →
                </a>
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                <p style={{ marginBottom: '4px' }}>Currently: {waitlistPosition - 1} people waiting</p>
                <p>Average wait: ~2 weeks</p>
              </div>
            </>
          ) : (
            <div className="card" style={{ padding: '32px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>✓</div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px', color: 'var(--accent)' }}>
                You're #{waitlistPosition} on the list
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                We'll WhatsApp you when a spot opens.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                Thanks for your patience — we're scaling as fast as we can.
              </p>
            </div>
          )}

          {/* ─── HOW IT WORKS ─── */}
          <div style={{ marginTop: '48px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '24px', textAlign: 'center' }}>
              What you'll get
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: '⚡', title: '72-hour trial', desc: 'Full Proxi Max access when your spot opens. Real tasks, real results.' },
                { icon: '🤖', title: 'Dedicated AI operator', desc: 'Not a chatbot — a personal assistant that knows your work and takes initiative.' },
                { icon: '📧', title: 'Email + calendar + workflow automation', desc: 'Admin handled. Custom processes built. Time back in your day.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '4px' }}>{item.title}</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
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