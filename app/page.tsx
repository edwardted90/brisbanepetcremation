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
            Dignified Pet Cremation Services in Brisbane
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-600">
            When the time comes to say goodbye, we provide calm, respectful, and professional pet cremation for families across Brisbane.
          </p>
          <p className="mt-4 text-sm tracking-[2px] text-zinc-500">PRIVATE CREMATIONS • ASHES RETURNED • 24/7 COLLECTION</p>
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Why Brisbane Families Trust Us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            At Brisbane Pet Cremation, we specialise in providing premium, individual pet cremation services with complete transparency and compassion.
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
          <h2 className="text-center text-3xl font-semibold tracking-tight">Pet Cremation Services in Brisbane</h2>
          
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
      <section id="contact" className="border-t border-zinc-200 bg-zinc-900 py-20 text-white">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Get in Touch</h2>
          <p className="mt-4 text-lg text-zinc-400">Call us directly to arrange a caring and respectful service.</p>

          <div className="mt-10">
            <a href="tel:0473043696" className="inline-block rounded-full bg-white px-10 py-5 text-xl font-semibold text-zinc-900 transition hover:bg-zinc-100">
              0473 043 696
            </a>
          </div>

          <p className="mt-8 text-sm text-zinc-500">Available 7 days • After hours collection available</p>
        </div>
      </section>
    </div>
  );
}
