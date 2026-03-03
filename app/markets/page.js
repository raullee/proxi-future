"use client";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const VERTICALS = [
  { icon: '⚖️', name: 'Lawyers & Legal', slug: 'lawyers', desc: 'Client emails, court dates, document drafts, after-hours inquiries — your practice runs smoother with an operator that never sleeps.' },
  { icon: '🏠', name: 'Property & Real Estate', slug: 'property', desc: 'Viewings, tenant management, listing updates, document prep — stop juggling and start closing.' },
  { icon: '💼', name: 'Business & Consulting', slug: 'business', desc: 'Client coordination, proposal drafting, invoicing, meeting management — the back-office you never hired.' },
  { icon: '🚀', name: 'SME & Startups', slug: 'sme', desc: 'Wearing too many hats? Cash flow tracking, supplier follow-ups, marketing — one operator handles the chaos.' },
  { icon: '👨‍⚕️', name: 'Medical & Healthcare', slug: 'medical', desc: 'Appointment scheduling, patient follow-ups, insurance paperwork, prescription management — care without the admin.' },
  { icon: '📋', name: 'Admin, BPO & Personal Assistants', slug: 'admin-bpo', desc: 'You manage other people\'s chaos for a living. Now manage it 5× faster. AI-powered workflows for PAs, EAs, and BPO teams who want to handle more clients without burning out.' },
  { icon: '🎓', name: 'Teachers, Tutors & Trainers', slug: 'education', desc: 'Parent WhatsApps, lesson planning, fee collection, progress reports — spend your time teaching, not chasing admin.' },
  { icon: '📈', name: 'Sales & Business Development', slug: 'sales', desc: 'Lead follow-ups, proposal tracking, meeting scheduling, CRM updates — your PA chases the pipeline so you can close it.' },
  { icon: '🚛', name: 'Logistics & Supply Chain', slug: 'logistics', desc: 'Shipment tracking, vendor coordination, delivery scheduling, document management — less time on spreadsheets, more time on operations.' },
  { icon: '🏗️', name: 'Construction & Engineering', slug: 'construction', desc: 'Subcontractor coordination, permit tracking, project timelines, site documentation — keep every project on track without drowning in paperwork.' },
  { icon: '🛡️', name: 'Insurance & Financial Services', slug: 'insurance', desc: 'Policy renewals, client follow-ups, claims coordination, compliance reminders — never let a renewal slip through the cracks again.' },
  { icon: '🎭', name: 'Events & Hospitality', slug: 'events', desc: 'Vendor management, guest coordination, timeline tracking, post-event follow-ups — run 10 events at once without the midnight panic.' },
  { icon: '📦', name: 'E-commerce & Retail', slug: 'ecommerce', desc: 'Order inquiries, inventory alerts, supplier communication, customer follow-ups — scale your store without scaling your headcount.' },
  { icon: '💰', name: 'Accounting & Tax', slug: 'accounting', desc: 'Client document collection, deadline reminders, invoice chasing, query management — survive every tax season with your sanity intact.' },
];

export default function Markets() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>Case Studies</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            See Proxi <span className="gradient-text">in action.</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            Real use cases across industries. Every vertical configured differently, same result: less admin, more output.
          </p>
        </section>

        {/* ─── NAOISE HERO ─── */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 40px' }}>
          <a href="/naoise" className="card" style={{ padding: '36px', display: 'flex', gap: '24px', alignItems: 'center', textDecoration: 'none', color: 'inherit', border: '2px solid var(--accent)', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '3rem', flexShrink: 0 }}>⚡</span>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <span className="badge" style={{ marginBottom: '8px', background: 'var(--accent)', color: 'white', fontSize: '0.65rem' }}>Featured Case Study</span>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Naoise — Digital Engagement Officer</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '12px' }}>
                Our own AI PA. Handles WhatsApp, email, content, lead qualification, client onboarding, and customer support — working alongside her human team. The proof that Proxi works is the PA running our company.
              </p>
              <span style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600 }}>Read the full case study →</span>
            </div>
          </a>
        </section>

        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 20px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-muted)' }}>By industry</h2>
        </section>

        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 80px' }}>
          <div style={{ display: 'grid', gap: '20px' }}>
            {VERTICALS.map((v, i) => (
              <a key={i} href={`/markets/${v.slug}`} className="card" style={{ padding: '32px', display: 'flex', gap: '20px', alignItems: 'flex-start', textDecoration: 'none', color: 'inherit', transition: 'border-color 0.2s' }}>
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>{v.icon}</span>
                <div>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>{v.name}</h2>
                  <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{v.desc}</p>
                  <span style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600, marginTop: '12px', display: 'inline-block' }}>See how Proxi helps →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: '640px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Don't see your industry?</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '24px' }}>Proxi works for any professional who spends too much time on admin. Get in touch and we'll show you how.</p>
          <a href="/get-started" className="cta-btn" style={{ textDecoration: 'none', padding: '14px 32px' }}>Request a demo →</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
