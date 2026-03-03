"use client";

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const offers = {
  "01": {
    trialFocus: "staff contract generation and admin workflows",
    expansionAreas: "inventory tracking, supplier coordination, and customer engagement automation",
    businessType: "your food business",
    primaryCapability: "Document Generation",
    capabilityDesc: "Employment contracts, supplier agreements, health compliance docs — generated instantly when you need them.",
    trialLimitation: "Basic contracts only",
    fullCapability: "All business documents",
    workflowExamples: "Shift scheduling, inventory alerts, supplier payment tracking, and customer loyalty automation",
    secondaryFeatures: [
      {
        title: "Inventory Management",
        desc: "Track stock levels, supplier orders, and waste management automatically. Get alerts before you run out.",
        trial: "Not included",
        full: "Full automation"
      },
      {
        title: "Staff Coordination", 
        desc: "Schedule shifts, manage leave requests, track hours, and handle payroll documentation seamlessly.",
        trial: "Basic scheduling only",
        full: "Complete staff management"
      },
      {
        title: "Customer Engagement",
        desc: "WhatsApp order confirmations, loyalty program management, and feedback collection automation.",
        trial: "Manual only",
        full: "Automated engagement"
      }
    ]
  },
  "02": {
    trialFocus: "trademark research and competitive positioning",
    expansionAreas: "client acquisition automation, deadline tracking, and partnership development", 
    businessType: "your IP practice",
    primaryCapability: "Research & Analysis",
    capabilityDesc: "Multi-jurisdiction IP research, competitor analysis, and pricing strategies — delivered as actionable frameworks, not raw data.",
    trialLimitation: "Research demos only",
    fullCapability: "Unlimited research + automation",
    workflowExamples: "Client onboarding sequences, deadline reminder systems, partnership outreach campaigns, and compliance tracking",
    secondaryFeatures: [
      {
        title: "Deadline Management",
        desc: "Track filing deadlines, renewal dates, and compliance requirements across all jurisdictions automatically.",
        trial: "Manual tracking",
        full: "Automated alerts & tracking"
      },
      {
        title: "Client Acquisition",
        desc: "LinkedIn outreach, partnership referral systems, and lead qualification workflows tailored for IP services.",
        trial: "Not included",
        full: "Full acquisition automation"
      },
      {
        title: "Compliance Monitoring",
        desc: "Stay updated on regulation changes, filing requirement updates, and jurisdiction-specific compliance rules.",
        trial: "Basic research only", 
        full: "Continuous monitoring"
      }
    ]
  },
  "03": {
    trialFocus: "data processing and spreadsheet automation",
    expansionAreas: "dashboard creation, report automation, and data pipeline management",
    businessType: "your operations",
    primaryCapability: "Data Automation", 
    capabilityDesc: "Complex calculations, multi-sheet reports, and data visualizations — generated faster than manual Excel work.",
    trialLimitation: "Sample reports only",
    fullCapability: "Unlimited data workflows",
    workflowExamples: "Automated report scheduling, data validation pipelines, dashboard updates, and cross-system data syncing",
    secondaryFeatures: [
      {
        title: "Report Automation",
        desc: "Daily, weekly, and monthly reports generated automatically from your data sources and delivered on schedule.",
        trial: "Static templates only",
        full: "Dynamic, scheduled reports"
      },
      {
        title: "Dashboard Creation",
        desc: "Live dashboards that update automatically, with charts, KPIs, and alerts based on your data thresholds.",
        trial: "Sample dashboards only",
        full: "Unlimited custom dashboards"
      },
      {
        title: "Data Pipeline Management",
        desc: "Connect multiple data sources, clean and validate data automatically, and maintain data integrity across systems.",
        trial: "Single-source only",
        full: "Multi-source pipelines"
      }
    ]
  },
  "04": {
    trialFocus: "proposal generation and client communications",
    expansionAreas: "website creation, presentation automation, and client relationship management",
    businessType: "your consulting practice", 
    primaryCapability: "Client Presentation Engine",
    capabilityDesc: "Custom proposals, client presentations, and project documentation — generated to match each client's specific needs and industry.",
    trialLimitation: "Template demos only",
    fullCapability: "Fully custom generation",
    workflowExamples: "Proposal templates, client onboarding, project milestone tracking, and invoice automation",
    secondaryFeatures: [
      {
        title: "Website Generation",
        desc: "Custom client portals, project showcase sites, and landing pages built on-demand for each engagement.",
        trial: "Not included",
        full: "Unlimited site generation"
      },
      {
        title: "Client Relationship Management",
        desc: "Follow-up sequences, project milestone notifications, and client satisfaction tracking automated.",
        trial: "Manual follow-ups only",
        full: "Automated CRM workflows"
      },
      {
        title: "Project Documentation",
        desc: "Meeting notes, project plans, status reports, and deliverable documentation generated consistently.",
        trial: "Basic templates only",
        full: "Dynamic documentation"
      }
    ]
  },
  "05": {
    trialFocus: "product descriptions and customer service automation",
    expansionAreas: "inventory management, order processing, and marketing automation",
    businessType: "your e-commerce business",
    primaryCapability: "Commerce Automation",
    capabilityDesc: "Product listings, customer inquiries, and order management — handled automatically while maintaining your brand voice.",
    trialLimitation: "Basic templates only", 
    fullCapability: "Full commerce automation",
    workflowExamples: "Inventory management, customer inquiry responses, order tracking, and supplier coordination",
    secondaryFeatures: [
      {
        title: "Social Media Marketing",
        desc: "Automated product posts, customer engagement, influencer outreach, and social commerce management across platforms.",
        trial: "Not included",
        full: "Multi-platform automation"
      },
      {
        title: "Order Processing",
        desc: "From cart abandonment recovery to shipping notifications — the entire order lifecycle managed automatically.",
        trial: "Manual processing only",
        full: "End-to-end automation"
      },
      {
        title: "Customer Support",
        desc: "24/7 inquiry responses, return processing, and customer satisfaction management via WhatsApp and email.",
        trial: "Basic responses only",
        full: "Complete support automation"
      }
    ]
  }
};

export default function TrialUpgrade() {
  const searchParams = useSearchParams();
  const [selectedOffer, setSelectedOffer] = useState(null);

  useEffect(() => {
    const offerParam = searchParams.get('offer');
    
    if (offerParam && offers[offerParam]) {
      setSelectedOffer(offers[offerParam]);
    } else {
      // Random selection if no valid offer param
      const offerKeys = Object.keys(offers);
      const randomKey = offerKeys[Math.floor(Math.random() * offerKeys.length)];
      setSelectedOffer(offers[randomKey]);
    }
  }, [searchParams]);

  if (!selectedOffer) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav />
      <main>
        {/* ─── HERO ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '140px 24px 40px', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '20px', backgroundColor: '#10b981', color: 'white' }}>✨ Trial Complete</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            Ready for the full experience?
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 32px', lineHeight: 1.5 }}>
            You've seen what Proxi can do with <strong>{selectedOffer.trialFocus}</strong> in 3 days. Here's how we can expand it — {selectedOffer.expansionAreas} — all tailored to {selectedOffer.businessType}.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
            <a 
              href="https://buy.stripe.com/aFa14nh1McM22i27GAdfG07"
              className="btn-primary"
              style={{ 
                padding: '16px 32px', 
                fontSize: '1.1rem', 
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Monthly RM499
            </a>
            <a 
              href="https://buy.stripe.com/eVq00jh1Mh2i7Cm1icdfG08"
              className="btn-secondary"
              style={{ 
                padding: '16px 32px', 
                fontSize: '1.1rem', 
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '8px',
                background: 'transparent',
                color: 'var(--accent)',
                border: '2px solid var(--accent)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--accent)';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'var(--accent)';
              }}
            >
              Yearly RM4,990 <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>(2 months free)</span>
            </a>
          </div>
        </section>

        {/* ─── SETUP FEE WAIVED ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="card" style={{ 
            padding: '24px', 
            background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
            border: '2px solid var(--accent)',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px', color: 'var(--accent)' }}>
              🎁 Early Adopter Bonus
            </h2>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>
              RM2,000 setup fee waived
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              As one of our pilot customers, we're covering the full configuration cost. We appreciate you testing this with us.
            </p>
          </div>
        </section>

        {/* ─── WHAT YOU GET ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 48px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, textAlign: 'center', marginBottom: '32px' }}>
            What opens up with the full version
          </h2>
          
          <div style={{ display: 'grid', gap: '24px' }}>
            {/* Primary capability */}
            <div className="card" style={{ padding: '24px', borderLeft: '3px solid var(--accent)' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>{selectedOffer.primaryCapability}</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: 1.6 }}>{selectedOffer.capabilityDesc}</p>
              <div style={{ display: 'flex', gap: '24px', fontSize: '0.9rem' }}>
                <span><strong>Trial:</strong> {selectedOffer.trialLimitation}</span>
                <span style={{ color: 'var(--accent)' }}><strong>Full:</strong> {selectedOffer.fullCapability}</span>
              </div>
            </div>

            {/* Dynamic secondary features */}
            {selectedOffer.secondaryFeatures.map((feature, idx) => (
              <div key={idx} className="card" style={{ padding: '24px', borderLeft: '3px solid var(--accent)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>{feature.title}</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: 1.6 }}>{feature.desc}</p>
                <div style={{ display: 'flex', gap: '24px', fontSize: '0.9rem' }}>
                  <span><strong>Trial:</strong> {feature.trial}</span>
                  <span style={{ color: 'var(--accent)' }}><strong>Full:</strong> {feature.full}</span>
                </div>
              </div>
            ))}

            {/* Universal priority support */}
            <div className="card" style={{ padding: '24px', borderLeft: '3px solid var(--accent)' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Priority Support</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: 1.6 }}>WhatsApp access to your PA whenever you need it, with our engineering team backing it up.</p>
              <div style={{ display: 'flex', gap: '24px', fontSize: '0.9rem' }}>
                <span><strong>Trial:</strong> Business hours</span>
                <span style={{ color: 'var(--accent)' }}><strong>Full:</strong> Extended support</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── COMPARISON ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 48px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, textAlign: 'center', marginBottom: '32px' }}>
            The numbers, for context
          </h2>
          
          <div className="card" style={{ padding: '32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px 120px', gap: '16px', alignItems: 'center', fontSize: '0.9rem', marginBottom: '16px', fontWeight: 600 }}>
              <div></div>
              <div style={{ textAlign: 'center', color: 'var(--accent)' }}>Proxi</div>
              <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Part-time hire</div>
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

        {/* ─── CTA ─── */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px' }}>
            Interested in continuing?
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '32px' }}>
            The trial gave you a taste. The full version is where the real productivity gains happen.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://buy.stripe.com/aFa14nh1McM22i27GAdfG07"
              style={{ 
                padding: '18px 36px', 
                fontSize: '1.1rem', 
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Continue Monthly — RM499
            </a>
            <a 
              href="https://buy.stripe.com/eVq00jh1Mh2i7Cm1icdfG08"
              style={{ 
                padding: '18px 36px', 
                fontSize: '1.1rem', 
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '8px',
                background: 'transparent',
                color: 'var(--accent)',
                border: '2px solid var(--accent)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--accent)';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'var(--accent)';
              }}
            >
              Go Annual — RM4,990
            </a>
          </div>
          
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '16px' }}>
            ✨ Setup fee waived (RM2,000 value) as a pilot customer
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}