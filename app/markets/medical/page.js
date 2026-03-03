"use client";

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const PAIN_POINTS = [
  { problem: 'Appointment scheduling chaos', detail: 'Double bookings, no-shows, last-minute cancellations. Your front desk spends more time on the phone than helping patients in the clinic.' },
  { problem: 'Patient follow-ups get missed', detail: 'Post-treatment check-ins, test result notifications, medication reminders. When you\'re seeing 30 patients a day, follow-up calls don\'t happen.' },
  { problem: 'Insurance paperwork is endless', detail: 'Pre-authorisations, claim submissions, rejection appeals. Every insurer has different forms, different processes, different headaches.' },
  { problem: 'Prescription and referral management', detail: 'Tracking refills, coordinating with pharmacies, managing specialist referrals. Administrative tasks that pull you away from patient care.' },
];

const SOLUTIONS = [
  { title: 'Smart appointment management', desc: 'Your PA handles booking, rescheduling, and confirmations. Sends reminders to reduce no-shows. Fills cancellation slots from the waitlist.' },
  { title: 'Automated patient follow-ups', desc: 'Post-visit check-ins sent on schedule. Test result notifications drafted for your review. Medication reminders that keep patients on track.' },
  { title: 'Insurance documentation support', desc: 'Pre-auth requests drafted, claim forms prepared, rejection follow-ups tracked. Your PA handles the paperwork — you handle the patients.' },
  { title: 'Referral and prescription coordination', desc: 'Specialist referral letters drafted, pharmacy coordination handled, refill schedules tracked. Less admin, more care.' },
];

export default function MedicalPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>👨‍⚕️ Medical & Healthcare</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            Care for patients.<br /><span className="gradient-text">Not paperwork.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '48px' }}>
            You became a healthcare professional to help people. Instead, you spend hours on scheduling, insurance forms, and follow-up calls. Proxi handles the admin so you can focus on what matters — patient care.
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
            <ChatBubble who="you" text="Mrs. Tan cancelled her 2pm. Anyone on the waitlist?" />
            <ChatBubble who="proxi" text="Yes — Mr. Ahmad was waiting for a slot this week. I've offered him 2pm today. He confirmed. Updated your calendar. ✓" />
            <ChatBubble who="you" text="Send follow-up to all patients from Monday's clinic. Standard post-visit check-in." />
            <ChatBubble who="proxi" text="Done. 12 patients contacted via WhatsApp with personalised check-in messages. I'll flag any responses that need your attention. ✓" />
            <ChatBubble who="you" text="Draft the pre-auth letter for the MRI referral — patient Lee Wei, AIA policy." />
            <ChatBubble who="proxi" text="Drafted with patient details, clinical justification template, and AIA's required format. Ready for your review and signature. ✓" />
          </div>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 40px' }}>
          <div className="card" style={{ padding: '24px', borderLeft: '3px solid #F59E0B' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <strong>Important:</strong> Proxi provides administrative support only. It does not provide medical advice, diagnosis, or treatment recommendations. All clinical decisions remain with qualified healthcare professionals.
            </p>
          </div>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Ready to focus on patients, not paperwork?</h2>
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
