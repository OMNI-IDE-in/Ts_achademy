import React, { useState } from 'react';
import { DIPLOMA_COURSES as ACADEMY_COURSES } from '../data/academyData';

export default function DiplomaPrograms({ onOpenApplyModal }) {
  const [expandedCourseId, setExpandedCourseId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCourseId(expandedCourseId === id ? null : id);
  };

  // Exact mapping of course.id to Faculty/Leadership
  const facultyChairs = {
    "aiml": {
      name: "Mohammed Nihan",
      title: "Director & Executive Director, Artificial Intelligence — Founder & CEO of Omni IDE Software Company",
      photo: "/mohammed-nihan-founder-omni-ide-ts-global-academy-executive-director.jpeg",
      department: "School of Artificial Intelligence",
      mode: "On-Campus & Cloud GPU Access",
      certification: "International Diploma in Applied AI",
      outcomes: "Machine Learning Engineer, Applied AI Architect, Data Systems Lead",
    },
    "peng": {
      name: "Mohammed Nihan",
      title: "Director & Executive Director, Artificial Intelligence — Founder & CEO of Omni IDE Software Company",
      photo: "/mohammed-nihan-founder-omni-ide-ts-global-academy-executive-director.jpeg",
      department: "School of Cognitive Computation",
      mode: "Intensive Studio & Remote Deployment",
      certification: "International Diploma in Prompt Engineering",
      outcomes: "LLM Systems Engineer, AI Workflow Automator, AI Operations Manager",
    },
    "csec": {
      name: "Abdulrahman",
      title: "Chairman, TS Global Academy — Chair of Enterprise Cybersecurity",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      department: "School of Defensive Network Architecture",
      mode: "On-Campus Zero-Trust Network Lab",
      certification: "International Diploma in Cyber Security Architecture",
      outcomes: "Security Operations Center (SOC) Analyst, Network Defense Engineer, Penetration Tester",
    },
    "gst": {
      name: "Dr. Salman Raza",
      title: "CEO, TS Global Academy — Chair of Statutory Tax Compliance",
      photo: "/dr-salman-raza.jpg",
      department: "School of Fiscal Compliance & Accounting",
      mode: "On-Campus Financial Systems Lab",
      certification: "Accredited Diploma in Taxation & Statutory Compliance",
      outcomes: "Senior GST Compliance Architect, Statutory Audit Lead, Enterprise Payroll Strategist",
    },
    "arch": {
      name: "MOHAMMED RUMAN ALI",
      title: "Architectural Visualizer (Real Estate) — Lead Instructor",
      photo: "/mohammed-ruman-ali.jpg",
      department: "School of Building Information Modeling",
      mode: "On-Campus BIM Studio & Hybrid Drafting",
      certification: "International Diploma in Architectural Technologies",
      outcomes: "Senior BIM Coordinator, Parametric Design Technologist, CAD/Revit Manager",
    },
    "robo": {
      name: "Director Siyad",
      title: "Director, TS Global Academy — Chair of Autonomous Robotics",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      department: "School of Mechatronics & Autonomous Systems",
      mode: "On-Campus Hardware Prototyping Lab",
      certification: "International Diploma in Robotics & ROS2",
      outcomes: "Robotics Systems Engineer, Industrial Automation Lead, Embedded C++ Developer",
    },
    "dgmk": {
      name: "Director Rifadh",
      title: "Director, TS Global Academy — Chair of Digital Growth",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      department: "School of Digital Business & Strategy",
      mode: "Hybrid Brand Marketing Studio",
      certification: "Professional University Diploma in Growth Systems",
      outcomes: "Head of Growth Strategy, Marketing Analytics Director, Global Media Buyer",
    },
    "dsci": {
      name: "Director Rifadh",
      title: "Director, TS Global Academy — Chair of Data Systems",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      department: "School of Data Science & Analytics",
      mode: "On-Campus Statistical Computing Lab",
      certification: "International Diploma in Big Data Systems",
      outcomes: "Senior Data Science Manager, Enterprise Analytics Architect, Business Intelligence Lead",
    },
    "ifrs": {
      name: "KP Mohammed Rifadh",
      title: "ACCA | B.Com (International Finance & Accounting)",
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
        <div className="mb-14 sm:mb-16 pb-8 border-b border-[#E5E7EB] max-w-3xl space-y-3">
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

        {/* Programs Grid */}
        <div className="space-y-10">
          {ACADEMY_COURSES.map((course) => {
            const chair = facultyChairs[course.id] || facultyChairs["aiml"]; // Default fallback
            const isExpanded = expandedCourseId === course.id;

            return (
              <div
                key={course.id}
                className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Main Program Card Layout */}
                <div className="p-6 sm:p-10 space-y-8">
                  
                  {/* Top Bar: School Badge + Program Code + Duration */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
                    <div className="flex items-center gap-3">
                      {/* Large Academic Icon */}
                      <div className="w-10 h-10 rounded-full bg-[#0F172A] text-[#FAFAF8] flex items-center justify-center shrink-0 font-heading font-bold text-sm shadow-sm">
                        {course.code.substring(5, 7)}
                      </div>
                      <span className="font-sans text-xs font-bold text-[#0F172A] uppercase tracking-wider">
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
                        <p className="font-sans text-[10px] text-slate-500 leading-tight italic">
                          {chair.title.split('—')[0]}
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
