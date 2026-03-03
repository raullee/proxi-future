"use client";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 80px' }}>
        <span className="badge" style={{ marginBottom: '20px' }}>Legal</span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '8px' }}>
          Terms of Service
        </h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '48px' }}>
          Last updated: 13 February 2026 · Effective immediately
        </p>

        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '32px' }}>
          These Terms of Service ("Terms") govern your use of the Proxi personal assistant service ("Service") operated by Axon Avenue PLT (Registration No. LLP0035183-LGN) ("we", "us", "our"). By subscribing, you agree to these Terms.
        </p>

        <LegalSection num="1" title="Service Description">
          <p>Proxi provides an AI-powered personal assistant accessible via WhatsApp. The Service includes task management, scheduling, research, drafting, and administrative support within the scope of your subscription tier.</p>
        </LegalSection>

        <LegalSection num="2" title="Subscription Tiers & Usage Limits">
          <div style={{ overflowX: 'auto', marginTop: '16px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                  <th style={{ padding: '10px 12px', textAlign: 'left', color: 'var(--text-muted)', fontWeight: 600 }}>Feature</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', color: 'var(--text-muted)', fontWeight: 600 }}>Proxi (RM199/mo)</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', color: 'var(--accent)', fontWeight: 600 }}>Proxi Max (RM499/mo)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Messages/month', '2,000', 'Unlimited*'],
                  ['Task complexity', 'Moderate', 'Complex & multi-step'],
                  ['Priority', 'Priority response', 'First in queue'],
                  ['Response time', 'Within 15 min target', 'Within 5 min target'],
                  ['File handling', '20 files/day', 'Unlimited*'],
                  ['Voice notes', '✓', '✓'],
                  ['Drafting', 'Advanced', 'Advanced + review'],
                  ['Agent network', '—', 'Connected'],
                  ['Support', 'Email', 'WhatsApp direct'],
                ].map(([feature, standard, pro], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 12px', color: 'var(--text-secondary)' }}>{feature}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', color: 'var(--text-muted)' }}>{standard}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', color: 'var(--text-secondary)' }}>{pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '12px' }}>
            *"Unlimited" is subject to fair use (Section 3). Response times are targets, not guarantees.
          </p>
        </LegalSection>

        <LegalSection num="3" title="Fair Use Policy">
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><strong>No automated messaging.</strong> Personal/business use by subscriber only. No bot-generated messages.</li>
            <li><strong>Burst limits.</strong> Sustained messaging exceeding 3× daily tier limit within any 1-hour period may trigger temporary throttling.</li>
            <li><strong>Reasonable scope.</strong> Tasks within scope of a personal/executive assistant. We decline tasks requiring professional licensing, or anything illegal, harmful, or abusive.</li>
            <li><strong>Account sharing.</strong> One subscription = one primary user. Team use requires separate subscriptions.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>If usage consistently exceeds your tier, we'll recommend an upgrade before applying limits.</p>
        </LegalSection>

        <LegalSection num="4" title="Scheduled Maintenance">
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Window:</strong> Sundays, 2:00 AM – 6:00 AM MYT (GMT+8)</li>
            <li><strong>Expected downtime:</strong> Up to 2 hours per window (typically under 30 min)</li>
            <li><strong>Frequency:</strong> Up to twice monthly</li>
            <li>Emergency maintenance may occur outside the window with best-effort notice</li>
            <li>Planned maintenance exceeding 30 minutes will be communicated 24 hours in advance</li>
          </ul>
          <p style={{ marginTop: '12px' }}>Messages sent during maintenance are queued and processed when service resumes. No messages are lost.</p>
        </LegalSection>

        <LegalSection num="5" title="Service Levels & Availability">
          <p><strong>Target uptime:</strong> 99.5% monthly (excluding scheduled maintenance). Proxi Max subscribers receive priority queuing during high-demand periods.</p>
          <p style={{ marginTop: '12px' }}><strong>Credit policy:</strong> If unplanned downtime exceeds 4 hours in any calendar month, you may request a pro-rata credit within 7 days of the incident.</p>
        </LegalSection>

        <LegalSection num="6" title="Data & Privacy">
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Your data is <strong>not sold, shared, or used for advertising</strong></li>
            <li>Conversations are processed by third-party AI providers (Anthropic, OpenAI) under their respective Data Processing Agreements</li>
            <li>Conversation history is retained for service continuity; full deletion available on request within 7 business days</li>
            <li>We do <strong>not store</strong> passwords, financial credentials, or payment card details. Payments are processed via Stripe.</li>
            <li><strong>Sensitive data:</strong> Avoid sharing IC numbers, bank account details, or passwords. If shared inadvertently, notify us immediately for data purge.</li>
          </ul>
        </LegalSection>

        <LegalSection num="7" title="What the Service Does Not Do">
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Does not provide legal, medical, financial, or tax advice</li>
            <li>Will not make purchases, enter agreements, or create obligations without your explicit instruction and confirmation</li>
            <li>AI outputs are not guaranteed accurate — you should review all outputs before use</li>
            <li>Will not access external systems without temporary, revocable access provided by you</li>
          </ul>
        </LegalSection>

        <LegalSection num="8" title="Billing & Cancellation">
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Billed monthly or annually via Stripe</li>
            <li><strong>Cancel anytime</strong>, effective at end of current billing period. No partial refunds for unused time.</li>
            <li>Annual plans: pro-rata refund for unused full months, less any discounts applied</li>
            <li>Failed payments: service paused after 2 failed attempts, cancelled after 14 days</li>
            <li>Pricing changes communicated with 30 days notice; existing rate honoured until end of current billing cycle</li>
          </ul>
        </LegalSection>

        <LegalSection num="9" title="Acceptable Use">
          <p>You may not use the Service for: illegal activities, harassment or abuse, spam or phishing, reverse-engineering, or reselling. Violation may result in immediate suspension without refund.</p>
        </LegalSection>

        <LegalSection num="10" title="Limitation of Liability">
          <p>The Service is provided "as-is." Our total liability is capped at 3 months' subscription fees. We are not liable for indirect, incidental, or consequential damages. AI-generated outputs may contain errors — you are responsible for reviewing all outputs before use.</p>
        </LegalSection>

        <LegalSection num="11" title="Modifications">
          <p>Material changes to these Terms will be communicated at least 14 days before taking effect, via WhatsApp or email.</p>
        </LegalSection>

        <LegalSection num="12" title="Governing Law">
          <p>These Terms are governed by the laws of Malaysia. Any disputes shall be subject to the exclusive jurisdiction of the Malaysian courts.</p>
        </LegalSection>

        {/* ─── SUMMARY ─── */}
        <div className="card" style={{ padding: '28px', borderLeft: '3px solid var(--accent)', marginTop: '48px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px' }}>TL;DR</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
            We aim for 99.5% uptime. Maintenance is Sundays 2–6 AM. Messages during downtime are queued, not lost. Usage has fair limits per tier. Cancel anytime. Your data is private. AI outputs need your review. Malaysian law applies.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

function LegalSection({ num, title, children }) {
  return (
    <section style={{ marginBottom: '36px' }}>
      <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text)' }}>
        {num}. {title}
      </h2>
      <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
        {children}
      </div>
    </section>
  );
}
