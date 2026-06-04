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
    default: 'Pet Cremation Brisbane | Dignified & Professional Pet Cremation Services',
    template: '%s | Gentle Pet Cremation',
  },
  description: 'Compassionate, individual pet cremation services in Brisbane. Private cremations, ashes returned, and caring support for families saying goodbye to their pets.',
  keywords: ['pet cremation brisbane', 'dog cremation brisbane', 'cat cremation brisbane', 'pet cremation services brisbane', 'animal cremation brisbane'],
  verification: {
    google: 'HXHHrNjNka7dStJoXwyEhMKccgLiyKkIAF5wIlF3mPc',
  },
  openGraph: {
    title: 'Pet Cremation Brisbane | Gentle Pet Cremation',
    description: 'Compassionate, individual pet cremation services in Brisbane. Private cremations, ashes returned, and caring support for families.',
    images: [{ url: '/og-image.jpg' }],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Cremation Brisbane | Gentle Pet Cremation',
    description: 'Compassionate, individual pet cremation services in Brisbane.',
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
    description: 'Compassionate, individual pet cremation services in Brisbane.',
    url: 'https://www.gentlepetcremation.com',
    telephone: '+61-XXX-XXX-XXX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brisbane',
      addressRegion: 'QLD',
      addressCountry: 'AU',
    },
    areaServed: 'Brisbane, Queensland, Australia',
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
