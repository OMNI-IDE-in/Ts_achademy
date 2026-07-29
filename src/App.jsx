import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DiplomaPrograms from './components/DiplomaPrograms';
import CurriculumRoadmap from './components/CurriculumRoadmap';
import WhyTSGlobal from './components/WhyTSGlobal';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-body font-sans selection:bg-indigo selection:text-paper flex flex-col">
      {/* 1. Sticky Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Courses Grid (7 Programmes) */}
        <DiplomaPrograms />

        {/* 4. Curriculum Deep-Dive (Flagship Accordions) */}
        <CurriculumRoadmap />

        {/* 5. Why TS Global Academy (3 Pillars) */}
        <WhyTSGlobal />

        {/* 6. FAQ Accordion */}
        <FAQSection />
      </main>

      {/* 7. Dark Indigo Footer */}
      <Footer />
    </div>
  );
}
