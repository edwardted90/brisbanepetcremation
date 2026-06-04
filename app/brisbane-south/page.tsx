import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pet Cremation Brisbane South | Local Providers',
  description: 'Pet cremation services for Brisbane South suburbs. Compare providers and get quotes from local services.',
};

export default function BrisbaneSouthPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Pet Cremation Brisbane South</h1>
        <p className="mt-4 text-xl text-zinc-600">Find local pet cremation providers serving Brisbane South suburbs.</p>

        <div className="mt-12">
          <p className="text-lg text-zinc-600">We connect you with trusted providers who service areas including:</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-lg">
            {['Sunnybank', 'Moorooka', 'Coopers Plains', 'Acacia Ridge', 'Eight Mile Plains', 'Runcorn', 'Kuraby', 'Woodridge'].map(area => (
              <li key={area}>• {area}</li>
            ))}
          </ul>
        </div>

        <div className="mt-16 text-center">
          <a href="/#quote" className="inline-block rounded-full bg-zinc-900 px-10 py-5 text-xl font-semibold text-white transition hover:bg-black">
            Get Quotes for Brisbane South
          </a>
        </div>
      </div>
    </div>
  );
}
