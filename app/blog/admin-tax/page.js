import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: "The Admin Tax — Proxi",
  description: "Why your RM500/hour brain is doing RM20/hour work. The brutal math of admin time.",
};

export default function BlogPost() {
  return (
    <>
      <Nav />
      <main>
        <article style={{ maxWidth: '680px', margin: '0 auto', padding: '140px 24px 80px' }}>
          <a href="/blog" style={{ fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>← Back to Blog</a>

          <div style={{ marginTop: '24px', marginBottom: '32px' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI for Productivity</span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginTop: '12px', marginBottom: '16px' }}>
              The Admin Tax: Why Your RM500/Hour Brain Is Doing RM20/Hour Work
            </h1>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>5 min read</p>
          </div>

          <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--text)', lineHeight: 1.7, marginBottom: '32px' }}>
              Let's do some math that might ruin your day. If you're a professional — lawyer, consultant, architect, agency founder — your billable time is worth somewhere between RM300 and RM800 per hour. Now think about how much of your week goes to email, scheduling, follow-ups, and other admin. The number is horrifying.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The Brutal Math</h2>
            <p>
              The average professional spends 12 hours per week on administrative tasks. That's not from some think tank — it's from tracking actual workflows. Email triage, meeting scheduling, follow-up messages, document formatting, travel booking, invoice chasing, calendar management.
            </p>
            <p style={{ marginTop: '16px' }}>
              None of this is strategy. None of it is client work. None of it is the thing you're actually good at and the reason people pay you premium rates.
            </p>
            <div style={{ marginTop: '24px', padding: '24px', background: 'var(--surface)', borderRadius: '12px', color: 'var(--text)' }}>
              <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '16px' }}>The Admin Tax Calculator:</p>
              <p>12 hours/week × RM500/hour = <strong>RM6,000/week</strong></p>
              <p style={{ marginTop: '8px' }}>RM6,000 × 52 weeks = <strong style={{ color: '#ef4444' }}>RM312,000/year</strong></p>
              <p style={{ marginTop: '16px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>That's not what you're paying for admin. That's what admin is costing you in lost productive time.</p>
            </div>
            <p style={{ marginTop: '24px' }}>
              Three hundred and twelve thousand ringgit. Every year. Not because you're lazy — because admin tasks expand to fill every gap in your calendar. Five minutes here checking email. Ten minutes there scheduling a meeting. Twenty minutes chasing a client for documents. It adds up like a tax you never see on your statement.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Where the Time Actually Goes</h2>
            <p>
              Let's break down a typical professional's 12-hour admin week:
            </p>
            <p style={{ marginTop: '16px' }}>
              <strong style={{ color: 'var(--text)' }}>Email triage: 3-4 hours.</strong> Reading, sorting, flagging, responding to routine stuff, forwarding things. Most of this is pattern matching — the same types of emails get the same types of responses. Your brain does it on autopilot, but it still eats the time.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>Scheduling: 2-3 hours.</strong> The back-and-forth of finding a time that works. "How about Tuesday at 2?" "I can't do Tuesday, what about Wednesday?" "Wednesday's full, Thursday?" This is pure coordination overhead — no value created, just logistics.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>Follow-ups: 2 hours.</strong> "Just following up on my previous email." "Hi, any update on the documents?" "Gentle reminder about the invoice from last month." Important? Yes. Requires your expertise? No.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>Everything else: 2-3 hours.</strong> Travel booking, document formatting, meeting prep, expense tracking, birthday reminders for clients, updating spreadsheets. Death by a thousand admin cuts.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The Hidden Cost: Context Switching</h2>
            <p>
              The 12 hours isn't even the full picture. Every time you switch from deep work to admin and back, you lose 15-25 minutes of cognitive recovery time. That's not made up — it's from Gloria Mark's research at UC Irvine. Your brain needs time to re-enter a flow state after an interruption.
            </p>
            <p style={{ marginTop: '16px' }}>
              So when you "quickly" check your email mid-presentation-prep, you're not just losing the 5 minutes on email. You're losing another 20 minutes getting back to where you were. The real admin tax might be closer to 18-20 hours per week once you factor in switching costs.
            </p>
            <p style={{ marginTop: '16px' }}>
              At RM500/hour, that's nearly half a million ringgit in lost productive time annually. Let that sink in.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The Traditional Solution (And Why It Doesn't Scale)</h2>
            <p>
              "Just hire a PA." Sure. A good human PA in Malaysia costs RM3,000-6,000/month. That's RM36,000-72,000/year. Compared to RM312,000 in lost time, it's a no-brainer. But here's the thing: a human PA works 8 hours a day, needs training, takes leave, and handles maybe 60% of your admin needs.
            </p>
            <p style={{ marginTop: '16px' }}>
              What about nights? Weekends? The email that comes in at 10pm that needs a response before morning? The client in a different timezone? Human PAs are great but they have human limitations.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The AI Alternative</h2>
            <p>
              An AI PA costs a fraction of a human PA — and it's on 24/7. It doesn't take lunch breaks, doesn't call in sick, and processes tasks in seconds that would take a human minutes. Email triage? Instant. Scheduling? Handled. Follow-ups? Automated.
            </p>
            <p style={{ marginTop: '16px' }}>
              We're not saying AI replaces a human PA for everything. Complex judgment calls, sensitive client relationships, physical tasks — those still need a person. But 80% of the admin tax? The routine, repetitive, pattern-matching stuff? That's exactly what AI handles best.
            </p>
            <p style={{ marginTop: '16px' }}>
              Even if you recover just half of those 12 hours — 6 hours/week — that's RM156,000 in productive time reclaimed annually. From a tool that costs less than RM500/month.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The Real Question</h2>
            <p style={{ fontWeight: 600, color: 'var(--text)' }}>
              It's not "can I afford an AI PA?" It's "can I afford to keep doing RM20/hour work with a RM500/hour brain?"
            </p>
            <p style={{ marginTop: '16px' }}>
              Every hour you spend on email triage is an hour not spent closing a deal, serving a client, or building your business. The admin tax is real, it's massive, and it's optional. You just have to decide to stop paying it.
            </p>
          </div>

          <div className="card" style={{ marginTop: '48px', padding: '32px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Stop paying the admin tax.</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>Try Proxi free for 7 days. See how much time you get back.</p>
            <a href="/invite" className="cta-btn" style={{ textDecoration: 'none', padding: '14px 32px', fontSize: '0.95rem' }}>
              Get Started Free →
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
