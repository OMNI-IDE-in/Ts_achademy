import React from 'react';

export default function CampusSection() {
  const campusFacilities = [
    {
      category: "Laboratories",
      title: "Advanced Robotics & AI Engineering Lab",
      description: "Equipped with industrial mechatronic arms, ROS2 autonomous ground vehicles, and high-performance GPU clusters for real-time model training and robotics prototyping.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      featured: true,
    },
    {
      category: "Library",
      title: "The Institutional Research Archives & Digital Library",
      description: "Featuring over 120,000 digital volumes, IEEE/ACM archive access, and quiet study alcoves designed for deep research and scholarly contemplation.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
    {
      category: "Innovation Center",
      title: "The Applied Prototyping & Incubation Workshop",
      description: "A collaborative prototyping floor where student engineering teams build hardware prototypes and incubate applied technology ventures.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
    {
      category: "Smart Classrooms",
      title: "Executive Amphitheaters & Interactive Studios",
      description: "Ergonomically tiered lecture halls with multi-angle acoustic engineering and hybrid broadcast capabilities for global seminars.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
    {
      category: "Student Spaces",
      title: "International Commons & Collaboration Quads",
      description: "Sunlit architectural quads and collaborative commons where our international student body connects across disciplines and cultures.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
  ];

  return (
    <section id="campus" className="bg-[#FAFAF8] py-20 sm:py-28 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16 pb-8 border-b border-[#E5E7EB] max-w-3xl space-y-3">
          <span className="font-sans text-xs font-semibold text-[#B8860B] uppercase tracking-widest block">
            CAMPUS INFRASTRUCTURE & STUDENT LIFE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            An Academic Heritage Built for Modern Engineering
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-700 leading-relaxed">
            Our campus brings together classical university architecture and cutting-edge technical laboratories—fostering an atmosphere of rigorous study, intellectual curiosity, and hands-on invention.
          </p>
        </div>

        {/* Large Editorial Photography Layout */}
        <div className="space-y-10">
          
          {/* Featured Full-Width Campus Photograph: Laboratories */}
          {campusFacilities.filter(f => f.featured).map((facility, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm overflow-hidden"
            >
              <div className="h-96 sm:h-[480px] w-full overflow-hidden relative">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover filter grayscale-[10%]"
                />
                <div className="absolute top-6 left-6">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest bg-[#0F172A] text-white px-4 py-1.5 rounded shadow">
                    {facility.category}
                  </span>
                </div>
              </div>
              <div className="p-8 sm:p-10 space-y-3">
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#B8860B] block">
                  Primary Applied Engineering Facility
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0F172A]">
                  {facility.title}
                </h3>
                <p className="font-sans text-base text-slate-700 leading-relaxed max-w-3xl">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}

          {/* 2x2 Grid of Library, Innovation Center, Smart Classrooms, Student Spaces */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campusFacilities.filter(f => !f.featured).map((facility, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden"
              >
                <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover filter grayscale-[10%]"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-sans text-xs font-bold uppercase tracking-wider bg-[#0F172A] text-white px-3 py-1 rounded shadow">
                      {facility.category}
                    </span>
                  </div>
                </div>
                <div className="p-7 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-heading text-xl font-bold text-[#0F172A]">
                      {facility.title}
                    </h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      {facility.description}
                    </p>
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
