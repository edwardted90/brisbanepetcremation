'use client';

import React, { useState } from 'react';

export default function GentlePetCremation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    petType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Gentle Pet Cremation",
    "description": "Compare trusted pet cremation providers in Brisbane. Get instant quotes from local services.",
    "url": "https://www.gentlepetcremation.com",
    "telephone": "0473 043 696",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brisbane",
      "addressRegion": "QLD",
      "addressCountry": "AU"
    },
    "areaServed": "Brisbane, Queensland, Australia",
    "serviceType": "Pet Cremation Services"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does pet cremation cost in Brisbane?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Private pet cremation in Brisbane typically ranges from $250-$450 depending on pet size and service level. Get an instant quote for accurate pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer home collection for pets in Brisbane?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most providers we work with offer professional and compassionate home or vet collection 7 days a week, including after hours."
        }
      },
      {
        "@type": "Question",
        "name": "How long until I receive my pet's ashes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ashes are usually returned within 5-7 business days in a premium urn of your choice."
        }
      }
    ]
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ success: true, message: result.message });
        setFormData({ name: '', phone: '', petType: '' });
      } else {
        setSubmitStatus({ success: false, message: result.message });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Network error. Please call 0473 043 696 directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <img src="/hero.jpg" alt="Peaceful pet cremation moment in Brisbane" className="mx-auto mb-10 rounded-2xl shadow-xl max-h-[420px] object-cover" />
          
          <h1 className="text-5xl font-semibold tracking-tighter">
            Gentle Pet Cremation Brisbane
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-600">
            Compare trusted local providers. Private cremations with ashes returned. Instant quotes from verified Brisbane services.
          </p>
          <p className="mt-4 text-sm tracking-[2px] text-zinc-500">PRIVATE CREMATIONS • HOME COLLECTION • ASHES RETURNED • 24/7 SUPPORT</p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <a href="tel:0473043696" className="inline-block rounded-full bg-zinc-900 px-10 py-4 text-lg font-semibold text-white transition hover:bg-black">
              Call 0473 043 696
            </a>
            <p className="text-sm text-zinc-500">or request a quote below</p>
          </div>
        </div>
      </section>

      {/* Trust / How it Works */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">How It Works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            We connect you with trusted local pet cremation providers in Brisbane. Compare options and choose what works best.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <img src="/trust.jpg" alt="Caring pet cremation service Brisbane" className="rounded-2xl shadow-lg max-h-[380px] object-cover" />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">Individual Cremations Only</h3>
            <p className="mt-2 text-zinc-600">Your pet is cremated alone. Never shared with other animals.</p>
          </div>
          <div>
            <h3 className="font-semibold">Professional Home Collection</h3>
            <p className="mt-2 text-zinc-600">We collect your pet from your home or vet with care and dignity across Brisbane.</p>
          </div>
          <div>
            <h3 className="font-semibold">Ashes Returned to You</h3>
            <p className="mt-2 text-zinc-600">Returned in a premium urn of your choice within 5–7 days.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-semibold tracking-tight">Pet Cremation Services in Brisbane</h2>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <h3 className="text-xl font-semibold">Private Pet Cremation</h3>
              <p className="mt-3 text-zinc-600">Individual cremation with ashes returned in a premium urn. Available for dogs, cats and all pets.</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <h3 className="text-xl font-semibold">Dog Cremation Brisbane</h3>
              <p className="mt-3 text-zinc-600">Specialised care for dogs of all sizes with dignity and respect. Multiple size options available.</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <h3 className="text-xl font-semibold">Cat Cremation Brisbane</h3>
              <p className="mt-3 text-zinc-600">Gentle and respectful cremation service for cats across all Brisbane suburbs.</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <h3 className="text-xl font-semibold">Additional Keepsakes</h3>
              <p className="mt-3 text-zinc-600">Paw prints, fur keepsakes, premium urns and memorial items available from local providers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works steps */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-3xl font-semibold tracking-tight">Simple 4-Step Process</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-4">
          {[
            ["1", "Request Quote", "Fill the form or call us"],
            ["2", "Collection", "Caring home or vet collection arranged"],
            ["3", "Cremation", "Private individual cremation"],
            ["4", "Ashes Return", "Delivered within 5-7 days"],
          ].map(([num, title, desc]) => (
            <div key={num}>
              <div className="text-sm font-medium text-zinc-500">{num}</div>
              <div className="mt-2 text-lg font-semibold">{title}</div>
              <p className="mt-1 text-zinc-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Form - Now Functional */}
      <section id="quote" className="border-t border-zinc-200 bg-white py-16">
        <div className="mx-auto max-w-xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Request a Quote</h2>
            <p className="mt-3 text-zinc-600">Get connected with trusted Brisbane pet cremation providers instantly.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleInputChange}
              className="w-full rounded-xl border border-zinc-300 px-5 py-4 text-lg" 
              required 
            />
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone Number" 
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full rounded-xl border border-zinc-300 px-5 py-4 text-lg" 
              required 
            />
            <input 
              type="text" 
              name="petType"
              placeholder="Pet Type (Dog, Cat, etc.)" 
              value={formData.petType}
              onChange={handleInputChange}
              className="w-full rounded-xl border border-zinc-300 px-5 py-4 text-lg" 
            />
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full rounded-full bg-zinc-900 py-5 text-xl font-semibold text-white transition hover:bg-black disabled:opacity-70"
            >
              {isSubmitting ? 'Sending Request...' : 'Request Quote'}
            </button>
          </form>

          {submitStatus && (
            <div className={`mt-6 p-4 rounded-xl text-center ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              {submitStatus.message}
            </div>
          )}

          <p className="mt-4 text-center text-xs text-zinc-500">We respect your privacy. Your details are only shared with verified local providers.</p>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-semibold tracking-tight mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg">How much does pet cremation cost in Brisbane?</h3>
              <p className="mt-2 text-zinc-600">Private individual pet cremation typically ranges $250–$450. Prices vary by pet size and chosen urn/keepsakes. Request a quote above for exact local pricing.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Is collection available across all Brisbane suburbs?</h3>
              <p className="mt-2 text-zinc-600">Yes — our network of providers services Brisbane North, South, East, West and surrounding areas including Logan, Ipswich and Moreton Bay.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Can I get a quote online right now?</h3>
              <p className="mt-2 text-zinc-600">Yes. Use the form above and a verified local provider will contact you promptly with options and pricing.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-zinc-200 bg-zinc-900 py-20 text-white">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Prefer to Call Directly?</h2>
          <p className="mt-4 text-lg text-zinc-400">Speak with a caring team member 7 days a week.</p>

          <div className="mt-10">
            <a href="tel:0473043696" className="inline-block rounded-full bg-white px-12 py-5 text-2xl font-semibold text-zinc-900 transition hover:bg-zinc-100">
              0473 043 696
            </a>
          </div>
          <p className="mt-8 text-sm text-zinc-500">Available 7 days • After hours collection available</p>
        </div>
      </section>
    </div>
  );
}
