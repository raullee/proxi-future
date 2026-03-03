"use client";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Cost() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: '640px', margin: '0 auto', padding: '120px 24px 40px', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '12px', lineHeight: 1.2 }}>One subscription. Not a team.</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '56px', lineHeight: 1.6 }}>You know you need help. You just can't justify the headcount.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '64px' }}>
          <Section title="The hiring trap" text="A good PA in Malaysia costs RM3,000–5,000 a month. That's salary alone — before EPF, SOCSO, training, equipment, leave, and the three months it takes before they're actually useful. And if they quit? Start over. You're not just paying for help. You're paying for the overhead of having an employee." />
          <Section title="The freelancer trap" text="So you try freelancers. A social media person here. A VA there. A content writer on Fiverr. Now you're managing four people who don't know each other, don't know your business, and need you to coordinate everything. You've solved the headcount problem by creating a management problem." />
          <Section title="One operator, everything covered" text="A Proxi PA handles what three or four separate hires would. Admin, content, social, follow-ups, scheduling, research — all from one operator that already knows your business. No onboarding. No coordination. No management overhead. Just work getting done." />
          <Section title="The real comparison" items={['Human PA: RM3,000–5,000/mo + overhead — 40 hours/week','Freelance team: RM2,000–4,000/mo — needs your coordination','Social media manager: RM1,500–3,000/mo — one channel only','Content writer: RM1,000–2,500/mo — words only, no execution','Proxi PA: one subscription — all of the above, 168 hours/week']} />
          <Section title="It's not about being cheap" text="This isn't a race to the bottom. It's about leverage. If your hourly rate is RM500 and you're spending 12 hours a week on admin, that's RM6,000 of your time wasted every week. A PA that costs a fraction of that and gives you those hours back isn't an expense — it's the highest-ROI decision you'll make this year." />
          <Section title="No contracts. No commitment." text="Month to month. Cancel anytime. 7-day money-back guarantee. If it doesn't work, you've lost nothing. If it does, you've gained back your most valuable resource." />
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
