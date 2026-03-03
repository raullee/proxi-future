export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '40px 24px 24px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '32px', marginBottom: '32px' }}>
          <div>
            <p className="gradient-text" style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px' }}>Proxi</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', lineHeight: 1.6 }}>The operator you never had to hire.<br/>Your dedicated operator on WhatsApp.</p>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-light)', marginTop: '8px', lineHeight: 1.6 }}>Axon Avenue PLT<br/>(LLP0035183-LGN)<br/>Malaysia 🇲🇾</p>
          </div>
          <div>
            <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>Product</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem' }}>
              <a href="/proxi-max" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Proxi Max</a>
              <a href="/pricing" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Pricing</a>
              <a href="/naoise" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Case Study</a>
              <a href="/markets" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Who We Serve</a>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>Company</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem' }}>
              <a href="https://naoise-blog.vercel.app" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</a>
              <a href="/get-started" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Contact</a>
              <a href="/get-started" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Live Demo</a>
              <a href="/terms" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
              <a href="/terms#privacy" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-light)' }}>© 2026 Axon Avenue PLT. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.7rem', color: 'var(--text-light)' }}>
            <span>TIN: PT 59569110020</span>
            <span>Reg: 202304001247</span>
            <span>Employer: E 9614849304</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
