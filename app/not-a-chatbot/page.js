"use client";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function NotAChatbot() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: '640px', margin: '0 auto', padding: '120px 24px 40px', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '12px', lineHeight: 1.2 }}>Not a chatbot.</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '56px', lineHeight: 1.6 }}>You've tried Siri. You've tried ChatGPT. This is something else.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '64px' }}>
          <Section title="The chatbot problem" text="Chatbots answer questions. That's it. You ask, they respond. Close the window and they forget you exist. They don't know your clients. They don't know your schedule. They don't know that when you say 'push the meeting' you mean the one with Ahmad, not the one with Sarah. They're tools. You have to operate them." />
          <Section title="An operator operates" text="A Proxi PA doesn't wait for instructions. It checks your inbox before you wake up. It follows up with clients you forgot about. It drafts the reply you've been putting off. It notices that you haven't sent that proposal yet and reminds you — or just drafts it. The difference isn't intelligence. It's initiative." />
          <Section title="It knows you" text="After a week, your PA knows your tone. After a month, it knows your clients, your preferences, your patterns. It knows you prefer morning meetings. It knows you hate unnecessary calls. It knows your top client gets priority. This isn't a generic tool — it's a dedicated operator that gets sharper over time." />
          <Section title="Chatbot vs operator" items={['Chatbot answers when asked — Operator acts without being asked','Chatbot forgets between sessions — Operator remembers everything','Chatbot is generic — Operator is configured to you','Chatbot needs prompting — Operator needs direction','Chatbot is a tool you use — Operator is someone who works for you']} />
          <Section title="Why this matters" text="Everyone has access to AI tools now. ChatGPT is free. Siri is on every phone. The technology isn't the differentiator — the configuration is. A PA that's been set up for your specific work, your specific clients, your specific voice. That's not a chatbot. That's an operator." />
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
