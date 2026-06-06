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
    default: 'Private Pet Cremation Brisbane | Gentle & Compassionate Services',
    template: '%s | Gentle Pet Cremation',
  },
  description: 'Offering private pet cremation services in Brisbane with individual cremation and ashes returned. Compassionate care, 24/7 support, and transparent pricing. Get your free quote today.',
  keywords: ['pet cremation brisbane', 'pet cremation quotes brisbane', 'dog cremation brisbane', 'cat cremation brisbane', 'pet cremation cost brisbane', 'brisbane pet cremation', 'private pet cremation brisbane'],
  verification: {
    google: 'HXHHrNjNka7dStJoXwyEhMKccgLiyKkIAF5wIlF3mPc',
  },
  alternates: {
    canonical: 'https://www.gentlepetcremation.com',
  },
  openGraph: {
    title: 'Private Pet Cremation Brisbane | Gentle & Compassionate Services',
    description: 'Offering private pet cremation services in Brisbane with individual cremation and ashes returned. Compassionate care, 24/7 support, and transparent pricing.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Gentle Pet Cremation Brisbane' }],
    locale: 'en_AU',
    type: 'website',
    siteName: 'Gentle Pet Cremation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Pet Cremation Brisbane | Gentle & Compassionate Services',
    description: 'Offering private pet cremation services in Brisbane with individual cremation and ashes returned.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
