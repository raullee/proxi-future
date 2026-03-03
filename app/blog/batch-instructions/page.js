import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Batch Your Instructions — Your PA Can Handle It — Proxi",
  description: "Stop sending 5 messages for 5 tasks. One message, multiple instructions. Here's why batching works better.",
};

export default function BlogPost() {
  return (
    <>
      <Nav />
      <main>
        <article style={{ maxWidth: '680px', margin: '0 auto', padding: '140px 24px 80px' }}>
          <a href="/blog" style={{ fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>← Back to Blog</a>

          <div style={{ marginTop: '24px', marginBottom: '32px' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tips & Tricks</span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginTop: '12px', marginBottom: '16px' }}>
              Batch Your Instructions — Your PA Can Handle It
            </h1>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>4 min read</p>
          </div>

          <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--text)', lineHeight: 1.7, marginBottom: '32px' }}>
              Most people use their AI PA like they're sending texts to a friend. One thought per message. "Check my email." Wait. "Reschedule lunch." Wait. "Draft a note to Sarah." Wait. "Find flights to Penang." Wait. That's four round trips for four tasks. There's a better way.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The Single-Message Approach</h2>
            <p>
              Your PA isn't a chatbot that processes one thing at a time and forgets what came before. It can handle multiple instructions in a single message. Watch:
            </p>
            <div style={{ marginTop: '20px', padding: '20px 24px', background: 'var(--surface)', borderRadius: '12px', color: 'var(--text)' }}>
              <p style={{ fontWeight: 600, marginBottom: '12px' }}>"Hey, I need a few things:</p>
              <p>1. Check my email and flag anything urgent</p>
              <p>2. Reschedule Tuesday's lunch with David to Thursday same time</p>
              <p>3. Draft a thank-you note to Sarah for the referral</p>
              <p style={{ fontWeight: 600 }}>4. Find me a return flight to Penang next Friday, back Sunday"</p>
            </div>
            <p style={{ marginTop: '20px' }}>
              One message. Four tasks. Your PA processes them all, usually in the order you listed them, and comes back with everything done or in progress. No back-and-forth. No waiting between tasks.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Why Batching Works Better</h2>
            <p>
              It's not just about saving time (though you will). Batching actually produces better results for three reasons:
            </p>
            <p style={{ marginTop: '16px' }}>
              <strong style={{ color: 'var(--text)' }}>Context carries across tasks.</strong> When your PA reads all four instructions at once, it understands the big picture. It knows you're rescheduling lunch because you have a flight to find. It might flag a conflict you didn't notice — "David's already booked Thursday afternoon, want to try Friday before your flight?"
            </p>
            <p style={{ marginTop: '16px' }}>
              <strong style={{ color: 'var(--text)' }}>Fewer interruptions for you.</strong> Sending one message and getting one comprehensive response back is way less disruptive than a ping-pong of five exchanges over 20 minutes. You send the batch, go do real work, and come back to everything handled.
            </p>
            <p style={{ marginTop: '16px' }}>
              <strong style={{ color: 'var(--text)' }}>Your PA prioritizes intelligently.</strong> When it sees all tasks at once, it can work on the time-sensitive stuff first. Rescheduling a meeting matters more than drafting a thank-you note. Your PA knows that.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The Morning Dump</h2>
            <p>
              The most effective PA users we see have a morning routine: they spend two minutes dumping everything they need for the day into one message. Think of it as a morning briefing in reverse — you're briefing your PA.
            </p>
            <div style={{ marginTop: '20px', padding: '20px 24px', background: 'var(--surface)', borderRadius: '12px', color: 'var(--text)' }}>
              <p style={{ fontWeight: 600, marginBottom: '12px' }}>"Morning. Today I need:</p>
              <p>- Summary of overnight emails</p>
              <p>- Remind me at 2pm about the dentist</p>
              <p>- Draft agenda for tomorrow's board meeting</p>
              <p>- Check if Grab has any promos for rides to KLCC this afternoon</p>
              <p style={{ fontWeight: 600 }}>- Push my 10am with Lisa to next week — any day works"</p>
            </div>
            <p style={{ marginTop: '20px' }}>
              Two minutes of typing. Then you put your phone down and start your day. By the time you check back, your PA has triaged your inbox, set your reminder, started the agenda draft, found the promos, and is negotiating a new time with Lisa.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>How Many Tasks Is Too Many?</h2>
            <p>
              In practice, anywhere from 3 to 8 tasks per message works great. Beyond that, you might want to split into two batches — not because your PA can't handle it, but because the response gets long and you might miss something in the reply.
            </p>
            <p style={{ marginTop: '16px' }}>
              A good rule: if you can list it in under a minute of typing, batch it. If it takes you five minutes to write out all the instructions, maybe split into "morning batch" and "afternoon batch."
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Numbered Lists Win</h2>
            <p>
              Quick formatting tip: use numbered lists. Not because your PA needs them — it can parse a wall of text just fine — but because when it responds, it'll mirror your structure. You get a clean numbered response matching your numbered request. Easy to scan, easy to follow up on specific items.
            </p>
            <p style={{ marginTop: '16px' }}>
              "For item 3, make the tone more casual" is way easier than "that email you drafted, the thank-you one, not the other one, can you change the tone?"
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The Compound Effect</h2>
            <p>
              Here's the math that makes this matter. If you send 5 individual messages averaging 2 minutes of back-and-forth each, that's 10 minutes of fragmented attention. One batch message takes 2 minutes to write and 1 minute to review the response. That's 3 minutes for the same output.
            </p>
            <p style={{ marginTop: '16px' }}>
              Multiply that saving across a week — most PA users send 5-10 task requests per day — and you're recovering 30-50 minutes daily. Not from doing less work. From communicating more efficiently.
            </p>
            <p style={{ marginTop: '24px', fontWeight: 600, color: 'var(--text)' }}>
              Stop texting your PA like a group chat. Brief it like a boss. One message, everything you need, then go do the work only you can do.
            </p>
          </div>

          <div className="card" style={{ marginTop: '48px', padding: '32px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Ready to batch like a pro?</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>Try Proxi free for 7 days. Send your first batch today.</p>
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
