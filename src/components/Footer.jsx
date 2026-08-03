import React from 'react';
import UniversityLogo from './UniversityLogo';

export default function Footer() {
  const footerColumns = [
    {
      title: "Admissions",
      links: [
        { name: "Diploma Requirements", href: "#admissions" },
        { name: "International Applications", href: "#admissions" },
        { name: "Tuition & Corporate Grants", href: "#admissions" },
        { name: "Academic Calendar 2026–2027", href: "#admissions" },
        { name: "Registrar Verification Desk", href: "#admissions" },
      ],
    },
    {
      title: "Research",
      links: [
        { name: "School of Artificial Intelligence", href: "#programs" },
        { name: "Autonomous Robotics & ROS2 Lab", href: "#programs" },
        { name: "Architectural BIM & Topology", href: "#programs" },
        { name: "Computational Semantics & LLMs", href: "#programs" },
        { name: "Statutory Tax Systems & Audit", href: "#programs" },
      ],
    },
    {
      title: "Campus",
      links: [
        { name: "Applied Laboratories", href: "#campus" },
        { name: "The Research Archives", href: "#campus" },
        { name: "Prototyping Workshop", href: "#campus" },
        { name: "Executive Amphitheaters", href: "#campus" },
        { name: "International Commons", href: "#campus" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Registrar Admissions Desk", href: "mailto:admissions@tsglobalacademy.edu" },
        { name: "Faculty Chair Office", href: "mailto:faculty@tsglobalacademy.edu" },
        { name: "Corporate Placement Partnership", href: "mailto:placement@tsglobalacademy.edu" },
        { name: "Press & Media Relations", href: "mailto:media@tsglobalacademy.edu" },
        { name: "Global Campus Directory", href: "#contact" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "LinkedIn Academic Page", href: "https://linkedin.com" },
        { name: "IEEE/ACM Scholar Network", href: "https://ieee.org" },
        { name: "GitHub Engineering Lab", href: "https://github.com" },
        { name: "YouTube Lecture Series", href: "https://youtube.com" },
        { name: "Alumni Fellowship Portal", href: "#alumni" },
      ],
    },
    {
      title: "Policies",
      links: [
        { name: "Academic Integrity Charter", href: "#policies" },
        { name: "ISO 9001:2015 Compliance", href: "#policies" },
        { name: "International Diploma Statutes", href: "#policies" },
        { name: "Student Privacy & GDPR", href: "#policies" },
        { name: "Statutory Fee Guidelines", href: "#policies" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0F172A] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Top Header Section of Footer: Crest Logo + Institutional Charter */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-14 border-b border-slate-800">
          <div className="space-y-4 max-w-lg">
            <UniversityLogo size="lg" variant="dark" showWordmark={true} />
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
              An independent international diploma institute dedicated to practical software engineering, artificial intelligence, building design, and digital business compliance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="#admissions"
              className="inline-flex items-center justify-center bg-[#B8860B] hover:bg-[#D4A017] text-[#0F172A] font-sans text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-md shadow-sm transition-all"
            >
              Application Portal 2026–2027
            </a>
            <a
              href="mailto:admissions@tsglobalacademy.edu"
              className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider px-7 py-4 rounded-md border border-slate-700 transition-all"
            >
              Registrar Desk Email
            </a>
          </div>
        </div>

        {/* 6 University Columns: Admissions, Research, Campus, Contact, Social, Policies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 py-14 border-b border-slate-800">
          {footerColumns.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="font-heading text-sm sm:text-base font-bold text-white tracking-wide">
                {col.title}
              </h4>
              <ul className="space-y-2.5 font-sans">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors block leading-snug"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal & Accreditation Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans">
          <p>© {new Date().getFullYear()} TS Global Academy · Institute of Applied Sciences. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <span>Accredited Academic Standard ISO 9001:2015</span>
            <span>International Diploma Charter</span>
            <span>Veritas et Scientia Applicata</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
