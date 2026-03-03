"use client";

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function ConsultingUpgrade() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '140px 24px 40px', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '20px', backgroundColor: '#10b981', color: 'white' }}>✨ Trial Complete</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            Ready for the full experience?
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 32px', lineHeight: 1.5 }}>
            You've seen what Proxi can do with <strong>proposal generation and client communications</strong> in 3 days. Here's how we can expand it — website creation, presentation automation, and client relationship management — all tailored to your consulting practice.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
            <a href="https://buy.stripe.com/aFa14nh1McM22i27GAdfG07" className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none', borderRadius: '8px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', cursor: 'pointer', transition: 'transform 0.2s ease' }}>Monthly RM499</a>
            <a href="https://buy.stripe.com/eVq00jh1Mh2i7Cm1icdfG08" className="btn-secondary" style={{ padding: '16px 32px', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none', borderRadius: '8px', background: 'transparent', color: 'var(--accent)', border: '2px solid var(--accent)', cursor: 'pointer', transition: 'all 0.2s ease' }}>Yearly RM4,990 <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>(2 months free)</span></a>
          </div>
        </section>

        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="card" style={{ padding: '24px', background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)', border: '2px solid var(--accent)', borderRadius: '12px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px', color: 'var(--accent)' }}>🎁 Early Adopter Bonus</h2>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>RM2,000 setup fee waived</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>As one of our pilot customers, we're covering the full configuration cost. We appreciate you testing this with us.</p>
          </div>
        </section>

        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 48px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, textAlign: 'center', marginBottom: '32px' }}>What opens up for your consulting practice</h2>
          
          <div style={{ display: 'grid', gap: '24px' }}>
            {[
              { title: "Client Presentation Engine", desc: "Custom proposals, client presentations, and project documentation — generated to match each client's specific needs and industry.", trial: "Template demos only", full: "Fully custom generation" },
              { title: "Website Generation", desc: "Custom client portals, project showcase sites, and landing pages built on-demand for each engagement.", trial: "Not included", full: "Unlimited site generation" },
              { title: "Client Relationship Management", desc: "Follow-up sequences, project milestone notifications, and client satisfaction tracking automated.", trial: "Manual follow-ups only", full: "Automated CRM workflows" },
              { title: "Project Documentation", desc: "Meeting notes, project plans, status reports, and deliverable documentation generated consistently.", trial: "Basic templates only", full: "Dynamic documentation" },
              { title: "Priority Support", desc: "WhatsApp access to your PA whenever you need it, with our engineering team backing it up.", trial: "Business hours", full: "Extended support" }
            ].map((feature, idx) => (
              <div key={idx} className="card" style={{ padding: '24px', borderLeft: '3px solid var(--accent)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>{feature.title}</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: 1.6 }}>{feature.desc}</p>
                <div style={{ display: 'flex', gap: '24px', fontSize: '0.9rem' }}>
                  <span><strong>Trial:</strong> {feature.trial}</span>
                  <span style={{ color: 'var(--accent)' }}><strong>Full:</strong> {feature.full}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 48px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, textAlign: 'center', marginBottom: '32px' }}>The numbers, for context</h2>
          <div className="card" style={{ padding: '32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px 120px', gap: '16px', alignItems: 'center', fontSize: '0.9rem', marginBottom: '16px', fontWeight: 600 }}>
              <div></div><div style={{ textAlign: 'center', color: 'var(--accent)' }}>Proxi</div><div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Part-time hire</div>
            </div>
            {[
              { task: "Monthly cost", proxi: "RM499", human: "RM1,500+" },
              { task: "Setup time", proxi: "48 hours", human: "2-4 weeks" },
              { task: "Available", proxi: "24/7", human: "20 hrs/week" },
              { task: "Sick days", proxi: "Never", human: "Yes" },
              { task: "Training", proxi: "Pre-configured", human: "Weeks" },
              { task: "Expertise", proxi: "All industries", human: "Limited" }
            ].map((row, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 120px 120px', gap: '16px', alignItems: 'center', padding: '12px 0', borderBottom: idx < 5 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ fontWeight: 600 }}>{row.task}</div>
                <div style={{ textAlign: 'center', color: 'var(--accent)', fontWeight: 600 }}>{row.proxi}</div>
                <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{row.human}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px' }}>Interested in continuing?</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '32px' }}>The trial gave you a taste. The full version is where the real productivity gains happen.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://buy.stripe.com/aFa14nh1McM22i27GAdfG07" style={{ padding: '18px 36px', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none', borderRadius: '8px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', cursor: 'pointer', transition: 'transform 0.2s ease' }}>Continue Monthly — RM499</a>
            <a href="https://buy.stripe.com/eVq00jh1Mh2i7Cm1icdfG08" style={{ padding: '18px 36px', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none', borderRadius: '8px', background: 'transparent', color: 'var(--accent)', border: '2px solid var(--accent)', cursor: 'pointer', transition: 'all 0.2s ease' }}>Go Annual — RM4,990</a>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '16px' }}>✨ Setup fee waived (RM2,000 value) as a pilot customer</p>
        </section>
      </main>
      <Footer />
    </>
  );
}