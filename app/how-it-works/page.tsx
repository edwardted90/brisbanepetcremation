import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Pet Cremation Works in Brisbane | Simple Process',
  description: 'Learn how pet cremation works in Brisbane. Simple 4-step process from collection to ashes return. Compare providers and get started today.',
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">How It Works</h1>
        <p className="mt-4 text-xl text-zinc-600">A simple process from start to finish.</p>

        <div className="mt-12 space-y-10">
          {[
            ["1", "Request a Quote", "Fill out the form or call. We'll connect you with local providers."],
            ["2", "Choose a Provider", "Compare options and select the service that fits your needs and budget."],
            ["3", "Collection", "The chosen provider arranges collection from your home or vet with care."],
            ["4", "Cremation & Return", "Private cremation is performed and ashes are returned to you within 5–7 days."],
          ].map(([num, title, desc]) => (
            <div key={num} className="flex gap-6">
              <div className="text-4xl font-semibold text-zinc-300">{num}</div>
              <div>
                <div className="text-2xl font-semibold">{title}</div>
                <p className="mt-2 text-lg text-zinc-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/#quote" className="inline-block rounded-full bg-zinc-900 px-10 py-5 text-xl font-semibold text-white transition hover:bg-black">
            Start the Process
          </a>
        </div>
      </div>
    </div>
  );
}
