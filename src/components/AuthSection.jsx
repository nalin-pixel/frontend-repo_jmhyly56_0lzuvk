import React from 'react';

const AuthSection = () => {
  return (
    <section id="auth" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white/80 p-8 ring-1 ring-purple-200 backdrop-blur">
            <h3 className="text-2xl font-semibold text-slate-900">Create your account</h3>
            <p className="mt-2 text-sm text-slate-600">Start a free trial — no credit card required.</p>
            <form className="mt-6 grid gap-4">
              <div>
                <label className="text-sm text-slate-700" htmlFor="email">Email</label>
                <input id="email" type="email" className="mt-1 w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-200" placeholder="you@domain.com" />
              </div>
              <div>
                <label className="text-sm text-slate-700" htmlFor="password">Password</label>
                <input id="password" type="password" className="mt-1 w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-200" placeholder="••••••••" />
              </div>
              <button type="button" className="mt-2 inline-flex items-center justify-center rounded-xl bg-purple-600 px-4 py-2 text-white shadow-lg shadow-purple-600/30 hover:bg-purple-700">Sign up</button>
              <p className="text-xs text-slate-500">By signing up you agree to our Terms and Privacy Policy.</p>
            </form>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-purple-50 via-indigo-50 to-rose-50 p-8 ring-1 ring-purple-100">
            <h4 className="text-lg font-semibold text-slate-900">Why join?</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />Personalized watchlists and alerts</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />Summaries of earnings calls and filings</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />Risk and momentum signals updated continuously</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />Priority support and roadmap voting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;
