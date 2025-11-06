import React from 'react';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import AuthSection from './components/AuthSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-rose-50">
      {/* Top navigation */}
      <header className="sticky top-0 z-20 border-b border-purple-100/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold text-slate-900">
            <span className="rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">AI Stock Analyzer</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            <a href="#pricing" className="hover:text-purple-700">Pricing</a>
            <a href="#auth" className="hover:text-purple-700">Auth</a>
            <a href="#blog" className="hover:text-purple-700">Blog</a>
            <a href="#contact" className="hover:text-purple-700">Contact</a>
          </nav>
          <a href="#auth" className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-purple-600/30 hover:bg-purple-700">Sign in</a>
        </div>
      </header>

      <main>
        <HeroSection />
        <PricingSection />
        <AuthSection />
        <BlogSection />
        <ContactSection />
      </main>

      <footer className="border-t border-purple-100/70 bg-white/70 py-8 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} AI Stock Analyzer. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#" className="hover:text-purple-700">Privacy</a>
            <a href="#" className="hover:text-purple-700">Terms</a>
            <a href="#contact" className="hover:text-purple-700">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
