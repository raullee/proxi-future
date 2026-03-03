import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: "You Don't Need to Learn Prompt Engineering — Proxi",
  description: "Forget the 47-step prompt templates. Your AI PA already knows your context. Just talk to it like a human assistant.",
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
              You Don't Need to Learn Prompt Engineering
            </h1>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>5 min read</p>
          </div>

          <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--text)', lineHeight: 1.7, marginBottom: '32px' }}>
              There's a whole cottage industry built around "prompt engineering." Courses, certifications, 47-step templates, frameworks with acronyms like CRISP and RACE. People charging RM2,000 to teach you how to talk to a chatbot. Here's the thing: if you're using an AI personal assistant, you can ignore all of it.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The Prompt Engineering Problem</h2>
            <p>
              Prompt engineering exists because ChatGPT doesn't know who you are. Every conversation starts from zero. It doesn't know your name, your clients, your tone, your schedule, or what you had for breakfast. So you need to front-load all that context every single time. That's what prompt templates are — a workaround for a tool that has amnesia.
            </p>
            <p style={{ marginTop: '16px' }}>
              "Act as a professional executive assistant with experience in corporate communications. I need you to draft a follow-up email to a client named Ahmad regarding a proposal we discussed on Tuesday. The tone should be warm but professional, and please include a call to action for scheduling a meeting next week."
            </p>
            <p style={{ marginTop: '16px' }}>
              That's 50+ words just to set the stage. And you'd need to do something similar every. single. time.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>Your PA Already Knows You</h2>
            <p>
              An AI personal assistant is fundamentally different from a chatbot. It's not a blank slate — it's been configured with your context. It knows your name, your role, your communication style. It has access to your calendar, your email, your contact list. It remembers that Ahmad is your client, that you discussed the proposal on Tuesday, and that you prefer a warm-but-direct tone.
            </p>
            <p style={{ marginTop: '16px' }}>
              So instead of that 50-word prompt template, you just say:
            </p>
            <p style={{ marginTop: '16px', padding: '20px 24px', background: 'var(--surface)', borderRadius: '12px', fontWeight: 600, color: 'var(--text)' }}>
              "Draft a follow-up to Ahmad about the proposal."
            </p>
            <p style={{ marginTop: '16px' }}>
              That's it. Nine words. Your PA fills in the rest because it already has the context. It knows Ahmad's full name, the project, your preferred tone, and what "follow-up" means in the context of your business relationship.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The Human Assistant Test</h2>
            <p>
              Here's a useful mental model: would you give a prompt template to a human assistant?
            </p>
            <p style={{ marginTop: '16px' }}>
              If you hired a PA — a real, breathing, coffee-drinking human — would you hand them a laminated card every morning that says "Act as a professional assistant. When I ask you to draft an email, consider the tone, context, and relationship dynamics. Use the CRISP framework: Context, Role, Instructions, Style, Parameters"?
            </p>
            <p style={{ marginTop: '16px' }}>
              Of course not. You'd say "Hey, can you draft a reply to Ahmad? He's asking about the timeline." And your PA would handle it because they know you, they know the project, and they're not starting from scratch every conversation.
            </p>
            <p style={{ marginTop: '16px' }}>
              That's exactly how your AI PA works. It's been "hired" by you. It's been briefed. It knows the job.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>What Actually Works</h2>
            <p>
              Instead of learning prompt engineering, just do these three things:
            </p>
            <p style={{ marginTop: '16px' }}>
              <strong style={{ color: 'var(--text)' }}>1. Talk normally.</strong> Say what you'd say to a human. "Reschedule my 3pm to Thursday." "Draft a polite decline to that LinkedIn recruiter." "Remind me to call Siti before Friday." Natural language is the whole point.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>2. Be specific when it matters.</strong> "Draft a reply" is fine for routine stuff. But if you want something particular — "make it shorter than usual, and mention that we can't do the discount" — just say that. You're not engineering a prompt. You're giving instructions. There's a difference.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong style={{ color: 'var(--text)' }}>3. Correct once, benefit forever.</strong> If your PA drafts something and the tone is off, tell it: "Too formal. I talk to Ahmad casually — we've known each other 10 years." Your PA remembers that. Next time, it gets it right without being told. Try doing that with a prompt template.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>When Prompt Engineering Is Useful</h2>
            <p>
              Look, prompt engineering isn't useless. If you're a developer building AI applications, understanding how language models interpret instructions matters. If you're using ChatGPT or Claude directly for complex one-off tasks — writing a business plan, analyzing a dataset — knowing how to structure your request helps.
            </p>
            <p style={{ marginTop: '16px' }}>
              But for day-to-day personal assistance? For "check my email," "book a restaurant," "draft a reply"? It's massive overkill. It's like taking a Formula 1 driving course to commute to work. Technically relevant. Practically unnecessary.
            </p>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginTop: '40px', marginBottom: '16px' }}>The Bottom Line</h2>
            <p>
              The entire promise of an AI personal assistant is that you <em>don't</em> need to become an AI expert to use one. You don't learn "human assistant engineering" before hiring a PA. You just tell them what you need and they figure it out.
            </p>
            <p style={{ marginTop: '16px' }}>
              Your AI PA is the same. It has your context. It remembers your preferences. It learns from corrections. Just talk to it.
            </p>
            <p style={{ marginTop: '16px', fontWeight: 600, color: 'var(--text)' }}>
              Save the prompt engineering for the engineers. You've got actual work to do.
            </p>
          </div>

          {/* CTA */}
          <div className="card" style={{ marginTop: '48px', padding: '32px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Ready to just talk?</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>Try Proxi free for 7 days. No prompt templates required.</p>
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
