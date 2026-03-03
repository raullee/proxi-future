import './globals.css';

export const metadata = {
  metadataBase: new URL('https://proxi-future.vercel.app'),
  title: {
    default: 'Proxi — The Operator You Never Had to Hire',
    template: '%s | Proxi — AI Personal Assistant',
  },
  description: 'Your AI personal assistant and workflow operator. One subscription replaces your admin, automation, and follow-ups.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://proxi-future.vercel.app',
    siteName: 'Proxi',
    title: 'Proxi — The Operator You Never Had to Hire',
    description: 'Your AI personal assistant and workflow operator. One subscription replaces your admin, automation, and follow-ups.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Proxi — AI Personal Assistant' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proxi — The Operator You Never Had to Hire',
    description: 'Your AI personal assistant and workflow operator. One subscription replaces your admin, automation, and follow-ups.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        {/* Floating Get Started CTA */}
        <a
          href="/get-started"
          aria-label="Get Started"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent, #0d9488)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
            textDecoration: 'none',
            animation: 'whatsapp-pulse 2s ease-in-out infinite',
            fontSize: '1.4rem',
            color: 'white',
          }}
        >
          ✦
        </a>
      </body>
    </html>
  );
}
