import React, { useState } from 'react';
import { FAQ_ITEMS as ACADEMY_FAQS } from '../data/academyData';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="bg-white py-20 sm:py-28 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16 pb-8 border-b border-[#E5E7EB] max-w-3xl space-y-3">
          <span className="font-sans text-xs font-semibold text-[#B8860B] uppercase tracking-widest block">
            REGISTRAR FAQ · ADMISSIONS & COMPLIANCE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            Frequently Asked Academic Questions
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-700 leading-relaxed">
            Review institutional guidelines regarding international diploma accreditation, laboratory access, tuition structures, and capstone portfolio requirements.
          </p>
        </div>

        {/* Minimal FAQ Accordion Grid */}
        <div className="space-y-4 max-w-4xl">
          {ACADEMY_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="bg-[#FAFAF8] border border-[#E5E7EB] rounded-lg shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  type="button"
                  className="w-full text-left p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B]"
                >
                  <span className="font-heading text-lg sm:text-xl font-bold text-[#0F172A] pr-4">
                    {faq.question || faq.q}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-sans text-xs font-semibold text-slate-500 bg-white border border-[#E5E7EB] px-3 py-1 rounded">
                      {isOpen ? 'Close' : 'Read Answer'}
                    </span>
                    <svg
                      className={`w-5 h-5 text-[#0F172A] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-[#E5E7EB] bg-white p-6 sm:p-8 space-y-3 animate-fadeIn">
                    <p className="font-sans text-base text-slate-700 leading-relaxed">
                      {faq.answer || faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Admissions Contact Desk Info Box */}
        <div className="mt-14 bg-[#FAFAF8] border border-[#E5E7EB] p-8 rounded-lg max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-sans text-xs font-bold text-[#0F172A] uppercase tracking-wider block">
              Registrar Inquiry Desk
            </span>
            <p className="font-sans text-sm text-slate-600">
              For individualized portfolio review or corporate scholarship guidelines, contact our admissions desk.
            </p>
          </div>
          <a
            href="mailto:admissions@tsglobalacademy.edu"
            className="inline-flex items-center justify-center bg-[#0F172A] hover:bg-[#1E3A8A] text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3.5 rounded-md shadow-sm shrink-0"
          >
            Email Admissions Desk
          </a>
        </div>

      </div>
    </section>
  );
}
