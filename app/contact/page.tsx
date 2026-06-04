import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Pet Cremation Brisbane Quotes',
  description: 'Get in touch for pet cremation quotes in Brisbane. Call or request a quote online.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Contact Us</h1>
        <p className="mt-4 text-xl text-zinc-600">Get connected with trusted pet cremation providers in Brisbane.</p>

        <div className="mt-12 space-y-8 text-lg">
          <div>
            <div className="font-semibold">Phone</div>
            <a href="tel:0473043696" className="text-3xl font-semibold text-zinc-900">0473 043 696</a>
          </div>

          <div>
            <div className="font-semibold">Request a Quote</div>
            <p className="mt-1 text-zinc-600">Use the form on the homepage for the fastest response.</p>
          </div>

          <div>
            <div className="font-semibold">Hours</div>
            <p className="mt-1 text-zinc-600">Available 7 days a week. After-hours collection supported by many providers.</p>
          </div>
        </div>

        <div className="mt-16">
          <a href="/#quote" className="inline-block rounded-full bg-zinc-900 px-10 py-5 text-xl font-semibold text-white transition hover:bg-black">
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
}
