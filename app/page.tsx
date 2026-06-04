export default function BrisbanePetCremation() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Brisbane Pet Cremation",
    "description": "Compassionate, individual pet cremation services in Brisbane.",
    "url": "https://brisbanepetcremation.com.au",
    "telephone": "0473 043 696",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brisbane",
      "addressRegion": "QLD",
      "addressCountry": "AU"
    },
    "areaServed": "Brisbane, Queensland"
  };
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      {/* Hero */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <img src="/hero.jpg" alt="Peaceful pet cremation moment" className="mx-auto mb-10 rounded-2xl shadow-xl max-h-[420px] object-cover" />
          
          <h1 className="text-5xl font-semibold tracking-tighter">
            Pet Cremation Brisbane
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-600">
            Professional and compassionate pet cremation services for families across Brisbane. Private cremations with ashes returned.
          </p>
          <p className="mt-4 text-sm tracking-[2px] text-zinc-500">PRIVATE CREMATIONS • ASHES RETURNED • 24/7 COLLECTION</p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <a href="tel:0473043696" className="inline-block rounded-full bg-zinc-900 px-10 py-4 text-lg font-semibold text-white transition hover:bg-black">
              Call 0473 043 696
            </a>
            <p className="text-sm text-zinc-500">or request a quote below</p>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">How It Works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            We connect you with trusted local pet cremation providers in Brisbane. Compare options and choose what works best for you.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <img src="/trust.jpg" alt="Caring moment with pet" className="rounded-2xl shadow-lg max-h-[380px] object-cover" />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">Individual Cremations Only</h3>
            <p className="mt-2 text-zinc-600">Your pet is cremated alone. Never shared with other animals.</p>
          </div>
          <div>
            <h3 className="font-semibold">Professional Home Collection</h3>
            <p className="mt-2 text-zinc-600">We collect your pet from your home or vet with care and dignity.</p>
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
          <h2 className="text-center text-3xl font-semibold tracking-tight">Our Services</h2>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <h3 className="text-xl font-semibold">Private Pet Cremation Brisbane</h3>
              <p className="mt-3 text-zinc-600">Individual cremation with ashes returned in a premium urn.</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <h3 className="text-xl font-semibold">Dog Cremation Brisbane</h3>
              <p className="mt-3 text-zinc-600">Specialised care for dogs of all sizes with dignity and respect.</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <h3 className="text-xl font-semibold">Cat Cremation Brisbane</h3>
              <p className="mt-3 text-zinc-600">Gentle and respectful cremation service for cats.</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <h3 className="text-xl font-semibold">Additional Options</h3>
              <p className="mt-3 text-zinc-600">Paw prints, fur keepsakes, and a wide range of premium urns available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-3xl font-semibold tracking-tight">How It Works</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-4">
          {[
            ["1", "Contact Us", "Call or request a quote online"],
            ["2", "Collection", "We arrange caring collection from your home or vet"],
            ["3", "Cremation", "Private cremation performed with dignity"],
            ["4", "Ashes Return", "Returned to you within 5–7 days"],
          ].map(([num, title, desc]) => (
            <div key={num}>
              <div className="text-sm font-medium text-zinc-500">{num}</div>
              <div className="mt-2 text-lg font-semibold">{title}</div>
              <p className="mt-1 text-zinc-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      {/* Lead Form */}
      <section id="quote" className="border-t border-zinc-200 bg-white py-16">
        <div className="mx-auto max-w-xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Request a Quote</h2>
            <p className="mt-3 text-zinc-600">Get in touch to arrange a caring and respectful service for your pet.</p>
          </div>

          <form className="mt-10 space-y-4">
            <input type="text" placeholder="Your Name" className="w-full rounded-xl border border-zinc-300 px-5 py-4 text-lg" required />
            <input type="tel" placeholder="Phone Number" className="w-full rounded-xl border border-zinc-300 px-5 py-4 text-lg" required />
            <input type="text" placeholder="Pet Type (Dog, Cat, etc.)" className="w-full rounded-xl border border-zinc-300 px-5 py-4 text-lg" />
            <button type="submit" className="w-full rounded-full bg-zinc-900 py-5 text-xl font-semibold text-white transition hover:bg-black">
              Request Quote
            </button>
          </form>
          <p className="mt-4 text-center text-xs text-zinc-500">We respect your privacy. Your details are only shared with verified local providers.</p>
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
