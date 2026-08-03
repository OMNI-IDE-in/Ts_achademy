import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DiplomaPrograms from './components/DiplomaPrograms';
import FacultySection from './components/FacultySection';
import CampusSection from './components/CampusSection';
import CurriculumRoadmap from './components/CurriculumRoadmap';
import PlacementSection from './components/PlacementSection';
import WhyTSGlobal from './components/WhyTSGlobal';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCourseId, setModalCourseId] = useState('aiml');

  const openApplyModal = (courseId = 'aiml') => {
    // If an event object is passed by mistake (e.g. from onClick without args), default to 'aiml'
    const targetCourse = typeof courseId === 'string' ? courseId : 'aiml';
    setModalCourseId(targetCourse);
    setIsModalOpen(true);
  };

  const closeApplyModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans selection:bg-[#B8860B] selection:text-white flex flex-col">
      {/* Official Institutional Header */}
      <Navbar onOpenApplyModal={openApplyModal} />

      <main className="flex-grow">
        {/* Prestigious Campus Hero + 6-Card Trust Section */}
        <HeroSection onOpenApplyModal={openApplyModal} />

        {/* Specialized University Diploma Catalog */}
        <DiplomaPrograms onOpenApplyModal={openApplyModal} />

        {/* Distinguished Faculty & Research Fellows */}
        <FacultySection />

        {/* Campus Infrastructure & Applied Laboratories */}
        <CampusSection />

        {/* Academic Progression & Evaluation Gates */}
        <CurriculumRoadmap />

        {/* Corporate Placement & Enterprise Partnerships */}
        <PlacementSection />

        {/* Institutional Philosophy & Academic Pillars */}
        <WhyTSGlobal />

        {/* Scholarly Testimonies & Student Stories */}
        <TestimonialsSection />

        {/* Registrar & Admissions FAQ */}
        <FAQSection />
      </main>

      {/* Deep Navy University Footer */}
      <Footer />

      {/* Global Interactive Application Modal */}
      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={closeApplyModal} 
        initialCourseId={modalCourseId} 
      />
    </div>
  );
}
