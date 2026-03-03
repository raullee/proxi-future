import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Teach Your PA Once, Benefit Forever — Proxi",
  description: "Set preferences once and your PA remembers. Training, not prompting. Build a PA that knows how you work.",
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
              Teach Your PA Once, Benefit Forever
            </h1>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>4 min read</p>
          </div>

          <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--text)', lineHeight: 1.7, marginBottom: '32px' }}>
              Every time you book a flight, you specify "window seat, no layovers, morning departure." Every time you schedule a meeting, you add "always include a Zoom link." Every time you draft an email, you remind your PA "keep it under 100 words, casual tone." What if you only had to say these things once?
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Prompting vs. Training</h2>
            <p>
              Most people use AI assistants by prompting. Every interaction starts from zero. You give full context, full instructions, full preferences — every single time. It's like training a new intern every morning who has amnesia by afternoon.
            </p>
            <p style={{ marginTop: '16px' }}>
              Training is different. Training means telling your PA something once and having it stick. "I always want meeting confirmations sent 24 hours before." You say that once. From that point on, it just happens. No reminders. No re-prompting. Your PA remembers.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>What to Teach</h2>
            <p>
              Think about the instructions you repeat most often. Those are your training candidates. Here are common ones:
            </p>
            <div style={{ marginTop: '20px', padding: '20px 24px', background: 'var(--surface)', borderRadius: '12px', color: 'var(--text)' }}>
              <p>• "Always book aisle seats for short flights, window for long-haul"</p>
              <p>• "Never schedule meetings before 10am"</p>
              <p>• "When emailing clients, always CC my partner Sarah"</p>
              <p>• "I prefer Grab over taxis"</p>
              <p>• "For restaurants, I don't eat shellfish"</p>
              <p>• "Draft all formal emails in British English"</p>
              <p>• "When booking hotels, loyalty program is Marriott Bonvoy"</p>
            </div>
            <p style={{ marginTop: '20px' }}>
              These aren't one-off instructions. They're rules that apply every time a certain type of task comes up. Teaching them once eliminates repetitive instructions forever.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The Compound Knowledge Effect</h2>
            <p>
              Here's where it gets powerful. After a month of use, your PA knows dozens of your preferences. It knows your schedule patterns, your communication style, your dietary restrictions, your travel habits, your key contacts. Each preference you teach makes every future interaction faster and more accurate.
            </p>
            <p style={{ marginTop: '16px' }}>
              Week one, you're giving detailed instructions for everything. Week four, you're sending three-word messages and getting exactly what you want back. "Book the usual" means something to a PA that's been trained. It means nothing to a blank-slate chatbot.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Corrections Are Training Too</h2>
            <p>
              You don't need a formal "training session." Every correction you make is a lesson. When your PA books a 9am meeting and you say "I told you, nothing before 10," that's training. Next time, it won't make that mistake.
            </p>
            <p style={{ marginTop: '16px' }}>
              The best PA users treat corrections as investments, not frustrations. Yes, it got it wrong. But it'll get it right every time from now on. That one correction saves you from repeating the preference in 50 future interactions.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Preferences Change — Update Them</h2>
            <p>
              Life changes. You switch loyalty programs. You move offices. You change your work hours. When that happens, just tell your PA: "Update: I'm now based in the KL office, not PJ. Adjust commute estimates and lunch spots accordingly."
            </p>
            <p style={{ marginTop: '16px' }}>
              One message updates the preference across every future task. You don't need to remember to mention your new office every time you ask for a lunch recommendation. The update propagates automatically.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The 10-Minute Setup That Saves Hours</h2>
            <p>
              Spend 10 minutes right now listing your top preferences. Not everything — just the stuff you repeat most. Send it to your PA as a "getting to know me" message:
            </p>
            <div style={{ marginTop: '20px', padding: '20px 24px', background: 'var(--surface)', borderRadius: '12px', color: 'var(--text)' }}>
              <p style={{ fontWeight: 600, marginBottom: '12px' }}>"Some things to know about me:</p>
              <p>- I work 9-6, no meetings outside those hours</p>
              <p>- I prefer concise emails, max 3 paragraphs</p>
              <p>- I fly AirAsia domestically, MAS for international</p>
              <p>- Coffee meetings: always suggest somewhere near KLCC</p>
              <p>- My assistant Sarah handles invoices — loop her in on finance stuff</p>
              <p style={{ fontWeight: 600 }}>- I'm vegetarian on weekdays"</p>
            </div>
            <p style={{ marginTop: '20px' }}>
              That 10 minutes of upfront investment pays dividends for months. Every task your PA handles from this point forward is informed by these preferences. No repetition needed.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>A PA That Knows You</h2>
            <p>
              The difference between a good PA and a great PA is knowledge of you. Not general knowledge — personal knowledge. Your habits, your preferences, your quirks. A PA that knows you anticipates. It doesn't just do what you ask; it does it the way you'd want it done.
            </p>
            <p style={{ marginTop: '24px', fontWeight: 600, color: 'var(--text)' }}>
              Teach once. Benefit forever. The more your PA knows about you, the less you need to say. That's not laziness — that's leverage.
            </p>
          </div>

          <div className="card" style={{ marginTop: '48px', padding: '32px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Build a PA that actually knows you.</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>Try Proxi free for 7 days. Teach it your preferences today.</p>
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
