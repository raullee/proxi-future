import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Your First Week With a PA — What to Expect — Proxi",
  description: "Day 1: weird. Day 2: useful. Day 3: indispensable. A realistic guide to your first week with an AI PA.",
};

export default function BlogPost() {
  return (
    <>
      <Nav />
      <main>
        <article style={{ maxWidth: '680px', margin: '0 auto', padding: '140px 24px 80px' }}>
          <a href="/blog" style={{ fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>← Back to Blog</a>

          <div style={{ marginTop: '24px', marginBottom: '32px' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Getting Started</span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginTop: '12px', marginBottom: '16px' }}>
              Your First Week With a PA — What to Expect
            </h1>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>6 min read</p>
          </div>

          <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--text)', lineHeight: 1.7, marginBottom: '32px' }}>
              Everyone goes through the same arc with their AI PA. It starts with skepticism, moves through surprise, and lands on "how did I ever live without this?" Here's what your first week actually looks like, day by day.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Day 1: "This Is Weird"</h2>
            <p>
              You open WhatsApp and there it is — your PA, ready to go. You stare at the chat for a minute. What do you even say? It feels like talking to yourself. Like sending a text to no one.
            </p>
            <p style={{ marginTop: '16px' }}>
              Start small. The best first task is something low-stakes: "What's on my calendar today?" or "Summarize my unread emails." Something you already know the answer to, so you can check the PA's work.
            </p>
            <p style={{ marginTop: '16px' }}>
              When it responds — accurately, quickly, in a natural tone — you'll feel a small jolt of "oh, that actually worked." That's normal. Trust is built in small moments.
            </p>
            <p style={{ marginTop: '16px' }}>
              <strong style={{ color: 'var(--text)' }}>Day 1 tip:</strong> Don't overthink it. Send at least 3 messages. Test the waters with calendar checks, email summaries, or a simple "draft a reply to [person]." The more you interact, the faster you get comfortable.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Day 2: "Okay, That Was Useful"</h2>
            <p>
              By day 2, the novelty has worn off and the utility kicks in. You'll probably wake up to a message: "Good morning! You have 3 meetings today. Sarah emailed about the project deadline — want me to draft a reply?"
            </p>
            <p style={{ marginTop: '16px' }}>
              This is the moment most people start actually delegating. Try these:
            </p>
            <div style={{ marginTop: '16px', padding: '20px 24px', background: 'var(--surface)', borderRadius: '12px', color: 'var(--text)' }}>
              <p style={{ marginBottom: '8px' }}>"Reschedule my 2pm to next week"</p>
              <p style={{ marginBottom: '8px' }}>"Draft a follow-up to that client who hasn't responded"</p>
              <p style={{ marginBottom: '8px' }}>"Remind me to call the insurance company at 4pm"</p>
              <p>"Find a good Italian restaurant near Bangsar for dinner Friday"</p>
            </div>
            <p style={{ marginTop: '16px' }}>
              You'll notice that the PA doesn't just complete tasks — it asks smart clarifying questions. "Which client? You have two pending follow-ups." "For how many people? Any dietary restrictions?" It's not just executing; it's thinking.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Day 3: "Wait, It Remembered That?"</h2>
            <p>
              Day 3 is when the magic starts. You ask for something and the PA references context from yesterday. You mention a client and it already knows their name, their project, and where you left off.
            </p>
            <p style={{ marginTop: '16px' }}>
              This is the "it remembers" moment. The PA builds a working understanding of your world — your preferences, your contacts, your schedule patterns. By day 3, it's no longer generic. It's becoming <em>yours</em>.
            </p>
            <p style={{ marginTop: '16px' }}>
              <strong style={{ color: 'var(--text)' }}>Day 3 tip:</strong> Start teaching preferences. "I always want meeting reminders 30 minutes before, not 15." "When drafting emails to clients, use a warm but professional tone." These one-time instructions shape all future interactions.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Day 4-5: "I'm Delegating Everything"</h2>
            <p>
              By mid-week, most people hit a delegation frenzy. You start noticing all the small tasks you do on autopilot and thinking "the PA could do that." And you're right — it probably can.
            </p>
            <p style={{ marginTop: '16px' }}>
              This is when the real productivity gains kick in. Instead of spending 20 minutes on email in the morning, you spend 2 minutes reviewing the PA's summary and approving draft responses. Instead of playing calendar Tetris, you say "find a time for me and Ahmad next week" and it handles the back-and-forth.
            </p>
            <p style={{ marginTop: '16px' }}>
              Common "aha" moments during days 4-5:
            </p>
            <p style={{ marginTop: '12px' }}>
              • Forwarding an email to the PA with "handle this" and getting a perfect draft back<br/>
              • Sending a screenshot of a document and having the PA extract the key information<br/>
              • Asking "what did I miss while I was in the meeting?" and getting a comprehensive catch-up<br/>
              • Realizing you haven't opened your calendar app in two days
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Day 6-7: "How Did I Live Without This?"</h2>
            <p>
              By the end of week one, something has shifted. You're not thinking about whether to use the PA — it's just part of how you work. Like email was weird once, and Grab was weird once, and online banking was weird once. Now they're invisible infrastructure.
            </p>
            <p style={{ marginTop: '16px' }}>
              That's what your PA becomes by day 7: invisible infrastructure. You think "I need to..." and your next instinct is to text the PA. Not to open an app, not to add it to a to-do list, not to try to remember later. Just text the PA and move on.
            </p>
            <p style={{ marginTop: '16px' }}>
              The pros who get the most out of their PA are the ones who reach this point fastest. They stop treating it as a novelty and start treating it as a team member.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The Common Mistakes (And How to Avoid Them)</h2>
            <p>
              <strong style={{ color: 'var(--text)' }}>Under-delegating.</strong> The biggest first-week mistake. People use the PA for one or two things and think that's it. Push it. Ask it to do things you're not sure it can do. You'll be surprised how often it can.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>Not correcting.</strong> If the PA gets a tone wrong or misunderstands something, tell it. "That was too formal" or "I'd never say it that way — make it more casual." These corrections make it better permanently.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>Waiting for perfection.</strong> Your PA won't be perfect on day 1. By day 7, it'll be really good. By day 30, it'll feel like it can read your mind. Give it time to learn you.
            </p>

            <p style={{ marginTop: '32px', fontWeight: 600, color: 'var(--text)' }}>
              One week. That's all it takes to go from "this is weird" to "this is essential." The only way to get there is to start.
            </p>
          </div>

          <div className="card" style={{ marginTop: '48px', padding: '32px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Start your first week today.</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>Try Proxi free for 7 days. Day 1 starts when you say hello.</p>
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
