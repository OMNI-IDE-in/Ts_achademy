import React, { useState } from 'react';

export default function CurriculumRoadmap() {
  const [openPhase, setOpenPhase] = useState(0);

  const roadmapPhases = [
    {
      phase: "Phase I · Weeks 01–16",
      title: "Foundational Engineering & Core Mathematics",
      subtitle: "Linear Algebra, Tensor Calculus, Discrete Systems & Systems Programming",
      overview: "The initial semester establishes rigorous mathematical foundations and low-level computational fluency required across all applied diploma specializations.",
      deliverable: "Mid-Term Academic Audit: Written examination & C++/Rust algorithmic evaluation.",
    },
    {
      phase: "Phase II · Weeks 17–32",
      title: "Specialized Laboratory & Studio Production",
      subtitle: "Applied AI Inference, Autonomous Mechatronics, BIM Topology & LLM Systems",
      overview: "Students transition into dedicated research laboratories under department chairs, designing production software architectures, robotics controllers, or statutory engines.",
      deliverable: "Laboratory Milestone: Deployment of an auditable systems codebase or functional hardware prototype.",
    },
    {
      phase: "Phase III · Weeks 33–48",
      title: "Industrial Capstone & International Defense",
      subtitle: "Enterprise Integration, Portfolio Verification & Academic Thesis Defense",
      overview: "The final semester is devoted to executing an industry-sponsored engineering thesis or production system, culminating in a formal oral defense before our research fellows.",
      deliverable: "Final Diploma Gate: Verified GitHub repository audit, thesis publication, and international certification.",
    },
  ];

  return (
    <section id="research" className="bg-[#FAFAF8] py-20 sm:py-28 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16 pb-8 border-b border-[#E5E7EB] max-w-3xl space-y-3">
          <span className="font-sans text-xs font-semibold text-[#B8860B] uppercase tracking-widest block">
            ACADEMIC PROGRESSION & EVALUATION GATES
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            The 48-Week Institutional Roadmap
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-700 leading-relaxed">
            All diploma programmes follow an uncompromising three-phase academic progression—combining mathematical theory, intensive laboratory practice, and formal capstone defense.
          </p>
        </div>

        {/* Accordion Roadmap Timeline */}
        <div className="space-y-6">
          {roadmapPhases.map((item, idx) => {
            const isOpen = openPhase === idx;

            return (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm overflow-hidden transition-all"
              >
                {/* Trigger Bar */}
                <button
                  onClick={() => setOpenPhase(isOpen ? null : idx)}
                  type="button"
                  className="w-full text-left p-6 sm:p-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 hover:bg-[#FAFAF8] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B]"
                >
                  <div className="space-y-1">
                    <span className="font-sans text-xs font-bold text-[#B8860B] uppercase tracking-wider">
                      {item.phase}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0F172A]">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 font-medium">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                    <span className="font-sans text-xs font-semibold text-slate-500 bg-[#FAFAF8] border border-[#E5E7EB] px-3.5 py-1.5 rounded">
                      {isOpen ? 'Close Phase' : 'Inspect Phase'}
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

                {/* Expanded Content */}
                {isOpen && (
                  <div className="border-t border-[#E5E7EB] bg-[#FAFAF8] p-6 sm:p-8 space-y-6 animate-fadeIn">
                    <div className="space-y-2">
                      <h4 className="font-heading text-sm font-bold text-[#0F172A] uppercase tracking-wider">
                        Semester Academic Focus
                      </h4>
                      <p className="font-sans text-base text-slate-700 leading-relaxed max-w-4xl">
                        {item.overview}
                      </p>
                    </div>

                    <div className="bg-white border border-[#E5E7EB] p-5 rounded-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div>
                        <span className="font-sans text-xs font-bold uppercase text-[#B8860B] block">
                          Evaluation & Certification Gate:
                        </span>
                        <p className="font-sans text-sm font-semibold text-[#0F172A]">
                          {item.deliverable}
                        </p>
                      </div>
                      <span className="font-sans text-xs font-bold bg-[#0F172A] text-white px-3 py-1.5 rounded shrink-0">
                        Institutional Audit
                      </span>
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
