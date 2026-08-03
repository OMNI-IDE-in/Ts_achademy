import React from 'react';

export default function WhyTSGlobal() {
  const institutionalPillars = [
    {
      number: "I",
      title: "The Applied Laboratory Mandate",
      description: "Unlike traditional academic departments that separate theory from practice, every diploma program requires 85% active laboratory and engineering studio execution.",
      detail: "All students are assigned cloud GPU clusters, ROS2 mechatronic stations, and verified BIM licenses from Day 1.",
    },
    {
      number: "II",
      title: "International Faculty Mentorship",
      description: "Our department chairs hold doctoral degrees from Stanford, MIT, Oxford, Cambridge, and ETH Zurich—coupled with principal engineering roles at global tech corporations.",
      detail: "1:15 faculty-to-student studio ratio ensures individualized technical code review and structural research supervision.",
    },
    {
      number: "III",
      title: "Verified Capstone Portfolios",
      description: "Graduation requires passing external institutional verification of a production GitHub repository, physical robotics prototype, or statutory audit engine.",
      detail: "100% of graduates enter placement interviews with an auditable portfolio of deployed software and hardware engineering systems.",
    },
  ];

  return (
    <section id="why-us" className="bg-white py-20 sm:py-28 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16 pb-8 border-b border-[#E5E7EB] max-w-3xl space-y-3">
          <span className="font-sans text-xs font-semibold text-[#B8860B] uppercase tracking-widest block">
            INSTITUTIONAL PHILOSOPHY · ACADEMIC ADVANTAGE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            An Academic Model Built on Intellectual Rigor
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-700 leading-relaxed">
            TS Global Academy was established to close the gap between conventional university theory and the demanding technical requirements of international engineering enterprises.
          </p>
        </div>

        {/* 3 Academic Pillars in Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {institutionalPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAF8] border border-[#E5E7EB] p-8 sm:p-10 rounded-lg shadow-sm hover:shadow-md hover:border-[#B8860B]/60 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                  <span className="font-heading text-3xl sm:text-4xl font-bold text-[#B8860B]">
                    {pillar.number}.
                  </span>
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Institutional Standard
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#0F172A]">
                  {pillar.title}
                </h3>
                <p className="font-sans text-base text-slate-700 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <p className="font-sans text-xs font-medium text-slate-600">
                  <span className="font-semibold text-[#0F172A]">Verification: </span>
                  {pillar.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial University Charter Quote Box */}
        <div className="mt-16 bg-[#FAFAF8] border border-[#E5E7EB] p-8 sm:p-10 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#B8860B] block">
              OFFICIAL REGISTRAR & ADMISSIONS STATEMENT
            </span>
            <p className="font-heading text-lg sm:text-xl text-[#0F172A] font-bold">
              “We invite applicants who demonstrate both academic discipline and a commitment to technical discovery.”
            </p>
            <p className="font-sans text-sm text-slate-600">
              Applications for the 2026–2027 International Diploma Cohort are evaluated on a rolling academic basis.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <a
              href="#admissions"
              className="inline-flex items-center justify-center bg-[#0F172A] hover:bg-[#1E3A8A] text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider px-7 py-4 rounded-md shadow-sm border border-[#0F172A] transition-all w-full sm:w-auto text-center"
            >
              Request Prospectus
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
