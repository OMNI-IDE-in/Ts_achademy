import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/academyData';
import { getWhatsAppUrl, getMailtoUrl } from '../utils/contactUtils';

export default function FAQSection() {
  const [openFaqId, setOpenFaqId] = useState('faq-1');

  const toggleFaq = (id) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="bg-white py-20 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 pb-6 border-b border-slate-200">
          <span className="font-mono text-xs font-bold text-orangeCTA-600 uppercase tracking-widest block mb-2">
            ADMISSIONS & CANDIDATE GUIDANCE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-base text-slate-600">
            Everything you need to know about our diploma structure, eligibility, and direct admissions process.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-slate-50 border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-brandBlue-500 shadow-md ring-2 ring-brandBlue-500/10' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  type="button"
                  className="w-full p-6 text-left flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 hover:bg-slate-100/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs font-bold text-orangeCTA-600 shrink-0 pt-0.5">
                      0{index + 1}
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900">
                      {faq.question}
                    </h3>
                  </div>

                  <span className="font-mono text-sm font-bold text-brandBlue-600 shrink-0 bg-white border border-slate-200 w-8 h-8 rounded-lg flex items-center justify-center shadow-xs">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-200 bg-white font-sans text-sm text-slate-700 leading-relaxed space-y-3">
                    <p>{faq.answer}</p>
                    
                    {faq.id === 'faq-3' && (
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <a
                          href={getWhatsAppUrl("Hello Admissions Team, I'd like to start my enrollment process.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-600 hover:text-emerald-700 underline underline-offset-4"
                        >
                          → Chat with Admissions on WhatsApp
                        </a>
                        <a
                          href={getMailtoUrl("Direct Admissions Request")}
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brandBlue-600 hover:text-brandBlue-800 underline underline-offset-4"
                        >
                          → Send Email to Admissions Desk
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center space-y-4 text-white shadow-xl">
          <h4 className="font-heading text-xl font-bold text-white">
            Have a question not listed here?
          </h4>
          <p className="font-sans text-sm text-slate-300 max-w-lg mx-auto">
            Our admissions officers respond directly via WhatsApp and Email within a few hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={getWhatsAppUrl("Hello TS Global Academy, I have a specific question before enrolling.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orangeCTA-500 to-orangeCTA-600 hover:from-orangeCTA-600 hover:to-orangeCTA-700 text-white font-heading text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.02]"
            >
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={getMailtoUrl("Question regarding Diploma Programmes")}
              className="inline-flex items-center gap-2 bg-slate-800 text-slate-200 hover:text-white font-heading text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-600 transition-all"
            >
              <span>Email Admissions</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
