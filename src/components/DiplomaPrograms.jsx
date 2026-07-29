import React, { useState } from 'react';
import { DIPLOMA_COURSES } from '../data/academyData';
import { getWhatsAppUrl } from '../utils/contactUtils';

export default function DiplomaPrograms() {
  const [expandedCourseId, setExpandedCourseId] = useState(null);

  const toggleExpand = (courseId) => {
    setExpandedCourseId(prev => (prev === courseId ? null : courseId));
  };

  return (
    <section id="courses" className="bg-slate-50 py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200 gap-4">
          <div>
            <span className="font-mono text-xs font-bold text-orangeCTA-600 uppercase tracking-widest block mb-2">
              DIPLOMA PROGRAMMES · COHORT 2026
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Specialized Diploma Tracks
            </h2>
          </div>
          <p className="font-sans text-sm text-slate-600 max-w-md">
            Click <strong className="text-brandBlue-600 font-semibold">"View course details"</strong> to inspect level progression, tools covered, and eligibility criteria.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIPLOMA_COURSES.map((course) => {
            const isExpanded = expandedCourseId === course.id;

            return (
              <div
                key={course.id}
                className={`bg-white border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isExpanded 
                    ? 'border-brandBlue-500 shadow-xl lg:col-span-2 ring-2 ring-brandBlue-500/20' 
                    : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                <div className="p-6 space-y-4">
                  
                  {/* Top Bar: Code & Duration */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="font-mono text-xs font-bold text-orangeCTA-600 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-lg">
                      {course.code}
                    </span>
                    <span className="font-mono text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                      {course.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-slate-900 leading-snug">
                    {course.title}
                  </h3>

                  {/* Blurb */}
                  <p className="font-sans text-sm text-slate-600 leading-relaxed min-h-[2.75rem]">
                    {course.blurb}
                  </p>

                  {/* Action Bar */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <a
                      href={getWhatsAppUrl(course.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      <span>Ask about this</span>
                    </a>

                    <button
                      onClick={() => toggleExpand(course.id)}
                      type="button"
                      className="font-mono text-xs font-semibold text-brandBlue-600 hover:text-brandBlue-800 underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 rounded"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? 'Close details [-]' : 'View course details [+]'}
                    </button>
                  </div>

                </div>

                {/* EXPANDABLE SECTION DETAILS */}
                {isExpanded && (
                  <div className="bg-slate-50 border-t border-slate-200 p-6 space-y-6 animate-fadeIn">
                    
                    {/* Level 1, 2, 3 Breakdown */}
                    <div className="space-y-4">
                      <h4 className="font-heading text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                        Course Architecture & Progression
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {course.levels.map((lvl, idx) => (
                          <div key={idx} className="bg-white border border-slate-200 p-4 rounded-xl space-y-2 shadow-xs">
                            <span className="font-mono text-[11px] font-bold text-brandBlue-600 block uppercase">
                              {lvl.level}
                            </span>
                            <ul className="space-y-1.5">
                              {lvl.topics.map((tp, tIdx) => (
                                <li key={tIdx} className="font-sans text-xs text-slate-700 flex items-start gap-1.5">
                                  <span className="text-orangeCTA-500 font-bold">•</span>
                                  <span>{tp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Topics & Tools Covered Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-200">
                      
                      {/* Key Modules */}
                      <div className="space-y-2">
                        <span className="font-mono text-xs font-bold text-slate-900 uppercase block">
                          Key Modules Covered:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {course.topicsCovered.map((topic, i) => (
                            <span key={i} className="bg-white border border-slate-200 text-slate-700 font-sans text-xs px-3 py-1 rounded-lg">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Software & Tools */}
                      <div className="space-y-2">
                        <span className="font-mono text-xs font-bold text-slate-900 uppercase block">
                          Software & Tools Stack:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {course.toolsCovered.map((tool, i) => (
                            <span key={i} className="bg-brandBlue-500/10 border border-brandBlue-500/20 text-brandBlue-700 font-mono text-xs font-semibold px-3 py-1 rounded-lg">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Eligibility & Fees Line */}
                    <div className="bg-white border border-slate-200 p-4 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
                      <div>
                        <strong className="font-mono text-slate-900 uppercase block mb-1">Eligibility Criteria:</strong>
                        <span className="text-slate-600">{course.eligibility}</span>
                      </div>
                      <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-3 md:pt-0 md:pl-4">
                        {/* PLACEHOLDER: Course fee amount (currently "To be confirmed") */}
                        <strong className="font-mono text-orangeCTA-600 uppercase block mb-1">Programme Fee:</strong>
                        <span className="font-mono text-slate-900 font-bold">{course.fee}</span>
                        <span className="text-slate-500 block text-[11px] mt-0.5">Contact admissions desk via WhatsApp for fee structure & payment plans.</span>
                      </div>
                    </div>

                    {/* Direct Enrollment Button */}
                    <div className="pt-2 flex justify-end">
                      <a
                        href={getWhatsAppUrl(`Hello TS Global Academy, I want to enrol in ${course.title} (${course.code}). Please send enrollment details.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-orangeCTA-500 to-orangeCTA-600 hover:from-orangeCTA-600 hover:to-orangeCTA-700 text-white font-heading text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl shadow-md transition-all hover:scale-[1.02]"
                      >
                        <span>Enquire for {course.code} Enrollment</span>
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
