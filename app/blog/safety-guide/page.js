import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: "What NOT to Tell Your AI PA — Proxi",
  description: "Client names are fine. Banking passwords are not. Here's the clear line between useful delegation and unnecessary risk.",
};

export default function BlogPost() {
  return (
    <>
      <Nav />
      <main>
        <article style={{ maxWidth: '680px', margin: '0 auto', padding: '140px 24px 80px' }}>
          <a href="/blog" style={{ fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>← Back to Blog</a>

          <div style={{ marginTop: '24px', marginBottom: '32px' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Safety & Trust</span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginTop: '12px', marginBottom: '16px' }}>
              What NOT to Tell Your AI PA (And What's Perfectly Fine)
            </h1>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>5 min read</p>
          </div>

          <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--text)', lineHeight: 1.7, marginBottom: '32px' }}>
              "But is it safe to tell it about my clients?" We get this question every week. The honest answer: it depends what you're telling it. There's a clear line between useful delegation and unnecessary risk, and once you know where that line is, you can delegate confidently without losing sleep.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>✅ Perfectly Fine to Share</h2>
            <p>
              Let's start with the good news. All of the following are fine — and in fact necessary for your PA to do its job well:
            </p>
            <p style={{ marginTop: '16px' }}>
              <strong style={{ color: 'var(--text)' }}>Client and contact names.</strong> Your PA needs to know who Ahmad is, who Sarah is, and who your boss is. Names are operational context, not sensitive data. "Draft a reply to Ahmad about the project" requires knowing Ahmad exists.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>Meeting details and schedules.</strong> Times, dates, locations, agendas. This is core PA territory. It can't manage your calendar if it doesn't know what's on it.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>Email content and drafts.</strong> Forwarding emails for your PA to reply to is literally the use case. The content of routine business emails is operational, not classified.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>Project details and deadlines.</strong> What you're working on, who's involved, what's due when. This is how your PA tracks your work and sends intelligent follow-ups.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>Preferences and instructions.</strong> "I like my coffee black," "I always fly AirAsia for domestic," "Draft emails in a casual tone." All good. These make your PA better.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>Business documents and drafts.</strong> Proposals, contracts, reports, presentations. If you'd hand it to a human PA to format or review, you can share it with your AI PA.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>🚫 Don't Share These</h2>
            <p>
              Here's the line. These items carry disproportionate risk if exposed, and your PA doesn't need them to do its job:
            </p>
            <p style={{ marginTop: '16px' }}>
              <strong style={{ color: 'var(--text)' }}>Banking passwords and PINs.</strong> Your PA never needs to log into your bank. If you need a payment made, do the banking yourself and have the PA handle the surrounding admin — reminders, confirmations, records.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>IC number (NRIC/MyKad).</strong> Your national ID number is a gateway to identity theft. There's no legitimate PA task that requires it.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>Full credit card numbers.</strong> Your PA can help you compare cards, find deals, or draft dispute letters — without knowing the actual card number.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>Medical records and health details.</strong> Telling your PA "I have a dentist appointment" is fine. Sharing your medical history, prescriptions, or test results is not. Different risk category entirely.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>Passwords and 2FA codes.</strong> Never. For anything. Your PA doesn't need to log into your accounts. If it needs information from an account, either connect it through an official integration or share the specific info it needs, not the login.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The "Human PA" Rule</h2>
            <p>
              Here's a simple mental model: would you give this information to a human PA you've worked with for 3 months?
            </p>
            <p style={{ marginTop: '16px' }}>
              A good human PA knows your clients, your schedule, your preferences, and your communication style. They have access to your email and calendar. They handle documents and drafts. You trust them with operational information because they need it to do their job.
            </p>
            <p style={{ marginTop: '16px' }}>
              But you probably wouldn't give them your banking password, your IC number, or your medical records. Not because they're untrustworthy — but because they don't need those things to schedule meetings and draft emails.
            </p>
            <p style={{ marginTop: '16px' }}>
              Same principle applies to your AI PA. Share what it needs. Keep what it doesn't.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>How Your Data Is Protected</h2>
            <p>
              Understanding the security helps build confidence. Here's how Proxi handles your information:
            </p>
            <p style={{ marginTop: '16px' }}>
              <strong style={{ color: 'var(--text)' }}>Encryption in transit and at rest.</strong> All communications between you and your PA are encrypted. Messages are encrypted when stored. This is the same standard used by banks and healthcare providers.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>No training on your data.</strong> Your conversations are not used to train AI models. Your business details, client names, and documents stay yours. Period.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>Isolated instances.</strong> Your PA's memory is separate from every other user's PA. There's no cross-contamination of data between users.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>You control the data.</strong> Want something deleted? Say "forget everything about [topic]" and it's gone. You can also request a full data export or deletion at any time.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The Practical Cheatsheet</h2>
            <div style={{ marginTop: '16px', padding: '20px 24px', background: 'var(--surface)', borderRadius: '12px', color: 'var(--text)' }}>
              <p style={{ fontWeight: 600, color: '#22c55e', marginBottom: '12px' }}>✅ GO AHEAD:</p>
              <p>Names, emails, schedules, projects, deadlines, preferences, documents, drafts, travel plans, restaurant preferences, contact details, meeting notes</p>
              <p style={{ fontWeight: 600, color: '#ef4444', marginTop: '16px', marginBottom: '12px' }}>🚫 KEEP TO YOURSELF:</p>
              <p>Passwords, PINs, IC/NRIC, full credit card numbers, medical records, 2FA codes, banking credentials, tax file numbers</p>
            </div>

            <p style={{ marginTop: '32px', fontWeight: 600, color: 'var(--text)' }}>
              The line is simple: share what your PA needs to work for you. Keep what it doesn't need and can't use anyway. When in doubt, apply the human PA rule — and you'll be fine.
            </p>
          </div>

          <div className="card" style={{ marginTop: '48px', padding: '32px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Delegate with confidence.</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>Try Proxi free for 7 days. Your data stays yours.</p>
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
