import React from 'react';

export default function PlacementSection() {
  // Global Enterprise Hiring Partner Logos / Typography
  const companyPartners = [
    { name: "APPLE", category: "Core Hardware & Systems" },
    { name: "GOOGLE", category: "Applied AI & Cloud" },
    { name: "MICROSOFT", category: "Enterprise Azure & AI" },
    { name: "NVIDIA", category: "GPU Systems & Robotics" },
    { name: "SIEMENS", category: "Industrial Automation" },
    { name: "TATA CONSULTANCY", category: "Global IT Services" },
    { name: "LARSEN & TOUBRO", category: "BIM & Structural Engineering" },
    { name: "AMAZON WEB SERVICES", category: "Cloud Architecture" },
  ];

  const placementStats = [
    { value: "94%", label: "Verified Graduate Employment", subtitle: "Within 90 days of diploma capstone completion" },
    { value: "₹18.5 LPA", label: "Average Industry Package", subtitle: "For international & enterprise technical appointments" },
    { value: "100%", label: "Portfolio Audit Standard", subtitle: "Every graduate presents a verified GitHub & Lab Portfolio" },
  ];

  const successStories = [
    {
      name: "Siddharth Verma",
      diploma: "Diploma in Applied Artificial Intelligence",
      role: "Senior AI Systems Architect",
      company: "MICROSOFT AZURE AI",
      package: "₹24.0 LPA",
      quote: "The 48-week curriculum at TS Global Academy operated at the rigor of a doctoral lab. My capstone project in distributed inference directly led to my appointment as an AI Systems Architect.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Ananya Iyer",
      diploma: "Diploma in Autonomous Robotics & ROS2",
      role: "Lead Robotics Navigation Engineer",
      company: "SIEMENS AUTOMATION",
      package: "₹21.5 LPA",
      quote: "Having access to industrial mechatronic arms and ROS2 hardware labs gave me a decisive advantage during technical interviews with European automation firms.",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Rohan Chatterjee",
      diploma: "Diploma in Architectural Technologies & BIM",
      role: "Senior Structural Topology Analyst",
      company: "LARSEN & TOUBRO",
      package: "₹16.8 LPA",
      quote: "The studio-based architectural curriculum transformed how I approach BIM workflows and generative structural analysis. TS Global Academy is the gold standard for applied technical diplomas.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <section id="placement" className="bg-white py-20 sm:py-28 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16 pb-8 border-b border-[#E5E7EB] max-w-3xl space-y-3">
          <span className="font-sans text-xs font-semibold text-[#B8860B] uppercase tracking-widest block">
            CAREER OUTCOMES & INDUSTRY PLACEMENT
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            Engineering Leaders for Global Technology Enterprises
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-700 leading-relaxed">
            Our graduates are selected by the world’s most demanding technology and engineering corporations—backed by verified laboratory portfolios and direct industry mentorship.
          </p>
        </div>

        {/* 3 Editorial Placement Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {placementStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAF8] border border-[#E5E7EB] p-8 rounded-lg shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="border-b border-slate-200/80 pb-4">
                <span className="font-heading text-4xl sm:text-5xl font-bold text-[#0F172A]">
                  {stat.value}
                </span>
                <span className="font-sans text-xs font-semibold text-[#B8860B] uppercase tracking-wider block mt-2">
                  {stat.label}
                </span>
              </div>
              <p className="font-sans text-sm text-slate-600 font-medium">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Graduate Success Stories */}
        <div className="pt-10 border-t border-[#E5E7EB]">
          <div className="mb-10">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#B8860B] block mb-1">
              ALUMNI CAREER TRAJECTORIES
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0F172A]">
              Selected Graduate Appointments
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAF8] border border-[#E5E7EB] p-8 rounded-lg shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Quote in Serif Playfair Display */}
                  <p className="font-heading italic text-sm sm:text-base text-slate-700 leading-relaxed">
                    “{story.quote}”
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/80 flex items-center gap-4">
                  <img
                    src={story.photo}
                    alt={story.name}
                    className="w-12 h-12 rounded-full object-cover border border-slate-300 shadow-sm shrink-0"
                  />
                  <div>
                    <h4 className="font-heading text-sm font-bold text-[#0F172A]">
                      {story.name}
                    </h4>
                    <span className="font-sans text-xs font-semibold text-[#B8860B] block">
                      {story.role} · {story.company}
                    </span>
                    <span className="font-sans text-[11px] text-slate-500 block">
                      {story.diploma}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
