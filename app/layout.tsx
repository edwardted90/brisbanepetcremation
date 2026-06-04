import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gentlepetcremation.com'),
  title: {
    default: 'Pet Cremation Brisbane – Get Quotes from Local Providers',
    template: '%s | Gentle Pet Cremation',
  },
  description: 'Compare trusted pet cremation providers in Brisbane. Get instant quotes, read reviews, and choose the right service for your pet. Fast, simple, and local.',
  keywords: ['pet cremation brisbane', 'pet cremation quotes brisbane', 'dog cremation brisbane', 'cat cremation brisbane', 'pet cremation cost brisbane'],
  verification: {
    google: 'HXHHrNjNka7dStJoXwyEhMKccgLiyKkIAF5wIlF3mPc',
  },
  openGraph: {
    title: 'Pet Cremation Brisbane – Get Quotes from Local Providers',
    description: 'Compare trusted pet cremation providers in Brisbane. Get instant quotes and choose the right service for your pet.',
    images: [{ url: '/og-image.jpg' }],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Cremation Brisbane – Get Quotes from Local Providers',
    description: 'Compare trusted pet cremation providers in Brisbane. Get instant quotes and choose the right service for your pet.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Gentle Pet Cremation',
    description: 'Compare pet cremation providers in Brisbane. Get quotes from trusted local services.',
    url: 'https://www.gentlepetcremation.com',
    telephone: '+61-XXX-XXX-XXX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brisbane',
      addressRegion: 'QLD',
      addressCountry: 'AU',
    },
    areaServed: 'Brisbane, Queensland, Australia',
    serviceType: 'Pet Cremation Lead Generation',
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
