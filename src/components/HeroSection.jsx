import React from 'react';

export default function HeroSection({ onOpenApplyModal }) {
  // Trust Section Statistic Cards
  const trustStats = [
    { label: 'Founded', value: '2026', subtitle: 'Established Institution' },
    { label: 'Students', value: '1,200+', subtitle: 'International Cohort' },
    { label: 'Programs', value: '7', subtitle: 'Specialized Diplomas' },
    { label: 'Placement Partners', value: '150+', subtitle: 'Global Industry Leaders' },
    { label: 'Industry Mentors', value: '45+', subtitle: 'Senior Engineers & Executives' },
    { label: 'Research Labs', value: '12', subtitle: 'Applied AI & Robotics Centers' },
  ];

  return (
    <section id="admissions" className="relative bg-[#FAFAF8] overflow-hidden border-b border-[#E5E7EB]">
      {/* ========================================================
          LARGE PROFESSIONAL CAMPUS PHOTOGRAPH + WHITE OVERLAY
      ======================================================== */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80"
          alt="Prestigious University Campus & Architecture"
          className="w-full h-full object-cover object-center opacity-25 filter grayscale-[20%]"
        />
        {/* Editorial warm-white gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF]/90 via-[#FAFAF8]/85 to-[#FAFAF8] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24">
        <div className="max-w-4xl space-y-8">
          
          {/* Subtle Institutional Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4A017]/40 bg-[#FFFFFF] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B8860B]" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#0F172A]">
              INTERNATIONAL DIPLOMA ADMISSIONS · COHORT 2026–2027
            </span>
          </div>

          {/* Headline in Playfair Display Serif */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.12]">
            Engineering Future Leaders Through Excellence.
          </h1>

          {/* Subheadline in readable Inter Sans */}
          <p className="font-sans text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl">
            TS Global Academy is an internationally focused institute delivering industry-driven diploma and advanced education programs in Artificial Intelligence, Robotics, Engineering, Business, Computing, Architecture and Emerging Technologies.
          </p>

          {/* Primary & Secondary Editorial CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onOpenApplyModal}
              type="button"
              className="inline-flex items-center justify-center bg-[#0F172A] hover:bg-[#1E3A8A] text-white font-sans text-sm sm:text-base font-semibold uppercase tracking-wider px-8 py-4 rounded-md shadow-sm border border-[#0F172A] transition-all hover:shadow-md text-center cursor-pointer"
            >
              Apply Now
            </button>
            <a
              href="#programs"
              className="inline-flex items-center justify-center bg-white hover:bg-[#FAFAF8] text-[#0F172A] font-sans text-sm sm:text-base font-semibold uppercase tracking-wider px-8 py-4 rounded-md shadow-sm border border-[#0F172A] transition-all hover:border-[#1E3A8A] text-center"
            >
              Explore Programs
            </a>
          </div>

          {/* Subtle Accreditation & Verification Notice */}
          <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-sans border-t border-slate-200/80">
            <span className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-700">Accredited Standards:</span> ISO 9001:2015 & Applied Engineering Frameworks
            </span>
            <span className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-700">Mode:</span> On-Campus & Remote Studio Options
            </span>
          </div>

        </div>

        {/* ========================================================
            TRUST SECTION: ELEGANT STATISTIC CARDS
        ======================================================== */}
        <div id="schools" className="mt-20 sm:mt-24 pt-12 border-t border-[#E5E7EB]">
          <div className="mb-8">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#B8860B] block mb-1">
              INSTITUTIONAL METRICS & REACH
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0F172A]">
              An Institute Built on Verified Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
            {trustStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] p-3.5 sm:p-7 rounded-lg shadow-sm hover:shadow-md hover:border-[#B8860B]/60 transition-all flex flex-col justify-between space-y-1.5 sm:space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-slate-100 pb-2 sm:pb-3 gap-1">
                  <span className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[10px] sm:text-xs font-bold text-[#B8860B] uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
                <p className="font-sans text-[11px] sm:text-sm text-slate-600 font-medium leading-snug">
                  {stat.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
