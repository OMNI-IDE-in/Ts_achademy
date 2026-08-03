import React, { useState } from 'react';
import UniversityLogo from './UniversityLogo';

export default function Navbar({ onOpenApplyModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Official 8 University Header Links
  const navLinks = [
    { name: 'Admissions', href: '#admissions' },
    { name: 'Schools', href: '#schools' },
    { name: 'Programs', href: '#programs' },
    { name: 'Research', href: '#research' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Campus', href: '#campus' },
    { name: 'Student Life', href: '#student-life' },
    { name: 'About', href: '#why-us' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          
          {/* Logo & University Name (Left) */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <UniversityLogo size="md" variant="light" showWordmark={true} />
          </div>

          {/* Desktop Navigation Links (Center) */}
          <nav className="hidden xl:flex space-x-3 lg:space-x-4 2xl:space-x-6 items-center" aria-label="University Directory">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-[10px] 2xl:text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-[#0F172A] transition-colors py-2 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Apply CTA (Right) */}
          <div className="hidden xl:flex items-center space-x-6 shrink-0">
            <button
              onClick={() => onOpenApplyModal && onOpenApplyModal('aiml')}
              type="button"
              className="inline-flex items-center justify-center bg-[#0F172A] hover:bg-[#1E3A8A] text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider px-5 py-2.5 rounded-md shadow-sm border border-[#0F172A] transition-all hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B] cursor-pointer whitespace-nowrap"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <div className="flex xl:hidden items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenApplyModal && onOpenApplyModal('aiml')}
              type="button"
              className="sm:hidden inline-flex items-center justify-center bg-[#0F172A] text-white font-sans text-xs font-semibold uppercase tracking-wider px-3.5 py-2 rounded-md shadow-sm cursor-pointer whitespace-nowrap"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-[#0F172A] hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B]"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle university menu"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
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
        <div id="mobile-menu" className="xl:hidden border-t border-[#E5E7EB] bg-white px-4 pt-4 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-base font-medium text-slate-800 hover:text-[#1E3A8A] hover:bg-slate-50 px-3 py-2.5 rounded-md border-b border-slate-100 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenApplyModal) onOpenApplyModal('aiml');
              }}
              type="button"
              className="w-full text-center bg-[#0F172A] hover:bg-[#1E3A8A] text-white font-sans text-sm font-semibold uppercase tracking-wider px-4 py-3 rounded-md shadow-sm cursor-pointer"
            >
              Apply Now — Admissions
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
