import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/profile';

/** Split a string into individual <span> characters, each animated separately */
function SplitText({ text, delay = 0, className = '', style = {} }) {
  const chars = text.split('');
  return (
    <span className={className} style={{ display: 'inline-block', ...style }}>
      {chars.map((ch, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '115%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.035,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Reveal a single line by sliding it up from a clipped container */
function LineReveal({ children, delay = 0, style = {} }) {
  return (
    <div style={{ overflow: 'hidden', ...style }}>
      <motion.div
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function HeroDS() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Parallax shifts as user scrolls
  const heroY     = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const heroOp    = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);

  // Base delay synchronized with the <2s loader
  const BASE = 1.25;

  return (
    <section
      ref={ref}
      id="home"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(100px, 12vw, 140px)',
        paddingBottom: 'clamp(60px, 8vw, 100px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        className="container-editorial"
        style={{ y: heroY, opacity: heroOp }}
      >
        {/* ── Main Two-Column Hero Grid ───────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ── Left Column: Typography & CTAs (7 cols) ──────────── */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Label row */}
            <div style={{ marginBottom: 'clamp(20px, 3vw, 36px)' }}>
              <LineReveal delay={BASE}>
                <span className="text-label" style={{ color: 'var(--mid)' }}>
                  Data Science &amp; ML Engineer &nbsp;—&nbsp; West Bengal, India &nbsp;—&nbsp; 2026
                </span>
              </LineReveal>
            </div>

            {/* Giant name — character split */}
            <div style={{ marginBottom: 'clamp(24px, 4vw, 40px)' }}>
              {/* Line 1: SANDIP */}
              <div style={{ lineHeight: 0.88, marginBottom: '0.04em' }}>
                <SplitText
                  text="Sandip"
                  delay={BASE + 0.05}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(60px, 10vw, 146px)',
                    fontWeight: 300,
                    letterSpacing: '-0.035em',
                    color: 'var(--charcoal)',
                  }}
                />
              </div>

              {/* Line 2: ADAK. — offset right */}
              <div style={{
                lineHeight: 0.88,
                paddingLeft: 'clamp(16px, 5vw, 90px)',
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.04em',
              }}>
                <SplitText
                  text="Adak"
                  delay={BASE + 0.2}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(60px, 10vw, 146px)',
                    fontWeight: 300,
                    letterSpacing: '-0.035em',
                    color: 'var(--charcoal)',
                  }}
                />
                {/* Animated golden dot */}
                <motion.span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(60px, 10vw, 146px)',
                    fontWeight: 300,
                    color: 'var(--accent)',
                    lineHeight: 0.88,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: BASE + 0.65, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  .
                </motion.span>
              </div>
            </div>

            {/* Tagline & description */}
            <div style={{ maxWidth: '520px', marginBottom: 'clamp(28px, 4vw, 44px)' }}>
              <LineReveal delay={BASE + 0.4}>
                <p className="text-body-lg" style={{ color: 'var(--charcoal)', fontWeight: 350, fontSize: 'clamp(16px, 1.4vw, 20px)' }}>
                  {profile.headline}
                </p>
              </LineReveal>
              <LineReveal delay={BASE + 0.5} style={{ marginTop: '10px' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--mid)', lineHeight: 1.75 }}>
                  {profile.subheadline}
                </p>
              </LineReveal>
            </div>

            {/* CTA Buttons */}
            <LineReveal delay={BASE + 0.6}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                <a
                  href="#work"
                  className="btn-magnetic filled"
                >
                  <span>View Work</span>
                  <span style={{ fontSize: '16px', lineHeight: 1 }}>↓</span>
                </a>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic"
                >
                  <span>GitHub</span>
                  <span style={{ fontSize: '16px', lineHeight: 1 }}>↗</span>
                </a>
              </div>
            </LineReveal>
          </div>

          {/* ── Right Column: Editorial Portrait (5 cols) ─────────── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              style={{
                y: portraitY,
                position: 'relative',
                width: '100%',
                maxWidth: 'clamp(280px, 28vw, 380px)',
              }}
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1.0,
                delay: BASE + 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Portrait Frame */}
              <div
                className="group relative overflow-hidden"
                data-cursor-label="Sandip"
                style={{
                  aspectRatio: '3/4',
                  borderRadius: 'clamp(20px, 3vw, 32px)',
                  background: 'var(--cream-dark)',
                  boxShadow: '0 32px 80px rgba(17,17,17,0.13), 0 4px 16px rgba(17,17,17,0.06)',
                  border: '1px solid var(--border)',
                }}
              >
                {/* User photo */}
                <motion.img
                  src="/images/sandip-hero.jpg"
                  alt={profile.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 35%',
                    filter: 'contrast(1.03) brightness(0.98)',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  whileHover={{ scale: 1.04 }}
                />

                {/* Subtle warm editorial vignette overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(17,17,17,0.0) 60%, rgba(17,17,17,0.45) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Status pill overlay at bottom of photo */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '18px',
                    left: '18px',
                    right: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    pointerEvents: 'none',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      background: 'rgba(17,17,17,0.72)',
                      backdropFilter: 'blur(10px)',
                      padding: '6px 14px',
                      borderRadius: '100px',
                      color: '#f2ede7',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 400,
                      letterSpacing: '0.04em',
                    }}
                  >
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: '#22c55e',
                        boxShadow: '0 0 8px #22c55e',
                      }}
                    />
                    Available for hire
                  </span>

                  <span
                    style={{
                      background: 'rgba(242,237,231,0.85)',
                      backdropFilter: 'blur(10px)',
                      padding: '5px 12px',
                      borderRadius: '100px',
                      color: '#111111',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '10px',
                      fontWeight: 400,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    IN 🇮🇳
                  </span>
                </div>
              </div>

              {/* Floating decorative badge behind portrait */}
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '-12px',
                  zIndex: -1,
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  opacity: 0.25,
                  filter: 'blur(28px)',
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* ── Scroll Indicator ───────────────────────────────────── */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 'clamp(16px, 3vw, 36px)',
            right: 'clamp(20px, 4vw, 60px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: BASE + 0.9, duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            style={{ width: '56px', height: '56px', position: 'relative' }}
          >
            <svg viewBox="0 0 60 60" style={{ width: '100%', height: '100%' }}>
              <path
                id="scrollCircle"
                d="M 30,30 m -22,0 a 22,22 0 1,1 44,0 a 22,22 0 1,1 -44,0"
                fill="none"
              />
              <text style={{ fontSize: '6.5px', fontFamily: 'var(--font-sans)', letterSpacing: '2.8px', fill: 'var(--mid)' }}>
                <textPath href="#scrollCircle">
                  SCROLL DOWN · SCROLL DOWN ·&nbsp;
                </textPath>
              </text>
            </svg>
          </motion.div>
          <motion.span
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              fontSize: '15px',
              color: 'var(--charcoal)',
            }}
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
