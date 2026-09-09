import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
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

// Category labels
const CATEGORY_LABEL = {
  agent: 'Agentic AI',
  ai:    'AI & RAG',
  ml:    'ML & Data Science',
  web:   'Web',
};

/**
 * Dennis Snellenberg–style Video Demo Modal:
 * Displays YouTube or MP4 demo video in a sleek dark overlay with 16:9 player,
 * tags, and direct links to GitHub and Live apps.
 */
function ProjectVideoModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="cert-overlay"
      onClick={onClose}
      style={{ zIndex: 99999, padding: 'clamp(16px, 3vw, 40px)' }}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '920px',
          background: 'var(--charcoal)',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.7)',
          color: 'var(--cream)',
        }}
      >
        {/* Modal Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          <div>
            <span className="text-label" style={{ color: 'var(--accent)', fontSize: '10px' }}>
              {project.badge || 'Demo Video'}
            </span>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(16px, 2vw, 22px)',
              fontWeight: 350,
              color: '#ffffff',
              marginTop: '2px',
              letterSpacing: '-0.02em',
            }}>
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              color: '#ffffff',
              border: 'none',
              fontSize: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
          >
            ×
          </button>
        </div>

        {/* 16:9 Video Embed */}
        <div style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          background: '#000000',
        }}>
          <iframe
            src={`${project.embedUrl}?autoplay=1&rel=0`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </div>

        {/* Modal Footer with Actions */}
        <div style={{
          padding: '18px 24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '14px',
          background: 'rgba(0,0,0,0.25)',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {project.techStack?.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-sans)',
                  color: 'rgba(255,255,255,0.7)',
                  background: 'rgba(255,255,255,0.06)',
                  padding: '3px 10px',
                  borderRadius: '100px',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic"
              style={{
                padding: '7px 16px',
                fontSize: '11px',
                borderColor: 'rgba(255,255,255,0.25)',
                color: '#ffffff',
              }}
            >
              <span>GitHub</span> <span style={{ fontSize: '13px' }}>↗</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic filled"
                style={{
                  padding: '7px 16px',
                  fontSize: '11px',
                  background: 'var(--accent)',
                  color: '#111111',
                  borderColor: 'var(--accent)',
                }}
              >
                <span>Live App</span> <span style={{ fontSize: '13px' }}>↗</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/**
 * The Dennis Snellenberg signature hover effect:
 * The preview image FOLLOWS the cursor inside the row.
 */
function ProjectRow({ project, index, onOpenVideo }) {
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

  const handleRowClick = (e) => {
    // If clicking an interactive button or link, let it handle the event
    if (e.target.closest('a') || e.target.closest('button')) return;
    if (project.videoUrl) {
      onOpenVideo(project);
    } else if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    } else if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  };

  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      ref={ref}
      className="project-row"
      data-cursor-label={project.videoUrl ? "Demo ▶" : "View →"}
      onClick={handleRowClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        overflow: 'hidden',
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
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
        }}
        animate={{
          opacity: hovered ? 1 : 0,
          scale:   hovered ? 1 : 0.82,
          rotate:  hovered ? (index % 2 === 0 ? 2 : -2) : 0, // slight tilt
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {project.videoId ? (
          <div style={{ width: '100%', height: '100%', position: 'relative', background: '#000' }}>
            <img
              src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(247, 244, 238, 0.92)',
                color: '#111',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                paddingLeft: '3px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}>
                ▶
              </div>
            </div>
          </div>
        ) : (
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
        )}
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

            {/* Mobile quick actions (fully responsive on phones & tablets) */}
            <div className="flex md:hidden items-center gap-3 mt-3 flex-wrap">
              {project.videoUrl && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenVideo(project);
                  }}
                  className="text-label"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: '#111',
                    background: 'var(--accent)',
                    padding: '4px 10px',
                    borderRadius: '100px',
                    fontSize: '10px',
                    border: 'none',
                  }}
                >
                  <span>Video Demo</span>
                  <span style={{ fontSize: '8px' }}>▶</span>
                </button>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label"
                style={{ color: 'var(--mid)', fontSize: '10px' }}
              >
                GitHub ↗
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label"
                  style={{ color: 'var(--accent)', fontSize: '10px' }}
                >
                  Live ↗
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right: category + links (desktop) */}
        <div className="hidden md:flex items-center gap-8 shrink-0 ml-8">
          <span className="text-label" style={{ color: 'var(--mid)' }}>
            {CATEGORY_LABEL[project.category] || project.category}
          </span>
          <div className="flex items-center gap-4">
            {project.videoUrl && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenVideo(project);
                }}
                className="text-label"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  color: 'var(--charcoal)',
                  background: 'rgba(200, 169, 110, 0.22)',
                  border: '1px solid var(--accent)',
                  padding: '5px 13px',
                  borderRadius: '100px',
                  cursor: 'pointer',
                  fontSize: '10px',
                  letterSpacing: '0.08em',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--charcoal)';
                  e.currentTarget.style.color = '#f7f4ee';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(200, 169, 110, 0.22)';
                  e.currentTarget.style.color = 'var(--charcoal)';
                }}
              >
                <span>Video Demo</span>
                <span style={{ fontSize: '9px', color: 'var(--accent)' }}>▶</span>
              </button>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
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
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
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
              <ProjectRow
                key={project.id}
                project={project}
                index={i}
                onOpenVideo={setSelectedVideo}
              />
            ))}

            {/* Final border + CTA */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', marginTop: '0' }}>
              <a
                href="https://github.com/Sandip-0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic"
              >
                <span>All repositories on GitHub</span> <span style={{ fontSize: '15px' }}>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      <AnimatePresence>
        {selectedVideo && (
          <ProjectVideoModal
            project={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
