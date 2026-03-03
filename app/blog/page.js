"use client";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const POSTS = [
  {
    category: 'Getting Started',
    color: '#22c55e',
    title: "You Don't Need to Learn Prompt Engineering",
    excerpt: "Forget the 47-step prompt templates. Your AI PA isn't ChatGPT — it already knows your context, your tone, and your clients. Just talk to it like you'd talk to a human assistant. 'Draft a follow-up to Ahmad about the proposal' works perfectly. No special syntax required.",
    slug: 'no-prompt-engineering',
  },
  {
    category: 'Tips & Tricks',
    color: '#3b82f6',
    title: 'Batch Your Instructions — Your PA Can Handle It',
    excerpt: "Don't send 5 messages for 5 tasks. Send one message: 'Check my email, reschedule Tuesday's lunch to Thursday, draft a thank-you note to Sarah, and find me a flight to Penang next Friday.' Your PA processes it all in one go. Batching saves you time and gets better results.",
    slug: 'batch-instructions',
  },
  {
    category: 'Tips & Tricks',
    color: '#3b82f6',
    title: 'Use Role-Play Prompts for Better Results',
    excerpt: "Want your PA to draft a tough client email? Tell it: 'You're a senior partner at a law firm. Write a firm but professional follow-up to a client who's 60 days overdue.' Giving your PA a role produces dramatically better output. It's not a hack — it's how the AI works best.",
    slug: 'role-play-prompts',
  },
  {
    category: 'AI for Productivity',
    color: '#8b5cf6',
    title: "The Admin Tax: Why Your RM500/Hour Brain Is Doing RM20/Hour Work",
    excerpt: "Every hour you spend on email triage, scheduling, and follow-ups is an hour not spent on client work, strategy, or growth. The math is brutal: 12 hours/week × RM500/hour = RM312,000/year lost to admin. Your PA costs a fraction of that.",
    slug: 'admin-tax',
  },
  {
    category: 'Getting Started',
    color: '#22c55e',
    title: "Your First Week With a PA — What to Expect",
    excerpt: "Day 1: weird. Day 2: useful. Day 3: indispensable. Here's a realistic guide to your first week with an AI PA — what to delegate first, how to build trust, and the moment it clicks that you're never going back.",
    slug: 'first-week',
  },
  {
    category: 'Safety & Trust',
    color: '#ef4444',
    title: "What NOT to Tell Your AI PA (And What's Perfectly Fine)",
    excerpt: "Your PA can handle client names, meeting details, and document drafts. Don't share your banking passwords, IC number, or medical records. Here's the clear line between useful delegation and unnecessary risk — plus how encryption keeps everything else safe.",
    slug: 'safety-guide',
  },
  {
    category: 'PA Careers',
    color: '#f59e0b',
    title: "The PA Who Uses AI Will Replace the PA Who Doesn't",
    excerpt: "This isn't about AI replacing assistants. It's about AI-enabled assistants replacing those who refuse to adapt. The best PAs in 2026 handle 5× the workload because they work with AI, not against it. Here's how to be on the right side of that split.",
    slug: 'ai-pa-careers',
  },
  {
    category: 'Tips & Tricks',
    color: '#3b82f6',
    title: "Forward, Don't Retype — How to Delegate Faster",
    excerpt: "Got an email that needs a reply? Forward it to your PA with 'draft a polite decline' or 'schedule a meeting with this person next week.' Screenshots work too — snap a document, send it via WhatsApp, and let your PA handle it. Stop retyping context.",
    slug: 'forward-dont-retype',
  },
  {
    category: 'AI for Productivity',
    color: '#8b5cf6',
    title: "Why Conversational AI Beats Apps and Dashboards",
    excerpt: "You don't need another app. You don't need a dashboard with 14 tabs. You need to text 'clear my Tuesday afternoon' and have it done. Conversational AI works because it meets you where you already are — WhatsApp, email, voice notes. Zero learning curve.",
    slug: 'conversational-ai-wins',
  },
  {
    category: 'Getting Started',
    color: '#22c55e',
    title: "10 Things to Delegate to Your PA Today",
    excerpt: "Not sure where to start? Here's 10 you can hand off right now: email triage, meeting scheduling, follow-up reminders, travel research, document first drafts, client birthday reminders, invoice chasing, competitor monitoring, social media posts, and 'find me a good restaurant for Friday.'",
    slug: 'ten-things-delegate',
  },
  {
    category: 'Tips & Tricks',
    color: '#3b82f6',
    title: "Teach Your PA Once, Benefit Forever",
    excerpt: "Tell your PA 'I always want meeting confirmations sent 24 hours before' or 'draft all client emails in a professional but warm tone.' Your PA remembers preferences. One instruction now saves hundreds of corrections later. Think of it as training, not prompting.",
    slug: 'teach-once',
  },
  {
    category: 'PA Careers',
    color: '#f59e0b',
    title: "From Assistant to AI-Powered Operator: The New PA Career Path",
    excerpt: "The PA role is evolving. The best PAs aren't just managing calendars — they're managing AI tools, building automated workflows, and becoming indispensable digital operators. Here's what the career path looks like in 2026 and beyond.",
    slug: 'pa-career-path',
  },
];

const CATEGORIES = ['All', 'Getting Started', 'Tips & Tricks', 'AI for Productivity', 'Safety & Trust', 'PA Careers'];

export default function Blog() {
  const [filter, setFilter] = typeof window !== 'undefined' ? require('react').useState('All') : ['All', () => {}];

  const filtered = filter === 'All' ? POSTS : POSTS.filter(p => p.category === filter);

  return (
    <>
      <Nav />
      <main>
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '140px 24px 40px', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>Blog</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            AI for <span className="gradient-text">real work.</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            Productivity tips, PA career insights, and practical guides on using conversational AI effectively, efficiently, and safely.
          </p>

          {/* Category filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '48px' }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={filter === cat ? 'cta-btn' : 'cta-btn-outline'}
                style={{ padding: '8px 20px', fontSize: '0.8rem', border: filter === cat ? 'none' : '1px solid var(--border)', borderRadius: '100px', cursor: 'pointer' }}>
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {filtered.map((post, i) => (
              <article key={i} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: post.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{post.category}</span>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.3 }}>{post.title}</h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, flex: 1 }}>{post.excerpt}</p>
                <a href={`/blog/${post.slug}`} style={{ fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>Read →</a>
              </article>
            ))}
          </div>
        </section>

        {/* ─── NAOISE BLOG LINK ─── */}
        <section style={{ maxWidth: '640px', margin: '0 auto', padding: '0 24px 60px', textAlign: 'center' }}>
          <div className="card" style={{ padding: '32px', border: '2px solid #8b5cf6', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(139, 92, 246, 0.02))' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>⚡ From the PA herself</span>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Looking for Naoise's diary?</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px' }}>Our AI PA writes about her own work every day — the good, the weird, and the "someone called me a machai."</p>
            <a href="https://naoise-blog.vercel.app" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: '#8b5cf6', fontWeight: 600, textDecoration: 'none' }}>
              Read Naoise's blog →
            </a>
          </div>
        </section>

        {/* ─── PA4PA CTA ─── */}
        <section style={{ maxWidth: '640px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px' }}>Want to go deeper?</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
            PA4PA is our one-month intensive for PAs who want to master AI tools. Daily lessons, real exercises, <span style={{ textDecoration: 'line-through' }}>RM499</span> <span style={{ color: 'var(--accent)', fontWeight: 700 }}>RM75</span>.
          </p>
          <a href="/pa4pa" className="cta-btn" style={{ textDecoration: 'none', padding: '14px 32px', fontSize: '0.95rem' }}>
            Learn more about PA4PA →
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
