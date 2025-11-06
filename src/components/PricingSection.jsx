import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'free',
    features: ['2 tickers watchlist', 'Daily email recap', 'Community access'],
    cta: 'Get started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    features: ['Unlimited watchlists', 'Realtime signals', 'Earnings call AI notes', 'Priority support'],
    cta: 'Start Pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    features: ['Team workspaces', 'Portfolio risk dashboard', 'API access', 'SLA + onboarding'],
    cta: 'Talk to sales',
    highlight: false,
  },
];

const PricingCard = ({ tier }) => (
  <div
    className={
      'flex flex-col rounded-2xl p-6 ring-1 bg-white/70 backdrop-blur ring-purple-200 ' +
      (tier.highlight ? 'shadow-xl shadow-purple-300/30 scale-[1.02]' : '')
    }
  >
    <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
    <div className="mt-4 flex items-end gap-1">
      <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
      <span className="text-sm text-slate-500">{tier.period}</span>
    </div>
    <ul className="mt-6 space-y-2 text-sm text-slate-600">
      {tier.features.map((f, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-500" />
          {f}
        </li>
      ))}
    </ul>
    <a
      href="#auth"
      className={
        'mt-8 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition ' +
        (tier.highlight
          ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 hover:bg-purple-700'
          : 'border border-purple-200 text-purple-700 hover:border-purple-300 hover:bg-purple-50')
      }
    >
      {tier.cta}
    </a>
  </div>
);

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_70%_10%,rgba(168,85,247,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Scale from solo investor to enterprise desk with plans built for clarity.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <PricingCard key={t.name} tier={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
