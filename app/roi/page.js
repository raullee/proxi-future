"use client";

import { useState } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function ROICalculator() {
  const [hours, setHours] = useState(12);
  const [rate, setRate] = useState(200);
  const [plan, setPlan] = useState('max');

  const planCost = plan === 'proxi' ? 199 : 499;
  const annualPlanCost = planCost * 12;
  const weeksPerYear = 50;
  const timeSavedWeekly = Math.round(hours * 0.7);
  const timeSavedAnnually = timeSavedWeekly * weeksPerYear;
  const valueSaved = timeSavedWeekly * rate * weeksPerYear;
  const netSavings = valueSaved - annualPlanCost;
  const roiPercent = Math.round((netSavings / annualPlanCost) * 100);

  const fmt = (n) => n.toLocaleString('en-MY');

  return (
    <>
      <Nav />
      <main>
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 24px 40px', textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '20px' }}>ROI Calculator</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '20px', marginBottom: '16px' }}>
            What's your admin <span className="gradient-text">really costing you?</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 48px', lineHeight: 1.6 }}>
            Adjust the sliders to see how much time and money you'd save with Proxi.
          </p>
        </section>

        {/* ─── CALCULATOR ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 60px' }}>
          <div className="card" style={{ padding: '36px' }}>
            {/* Plan toggle */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
              <button onClick={() => setPlan('proxi')} style={{ padding: '10px 24px', borderRadius: '100px', border: '1px solid var(--border)', background: plan === 'proxi' ? 'var(--accent)' : 'transparent', color: plan === 'proxi' ? 'white' : 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
                Proxi · RM199/mo
              </button>
              <button onClick={() => setPlan('max')} style={{ padding: '10px 24px', borderRadius: '100px', border: '1px solid var(--border)', background: plan === 'max' ? 'var(--accent)' : 'transparent', color: plan === 'max' ? 'white' : 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
                Proxi Max · RM499/mo
              </button>
            </div>

            {/* Hours slider */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '0.95rem', fontWeight: 600 }}>Hours on admin per week</label>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent)' }}>{hours}h</span>
              </div>
              <input type="range" min="5" max="40" value={hours} onChange={(e) => setHours(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-light)' }}>
                <span>5h</span><span>40h</span>
              </div>
            </div>

            {/* Rate slider */}
            <div style={{ marginBottom: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '0.95rem', fontWeight: 600 }}>Your hourly rate</label>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent)' }}>RM{rate}</span>
              </div>
              <input type="range" min="50" max="500" step="10" value={rate} onChange={(e) => setRate(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-light)' }}>
                <span>RM50</span><span>RM500</span>
              </div>
            </div>

            {/* Results */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <ResultCard label="Time saved annually" value={`${fmt(timeSavedAnnually)} hours`} />
              <ResultCard label="Value of saved time" value={`RM ${fmt(valueSaved)}`} />
              <ResultCard label="Annual Proxi cost" value={`RM ${fmt(annualPlanCost)}`} />
              <ResultCard label="Net savings" value={`RM ${fmt(netSavings)}`} highlight={netSavings > 0} />
            </div>

            <div style={{ textAlign: 'center', marginTop: '24px', padding: '20px', borderRadius: '12px', background: 'var(--accent-light)' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Return on Investment</p>
              <p style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)' }}>{fmt(roiPercent)}%</p>
            </div>
          </div>
        </section>

        {/* ─── TCO COMPARISON ─── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 60px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px', textAlign: 'center' }}>Total Cost of Ownership</h2>
          <div className="card" style={{ overflow: 'hidden', borderRadius: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '16px 20px', borderBottom: '2px solid var(--border)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <span></span><span style={{ textAlign: 'center' }}>Monthly</span><span style={{ textAlign: 'center' }}>Annual</span><span style={{ textAlign: 'center' }}>Coverage</span>
            </div>
            {[
              { label: 'Human PA', monthly: 'RM3,500+', annual: 'RM42,000+', coverage: '40h/wk', note: '+ EPF, SOCSO, leave, training' },
              { label: 'Freelance VA', monthly: 'RM1,500', annual: 'RM18,000', coverage: '20h/wk', note: 'Needs your coordination' },
              { label: 'Proxi', monthly: 'RM199', annual: 'RM2,388', coverage: '168h/wk', highlight: true },
              { label: 'Proxi Max', monthly: 'RM499', annual: 'RM5,988', coverage: '168h/wk', highlight: true, note: '+ content, social, presence' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '16px 20px', borderBottom: '1px solid var(--border)', background: row.highlight ? 'var(--accent-light)' : 'transparent', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.95rem', fontWeight: row.highlight ? 700 : 400 }}>{row.label}</span>
                  {row.note && <p style={{ fontSize: '0.7rem', color: 'var(--text-light)', marginTop: '2px' }}>{row.note}</p>}
                </div>
                <span style={{ textAlign: 'center', fontSize: '0.9rem', fontWeight: 600, color: row.highlight ? 'var(--accent)' : 'var(--text-secondary)' }}>{row.monthly}</span>
                <span style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{row.annual}</span>
                <span style={{ textAlign: 'center', fontSize: '0.9rem', color: row.highlight ? 'var(--accent)' : 'var(--text-muted)', fontWeight: 600 }}>{row.coverage}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>The math is clear.</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '24px' }}>Stop spending RM{rate}/hr on admin work. Let Proxi handle it.</p>
          <a href="/invite" className="cta-btn" style={{ textDecoration: 'none', padding: '16px 40px', fontSize: '1.05rem' }}>Get started →</a>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ResultCard({ label, value, highlight }) {
  return (
    <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>{label}</p>
      <p style={{ fontSize: '1.3rem', fontWeight: 800, color: highlight ? 'var(--accent)' : 'var(--text)' }}>{value}</p>
    </div>
  );
}
