"use client";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Presence() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: '640px', margin: '0 auto', padding: '120px 24px 40px', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '12px', lineHeight: 1.2 }}>Your PA is your workflow operator.</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '56px', lineHeight: 1.6 }}>Not a tool. Not a dashboard. A single operator that becomes your entire operations layer.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '64px' }}>
          <Section title="The old model is broken" text="You hire a developer for integrations. Then a VA for admin. Then someone for process management. Then a project coordinator. Four vendors, four invoices, four people who don't talk to each other. And you're still the bottleneck — because none of them know your business the way you do." />
          <Section title="The new model" text="One PA that knows your work, your clients, your processes. It designs your workflows. It manages your integrations. It handles your emails and follow-ups. It keeps your operations running with real automation — not duct tape and spreadsheets. It's not a tool you use. It's an operator that runs your business." />
          <Section title="It works wherever you work" text="WhatsApp. Email. Slack. A phone call transcript you forward. A voice note at 2am. The PA meets you where you are — not the other way around. No new apps to learn. No dashboards to check. Just talk to it like you'd talk to a person." />
          <Section title="What it actually does" items={['Designs and runs custom workflows for your business','Connects APIs, databases, and tools into automated pipelines','Handles email triage and drafts responses','Follows up with clients so you don\'t have to','Orchestrates multi-step processes across systems','Schedules, reschedules, coordinates','Researches competitors, markets, opportunities','Drafts proposals, decks, and briefs']} />
          <Section title="Why this matters" text="Big companies have operations departments. You don't. But your business still needs processes that work, systems that talk to each other, and follow-ups that never slip. A PA that handles your workflow automation means your business runs smoothly without you having to think about it." />
          <Section title="The PA is the operations layer" text="This is the part people miss. You don't need a developer, a project manager, and a PA. The PA does all of it. It designs your workflows. It connects your tools. It keeps everything running. The APIs, the databases, the automations — those are just components. The PA is what brings them to life." />
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '80px' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>Stop hiring four people to do one job.</p>
          <a href="/get-started" className="cta-btn" style={{ textDecoration: 'none', padding: '14px 32px', display: 'inline-block' }}>Talk to us →</a>
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
