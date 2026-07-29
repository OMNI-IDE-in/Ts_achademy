import React, { useState } from 'react';
import { getWhatsAppUrl, WHATSAPP_NUMBER } from '../utils/contactUtils';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Courses', href: '#courses' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Mark + Wordmark */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orangeCTA-500 rounded-lg p-1"
          >
            {/* Original Geometric Icon: Layered Hexagon with Dynamic Facets */}
            <div className="w-10 h-10 bg-gradient-to-tr from-brandBlue-600 via-skyBlue-500 to-orangeCTA-500 p-0.5 rounded-xl shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <svg className="w-6 h-6 text-skyBlue-400 group-hover:text-orangeCTA-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white leading-none">
                TS GLOBAL <span className="text-orangeCTA-500">ACADEMY</span>
              </span>
              <span className="font-mono text-[10px] text-slate-400 tracking-widest uppercase mt-1">
                DIPLOMA INSTITUTE · EST. 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-slate-300 hover:text-white transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orangeCTA-500 rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* WhatsApp Icon Button */}
            <a
              href={getWhatsAppUrl("Hello TS Global Academy, I want to inquire about diploma admissions.")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all border border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orangeCTA-500"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <svg className="w-5 h-5 fill-current text-emerald-400" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>

            {/* Phone/Tel Icon Button */}
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="p-2.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all border border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orangeCTA-500"
              title="Call Admissions Desk"
              aria-label="Call Admissions Desk"
            >
              <svg className="w-5 h-5 text-skyBlue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>

            {/* Primary Warm Orange CTA Button */}
            <a
              href={getWhatsAppUrl("Hello TS Global Academy, I want to start my diploma application.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orangeCTA-500 to-orangeCTA-600 hover:from-orangeCTA-600 hover:to-orangeCTA-700 text-white font-heading text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl shadow-lg shadow-orangeCTA-500/20 transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-orangeCTA-500"
            >
              Start Your Diploma
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orangeCTA-500 rounded-lg border border-slate-700"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-base font-medium text-slate-200 hover:text-orangeCTA-500 py-2 border-b border-slate-800"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <a
              href={getWhatsAppUrl("Hello TS Global Academy, I want to start my diploma application.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-orangeCTA-500 text-white font-heading text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-xl shadow-md"
            >
              Start Your Diploma
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
