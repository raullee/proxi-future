"use client";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Discretion() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: '640px', margin: '0 auto', padding: '120px 24px 40px', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '12px', lineHeight: 1.2 }}>Discretion built in.</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '56px', lineHeight: 1.6 }}>A PA that talks is a PA you can't trust.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '64px' }}>
          <Section title="The trust problem" text="Every PA sees everything. Your emails, your calendar, your client list, your negotiations, your mistakes. A human PA goes home at night, talks to friends, changes jobs, moves to a competitor. The information goes with them. Not because they're malicious — because they're human." />
          <Section title="Confidentiality isn't a feature — it's the foundation" text="Your PA handles sensitive conversations. Client disputes. Financial details. Personal matters that bleed into work hours. Contract negotiations. Salary discussions. The draft you wrote at 2am that you'd rather nobody saw. All of it requires absolute discretion." />
          <Section title="How we handle it" items={['Your data is encrypted end-to-end','Your PA doesn\'t learn from other clients\' data','No information crosses between accounts — ever','We can sign NDAs if your work requires it','Your PA doesn\'t have opinions about your decisions — it executes them','Nothing is shared, sold, or used for training']} />
          <Section title="The quiet advantage" text="The best PAs are the ones nobody notices. They don't name-drop. They don't gossip. They don't post about their day on social media. They just do the work, quietly and reliably. An AI PA takes this further — it has no social life, no ego, no temptation to share. Discretion isn't something it practises. It's something it is." />
          <Section title="Who needs this most" text="Anyone whose work involves other people's trust. Legal professionals. Consultants. Financial advisors. Executives. Founders. If your clients chose you partly because they trust you — your PA needs to be worthy of that same trust." />
        </div>
        <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '20px', marginBottom: '64px' }}>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.7, fontStyle: 'italic' }}>"A PA who name-drops isn't a PA anyone trusts."</p>
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
