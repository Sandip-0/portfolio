import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import CustomCursor    from './components/CustomCursor';
import PageLoader      from './components/PageLoader';
import NavbarDS        from './components/NavbarDS';
import HeroDS          from './components/HeroDS';
import WorkList        from './components/WorkList';
import AboutDS         from './components/AboutDS';
import SkillsMarquee   from './components/SkillsMarquee';
import ExperienceDS    from './components/ExperienceDS';
import ContactDS       from './components/ContactDS';
import FooterDS        from './components/FooterDS';
import ResumeModal     from './components/ResumeModal';
import SlideSection    from './components/SlideSection';
import CurvedTransition from './components/CurvedTransition';

export default function App() {
  const [loading,    setLoading]    = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleLoaderComplete = useCallback(() => setLoading(false), []);
  const handleOpenResume     = useCallback(() => setResumeOpen(true), []);
  const handleCloseResume    = useCallback(() => setResumeOpen(false), []);

  return (
    <>
      {/* Custom cursor — always mounted, adapts with mix-blend-mode */}
      <CustomCursor />

      {/* Page loader */}
      {loading && (
        <PageLoader onComplete={handleLoaderComplete} />
      )}

      {/* Main site canvas */}
      <motion.div
        style={{
          background:  'var(--cream)',
          color:       'var(--charcoal)',
          minHeight:   '100svh',
          overflowX:   'hidden',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <NavbarDS onOpenResume={handleOpenResume} />

        <main>
          {/* ── Slide 1: Hero ────────────────────────────────────────── */}
          <SlideSection zIndex={1} roundedTop={false} bg="var(--cream)">
            <HeroDS />
          </SlideSection>

          {/* Transition: Hero -> Work */}
          <CurvedTransition
            fill="var(--cream)"
            bg="var(--cream)"
            direction="up"
            badge="01 · Selected Work"
            badgeHref="#work"
            maxHeight={80}
          />

          {/* ── Slide 2: Work ────────────────────────────────────────── */}
          <SlideSection zIndex={2} roundedTop={true} bg="var(--cream)">
            <WorkList />
          </SlideSection>

          {/* Transition: Work -> About */}
          <CurvedTransition
            fill="var(--cream-dark)"
            bg="var(--cream)"
            direction="up"
            badge="02 · About & Philosophy"
            badgeHref="#about"
            maxHeight={100}
          />

          {/* ── Slide 3: About ───────────────────────────────────────── */}
          <SlideSection zIndex={3} roundedTop={true} bg="var(--cream-dark)">
            <AboutDS />
          </SlideSection>

          {/* Transition: About -> Skills */}
          <CurvedTransition
            fill="var(--cream)"
            bg="var(--cream-dark)"
            direction="up"
            badge="03 · Technology Stack"
            badgeHref="#skills"
            maxHeight={90}
          />

          {/* ── Slide 4: Skills Marquee ──────────────────────────────── */}
          <SlideSection zIndex={4} roundedTop={true} bg="var(--cream)">
            <SkillsMarquee />
          </SlideSection>

          {/* Transition: Skills -> Experience */}
          <CurvedTransition
            fill="var(--cream-dark)"
            bg="var(--cream)"
            direction="up"
            badge="04 · Experience & Credentials"
            badgeHref="#experience"
            maxHeight={100}
          />

          {/* ── Slide 5: Experience & Certifications ─────────────────── */}
          <SlideSection zIndex={5} roundedTop={true} bg="var(--cream-dark)">
            <ExperienceDS />
          </SlideSection>

          {/* ── Slide 6: Contact & Footer (Dark World) ───────────────── */}
          {/* ContactDS contains Dennis Snellenberg's iconic curved dome arch
              and the floating magnetic circular CTA button */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <ContactDS />
            <FooterDS />
          </div>
        </main>
      </motion.div>

      {/* Resume modal */}
      <AnimatePresence>
        {resumeOpen && (
          <ResumeModal key="resume" onClose={handleCloseResume} />
        )}
      </AnimatePresence>
    </>
  );
}
