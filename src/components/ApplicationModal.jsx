import React, { useState, useEffect } from 'react';
import UniversityLogo from './UniversityLogo';

export default function ApplicationModal({ isOpen, onClose, initialCourseId = 'aiml' }) {
  const [selectedCourse, setSelectedCourse] = useState(initialCourseId);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialCourseId) {
      setSelectedCourse(initialCourseId);
    }
  }, [initialCourseId]);

  if (!isOpen) return null;

  const courses = [
    { id: 'aiml', name: 'Diploma in AI & Machine Learning', chair: 'Mohammed Nihan — Director & Executive Director, Artificial Intelligence (Founder & CEO of Omni IDE Software Company)' },
    { id: 'peng', name: 'Diploma in Prompt Engineering', chair: 'Mohammed Nihan — Director & Executive Director, Artificial Intelligence (Founder & CEO of Omni IDE Software Company)' },
    { id: 'csec', name: 'Diploma in Cyber Security Architecture', chair: 'Chairman Abdulrahman — Chair of Enterprise Cybersecurity' },
    { id: 'gst', name: 'Diploma in GST & Taxation', chair: 'Dr. Salman Raza — CEO, TS Global Academy (Statutory Compliance)' },
    { id: 'arch', name: 'Diploma in Architecture', chair: 'Director Ruman — Chair of Architectural Engineering & BIM' },
    { id: 'robo', name: 'Diploma in Robotics', chair: 'Director Siyad — Chair of Autonomous Robotics & Mechatronics' },
    { id: 'dgmk', name: 'Diploma in Digital Marketing', chair: 'Director Rifadh — Chair of Digital Growth & Media' },
    { id: 'dsci', name: 'Diploma in Data Science', chair: 'Director Rifadh — Chair of Data Systems & Analytics' },
  ];

  const currentCourseObj = courses.find((c) => c.id === selectedCourse) || courses[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Replace this with your own Web3Forms Access Key from web3forms.com
    const accessKey = "3a4360ea-6362-495e-b1a1-92213a49d892"; 

    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("subject", `New Admission Inquiry: ${currentCourseObj.name}`);
    formData.append("Course", currentCourseObj.name);
    formData.append("Applicant Name", fullName);
    formData.append("Email", email);
    formData.append("Phone/WhatsApp", phone);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try WhatsApp instead.");
      }
    } catch (error) {
      alert("Network error. Please try WhatsApp instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = (e) => {
    const form = e.target.closest('form');
    if (form && !form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const text = encodeURIComponent(
      `Hello TS Global Academy Admissions Desk, I am inquiring about the ${currentCourseObj.name}.\n\n*Applicant Details:*\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nI would like to know more about the admission process.`
    );
    window.open(`https://wa.me/918884167163?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border border-[#E5E7EB] rounded-lg shadow-2xl overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-[#0F172A] text-white p-6 sm:p-8 flex items-center justify-between border-b border-slate-800">
          <div className="space-y-1">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#B8860B] block">
              REGISTRAR ADMISSIONS DESK · COHORT 2026–2027
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Official Diploma Application Portal
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-2 text-xl font-bold"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto text-3xl font-bold">
                ✓
              </div>
              <h4 className="font-heading text-2xl font-bold text-[#0F172A]">
                Application Inquiry Logged
              </h4>
              <p className="font-sans text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold">{fullName}</span>. Your registration request for <span className="font-semibold text-[#0F172A]">{currentCourseObj.name}</span> has been routed to the Registrar Desk.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="bg-[#0F172A] text-white px-8 py-3 rounded-md font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#1E3A8A] transition-all cursor-pointer"
                >
                  Return to University Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 font-sans">
              
              {/* Select Course */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#0F172A] tracking-wider mb-2">
                  Select Diploma Specialization
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full p-3.5 border border-[#E5E7EB] rounded-md bg-[#FAFAF8] text-sm text-[#0F172A] font-medium focus:outline-none focus:border-[#B8860B]"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-xs text-slate-500">
                  <span className="font-semibold text-[#0F172A]">Faculty Chair / Leadership: </span>
                  {currentCourseObj.chair}
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#0F172A] tracking-wider mb-2">
                  Applicant Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aaditya Mukherjee"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-3.5 border border-[#E5E7EB] rounded-md bg-white text-sm text-[#0F172A] focus:outline-none focus:border-[#B8860B]"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#0F172A] tracking-wider mb-2">
                  Official Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="applicant@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3.5 border border-[#E5E7EB] rounded-md bg-white text-sm text-[#0F172A] focus:outline-none focus:border-[#B8860B]"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#0F172A] tracking-wider mb-2">
                  Contact Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3.5 border border-[#E5E7EB] rounded-md bg-white text-sm text-[#0F172A] focus:outline-none focus:border-[#B8860B]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span>Inquire via WhatsApp</span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center px-7 py-3.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    isSubmitting ? 'bg-slate-400 text-white cursor-not-allowed' : 'bg-[#0F172A] hover:bg-[#1E3A8A] text-white'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Official Registration'}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
