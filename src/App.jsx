import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BackgroundGlow from './components/BackgroundGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import RagPipelineVisualizer from './components/RagPipelineVisualizer';
import Projects from './components/Projects';
import ExperienceAndCertificates from './components/ExperienceAndCertificates';
import EducationTimeline from './components/EducationTimeline';
import DeveloperPresence from './components/DeveloperPresence';
import ResumeCTA from './components/ResumeCTA';
import ResumeModal from './components/ResumeModal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Soft Background Gradient Atmosphere */}
      <BackgroundGlow />

      {/* Floating Glass Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <RagPipelineVisualizer onOpenModal={() => {}} />
        <Projects />
        <ExperienceAndCertificates />
        <EducationTimeline />
        <DeveloperPresence />
        <ResumeCTA onOpenResume={() => setResumeOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Resume Modal */}
      <AnimatePresence>
        {resumeOpen && (
          <ResumeModal onClose={() => setResumeOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
