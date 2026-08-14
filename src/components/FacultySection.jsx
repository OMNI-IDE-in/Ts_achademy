import React from 'react';

export default function FacultySection() {
  const facultyMembers = [
    {
      name: "Mohammed Nihan",
      title: "Director & Executive Director, Artificial Intelligence",
      company: "Founder & CEO of Omni IDE Software Company",
      companyLink: "https://omniide.com/",
      credentials: "Founder & CEO, Omni IDE Software Company · Lead AI Architect & Executive Director",
      photo: "/mohammed-nihan-founder-omni-ide-ts-global-academy-executive-director.jpeg",
      research: "Autonomous AI Systems, LLM Orchestration, Enterprise Developer Platforms",
      publications: "Architect of Omni IDE Core Engine and TS Global Academy Applied AI Curriculum",
    },
    {
      name: "Abdulrahman",
      title: "Chairman, TS Global Academy",
      company: "Chair of Enterprise Cybersecurity",
      credentials: "Chairman of the Board · Enterprise Cyber Security Frameworks",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      research: "Zero-Trust Architecture, National Security Compliance, SIEM Operations",
      publications: "Strategic Visionary for International Diploma Accreditation",
    },
    {
      name: "Dr. Salman Raza",
      title: "CEO, TS Global Academy",
      company: "Chair of Statutory Tax Compliance",
      credentials: "Chief Executive Officer · Doctorate in Fiscal Policy",
      photo: "/dr-salman-raza.jpg",
      research: "Statutory Audit Automation, GST Framework Harmonization",
      publications: "Executive Leader of TS Global Academy Corporate & Financial Strategy",
    },
    {
      name: "MOHAMMED RUMAN ALI",
      title: "Architectural Visualizer (Real Estate)",
      company: "Real Estate Visualization & 3D Assets",
      credentials: "Over 10 years of hands-on experience building 3D visual assets for top developers like Prestige, Brigade, and Embassy. Training is based on actual commercial project pipelines and production-floor workflows.",
      photo: "/mohammed-ruman-ali.jpg",
      research: "Direct knowledge of what real estate clients expect, how to manage project constraints, and how to create photo-realistic renders that sell.",
      publications: "Guidance on how to build a production-grade portfolio that gets noticed by hiring managers and high-paying clients.",
    },
    {
      name: "Director Siyad",
      title: "Director, TS Global Academy",
      company: "Chair of Autonomous Robotics & Mechatronics",
      credentials: "Director of Institute · Applied Robotics Engineer",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
      research: "Dynamic Kinematics, ROS2 Automation, Industrial Sensor Fusion",
      publications: "Director of Technology Transfer and Hardware Incubation",
    },
    {
      name: "Director Rifadh",
      title: "Director, TS Global Academy",
      company: "Chair of Strategic Growth, Marketing & Data",
      credentials: "Director of Institute · Principal Analytics Architect",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      research: "High-Dimensional Data Systems, Predictive Conversion Models",
      publications: "Director of International Admissions and Enterprise Analytics",
    },
    {
      name: "KP Mohammed Rifadh",
      title: "ACCA | B.Com (International Finance & Accounting)",
      company: "Deloitte USI",
      credentials: "ACCA Affiliate with a strong foundation in International Financial Reporting Standards (IFRS), financial analysis, and global accounting practices. Passionate about simplifying complex financial concepts.",
      photo: "/kp-mohammed-rifadh.jpg",
      research: "International Financial Reporting (IFRS) • Financial Statement Analysis • Corporate Finance • Accounting Standards • Professional Development",
      publications: "Committed to developing globally relevant finance professionals through practical education, real-world case studies, and internationally recognized accounting principles.",
    },
  ];

  return (
    <section id="faculty" className="bg-[#FAFAF8] py-20 sm:py-28 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16 pb-8 border-b border-[#E5E7EB] max-w-3xl space-y-3">
          <span className="font-sans text-xs font-semibold text-[#B8860B] uppercase tracking-widest block">
            INSTITUTIONAL LEADERSHIP & FACULTY
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            Distinguished Directors & Academic Chairs
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-700 leading-relaxed">
            Our department chairs and institute directors hold principal engineering and leadership roles at global technology corporations—bringing direct industry authority into the academic laboratory.
          </p>
        </div>

        {/* Faculty Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((faculty, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden"
            >
              {/* High-Resolution Academic Portrait */}
              <div className="h-72 w-full overflow-hidden relative border-b border-[#E5E7EB]">
                <img
                  src={faculty.photo}
                  alt={faculty.name + " - " + faculty.title}
                  title={faculty.name + " - TS Global Academy"}
                  className="w-full h-full object-cover object-top filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Faculty Information Box */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                
                {/* Header: Title & Name */}
                <div className="space-y-1">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#B8860B] block">
                    {faculty.title}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0F172A]">
                    {faculty.name}
                  </h3>
                  {faculty.companyLink ? (
                    <a
                      href={faculty.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs font-semibold text-[#1E3A8A] hover:text-[#B8860B] underline transition-colors block mt-1"
                    >
                      {faculty.company}
                    </a>
                  ) : (
                    <span className="font-sans text-xs font-semibold text-slate-500 block mt-1">
                      {faculty.company}
                    </span>
                  )}
                </div>

                {/* Academic Credentials */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="font-sans text-xs font-semibold text-slate-700 leading-relaxed">
                    {faculty.credentials}
                  </p>
                </div>

                {/* Research & Laboratory Focus */}
                <div className="space-y-3 pt-3">
                  <div>
                    <span className="font-sans text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                      Laboratory Focus
                    </span>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed">
                      {faculty.research}
                    </p>
                  </div>
                  <div>
                    <span className="font-sans text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                      Distinction
                    </span>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed italic">
                      {faculty.publications}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
