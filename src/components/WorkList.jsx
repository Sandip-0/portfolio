import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data/projects';

// Gradient preview cards
const PROJECT_GRADIENTS = {
  'arxiv-research-agent':   'linear-gradient(135deg, #7c3aed 0%, #1e1b4b 100%)',
  'insightforge-rag':       'linear-gradient(135deg, #06b6d4 0%, #0d0d0d 100%)',
  'credit-risk-prediction': 'linear-gradient(135deg, #10b981 0%, #064e3b 100%)',
  'sales-forecasting':      'linear-gradient(135deg, #f59e0b 0%, #78350f 100%)',
  'heart-disease':          'linear-gradient(135deg, #f43f5e 0%, #4c0519 100%)',
  'emotion-classification': 'linear-gradient(135deg, #8b5cf6 0%, #1e1b4b 100%)',
  'customer-churn':         'linear-gradient(135deg, #3b82f6 0%, #1e1b4b 100%)',
  'movie-recsys':           'linear-gradient(135deg, #6366f1 0%, #0d0d0d 100%)',
  'netflix-data-viz':       'linear-gradient(135deg, #ef4444 0%, #0d0d0d 100%)',
  'alex-ai':                'linear-gradient(135deg, #14b8a6 0%, #0d0d0d 100%)',
  'newspulse':              'linear-gradient(135deg, #3b82f6 0%, #1e1b4b 100%)',
};

const CATEGORY_LABEL = {
  agent: 'Agentic AI',
  ai:    'AI & RAG',
  ml:    'ML & Data Science',
  web:   'Web',
};

/**
 * The Dennis Snellenberg signature hover effect:
 * The preview image FOLLOWS the cursor inside the row.
 */
function ProjectRow({ project, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const [hovered,  setHovered]  = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const previewRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'none',
        borderTop: '1px solid var(--border)',
      }}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.055, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* ── Cursor-following preview card ─────────────────────── */}
      <motion.div
        ref={previewRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '260px',
          aspectRatio: '16/10',
          borderRadius: '8px',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 20,
          top: 0,
          left: 0,
          x: mousePos.x - 130,
          y: mousePos.y - 80,
        }}
        animate={{
          opacity: hovered ? 1 : 0,
          scale:   hovered ? 1 : 0.82,
          rotate:  hovered ? (index % 2 === 0 ? 2 : -2) : 0, // slight tilt
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div style={{
          width: '100%',
          height: '100%',
          background: PROJECT_GRADIENTS[project.id] || 'linear-gradient(135deg,#c8a96e,#0d0d0d)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 350,
            color: '#f0ece6',
            fontSize: '15px',
            textAlign: 'center',
            lineHeight: 1.4,
            letterSpacing: '-0.01em',
          }}>
            {project.title}
          </span>
        </div>
      </motion.div>

      {/* ── Row content ───────────────────────────────────────── */}
      <div
        className="flex items-center justify-between py-6 md:py-7"
        style={{
          paddingLeft: '0',
          paddingRight: '0',
          transition: 'padding 0.3s ease',
          paddingLeft: hovered ? '12px' : '0',
        }}
      >
        {/* Left: index + title */}
        <div className="flex items-center gap-5 md:gap-8 flex-1 min-w-0">
          <span className="text-label shrink-0" style={{ color: 'var(--light)', minWidth: '28px' }}>
            {num}
          </span>
          <div className="min-w-0">
            <motion.h3
              animate={{ x: hovered ? 8 : 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(18px, 2.2vw, 30px)',
                fontWeight: 350,
                color: 'var(--charcoal)',
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
              }}
            >
              {project.title}
            </motion.h3>
            <p className="text-label mt-1" style={{ color: 'var(--mid)' }}>
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Right: category + links */}
        <div className="hidden md:flex items-center gap-8 shrink-0 ml-8">
          <span className="text-label" style={{ color: 'var(--mid)' }}>
            {CATEGORY_LABEL[project.category] || project.category}
          </span>
          <div className="flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="Open ↗"
              className="text-label"
              style={{ color: 'var(--mid)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--charcoal)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--mid)'}
            >
              GitHub ↗
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="Live ↗"
                className="text-label"
                style={{ color: 'var(--accent)', textDecoration: 'none' }}
              >
                Live ↗
              </a>
            )}
          </div>
        </div>

        {/* Arrow that slides in on hover */}
        <motion.span
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '18px',
            color: 'var(--charcoal)',
            marginLeft: '16px',
            flexShrink: 0,
          }}
        >
          ↗
        </motion.span>
      </div>

      {/* Hover fill background */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--cream-dark)',
          zIndex: -1,
          originX: 0,
        }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}

export default function WorkList() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: '-60px' });

  return (
    <section id="work" className="section-pad" style={{ background: 'var(--cream)' }}>
      <div className="container-editorial">

        {/* Section header */}
        <div ref={headRef} style={{ marginBottom: 'clamp(48px,8vw,96px)' }}>
          <div style={{ overflow: 'hidden', marginBottom: '16px' }}>
            <motion.span
              className="text-label"
              initial={{ y: '110%' }}
              animate={headInView ? { y: '0%' } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ color: 'var(--mid)' }}
            >
              Selected Work
            </motion.span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div style={{ overflow: 'hidden' }}>
              <motion.h2
                className="text-heading"
                initial={{ y: '110%' }}
                animate={headInView ? { y: '0%' } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Projects<em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>.</em>
              </motion.h2>
            </div>
            <motion.p
              className="text-label hidden md:block"
              initial={{ opacity: 0 }}
              animate={headInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ maxWidth: '260px', textAlign: 'right', color: 'var(--mid)', lineHeight: 1.75 }}
            >
              {projects.length} projects across<br />
              Agentic AI, ML &amp; Web
            </motion.p>
          </div>
        </div>

        {/* Project rows */}
        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}

          {/* Final border + CTA */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', marginTop: '0' }}>
            <a
              href="https://github.com/Sandip-0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic"
              data-cursor-label="Open ↗"
            >
              All repositories on GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
