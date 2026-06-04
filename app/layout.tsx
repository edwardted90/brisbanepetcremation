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
  title: "Pet Cremation Brisbane | Dignified & Professional Pet Cremation Services",
  description: "Compassionate, individual pet cremation services in Brisbane. Private cremations, ashes returned, and caring support for families saying goodbye to their pets.",
  keywords: ["pet cremation brisbane", "dog cremation brisbane", "cat cremation brisbane", "pet cremation services brisbane", "animal cremation brisbane"],
  other: {
    "google-site-verification": "HXHHrNjNka7dStJoXwyEhMKccgLiyKkIAF5wIlF3mPc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
