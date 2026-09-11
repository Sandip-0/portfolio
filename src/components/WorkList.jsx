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

const CATEGORY_LABEL = {
  agent: 'Agentic AI',
  ai:    'AI & RAG',
  ml:    'ML & Data Science',
  web:   'Web',
};

/**
 * Full-screen Video Demo Modal with YouTube embed.
 */
function ProjectVideoModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
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
        {/* Header */}
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

        {/* 16:9 Video */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000' }}>
          <iframe
            src={`${project.embedUrl}?autoplay=1&rel=0`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          />
        </div>

        {/* Footer */}
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
              <span key={i} style={{
                fontSize: '11px',
                fontFamily: 'var(--font-sans)',
                color: 'rgba(255,255,255,0.7)',
                background: 'rgba(255,255,255,0.06)',
                padding: '3px 10px',
                borderRadius: '100px',
              }}>
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
              style={{ padding: '7px 16px', fontSize: '11px', borderColor: 'rgba(255,255,255,0.25)', color: '#ffffff' }}
            >
              <span>GitHub</span> <span style={{ fontSize: '13px' }}>↗</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic filled"
                style={{ padding: '7px 16px', fontSize: '11px', background: 'var(--accent)', color: '#111111', borderColor: 'var(--accent)' }}
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
 * Square project card — thumbnail + hover overlay with actions.
 * Works on desktop (hover) and mobile (tap).
 */
function ProjectCard({ project, index, onOpenVideo }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [hovered, setHovered] = useState(false);

  const handleCardClick = (e) => {
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
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onClick={handleCardClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor-label={project.videoUrl ? 'Demo ▶' : 'View →'}
      style={{
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
        background: 'var(--cream-dark)',
        border: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        aspectRatio: '1/1.05', // slightly taller than square for visual comfort
      }}
    >
      {/* ── Thumbnail area (top 60%) ── */}
      <div style={{
        position: 'relative',
        width: '100%',
        flex: '0 0 60%',
        overflow: 'hidden',
        background: '#111',
      }}>
        {project.videoId ? (
          <>
            <img
              src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
                transform: hovered ? 'scale(1.06)' : 'scale(1)',
              }}
            />
            {/* Play button overlay */}
            <motion.div
              animate={{ opacity: hovered ? 1 : 0.7, scale: hovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(247,244,238,0.9)',
                color: '#111',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                paddingLeft: '3px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}>
                ▶
              </div>
            </motion.div>
          </>
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            background: PROJECT_GRADIENTS[project.id] || 'linear-gradient(135deg,#c8a96e,#0d0d0d)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 350,
              color: '#f0ece6',
              fontSize: 'clamp(13px, 1.4vw, 18px)',
              textAlign: 'center',
              lineHeight: 1.4,
              letterSpacing: '-0.01em',
            }}>
              {project.title}
            </span>
          </div>
        )}

        {/* Category badge */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          background: 'rgba(17,17,17,0.75)',
          backdropFilter: 'blur(8px)',
          padding: '3px 10px',
          borderRadius: '100px',
          fontFamily: 'var(--font-sans)',
          fontSize: '9px',
          fontWeight: 400,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(242,237,231,0.85)',
        }}>
          {CATEGORY_LABEL[project.category] || project.category}
        </div>

        {/* Index number */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'rgba(17,17,17,0.55)',
          backdropFilter: 'blur(8px)',
          padding: '3px 8px',
          borderRadius: '100px',
          fontFamily: 'var(--font-sans)',
          fontSize: '9px',
          color: 'rgba(242,237,231,0.55)',
          letterSpacing: '0.08em',
        }}>
          {num}
        </div>
      </div>

      {/* ── Card info (bottom 40%) ── */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '16px',
        gap: '8px',
      }}>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(14px, 1.3vw, 17px)',
            fontWeight: 350,
            color: 'var(--charcoal)',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
            marginBottom: '4px',
          }}>
            {project.title}
          </h3>
          <p className="text-label" style={{ color: 'var(--mid)', fontSize: '10px', lineHeight: 1.4 }}>
            {project.tagline}
          </p>
        </div>

        {/* Tech tags — show top 3 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '2px' }}>
          {project.techStack.slice(0, 3).map((tech, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '9px',
              color: 'var(--mid)',
              background: 'var(--cream)',
              border: '1px solid var(--border)',
              padding: '2px 8px',
              borderRadius: '100px',
              letterSpacing: '0.04em',
            }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Action row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: '4px',
          flexWrap: 'wrap',
        }}>
          {project.videoUrl && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onOpenVideo(project); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                background: 'var(--charcoal)',
                color: 'var(--cream)',
                border: 'none',
                padding: '5px 12px',
                borderRadius: '100px',
                fontFamily: 'var(--font-sans)',
                fontSize: '10px',
                letterSpacing: '0.06em',
                cursor: 'pointer',
                textTransform: 'uppercase',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--charcoal)'}
            >
              <span>Demo</span>
              <span style={{ fontSize: '8px' }}>▶</span>
            </button>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              color: 'var(--mid)',
              textDecoration: 'none',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--charcoal)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--mid)'}
          >
            GitHub ↗
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '10px',
                color: 'var(--accent)',
                textDecoration: 'none',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
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
          <div ref={headRef} style={{ marginBottom: 'clamp(40px,7vw,80px)' }}>
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

          {/* ── Square card grid — 1 col mobile, 2 col tablet, 3 col desktop ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(12px, 2vw, 24px)',
            marginBottom: 'clamp(32px, 5vw, 56px)',
          }}>
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpenVideo={setSelectedVideo}
              />
            ))}
          </div>

          {/* CTA */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
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
      </section>

      {/* Video Modal */}
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
