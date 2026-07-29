import React, { useState } from 'react';
import { DIPLOMA_COURSES } from '../data/academyData';
import { getWhatsAppUrl, getMailtoUrl, getGmailUrl, copyEmailToClipboard, WHATSAPP_NUMBER, ADMISSIONS_EMAIL } from '../utils/contactUtils';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    const success = await copyEmailToClipboard();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      
      {/* Primary Contact & Program List Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Top Call to Action Banner */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-orangeCTA-500 uppercase tracking-widest block">
              DIRECT ADMISSIONS DESK
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Ready to build career-ready skills?
            </h3>
            <p className="font-sans text-sm text-slate-300 max-w-xl">
              Connect directly with our admissions team. No complex web forms — immediate enrollment guidance via WhatsApp or Email.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {/* WhatsApp Button */}
            <a
              href={getWhatsAppUrl("Hello TS Global Academy, I am ready to apply for a diploma programme.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orangeCTA-500 to-orangeCTA-600 hover:from-orangeCTA-600 hover:to-orangeCTA-700 text-white font-heading text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-xl shadow-lg shadow-orangeCTA-500/25 transition-all hover:scale-[1.02]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp Us</span>
            </a>

            {/* Mail App Button */}
            <a
              href={getMailtoUrl("Application Inquiry: TS Global Academy")}
              className="inline-flex items-center justify-center gap-2 bg-slate-800 text-slate-200 hover:text-white font-heading text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-xl border border-slate-700 hover:border-slate-600 transition-all"
            >
              <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Mail App</span>
            </a>

            {/* Gmail Webmail Button */}
            <a
              href={getGmailUrl("Application Inquiry: TS Global Academy")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 text-slate-200 hover:text-white font-heading text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-xl border border-slate-700 hover:border-slate-600 transition-all"
            >
              <svg className="w-4 h-4 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08C21.691 2.279 24 3.434 24 5.457z"/>
              </svg>
              <span>Gmail Web</span>
            </a>
          </div>
        </div>

        {/* 3-Column Footer Information */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-slate-800">
          
          {/* Col 1: Brand Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-tr from-brandBlue-600 to-orangeCTA-500 p-0.5 rounded-xl flex items-center justify-center">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
              <h4 className="font-heading text-xl font-extrabold tracking-tight text-white">
                TS GLOBAL <span className="text-orangeCTA-500">ACADEMY</span>
              </h4>
            </div>

            <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-sm">
              An independent diploma institute dedicated to practical software engineering, artificial intelligence, building design, and digital business compliance.
            </p>

            <div className="pt-2 font-mono text-xs text-slate-300 space-y-1">
              <p>WhatsApp: +{WHATSAPP_NUMBER}</p>
              <div className="flex items-center gap-2">
                <span>Admissions: {ADMISSIONS_EMAIL}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="font-mono text-[10px] text-orangeCTA-500 hover:text-white underline"
                >
                  {copied ? "✓ Copied" : "Copy"}
                </button>
              </div>
            </div>
          </div>

          {/* Col 2: List of all 7 Diploma Programmes */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-mono text-xs font-bold text-orangeCTA-500 uppercase tracking-widest border-b border-slate-800 pb-2">
              Diploma Programmes (7)
            </h5>
            <ul className="space-y-2">
              {DIPLOMA_COURSES.map((course) => (
                <li key={course.id}>
                  <a
                    href="#courses"
                    className="font-sans text-xs text-slate-300 hover:text-white flex items-center justify-between gap-2 group transition-colors"
                  >
                    <span>{course.title}</span>
                    <span className="font-mono text-[10px] text-slate-500 group-hover:text-orangeCTA-500">
                      {course.code}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-mono text-xs font-bold text-orangeCTA-500 uppercase tracking-widest border-b border-slate-800 pb-2">
              Quick Navigation
            </h5>
            <ul className="space-y-2 font-sans text-xs text-slate-300">
              <li><a href="#courses" className="hover:text-white transition-colors">All 7 Programmes</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">Flagship Syllabi</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Academic Philosophy</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">Admissions FAQ</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© 2026 TS Global Academy. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Direct Admissions · No Forms Required</span>
            <span className="text-orangeCTA-500 font-bold">EST. 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
