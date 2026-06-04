import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pet Cremation Services Brisbane | Compare Local Providers',
  description: 'Explore pet cremation options in Brisbane. Compare private cremation, dog cremation, cat cremation and more from trusted local providers. Get quotes today.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Pet Cremation Services in Brisbane</h1>
        <p className="mt-4 max-w-2xl text-xl text-zinc-600">
          Compare different pet cremation options available from local providers across Brisbane. Find the right service for your needs.
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
            <p className="mt-3 text-zinc-600">Gentle and respectful cremation services specifically for cats. Multiple local providers available.</p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-8">
            <h3 className="text-2xl font-semibold">Additional Options</h3>
            <p className="mt-3 text-zinc-600">Paw prints, fur keepsakes, premium urns, and after-hours collection available from many providers.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="/#quote" className="inline-block rounded-full bg-zinc-900 px-10 py-5 text-xl font-semibold text-white transition hover:bg-black">
            Get Your Free Quote
          </a>
          <p className="mt-4 text-sm text-zinc-500">Compare multiple providers • No obligation</p>
        </div>
      </div>
    </div>
  );
}
