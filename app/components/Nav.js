"use client";

import { useState, useEffect } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return <button onClick={toggle} className="theme-toggle" aria-label="Toggle theme">{dark ? "☀️" : "🌙"}</button>;
}

const NAV_LINKS = [
  { href: '/proxi-max', label: 'Proxi Max' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/markets', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/human-pa', label: 'Human PAs' },
  { href: '/pa4pa', label: 'PA4PA', accent: true },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="nav-glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: '16px 24px' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" className="gradient-text" style={{ fontSize: '1.25rem', fontWeight: 800, textDecoration: 'none' }}>Proxi</a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: '24px', fontSize: '0.85rem', color: 'var(--text-muted)' }} className="hidden md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} style={{ textDecoration: 'none', color: link.accent ? 'var(--accent)' : 'inherit', fontWeight: link.accent ? 600 : 400 }}>{link.label}</a>
            ))}
          </div>
          <ThemeToggle />
          <a href="/get-started" className="cta-btn hidden md:inline-block" style={{ padding: '10px 24px', fontSize: '0.85rem', textDecoration: 'none' }}>Get Started</a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none', border: 'none', color: 'var(--text)', fontSize: '1.5rem',
              cursor: 'pointer', padding: '4px 8px', lineHeight: 1,
            }}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="nav-glass"
          style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            padding: '16px 24px 24px',
            display: 'flex', flexDirection: 'column', gap: '16px',
            borderTop: '1px solid var(--border)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                textDecoration: 'none',
                color: link.accent ? 'var(--accent)' : 'var(--text-muted)',
                fontWeight: link.accent ? 600 : 400,
                fontSize: '1rem',
                padding: '8px 0',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/get-started"
            onClick={() => setMobileOpen(false)}
            className="cta-btn"
            style={{ textDecoration: 'none', padding: '12px 24px', fontSize: '0.95rem', textAlign: 'center', marginTop: '4px' }}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
