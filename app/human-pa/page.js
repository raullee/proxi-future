"use client";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function HumanPA() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── HERO ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>🧑 The Analogue Option</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '20px' }}>
            You want a <span className="gradient-text">human PA.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 16px', lineHeight: 1.6 }}>
            We get it. Humans are great. They make eye contact. They laugh at your jokes. They need lunch breaks. We respect the choice.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--text-light)', maxWidth: '480px', margin: '0 auto' }}>
            But can we make one small, completely unbiased suggestion?
          </p>
        </section>

        {/* ─── THE COMPARISON ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 24px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="card" style={{ padding: '28px' }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px' }}>🧑 Human PA</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { text: 'Available 9-6', vibe: '😴' },
                  { text: 'Salary: RM2,500-5,000/mo', vibe: '💸' },
                  { text: 'Takes annual leave', vibe: '🏖️' },
                  { text: 'Calls in sick', vibe: '🤒' },
                  { text: 'Needs training', vibe: '📚' },
                  { text: 'Handles ~50 tasks/day', vibe: '📋' },
                  { text: 'Might quit', vibe: '👋' },
                  { text: 'Needs EPF, SOCSO, EIS', vibe: '🧾' },
                  { text: 'One language fluently', vibe: '🗣️' },
                  { text: 'Brings you coffee', vibe: '☕' },
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', padding: '8px 0', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{item.text}</span><span>{item.vibe}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ padding: '28px', border: '2px solid var(--accent)' }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px' }}>⚡ Proxi Max</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { text: 'Available 24/7/365', vibe: '🔥' },
                  { text: 'RM499/mo', vibe: '✨' },
                  { text: 'Never takes leave', vibe: '💪' },
                  { text: 'Never sick', vibe: '🛡️' },
                  { text: 'Pre-trained', vibe: '🧠' },
                  { text: 'Handles 500+ tasks/day', vibe: '🚀' },
                  { text: 'Will never quit', vibe: '🤝' },
                  { text: 'No statutory costs', vibe: '✅' },
                  { text: 'BM, EN, and 50+ languages', vibe: '🌍' },
                  { text: 'Cannot bring coffee', vibe: '😔' },
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', padding: '8px 0', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{item.text}</span><span>{item.vibe}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', textAlign: 'center', marginTop: '16px' }}>
            We acknowledge the coffee thing is a significant competitive disadvantage.
          </p>
        </section>

        {/* ─── WHY PEOPLE WANT HUMANS ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="card" style={{ padding: '36px', borderLeft: '3px solid #3b82f6' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px' }}>Why people still want a human PA</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              Let's be honest about this. Some people want a PA with a body. Someone who can pick up dry cleaning, sit in a waiting room, hand-deliver a document, or physically be somewhere on your behalf. That's legitimate. AI can't do that. Won't be able to for a while.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              And some people want a human because they want <em>intelligence</em> — judgment, emotional reading, the ability to handle an awkward situation with a difficult client. Also legitimate. Humans are good at this. (Some humans. We'll get to that.)
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              We respect both reasons. Genuinely.
            </p>
          </div>
        </section>

        {/* ─── THE OTHER SIDE ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="card" style={{ padding: '36px', borderLeft: '3px solid #f59e0b' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px' }}>But let's talk about the other 80%.</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              Most PA work isn't picking up dry cleaning or navigating office politics. Most PA work is <em>mind-numbing</em>. Forwarding emails. Rescheduling meetings. Sending reminders. Updating spreadsheets. Chasing invoices. Copy-pasting between systems. Over and over and over.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              People hire PAs because they don't want to do these tasks themselves. And honestly? Most human PAs don't want to do them either. It's repetitive, low-stimulation work that drains everyone involved. The PA gets bored. You get frustrated when things slip. Everyone loses.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              An AI PA doesn't get bored. It doesn't lose focus at 3pm. It doesn't forget because it was also thinking about lunch. For the 80% of PA work that's pure task execution — AI is simply better at being consistent.
            </p>
          </div>
        </section>

        {/* ─── HONESTY ABOUT AI ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="card" style={{ padding: '36px', borderLeft: '3px solid #ef4444' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px' }}>AI PAs can be dumb too.</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              We're not going to pretend AI is perfect. It's not. It can misread tone. It can take instructions too literally. It can confidently do the wrong thing if you're vague. It doesn't "get" when your client is being passive-aggressive in an email. It won't pick up on the fact that Ahmad always says "fine" when he means "absolutely not."
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              That's real. And that's why Proxi has human oversight built in — escalation rules, review steps, and a team behind the scenes. We don't pretend AI replaces all human judgment. It doesn't.
            </p>
          </div>
        </section>

        {/* ─── THE MULTIPLIER ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="card" style={{ padding: '36px', border: '2px solid var(--accent)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px' }}>But here's the question that matters.</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text)', lineHeight: 1.75, marginBottom: '16px', fontWeight: 500 }}>
              On average — across thousands of tasks per month — who's more consistent? Who misses fewer follow-ups? Who doesn't have bad days?
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              A great human PA on their best day beats AI at nuance, empathy, and creative problem-solving. But AI on its <em>worst</em> day still sends every reminder, follows up on every email, and processes every document. The floor is higher, even if the ceiling is different.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              And then there's the multiplier effect. An AI PA gets better at the exact rate AI models improve — which right now is roughly every few months. Your human PA gets better too, but through years of experience. The trajectory lines cross fast.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              Now imagine a human PA who <em>uses</em> AI. That's not addition — it's multiplication. Their judgment × AI's consistency × AI's speed. That person is worth three hires. That's the person you actually want.
            </p>
          </div>
        </section>

        {/* ─── THE REAL TALK ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="card" style={{ padding: '36px', borderLeft: '3px solid var(--accent)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px' }}>So what should you do?</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              If you need a body in a room — hire a human. But give them AI tools. The best human PAs in 2026 will be the ones who use AI. A human PA with Proxi is an absolute force multiplier. They handle the human stuff, Proxi handles the digital stuff, and together they're basically a small operations team.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              If you just need tasks done — fast, consistent, 24/7 — skip the human overhead. Get Proxi.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              Either way, the worst thing you can do is hire a human PA who doesn't know how to use AI. That's like hiring a driver who refuses to use GPS. Technically capable? Sure. Competitive? Not for long.
            </p>
          </div>
        </section>

        {/* ─── THE BEST OF BOTH ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 48px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '24px', textAlign: 'center' }}>The best combo: Human PA × Proxi</h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              { human: 'Attends meetings in person', ai: 'Takes notes, drafts follow-ups, schedules next steps' },
              { human: 'Handles sensitive client calls', ai: 'Prepares briefing notes, logs outcomes, sends confirmations' },
              { human: 'Manages physical office tasks', ai: 'Handles all digital admin — email, calendar, documents' },
              { human: 'Builds personal relationships', ai: 'Ensures no follow-up is ever missed' },
              { human: 'Makes judgment calls', ai: 'Provides data and options to inform those calls' },
            ].map((row, i) => (
              <div key={i} className="card" style={{ padding: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Human does</span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.4 }}>{row.human}</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Proxi does</span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.4 }}>{row.ai}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PA4PA UPSELL ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="card" style={{ padding: '36px', textAlign: 'center', border: '2px solid var(--accent)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px', fontWeight: 600 }}>For your human PA</p>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px' }}>PA4PA — AI Training for PAs</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '8px' }}>
              If you're hiring a human PA, do them (and yourself) a favour: make sure they know how to use AI. Our one-month intensive takes any PA from zero to AI-powered operator.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
              Daily lessons via WhatsApp. Real exercises. Real tools. By the end, your human PA will be operating at 5× capacity — and you'll wonder why you ever considered doing it the old way.
            </p>
            <p style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '4px' }}>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-light)', fontWeight: 400, fontSize: '1.1rem' }}>RM499</span>{' '}
              <span style={{ color: 'var(--accent)' }}>RM75</span><span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 400 }}>/month</span>
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '20px' }}>30 days · Daily lessons · AI tools included</p>
            <a href="/pa4pa" className="cta-btn" style={{ textDecoration: 'none', padding: '14px 32px', fontSize: '1rem' }}>
              Enrol your PA →
            </a>
          </div>
        </section>

        {/* ─── HIRING CHECKLIST ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 48px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '20px' }}>Hiring a PA in 2026? Ask them this:</h2>
          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              '"Have you used AI tools for admin work before?"',
              '"Can you draft an email using an AI assistant?"',
              '"Are you comfortable with WhatsApp-based task management?"',
              '"Would you be open to an AI training course in your first month?"',
              '"Do you know the difference between ChatGPT and an AI PA?"',
            ].map((q, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '12px 16px', background: 'var(--accent-light)', borderRadius: '8px' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{q}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '16px', lineHeight: 1.6 }}>
            If they answer "no" to most of these, that's okay — but enrol them in <a href="/pa4pa" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>PA4PA</a> on day one. RM75 to turn a good PA into a great one is the highest-ROI investment you'll make this year.
          </p>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, marginBottom: '12px' }}>
            The future has room for humans and AI.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '28px' }}>
            Just make sure the humans know how to use the AI.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/pa4pa" className="cta-btn" style={{ textDecoration: 'none', padding: '14px 28px', fontSize: '0.95rem' }}>
              Train your PA — RM75 →
            </a>
            <a href="/proxi-max" className="cta-btn-outline" style={{ textDecoration: 'none', padding: '14px 28px', fontSize: '0.95rem' }}>
              Or just get Proxi Max →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
