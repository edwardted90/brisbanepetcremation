import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pet Cremation Cost Brisbane | Compare Prices',
  description: 'Find out how much pet cremation costs in Brisbane. Transparent pricing for private pet cremation in Brisbane. Get transparent quotes.',
  keywords: ['pet cremation cost brisbane', 'dog cremation cost brisbane', 'cat cremation cost brisbane'],
};

export default function CostPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Pet Cremation Cost in Brisbane</h1>
        <p className="mt-4 text-xl text-zinc-600">We offer transparent pricing with no hidden fees. Get a personalised quote for your pet.</p>

        <div className="mt-12 space-y-8">
          <div className="rounded-2xl border border-zinc-200 p-8">
            <h3 className="text-2xl font-semibold">Private Cremation</h3>
            <p className="mt-2 text-zinc-600">Most common option. Your pet is cremated individually and ashes are returned to you.</p>
            <p className="mt-4 text-sm text-zinc-500">Price range varies by provider and pet size.</p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-8">
            <h3 className="text-2xl font-semibold">Dog Cremation Cost</h3>
            <p className="mt-2 text-zinc-600">Larger dogs typically cost more due to size. We provide competitive and transparent rates.</p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-8">
            <h3 className="text-2xl font-semibold">Cat Cremation Cost</h3>
            <p className="mt-2 text-zinc-600">Generally more affordable than dogs. Many local options available.</p>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-zinc-50 p-10 text-center">
          <p className="text-lg">We provide clear, upfront pricing. Request a quote for accurate local pricing.</p>
          <a href="/#quote" className="mt-6 inline-block rounded-full bg-zinc-900 px-10 py-5 text-xl font-semibold text-white transition hover:bg-black">
            Get Free Quotes
          </a>
        </div>
      </div>
    </div>
  );
}
