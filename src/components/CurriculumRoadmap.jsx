import React, { useState } from 'react';
import { FLAGSHIP_CURRICULA } from '../data/academyData';
import { getWhatsAppUrl } from '../utils/contactUtils';

export default function CurriculumRoadmap() {
  const [openCurriculumId, setOpenCurriculumId] = useState('genai');

  const toggleCurriculum = (id) => {
    setOpenCurriculumId(prev => (prev === id ? null : id));
  };

  return (
    <section id="curriculum" className="bg-white py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-slate-200 max-w-3xl">
          <span className="font-mono text-xs font-bold text-orangeCTA-600 uppercase tracking-widest block mb-2">
            FLAGSHIP CERTIFICATION SYLLABUS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Curriculum Deep-Dive
          </h2>
          <p className="font-sans text-base text-slate-600">
            Examine the phase-by-phase execution roadmap of our flagship master & advanced certifications. Each phase combines foundational theory, hands-on lab projects, and evaluation gates.
          </p>
        </div>

        {/* Flagship Curricula Accordions */}
        <div className="space-y-6">
          {FLAGSHIP_CURRICULA.map((curriculum) => {
            const isOpen = openCurriculumId === curriculum.id;

            return (
              <div
                key={curriculum.id}
                className={`bg-slate-50 border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-brandBlue-500 ring-2 ring-brandBlue-500/20 shadow-md' : 'border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                {/* Header Trigger */}
                <button
                  onClick={() => toggleCurriculum(curriculum.id)}
                  type="button"
                  className="w-full p-6 text-left flex items-start sm:items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 hover:bg-slate-100/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-white bg-brandBlue-600 px-3 py-1 rounded-lg">
                        {curriculum.duration} TRACK
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-700 bg-slate-200 px-2.5 py-1 rounded-lg">
                        {curriculum.prerequisites}
                      </span>
                      <span className="font-mono text-xs font-bold text-orangeCTA-600">
                        {curriculum.totalPhases} PHASES / EVALUATION GATES
                      </span>
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 pt-1">
                      {curriculum.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-brandBlue-600 border border-slate-300 px-3.5 py-2 bg-white rounded-xl shrink-0 shadow-xs">
                    <span>{isOpen ? 'Collapse' : 'Expand Syllabus'}</span>
                    <span className="text-base leading-none">{isOpen ? '−' : '+'}</span>
                  </div>
                </button>

                {/* Accordion Body Content */}
                {isOpen && (
                  <div className="p-6 pt-0 border-t border-slate-200 space-y-6 bg-white">
                    <p className="font-sans text-sm text-slate-600 pt-4 italic">
                      {curriculum.description}
                    </p>

                    {/* 4 Phase Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {curriculum.phases.map((phase) => (
                        <div
                          key={phase.phaseNumber}
                          className="bg-slate-50 border border-slate-200 p-5 space-y-3 rounded-xl relative"
                        >
                          {/* Phase Header */}
                          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                            <span className="font-mono text-xs font-bold text-orangeCTA-600">
                              PHASE {phase.phaseNumber}
                            </span>
                            <span className="font-mono text-xs font-bold text-brandBlue-700 bg-brandBlue-500/10 border border-brandBlue-500/20 px-2.5 py-0.5 rounded-md">
                              {phase.weeks}
                            </span>
                          </div>

                          {/* Phase Title */}
                          <h4 className="font-heading text-base font-bold text-slate-900">
                            {phase.title}
                          </h4>

                          {/* Topics / Bullet Projects */}
                          <ul className="space-y-2 pt-1">
                            {phase.topics.map((topic, tIdx) => (
                              <li key={tIdx} className="font-sans text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                                <span className="text-orangeCTA-500 font-bold shrink-0 mt-0.5">•</span>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Footer Action */}
                    <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="font-mono text-xs text-slate-500">
                        Have custom requirements or need team training?
                      </span>
                      <a
                        href={getWhatsAppUrl(`Hello TS Global Academy, I am inquiring about the detailed syllabus for ${curriculum.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-orangeCTA-500 to-orangeCTA-600 hover:from-orangeCTA-600 hover:to-orangeCTA-700 text-white font-heading text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl shadow-md transition-all hover:scale-[1.02]"
                      >
                        <span>Download Full Syllabus via WhatsApp</span>
                      </a>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
