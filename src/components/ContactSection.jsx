import React, { useState } from 'react';

const ContactSection = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We\'ll be in touch within 1 business day.');
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_20%,rgba(99,102,241,0.1),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Contact us</h2>
            <p className="mt-3 max-w-xl text-slate-600">Have questions about pricing, security, or enterprise features? Send a note and we\'ll respond quickly.</p>
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-purple-50 via-indigo-50 to-rose-50 p-6 ring-1 ring-purple-100">
              <p className="text-sm text-slate-700">Prefer email? Reach us at</p>
              <a href="mailto:hello@aistockanalyzer.app" className="mt-1 inline-block text-purple-700 hover:underline">hello@aistockanalyzer.app</a>
            </div>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl bg-white/80 p-8 ring-1 ring-purple-200 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="text-sm text-slate-700" htmlFor="name">Name</label>
                <input id="name" className="mt-1 w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-200" placeholder="Alex Johnson" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm text-slate-700" htmlFor="company">Company</label>
                <input id="company" className="mt-1 w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-200" placeholder="Acme Capital" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-700" htmlFor="email">Work email</label>
                <input id="email" type="email" className="mt-1 w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-200" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-700" htmlFor="message">Message</label>
                <textarea id="message" rows={4} className="mt-1 w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-200" placeholder="Tell us about your use case" />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-xl bg-purple-600 px-5 py-3 text-white shadow-lg shadow-purple-600/30 hover:bg-purple-700">Send message</button>
            {status && <p className="mt-3 text-sm text-green-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
