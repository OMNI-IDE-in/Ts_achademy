import React, { useState } from 'react';
import { getWhatsAppUrl, getMailtoUrl, getGmailUrl, copyEmailToClipboard, ADMISSIONS_EMAIL } from '../utils/contactUtils';

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const checklistItems = [
    { title: "Hands-on Capstone Projects", desc: "Build verified software & hardware" },
    { title: "Learn from Industry Mentors", desc: "Practitioner-led instruction" },
    { title: "Small Batches for Focused Learning", desc: "Individualized code review" },
    { title: "Live + Recorded Flexible Learning", desc: "Weekend classes, 24/7 access" }
  ];

  const handleCopyEmail = async () => {
    const success = await copyEmailToClipboard();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-brandBlue-900 to-sky-900 text-white py-16 sm:py-24 overflow-hidden border-b border-slate-800">
      
      {/* Background Decorative Faint Grid Line Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-sky-500/30 px-3.5 py-1.5 rounded-full text-sky-300 font-mono text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-orangeCTA-500 animate-pulse" />
              7 INDUSTRY-ORIENTED DIPLOMA PROGRAMMES
            </div>

            {/* Two-Tone Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              <span className="inline-block bg-slate-900 border border-slate-700/80 text-white px-4 py-1 rounded-2xl shadow-inner my-1 mr-2">
                Diploma Programmes
              </span>
              <span className="bg-gradient-to-r from-sky-300 via-white to-orangeCTA-500 bg-clip-text text-transparent">
                Built for Career-Ready Skills.
              </span>
            </h1>

            {/* Subtext */}
            <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              TS Global Academy delivers practical 2026 diploma tracks in AI, Robotics, Data Science, Architecture, Prompt Engineering, GST, and Digital Marketing. Graduate with verified portfolio builds.
            </p>

            {/* 4-Item Checklist in Colored Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl flex items-start gap-3 backdrop-blur-sm">
                  <div className="w-6 h-6 rounded-lg bg-orangeCTA-500/20 border border-orangeCTA-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-orangeCTA-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading text-xs font-bold text-white leading-snug">{item.title}</h4>
                    <p className="font-sans text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Side Compact Admissions Card (Form-Free) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md relative">
              
              {/* Decorative Accent Ring */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-orangeCTA-500/10 rounded-full blur-xl pointer-events-none" />

              <div className="space-y-5 text-center sm:text-left">
                
                {/* Header */}
                <div className="space-y-2 border-b border-slate-800 pb-4">
                  <span className="font-mono text-xs font-bold text-orangeCTA-500 uppercase tracking-widest block">
                    DIRECT ADMISSIONS DESK
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Talk to Our Admissions Team
                  </h3>
                  <p className="font-sans text-xs text-slate-300 leading-relaxed">
                    Direct access to our admissions team — connect via WhatsApp, Email app, Gmail, or copy our email directly.
                  </p>
                </div>

                {/* Primary Warm Orange WhatsApp Button */}
                <a
                  href={getWhatsAppUrl("Hello TS Global Academy, I am interested in enrolling in a diploma programme.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orangeCTA-500 to-orangeCTA-600 hover:from-orangeCTA-600 hover:to-orangeCTA-700 text-white font-heading text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg shadow-orangeCTA-500/25 transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-orangeCTA-500"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>

                {/* Multi-Option Email Actions */}
                <div className="space-y-2 pt-1">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={getMailtoUrl("Inquiry: TS Global Academy Diploma Admissions")}
                      className="inline-flex items-center justify-center gap-1.5 bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white font-heading text-xs font-semibold uppercase tracking-wider p-3 rounded-xl border border-slate-700 transition-all text-center"
                      title="Open default email app"
                    >
                      <svg className="w-4 h-4 text-sky-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Mail App</span>
                    </a>

                    <a
                      href={getGmailUrl("Inquiry: TS Global Academy Diploma Admissions")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white font-heading text-xs font-semibold uppercase tracking-wider p-3 rounded-xl border border-slate-700 transition-all text-center"
                      title="Open directly in Gmail webmail"
                    >
                      <svg className="w-4 h-4 text-rose-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08C21.691 2.279 24 3.434 24 5.457z"/>
                      </svg>
                      <span>Gmail Web</span>
                    </a>
                  </div>

                  {/* Copy Email to Clipboard Bar */}
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-full flex items-center justify-between bg-slate-950/80 hover:bg-slate-950 text-slate-300 text-xs px-3.5 py-2.5 rounded-xl border border-slate-800 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-orangeCTA-500"
                  >
                    <span className="font-mono text-[11px] text-slate-300 truncate">{ADMISSIONS_EMAIL}</span>
                    <span className="font-mono text-[10px] font-bold text-orangeCTA-500 bg-orangeCTA-500/10 px-2 py-0.5 rounded shrink-0 group-hover:bg-orangeCTA-500 group-hover:text-white transition-colors">
                      {copied ? "✓ Copied!" : "Copy Email"}
                    </span>
                  </button>
                </div>

                {/* Footnote */}
                <div className="pt-1 text-center">
                  <span className="font-mono text-[11px] text-slate-400">
                    Direct Email: <strong className="text-slate-200">{ADMISSIONS_EMAIL}</strong>
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
