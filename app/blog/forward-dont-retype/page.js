import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Forward, Don't Retype — How to Delegate Faster — Proxi",
  description: "Stop retyping emails and context. Forward directly, send screenshots, use voice notes. Your PA can read the source.",
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
              Forward, Don't Retype — How to Delegate Faster
            </h1>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>4 min read</p>
          </div>

          <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--text)', lineHeight: 1.7, marginBottom: '32px' }}>
              You get an email about a meeting change. You open WhatsApp. You type out the details to your PA: "Hey, the meeting with John moved to 3pm Thursday, it was originally 2pm Wednesday, and he wants to add Sarah to the invite." You just spent 45 seconds retyping information that already exists in a perfectly readable format. Why?
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The Retyping Tax</h2>
            <p>
              Most people pay a hidden tax every time they delegate. They read something, process it, then manually retype the key details for their PA. It's like being a human copy machine. You're not adding value — you're just transferring information from one screen to another.
            </p>
            <p style={{ marginTop: '16px' }}>
              This is the single biggest time-waster in delegation. Not the tasks themselves. Not the back-and-forth. The retyping. And it's completely unnecessary.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Forward the Email. That's It.</h2>
            <p>
              Your PA can read emails. So instead of summarizing an email in your own words, just forward it. Add a one-line instruction at the top if needed:
            </p>
            <div style={{ marginTop: '20px', padding: '20px 24px', background: 'var(--surface)', borderRadius: '12px', color: 'var(--text)' }}>
              <p style={{ fontWeight: 600 }}>"Update my calendar based on this. Reply confirming I'll attend."</p>
              <p style={{ marginTop: '8px', color: 'var(--text-muted)', fontStyle: 'italic' }}>[forwarded email below]</p>
            </div>
            <p style={{ marginTop: '20px' }}>
              Done. Your PA reads the original email, extracts the date, time, attendees, location — everything. No detail lost in translation. No chance you mistyped "Thursday" when the email said "Tuesday." The source of truth stays intact.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Screenshots Are Underrated</h2>
            <p>
              Not everything comes in email form. Maybe you're looking at a restaurant menu and want your PA to make a reservation for something specific. Maybe a colleague sent you meeting notes on Slack. Maybe you're staring at an invoice that needs processing.
            </p>
            <p style={{ marginTop: '16px' }}>
              Screenshot it. Send the image. Add your instruction.
            </p>
            <div style={{ marginTop: '20px', padding: '20px 24px', background: 'var(--surface)', borderRadius: '12px', color: 'var(--text)' }}>
              <p style={{ fontWeight: 600 }}>"Book a table for 4 at this place, Saturday 7pm."</p>
              <p style={{ marginTop: '8px', color: 'var(--text-muted)', fontStyle: 'italic' }}>[screenshot of restaurant listing]</p>
            </div>
            <p style={{ marginTop: '20px' }}>
              Your PA can read images. It pulls the restaurant name, phone number, address — all from your screenshot. You didn't type any of it. Two seconds of screen-capture replaced two minutes of typing.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Voice Notes: Talk, Don't Type</h2>
            <p>
              Here's one most people overlook. You're driving. You remember three things you need done. You can't type. So you either forget them by the time you park, or you pull over and spend five minutes thumbing out instructions.
            </p>
            <p style={{ marginTop: '16px' }}>
              Or you hold one button and talk for 30 seconds.
            </p>
            <p style={{ marginTop: '16px' }}>
              Voice notes are the fastest input method that exists. You speak about 150 words per minute. You type about 40. The math is obvious. Your PA transcribes your voice note, extracts the tasks, and gets to work. You keep driving.
            </p>
            <p style={{ marginTop: '16px' }}>
              Don't worry about being articulate. Ramble. Your PA can parse "uh, also that thing with the, you know, the vendor invoice from last week — can you follow up on that" just fine. It's built to understand natural speech, not just clean commands.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The Copy-Paste Shortcut</h2>
            <p>
              If forwarding isn't an option, copy-paste beats retyping every time. Got a long address? Copy it from the website. Confirmation number? Copy from the email. Flight details? Copy the itinerary text.
            </p>
            <p style={{ marginTop: '16px' }}>
              The goal is zero manual transcription. Every time you retype something that already exists digitally, you're introducing errors and wasting time. The information is already in a machine-readable format somewhere. Keep it that way.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The One-Line-Plus-Source Formula</h2>
            <p>
              Here's the pattern that makes delegation instant:
            </p>
            <p style={{ marginTop: '16px' }}>
              <strong style={{ color: 'var(--text)' }}>One line of instruction + the original source material.</strong>
            </p>
            <p style={{ marginTop: '16px' }}>
              That's it. Your job as the delegator is to say what you want done. Not to repackage the information your PA needs to do it. The instruction is yours. The context is the source's. Keep them separate.
            </p>
            <p style={{ marginTop: '16px' }}>
              "Handle this" + forwarded email. "Book this" + screenshot. "Do these things" + voice note. Every delegation should take under 10 seconds of your active time.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Real Numbers</h2>
            <p>
              We tracked delegation patterns across hundreds of users. People who forward and screenshot instead of retyping save an average of 12 minutes per day. That's an hour a week. 50+ hours a year. Recovered not by doing fewer tasks, but by eliminating the dumbest step in the process — manually copying information from one place to another.
            </p>
            <p style={{ marginTop: '24px', fontWeight: 600, color: 'var(--text)' }}>
              Your PA doesn't need you to be a translator between your inbox and your chat. Forward the source. Add the instruction. Move on with your day.
            </p>
          </div>

          <div className="card" style={{ marginTop: '48px', padding: '32px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Stop retyping. Start forwarding.</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>Try Proxi free for 7 days. Delegate the smart way.</p>
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
