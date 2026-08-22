import React, { useState } from 'react';
import { DIPLOMA_COURSES as ACADEMY_COURSES } from '../data/academyData';

export default function DiplomaPrograms({ onOpenApplyModal }) {
  const [expandedCourseId, setExpandedCourseId] = useState(null);
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const scrollContainerRef = React.useRef(null);

  const toggleExpand = (id) => {
    setExpandedCourseId(expandedCourseId === id ? null : id);
  };

  const scrollToCourse = (index) => {
    setActiveCourseIndex(index);
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.children[index];
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  };

  const handlePrev = () => {
    const newIdx = Math.max(0, activeCourseIndex - 1);
    scrollToCourse(newIdx);
  };

  const handleNext = () => {
    const newIdx = Math.min(ACADEMY_COURSES.length - 1, activeCourseIndex + 1);
    scrollToCourse(newIdx);
  };

  // Exact mapping of course.id to Faculty/Leadership
  const facultyChairs = {
    "aiml": {
      name: "Mohammed Nihan",
      photo: "/mohammed-nihan-founder-omni-ide-ts-global-academy-executive-director.jpeg",
      department: "School of Artificial Intelligence",
      mode: "On-Campus & Cloud GPU Access",
      certification: "International Diploma in Applied AI",
      outcomes: "Machine Learning Engineer, Applied AI Architect, Data Systems Lead",
    },
    "peng": {
      name: "Mohammed Nihan",
      photo: "/mohammed-nihan-founder-omni-ide-ts-global-academy-executive-director.jpeg",
      department: "School of Cognitive Computation",
      mode: "Intensive Studio & Remote Deployment",
      certification: "International Diploma in Prompt Engineering",
      outcomes: "LLM Systems Engineer, AI Workflow Automator, AI Operations Manager",
    },
    "csec": {
      name: "Abdul Rahman",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      department: "School of Defensive Network Architecture",
      mode: "On-Campus Zero-Trust Network Lab",
      certification: "International Diploma in Cyber Security Architecture",
      outcomes: "Security Operations Center (SOC) Analyst, Network Defense Engineer, Penetration Tester",
    },
    "gst": {
      name: "Dr. Salman Raza",
      photo: "/dr-salman-raza.jpg",
      department: "School of Fiscal Compliance & Accounting",
      mode: "On-Campus Financial Systems Lab",
      certification: "Accredited Diploma in Taxation & Statutory Compliance",
      outcomes: "Senior GST Compliance Architect, Statutory Audit Lead, Enterprise Payroll Strategist",
    },
    "arch": {
      name: "Mohammed Ruman Ali",
      photo: "/mohammed-ruman-ali.jpg",
      department: "School of Building Information Modeling",
      mode: "On-Campus BIM Studio & Hybrid Drafting",
      certification: "International Diploma in Architectural Technologies",
      outcomes: "Senior BIM Coordinator, Parametric Design Technologist, CAD/Revit Manager",
    },
    "robo": {
      name: "Siyadh",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      department: "School of Mechatronics & Autonomous Systems",
      mode: "On-Campus Hardware Prototyping Lab",
      certification: "International Diploma in Robotics & ROS2",
      outcomes: "Robotics Systems Engineer, Industrial Automation Lead, Embedded C++ Developer",
    },
    "dgmk": {
      name: "KP Mohammed Rifadh",
      photo: "/kp-mohammed-rifadh.jpg",
      department: "School of Digital Business & Strategy",
      mode: "Hybrid Brand Marketing Studio",
      certification: "Professional University Diploma in Growth Systems",
      outcomes: "Head of Growth Strategy, Marketing Analytics Director, Global Media Buyer",
    },
    "dsci": {
      name: "KP Mohammed Rifadh",
      photo: "/kp-mohammed-rifadh.jpg",
      department: "School of Data Science & Analytics",
      mode: "On-Campus Statistical Computing Lab",
      certification: "International Diploma in Big Data Systems",
      outcomes: "Senior Data Science Manager, Enterprise Analytics Architect, Business Intelligence Lead",
    },
    "ifrs": {
      name: "KP Mohammed Rifadh",
      photo: "/kp-mohammed-rifadh.jpg",
      department: "School of International Financial Reporting",
      mode: "On-Campus Financial Systems Lab",
      certification: "Diploma in International Financial Reporting (IFRS)",
      outcomes: "IFRS Specialist, Financial Analyst, Global Corporate Accountant",
    },
  };

  return (
    <section id="programs" className="bg-[#FAFAF8] py-20 sm:py-28 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-16 pb-6 sm:pb-8 border-b border-[#E5E7EB] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <span className="font-sans text-xs font-semibold text-[#B8860B] uppercase tracking-widest block">
              ACADEMIC CURRICULUM · COHORT 2026–2027
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
              Specialized University Diploma Programmes
            </h2>
            <p className="font-sans text-base sm:text-lg text-slate-700 leading-relaxed">
              Each intensive diploma is structured around dedicated laboratory work, faculty mentorship, and international industry frameworks—designed to graduate career-ready specialists.
            </p>
          </div>

          {/* Mobile & Tablet Slider Controls */}
          <div className="flex md:hidden items-center justify-between pt-2 border-t border-slate-200/80">
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs font-bold text-[#0F172A]">
                Program {activeCourseIndex + 1} of {ACADEMY_COURSES.length}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                (Swipe ↔)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={activeCourseIndex === 0}
                type="button"
                className={`p-2 rounded-full border border-slate-300 transition-all ${
                  activeCourseIndex === 0 ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400' : 'bg-white text-[#0F172A] hover:bg-slate-100 active:scale-95'
                }`}
                aria-label="Previous Program"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={activeCourseIndex === ACADEMY_COURSES.length - 1}
                type="button"
                className={`p-2 rounded-full border border-slate-300 transition-all ${
                  activeCourseIndex === ACADEMY_COURSES.length - 1 ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400' : 'bg-[#0F172A] text-white hover:bg-[#1E3A8A] active:scale-95'
                }`}
                aria-label="Next Program"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Quick Course Selector Pills */}
        <div className="flex md:hidden overflow-x-auto gap-2 pb-4 -mx-4 px-4 no-scrollbar">
          {ACADEMY_COURSES.map((course, cIdx) => (
            <button
              key={course.id}
              onClick={() => scrollToCourse(cIdx)}
              type="button"
              className={`shrink-0 font-sans text-xs px-3.5 py-1.5 rounded-full border transition-all select-none ${
                activeCourseIndex === cIdx
                  ? 'bg-[#0F172A] text-white border-[#0F172A] font-bold shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 font-medium hover:border-slate-400'
              }`}
            >
              {course.code.split('·')[1]}
            </button>
          ))}
        </div>

        {/* Programs Container: Horizontal Snap Scroll on Mobile (< md), Vertical Stack on Desktop (md+) */}
        <div
          ref={scrollContainerRef}
          onScroll={(e) => {
            const el = e.currentTarget;
            if (window.innerWidth < 768 && el.children.length > 0) {
              const cardWidth = el.children[0].offsetWidth + 16;
              const newIndex = Math.round(el.scrollLeft / cardWidth);
              if (newIndex >= 0 && newIndex < ACADEMY_COURSES.length && newIndex !== activeCourseIndex) {
                setActiveCourseIndex(newIndex);
              }
            }
          }}
          className="flex md:flex-col overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none gap-4 sm:gap-6 md:gap-10 pb-6 pt-1 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 no-scrollbar"
        >
          {ACADEMY_COURSES.map((course, idx) => {
            const chair = facultyChairs[course.id] || facultyChairs["aiml"]; // Default fallback
            const isExpanded = expandedCourseId === course.id;

            return (
              <div
                key={course.id}
                className="w-[88vw] sm:w-[540px] md:w-full shrink-0 snap-center bg-white border border-[#E5E7EB] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Main Program Card Layout */}
                <div className="p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 flex-1 flex flex-col justify-between">
                  
                  {/* Top Bar: Official Logo + School Name + Program Code + Duration */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
                    <div className="flex items-center gap-3">
                      {/* Official University Seal Logo */}
                      <img
                        src="/ts-global-academy-official-logo.png"
                        alt="TS Global Academy Official Logo"
                        className="w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0 filter drop-shadow-sm"
                      />
                      <span className="font-sans text-xs sm:text-sm font-bold text-[#0F172A] uppercase tracking-wider">
                        {chair.department}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-[11px] font-bold bg-[#FAFAF8] border border-[#E5E7EB] text-slate-600 px-3 py-1 rounded tracking-wider uppercase">
                        {course.code}
                      </span>
                      <span className="font-sans text-[11px] font-bold bg-[#0F172A] text-white px-3 py-1 rounded tracking-wider uppercase">
                        {course.duration}
                      </span>
                    </div>
                  </div>

                  {/* Program Title & Editorial Blurb */}
                  <div className="space-y-3">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0F172A]">
                      {course.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                      {course.blurb}
                    </p>
                  </div>

                  {/* University Data Grid (4 Columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 pt-4 border-t border-slate-100">
                    
                    <div className="md:col-span-3 flex items-start gap-3">
                      <img
                        src={chair.photo}
                        alt={chair.name + " - TS Global Academy"}
                        title={chair.name + " - Faculty Chair"}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-sm shrink-0"
                      />
                      <div className="space-y-0.5">
                        <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#B8860B] block">
                          Faculty Chair
                        </span>
                        <p className="font-sans text-xs font-bold text-[#0F172A] leading-tight">
                          {chair.name}
                        </p>
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-1">
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                        Delivery Mode
                      </span>
                      <p className="font-sans text-xs font-semibold text-[#0F172A] leading-relaxed">
                        {chair.mode}
                      </p>
                    </div>

                    <div className="md:col-span-3 space-y-1">
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                        Awarded Certification
                      </span>
                      <p className="font-sans text-xs font-semibold text-[#0F172A] leading-relaxed">
                        {chair.certification}
                      </p>
                    </div>

                    <div className="md:col-span-4 space-y-1">
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                        Career Outcomes
                      </span>
                      <p className="font-sans text-xs font-semibold text-[#0F172A] leading-relaxed">
                        {chair.outcomes}
                      </p>
                    </div>

                  </div>

                  {/* Tactical Editorial Footer Action Bar */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="font-sans text-xs text-slate-500">
                        Institutional Fee & Grant Information available via Registrar Desk
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => onOpenApplyModal && onOpenApplyModal(course.id)}
                        type="button"
                        className="inline-flex items-center justify-center bg-[#0F172A] hover:bg-[#1E3A8A] text-white font-sans text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-md shadow-sm transition-all text-center cursor-pointer"
                      >
                        Apply for {course.code.split('·')[1]}
                      </button>

                      <button
                        onClick={() => toggleExpand(course.id)}
                        type="button"
                        className={`inline-flex items-center justify-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-md border transition-all select-none cursor-pointer ${
                          isExpanded
                            ? 'bg-[#0F172A] text-white border-[#0F172A]'
                            : 'bg-white text-[#0F172A] border-[#0F172A] hover:bg-[#FAFAF8]'
                        }`}
                      >
                        <span>{isExpanded ? 'Close Syllabus' : 'Inspect Syllabus'}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                </div>

                {/* =========================================================
                    EXPANDABLE ACADEMIC SYLLABUS & LEVEL PROGRESSION
                ========================================================= */}
                {isExpanded && (
                  <div className="bg-[#FAFAF8] border-t border-[#E5E7EB] p-6 sm:p-10 space-y-8 animate-fadeIn">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200 pb-3">
                        <h4 className="font-heading text-sm font-bold text-[#0F172A] uppercase tracking-widest">
                          Academic Architecture & Level Progression
                        </h4>
                        <span className="font-sans text-xs text-slate-600 font-medium">3-Tier Verification Standard</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {course.levels.map((lvl, idx) => (
                          <div
                            key={idx}
                            className="bg-white border border-[#E5E7EB] p-5 rounded-md space-y-3 shadow-sm"
                          >
                            <span className="font-sans text-xs font-bold text-[#B8860B] block uppercase border-b border-slate-100 pb-2">
                              {lvl.level}
                            </span>
                            <ul className="space-y-2">
                              {lvl.topics.map((tp, tIdx) => (
                                <li key={tIdx} className="font-sans text-xs text-slate-700 flex items-start gap-2">
                                  <span className="text-[#B8860B] font-bold shrink-0 mt-0.5">•</span>
                                  <span>{tp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Modules & Hardware/Software Stack */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
                      <div className="space-y-2">
                        <span className="font-sans text-xs font-bold text-[#0F172A] uppercase block">
                          Key Academic Modules:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {(course.topicsCovered || []).map((m, mIdx) => (
                            <span
                              key={mIdx}
                              className="font-sans text-xs bg-white text-[#0F172A] border border-[#E5E7EB] px-3 py-1 rounded font-medium shadow-sm"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className="font-sans text-xs font-bold text-[#0F172A] uppercase block">
                          Laboratory Stack & Tools:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {(course.toolsCovered || []).map((tl, tIdx) => (
                            <span
                              key={tIdx}
                              className="font-sans text-xs bg-[#0F172A] text-white border border-[#0F172A] px-3 py-1 rounded font-medium shadow-sm"
                            >
                              {tl}
                            </span>
                          ))}
                        </div>
                      </div>
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
