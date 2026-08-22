import React from 'react';

export default function FacultySection() {
  const facultyMembers = [
    {
      name: "Abdul Rahman",
      title: "Chairman, TS Global Academy",
      company: "Chair of Enterprise Governance & Cybersecurity",
      credentials: "Chairman of the Board, TS Global Academy · Enterprise Cyber Systems Governance",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      research: "Zero-Trust Architecture, National Security Compliance, SIEM Operations",
      publications: "Strategic Visionary for International Diploma Accreditation & Governance",
    },
    {
      name: "Dr. Salman Raza",
      title: "Founder & CEO, TS Global Academy",
      company: "Founder & Chief Executive Officer, TS Global Academy",
      credentials: "Founder & Chief Executive Officer, TS Global Academy · Doctorate in Fiscal Policy",
      photo: "/dr-salman-raza.jpg",
      research: "Statutory Tax Automation, GST Framework Harmonization & Institutional Growth",
      publications: "Executive Leader of TS Global Academy Corporate & Academic Strategy",
    },
    {
      name: "Mohammed Nihan",
      title: "AI Director, TS Global Academy",
      company: "Founder & CEO of Omni IDE Software Company",
      companyLink: "https://omniide.com/",
      credentials: "AI Director, TS Global Academy · Founder & CEO, Omni IDE Software Company · Lead AI Architect",
      photo: "/mohammed-nihan-founder-omni-ide-ts-global-academy-executive-director.jpeg",
      research: "Autonomous AI Systems, LLM Orchestration, Enterprise Developer Platforms",
      publications: "Architect of Omni IDE Core Engine and TS Global Academy Applied AI Curriculum",
    },
    {
      name: "Mohammed Ruman Ali",
      title: "Research Director, TS Global Academy",
      company: "Research Director, TS Global Academy · Architectural Visualizer",
      credentials: "Research Director, TS Global Academy · Over 10 years of hands-on experience building 3D visual assets for top developers like Prestige, Brigade, and Embassy. Training based on actual commercial project pipelines.",
      photo: "/mohammed-ruman-ali.jpg",
      research: "3D Architectural Visualization Technologies, Computational Real Estate Modeling & Asset Pipelines",
      publications: "Guidance on building production-grade research portfolios that excel in global enterprise environments.",
    },
    {
      name: "KP Mohammed Rifadh",
      title: "Academic Director, TS Global Academy",
      company: "Academic Director, TS Global Academy · Deloitte USI Alumnus",
      credentials: "Academic Director, TS Global Academy · ACCA | B.Com (International Finance & Accounting) · ACCA Affiliate with a strong foundation in International Financial Reporting Standards (IFRS), financial analysis, and global accounting practices.",
      photo: "/kp-mohammed-rifadh.jpg",
      research: "International Financial Reporting (IFRS) • Financial Statement Analysis • Corporate Finance • Pedagogical Systems",
      publications: "Committed to developing globally relevant professionals through practical education and real-world case studies.",
    },
    {
      name: "Sarfaraz",
      title: "Strategic & Management Director, TS Global Academy",
      company: "Director of Strategic & Institutional Management, TS Global Academy",
      credentials: "Strategic & Management Director, TS Global Academy · Enterprise Program Operations & Institutional Scaling",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      research: "Institutional Strategy, Operations Management & Academic Growth Alignment",
      publications: "Director of Operational Excellence and Strategic Academic Partnerships",
    },
    {
      name: "Siyadh",
      title: "Courses Coordinator, TS Global Academy",
      company: "Courses Coordinator, TS Global Academy · Mechatronics & Systems",
      credentials: "Courses Coordinator, TS Global Academy · Applied Robotics & Program Operations",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
      research: "Dynamic Kinematics, Laboratory Scheduling & Student Course Logistics",
      publications: "Coordinator of Curriculum Delivery and Laboratory Operations",
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
                  className={`w-full h-full object-cover filter grayscale-[20%] hover:grayscale-0 transition-all duration-500 ${faculty.name.toLowerCase().includes("ruman") ? "object-center" : "object-top"}`}
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
