import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pet Cremation Services Brisbane',
  description: 'Professional pet cremation services in Brisbane. Private cremation, dog cremation, cat cremation and additional options available.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Pet Cremation Services in Brisbane</h1>
        <p className="mt-4 max-w-2xl text-xl text-zinc-600">
          We offer a range of professional pet cremation services designed to provide dignity and peace of mind for families in Brisbane.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-8">
            <h3 className="text-2xl font-semibold">Private Pet Cremation</h3>
            <p className="mt-3 text-zinc-600">Individual cremation where your pet is cremated alone. Ashes are returned to you in a premium urn of your choice.</p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-8">
            <h3 className="text-2xl font-semibold">Dog Cremation Brisbane</h3>
            <p className="mt-3 text-zinc-600">Specialised care for dogs of all sizes. Providers offer respectful handling and a range of urn options.</p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-8">
            <h3 className="text-2xl font-semibold">Cat Cremation Brisbane</h3>
            <p className="mt-3 text-zinc-600">Gentle and respectful cremation services specifically for cats. Compassionate and respectful service available.</p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-8">
            <h3 className="text-2xl font-semibold">Additional Options</h3>
            <p className="mt-3 text-zinc-600">Paw prints, fur keepsakes, premium urns, and after-hours collection available as part of our service.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="/#quote" className="inline-block rounded-full bg-zinc-900 px-10 py-5 text-xl font-semibold text-white transition hover:bg-black">
            Get Your Free Quote
          </a>
          <p className="mt-4 text-sm text-zinc-500">Contact us to learn more about our services</p>
        </div>
      </div>
    </div>
  );
}
