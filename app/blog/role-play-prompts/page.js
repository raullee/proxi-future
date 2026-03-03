import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Use Role-Play Prompts for Better Results — Proxi",
  description: "Give your PA a role and watch the output quality jump. Not prompt engineering — just smart context setting.",
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
              Use Role-Play Prompts for Better Results
            </h1>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>5 min read</p>
          </div>

          <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--text)', lineHeight: 1.7, marginBottom: '32px' }}>
              There's one trick that consistently produces better output from your AI PA, and it takes about five seconds to use. Tell it who to be. "You're a senior lawyer." "Write this like a CFO." "Pretend you're a wedding planner." It sounds silly. It works ridiculously well.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Why Roles Change Everything</h2>
            <p>
              When you tell your PA "draft an email about the overdue payment," it'll write something perfectly fine. Professional, clear, gets the job done. But when you say "you're a senior partner at a law firm — write a firm but professional follow-up to a client who's 60 days overdue," the output transforms.
            </p>
            <p style={{ marginTop: '16px' }}>
              Suddenly the language is tighter. The tone carries authority. The structure follows what an actual law firm partner would write. Your PA isn't guessing at the register — you've given it a clear frame to work within.
            </p>
            <p style={{ marginTop: '16px' }}>
              This isn't some prompt engineering hack. It's just how communication works. When you tell a human writer "write this like a CEO would say it," they immediately adjust their vocabulary, sentence length, and level of directness. Your PA does the same thing, just faster.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Roles That Actually Work</h2>
            <p>
              Not all roles are equally useful. Here are the ones our users get the most mileage from:
            </p>
            <p style={{ marginTop: '20px' }}>
              <strong style={{ color: 'var(--text)' }}>The Tough Professional.</strong> "You're a senior corporate lawyer." Perfect for demand letters, overdue payment reminders, contract negotiations, or any communication where you need weight behind the words without being aggressive. The output will be precise, confident, and structured.
            </p>
            <p style={{ marginTop: '16px' }}>
              <strong style={{ color: 'var(--text)' }}>The Warm Connector.</strong> "You're a hospitality director at a 5-star hotel." Use this for client onboarding emails, welcome messages, or thank-you notes. The output becomes gracious and personal without crossing into saccharine.
            </p>
            <p style={{ marginTop: '16px' }}>
              <strong style={{ color: 'var(--text)' }}>The Strategist.</strong> "You're a McKinsey consultant." Want to analyze a business problem, structure a proposal, or create a SWOT analysis? This role produces structured, analytical, jargon-appropriate output. It thinks in frameworks.
            </p>
            <p style={{ marginTop: '16px' }}>
              <strong style={{ color: 'var(--text)' }}>The Creative.</strong> "You're a copywriter at an award-winning ad agency." Social media posts, marketing copy, pitch decks, event descriptions. The output gets punchier, more visual, more memorable.
            </p>
            <p style={{ marginTop: '16px' }}>
              <strong style={{ color: 'var(--text)' }}>The Explainer.</strong> "You're a teacher explaining this to a 12-year-old." Surprisingly powerful for simplifying complex documents, summarizing legal contracts in plain language, or helping you understand something technical. If your PA can explain it to a kid, you'll understand it too.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Combining Roles With Context</h2>
            <p>
              The real power comes from stacking a role with specific context. Compare these two:
            </p>
            <div style={{ marginTop: '20px', padding: '20px 24px', background: 'var(--surface)', borderRadius: '12px' }}>
              <p style={{ color: 'var(--text-light)', marginBottom: '12px' }}>❌ Basic:</p>
              <p style={{ color: 'var(--text)' }}>"Write a follow-up email to a client about a delayed project."</p>
              <p style={{ color: 'var(--text-light)', marginTop: '16px', marginBottom: '12px' }}>✅ Role-played:</p>
              <p style={{ color: 'var(--text)' }}>"You're a project manager at a top architecture firm. Write a follow-up to a client whose residential project is 3 weeks behind schedule due to permit delays. Be transparent about the cause, reassure them about quality, and propose a revised timeline."</p>
            </div>
            <p style={{ marginTop: '20px' }}>
              The second version gives your PA a persona, a situation, and constraints. The output will be dramatically more useful — specific, appropriately toned, and structured like someone in that actual role would write it.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>This Isn't Prompt Engineering</h2>
            <p>
              We know what you're thinking. "Didn't you just tell me I don't need prompt engineering?" Correct. Role-playing isn't prompt engineering. It's context setting.
            </p>
            <p style={{ marginTop: '16px' }}>
              When you brief a human assistant on a task, you naturally give them context: "This is for a formal audience" or "Keep it casual, it's for my buddy." A role is just shorthand for a bundle of context — tone, vocabulary, structure, level of formality — delivered in three words instead of thirty.
            </p>
            <p style={{ marginTop: '16px' }}>
              You don't need a course to do this. You don't need a template. You just need to answer one question before you give an instruction: <em>who should be writing this?</em>
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Quick-Start: Try These Today</h2>
            <p>
              Next time you need something from your PA, try prefixing it with a role:
            </p>
            <div style={{ marginTop: '16px', padding: '20px 24px', background: 'var(--surface)', borderRadius: '12px', color: 'var(--text)' }}>
              <p style={{ marginBottom: '8px' }}>"You're a headhunter — draft a LinkedIn message to recruit this person."</p>
              <p style={{ marginBottom: '8px' }}>"You're my accountant — explain this tax notice in plain English."</p>
              <p style={{ marginBottom: '8px' }}>"You're a food critic — write a Google review for that restaurant we went to."</p>
              <p>"You're a diplomat — help me say no to this meeting request without burning the bridge."</p>
            </div>
            <p style={{ marginTop: '24px', fontWeight: 600, color: 'var(--text)' }}>
              Five extra words. Dramatically better output. No engineering degree required.
            </p>
          </div>

          <div className="card" style={{ marginTop: '48px', padding: '32px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Want to see roles in action?</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>Try Proxi free for 7 days. Give your PA a role and watch what happens.</p>
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
