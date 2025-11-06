import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Soft background wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-100 via-purple-50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100/80 px-3 py-1 text-sm text-purple-700 ring-1 ring-purple-200">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              AI Stock Analyzer
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Smarter stock insights with a calm, pastel aesthetic
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-7 text-slate-600">
              Let our AI read filings, earnings calls, and price action to surface
              clear opportunities and risks—so you can act with confidence.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-5 py-3 text-white shadow-lg shadow-purple-600/30 transition hover:bg-purple-700"
              >
                Get Started
              </a>
              <a
                href="#blog"
                className="inline-flex items-center justify-center rounded-xl border border-purple-200 bg-white px-5 py-3 text-purple-700 hover:border-purple-300 hover:bg-purple-50"
              >
                Read the blog
              </a>
            </div>
            <dl className="mt-10 grid w-full max-w-lg grid-cols-2 gap-6">
              <div>
                <dt className="text-sm text-slate-500">Coverage</dt>
                <dd className="text-xl font-semibold text-slate-900">5,000+ tickers</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">Latency</dt>
                <dd className="text-xl font-semibold text-slate-900">Real-time signals</dd>
              </div>
            </dl>
          </div>

          {/* Spline Scene */}
          <div className="relative h-[420px] w-full rounded-3xl bg-gradient-to-br from-purple-50 via-indigo-50 to-rose-50 ring-1 ring-purple-100/60 md:h-[520px]">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* soft radial glow overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(60%_60%_at_50%_40%,rgba(168,85,247,0.25),rgba(255,255,255,0))]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
