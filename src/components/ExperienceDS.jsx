import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile';

/* ─── Certificate Image Lightbox ─────────────────────────────────── */
function CertLightbox({ cert, onClose }) {
  // Lock page scroll while lightbox is open
  useEffect(() => {
    document.body.dataset.modalOpen = 'true';
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      delete document.body.dataset.modalOpen;
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="cert-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          cursor: 'none',
          overscrollBehavior: 'contain',
          touchAction: 'none',
        }}
      >
        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={e => e.stopPropagation()}
          style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '88vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '-16px',
              right: '-16px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--cream)',
              color: 'var(--charcoal)',
              border: 'none',
              fontSize: '18px',
              fontWeight: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              cursor: 'pointer',
              boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
            }}
            data-cursor-label="Close"
          >
            ×
          </button>

          {/* Keep the complete certificate visible without creating a scrollable panel. */}
          <div
            style={{
              maxWidth: 'calc(100vw - 32px)',
              maxHeight: 'calc(100svh - 152px)',
              borderRadius: '8px',
            }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              style={{
                maxWidth: '100%',
                maxHeight: 'calc(100svh - 152px)',
                width: '100%',
                objectFit: 'contain',
                borderRadius: '8px',
                display: 'block',
                boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
              }}
            />
          </div>

          {/* Caption */}
          <div style={{
            marginTop: '16px',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '18px',
              fontWeight: 350,
              color: 'rgba(242,237,231,0.95)',
              lineHeight: 1.4,
              letterSpacing: '-0.01em',
            }}>
              {cert.title}
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(242,237,231,0.4)',
              marginTop: '6px',
            }}>
              {cert.issuer}
            </p>

            {/* Verify link in lightbox */}
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="Verify ↗"
                style={{
                  display: 'inline-block',
                  marginTop: '16px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--accent)',
                  paddingBottom: '2px',
                }}
              >
                Verify Certificate ↗
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}


/* ─── Certificate Card ─────────────────────────────────────────────── */
function CertCard({ cert, delay, inView }) {
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <motion.div
        className="cert-card"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: 'var(--cream-dark)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '150px',
          cursor: cert.image ? 'none' : 'default',
          position: 'relative',
          overflow: 'hidden',
        }}
        data-cursor-label={cert.image ? 'View →' : ''}
        onClick={() => cert.image && setLightbox(true)}
        whileHover={cert.image ? { y: -4 } : {}}
      >
        {/* Has-image indicator */}
        {cert.image && (
          <div style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'var(--accent)',
          }} />
        )}

        {/* Title */}
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '15px',
          fontWeight: 350,
          color: 'var(--charcoal)',
          lineHeight: 1.4,
          letterSpacing: '-0.01em',
        }}>
          {cert.title}
        </p>

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
          <span className="text-label" style={{ color: 'var(--mid)' }}>{cert.issuer}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {/* Badge */}
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '9px',
              fontWeight: 400,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              background: 'var(--accent)',
              padding: '3px 10px',
              borderRadius: '100px',
            }}>
              {cert.tag}
            </span>
            {/* View image hint */}
            {cert.image && (
              <span style={{ fontSize: '10px', color: 'var(--mid)', fontFamily: 'var(--font-sans)', letterSpacing: '0.05em' }}>
                tap to view
              </span>
            )}
            {/* Verify link */}
            {cert.verifyUrl && !cert.image && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="Verify ↗"
                onClick={e => e.stopPropagation()}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '10px',
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--mid)',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(92,92,92,0.3)',
                  paddingBottom: '1px',
                }}
              >
                Verify ↗
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Lightbox portal */}
      {lightbox && (
        <CertLightbox cert={cert} onClose={() => setLightbox(false)} />
      )}
    </>
  );
}

/* ─── Fade Row animation ───────────────────────────────────────────── */
function FadeRow({ children, delay = 0, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Table Row ────────────────────────────────────────────────────── */
function TableRow({ left, title, subtitle, bullets, extra, delay, inView }) {
  return (
    <FadeRow delay={delay} inView={inView}>
      <div
        className="py-8"
        style={{
          borderTop: '1px solid var(--border)',
          display: 'grid',
          gap: 'clamp(12px, 3vw, 32px)',
          gridTemplateColumns: 'clamp(80px, 16%, 180px) 1fr',
        }}
      >
        <div>{left}</div>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(18px, 1.8vw, 24px)',
            fontWeight: 350,
            color: 'var(--charcoal)',
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
            marginBottom: '4px',
          }}>
            {title}
          </h3>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            color: 'var(--accent)',
            fontWeight: 400,
            letterSpacing: '0.04em',
            marginBottom: bullets ? '16px' : '0',
          }}>
            {subtitle}
          </p>
          {bullets && (
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {bullets.map((b, i) => (
                <li key={i} style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  color: 'var(--mid)',
                  paddingLeft: '14px',
                  borderLeft: '2px solid var(--border-dark)',
                  lineHeight: 1.7,
                }}>
                  {b}
                </li>
              ))}
            </ul>
          )}
          {extra}
        </div>
      </div>
    </FadeRow>
  );
}

function Label({ children }) {
  return (
    <p className="text-label" style={{ color: 'var(--mid)', marginBottom: '24px' }}>
      {children}
    </p>
  );
}

/* ─── Main ExperienceDS ─────────────────────────────────────────────── */
export default function ExperienceDS() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="experience" className="section-pad" style={{ background: 'var(--cream-dark)' }}>
      <div ref={ref} className="container-editorial">

        {/* ── Section label ──────────────────────────────────────── */}
        <div style={{ overflow: 'hidden', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <motion.span
            className="text-label"
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Background
          </motion.span>
        </div>

        <div style={{ overflow: 'hidden', marginBottom: 'clamp(48px, 7vw, 80px)' }}>
          <motion.h2
            className="text-heading"
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            Experience &amp;{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Credentials</em>
          </motion.h2>
        </div>

        {/* ── Work Experience ─────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 7vw, 80px)' }}>
          <FadeRow delay={0.12} inView={inView}><Label>Work Experience</Label></FadeRow>
          {profile.experience.map((exp, i) => (
            <TableRow
              key={i}
              delay={0.18 + i * 0.1}
              inView={inView}
              left={
                <>
                  <p className="text-label" style={{ color: 'var(--mid)' }}>{exp.period}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'var(--accent)', fontWeight: 400, letterSpacing: '0.08em', marginTop: '4px', textTransform: 'uppercase' }}>{exp.type}</p>
                </>
              }
              title={exp.role}
              subtitle={exp.company}
              bullets={exp.bullets}
            />
          ))}
        </div>

        {/* ── Education ──────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 7vw, 80px)' }}>
          <FadeRow delay={0.28} inView={inView}><Label>Education</Label></FadeRow>
          {profile.education.map((edu, i) => (
            <TableRow
              key={i}
              delay={0.32 + i * 0.1}
              inView={inView}
              left={
                <>
                  <p className="text-label" style={{ color: 'var(--mid)' }}>{edu.period}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'var(--accent)', fontWeight: 400, letterSpacing: '0.06em', marginTop: '4px' }}>{edu.grade}</p>
                </>
              }
              title={edu.degree}
              subtitle={`${edu.institution}, ${edu.location}`}
              extra={
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--light)', lineHeight: 1.7, marginTop: '8px' }}>{edu.description}</p>
              }
            />
          ))}
        </div>

        {/* ── Certifications with image lightbox ─────────────────── */}
        <div>
          <FadeRow delay={0.4} inView={inView}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <Label>Certifications &amp; Achievements</Label>
              <span className="text-label" style={{ color: 'var(--light)' }}>
                ● gold dot = has certificate image
              </span>
            </div>
          </FadeRow>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: 'var(--border)' }}
          >
            {profile.certificates.map((cert, i) => (
              <CertCard
                key={cert.title}
                cert={cert}
                delay={0.44 + i * 0.06}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
