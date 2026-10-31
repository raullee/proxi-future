import './globals.css';
import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-PROXI000000';

export const metadata = {
  metadataBase: new URL('https://proxi.my'),
  title: {
    default: 'Proxi — Your WhatsApp, answered.',
    template: '%s | Proxi — AI Personal Assistant',
  },
  description: 'Proxi runs a dedicated AI operator on your WhatsApp. Triages, qualifies, books, drafts, follows up. One subscription replaces a team.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://proxi.my',
    siteName: 'Proxi',
    title: 'Proxi — Your WhatsApp, answered.',
    description: 'AI personal assistant on your WhatsApp. Admin, follow-ups, workflow automation. One subscription replaces a team.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Proxi — AI Personal Assistant' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proxi — Your WhatsApp, answered.',
    description: 'AI personal assistant on your WhatsApp.',
    images: ['/og-image.png'],
  },
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://proxi.my/#org',
  name: 'Proxi',
  url: 'https://proxi.my',
  description: 'A WhatsApp operator that answers, qualifies and books every enquiry for Malaysian businesses.',
  areaServed: 'MY',
  sameAs: ['https://instagram.com/asknaoise', 'https://threads.net/@asknaoise'],
  parentOrganization: {
    '@type': 'Organization',
    '@id': 'https://axonavenue.my/#org',
    name: 'Axon Avenue PLT',
    url: 'https://axonavenue.my',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { send_page_view: true });
          `}
        </Script>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd).replace(/</g, '\\u003c') }}
        />
        {children}
      </body>
    </html>
  );
}
