import React from 'react';

export default function TestimonialsSection() {
  const studentStories = [
    {
      quote: "What sets TS Global Academy apart is the uncompromising laboratory standard. Rather than watching theoretical lectures, we spent 48 weeks writing ROS2 controllers and optimizing multi-GPU training clusters.",
      student: "Aaditya Mukherjee",
      program: "Diploma in Autonomous Robotics · Cohort '25",
      origin: "B.Tech, Mechanical Engineering",
    },
    {
      quote: "The faculty chair mentorship resembles a top European technical university. My capstone research on parametric architectural topology was reviewed directly by structural leads in London.",
      student: "Clara Alverez",
      program: "Diploma in Architectural Technologies & BIM · Cohort '26",
      origin: "M.Arch Student & Practicing Architect",
    },
    {
      quote: "Transitioning from corporate audit to statutory tax automation required deep technical mastery of GST compliance engines. The academy’s curriculum gave me immediate authority in executive consultations.",
      student: "Karan Malhotra",
      program: "Diploma in GST & Statutory Tax Compliance · Cohort '25",
      origin: "Chartered Accountant & Fiscal Lead",
    },
    {
      quote: "The emphasis on rigorous evaluation gates ensured that every single member of our cohort graduated with a verified GitHub portfolio. Employers recognize the diploma as a mark of genuine engineering competence.",
      student: "Zainab Rahman",
      program: "Diploma in Applied Artificial Intelligence · Cohort '26",
      origin: "B.Sc., Computational Mathematics",
    },
  ];

  return (
    <section id="student-life" className="bg-[#FAFAF8] py-20 sm:py-28 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16 pb-8 border-b border-[#E5E7EB] max-w-3xl space-y-3">
          <span className="font-sans text-xs font-semibold text-[#B8860B] uppercase tracking-widest block">
            STUDENT LIFE & SCHOLARLY TESTIMONIES
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            Scholarly Excellence & Student Stories
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-700 leading-relaxed">
            Read first-hand accounts from our international student body on how intensive laboratory coursework and faculty mentorship shaped their professional engineering authority.
          </p>
        </div>

        {/* Minimal Elegant Editorial Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studentStories.map((story, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E7EB] p-8 sm:p-10 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-8"
            >
              <blockquote className="font-heading italic text-lg sm:text-xl text-[#0F172A] leading-relaxed">
                “{story.quote}”
              </blockquote>

              <div className="pt-6 border-t border-slate-200/80 flex flex-col space-y-1">
                <span className="font-heading text-base font-bold text-[#0F172A]">
                  {story.student}
                </span>
                <span className="font-sans text-xs font-semibold text-[#B8860B]">
                  {story.program}
                </span>
                <span className="font-sans text-xs text-slate-500">
                  Background: {story.origin}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial University Motto Bar */}
        <div className="mt-16 pt-10 border-t border-[#E5E7EB] text-center">
          <p className="font-heading italic text-lg text-slate-600">
            “Veritas et Scientia Applicata — Truth and Applied Knowledge.”
          </p>
          <span className="font-sans text-xs uppercase tracking-widest text-slate-400 block mt-2">
            THE INSTITUTIONAL MOTTO OF TS GLOBAL ACADEMY
          </span>
        </div>

      </div>
    </section>
  );
}
