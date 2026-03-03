import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: "10 Things to Delegate to Your PA Today — Proxi",
  description: "A practical list of tasks you can hand off to your AI PA right now. From email triage to restaurant bookings.",
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
              10 Things to Delegate to Your PA Today
            </h1>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>5 min read</p>
          </div>

          <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--text)', lineHeight: 1.7, marginBottom: '32px' }}>
              The biggest barrier to using a PA isn't the technology. It's knowing what to hand off. Most people stare at the chat thinking "what do I even ask for?" Here are ten things you can delegate right now. Today. Not in theory — in practice.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>1. Email Triage</h2>
            <p>
              "Check my email and tell me what's urgent." That's it. Your PA scans your inbox, filters out the noise, and gives you a summary of what actually needs your attention. No more scrolling through 47 emails to find the 3 that matter. You read a 30-second summary instead of spending 20 minutes in your inbox.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>2. Scheduling and Rescheduling</h2>
            <p>
              "Move my 2pm to Thursday. Check if David's free." Calendar Tetris is the most soul-crushing use of your time. Your PA handles the back-and-forth, checks availability, sends the updates. You just say what needs to change and it happens.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>3. Follow-Ups</h2>
            <p>
              "Follow up with the contractor about the quote. It's been a week." Everyone has a mental list of people they need to chase. The problem is that list lives in your head, and things fall through the cracks. Tell your PA to follow up, and it's done. Better yet, tell it to remind you if there's no response in three days.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>4. Travel Research and Booking</h2>
            <p>
              "Find me flights to Bangkok next month, Friday to Sunday, under RM800. And a hotel near Sukhumvit, nothing fancy." Instead of spending 45 minutes on Skyscanner comparing routes and cross-referencing hotel reviews, you describe what you want and your PA comes back with options. You pick one. Done.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>5. Drafting Messages and Emails</h2>
            <p>
              "Draft a polite decline to this meeting invite. I'm overcommitted that week." Writing emails takes way longer than it should because you overthink the tone. Your PA drafts it, you review it, you send it. The cognitive load of composing from scratch disappears.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>6. Birthday and Anniversary Reminders</h2>
            <p>
              "My mom's birthday is March 15. Remind me a week before and suggest gift ideas." Never forget an important date again. Your PA stores it, reminds you with enough lead time, and even researches gift options based on what you've told it about the person. This alone is worth having a PA.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>7. Invoice and Expense Tracking</h2>
            <p>
              "I just paid RM340 for office supplies. Log it." Send a photo of the receipt if you want. Your PA tracks expenses, categorizes them, and can give you a monthly summary when you need it. No spreadsheet required. No expense app with 47 fields to fill in. Just tell it what you spent.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>8. Competitor Research</h2>
            <p>
              "What's [competitor] up to? Check their website and socials for anything new." Staying on top of your market shouldn't eat your afternoon. Your PA checks their latest announcements, pricing changes, new features, social media posts, and gives you a digest. Five minutes of reading instead of an hour of browsing.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>9. Social Media Management</h2>
            <p>
              "Draft three LinkedIn posts about [topic]. Professional tone, keep them under 200 words each." You don't need a social media manager for basic posting. Your PA drafts content, you approve or tweak, and it's ready to publish. Consistency without the time investment.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>10. Restaurant Reservations</h2>
            <p>
              "Book dinner for 4 tomorrow night. Italian, somewhere in Bangsar, around 8pm." Your PA finds options, checks availability, makes the reservation. You show up and eat. This might seem small, but multiply it across all the little tasks you do daily — the research, the calls, the bookings — and the time adds up fast.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The Pattern</h2>
            <p>
              Notice something? None of these tasks require your unique expertise. They require your time, your attention, your decision-making bandwidth — but not your irreplaceable skill. That's the test for what to delegate: if someone else could do it with the right information, hand it off.
            </p>
            <p style={{ marginTop: '24px', fontWeight: 600, color: 'var(--text)' }}>
              Pick one from this list. Delegate it today. Tomorrow, pick another. Within a week, you'll wonder how you ever did this stuff yourself.
            </p>
          </div>

          <div className="card" style={{ marginTop: '48px', padding: '32px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Ready to delegate your first task?</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>Try Proxi free for 7 days. Start with any task on this list.</p>
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
