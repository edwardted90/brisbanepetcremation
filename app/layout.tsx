import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

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
    default: 'Pet Cremation Brisbane – Get Quotes from Local Providers | Gentle Pet Cremation',
    template: '%s | Gentle Pet Cremation',
  },
  description: 'Compare trusted pet cremation providers in Brisbane. Get instant quotes, read reviews, and choose the right service for your pet. Fast, simple, and local. Private cremations with ashes returned.',
  keywords: ['pet cremation brisbane', 'pet cremation quotes brisbane', 'dog cremation brisbane', 'cat cremation brisbane', 'pet cremation cost brisbane', 'brisbane pet cremation', 'private pet cremation brisbane'],
  verification: {
    google: 'HXHHrNjNka7dStJoXwyEhMKccgLiyKkIAF5wIlF3mPc',
  },
  alternates: {
    canonical: 'https://www.gentlepetcremation.com',
  },
  openGraph: {
    title: 'Pet Cremation Brisbane – Get Quotes from Local Providers',
    description: 'Compare trusted pet cremation providers in Brisbane. Get instant quotes and choose the right service for your pet.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Gentle Pet Cremation Brisbane' }],
    locale: 'en_AU',
    type: 'website',
    siteName: 'Gentle Pet Cremation',
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
    description: 'Compare pet cremation providers in Brisbane. Get quotes from trusted local services. Private cremations with ashes returned.',
    url: 'https://www.gentlepetcremation.com',
    telephone: '+61 473 043 696',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brisbane',
      addressRegion: 'QLD',
      addressCountry: 'AU',
    },
    areaServed: ['Brisbane', 'Queensland', 'Australia'],
    serviceType: 'Pet Cremation Services',
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pet Cremation Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Pet Cremation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dog Cremation Brisbane' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cat Cremation Brisbane' } },
      ]
    }
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
