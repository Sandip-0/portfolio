import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/profile';

/**
 * Dennis Snellenberg–style Magnetic Circle Button:
 * Floats right at the curved seam between light & dark sections,
 * and moves with parallax speed on scroll.
 */
function FloatingMagneticCTA({ onClick }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setOffset({
      x: (e.clientX - cx) * 0.28,
      y: (e.clientY - cy) * 0.28,
    });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 180, damping: 14 }}
      data-cursor-label="Contact"
      style={{
        width: 'clamp(120px, 14vw, 160px)',
        height: 'clamp(120px, 14vw, 160px)',
        borderRadius: '50%',
        background: 'var(--accent)',
        color: '#111111',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'none',
        boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
        position: 'relative',
        zIndex: 35,
        transition: 'background 0.3s ease, transform 0.2s ease',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'clamp(12px, 1.2vw, 15px)',
        fontWeight: 400,
        letterSpacing: '0.04em',
        textAlign: 'center',
        lineHeight: 1.2,
      }}>
        Get in touch
      </span>
      <span style={{
        fontSize: 'clamp(18px, 1.8vw, 24px)',
        marginTop: '4px',
        lineHeight: 1,
      }}>
        ↓
      </span>
    </motion.button>
  );
}

export default function ContactDS() {
  const sectionRef = useRef(null);
  const inView     = useInView(sectionRef, { once: true, margin: '-60px' });
  const formRef    = useRef(null);

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent]           = useState(false);

  // Parallax tracking for the floating magnetic circle button (NO height animation!)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });

  // Smooth floating translation without touching document layout height
  const buttonParallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formState.name}`;
    const body    = `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={sectionRef}
      id="contact"
      style={{
        position: 'relative',
        background: 'var(--charcoal)',
        zIndex: 10,
      }}
    >
      {/* ── Seamless Curved Transition from Cream to Charcoal ────── */}
      {/* Fixed height container matching the exact background of ExperienceDS */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(80px, 9vw, 120px)',
          background: 'var(--cream-dark)',
          overflow: 'visible',
          marginBottom: '-1px',
        }}
      >
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            overflow: 'visible',
          }}
        >
          {/* Charcoal dome curving up into cream, extending 10px down to overlap dark section */}
          <path
            d="M 0,100 Q 720,0 1440,100 L 1440,110 L 0,110 Z"
            fill="var(--charcoal)"
          />
        </svg>

        {/* ── Giant Floating Magnetic Circle CTA ────────────────── */}
        {/* Centered right at the apex of the curve, fully visible and interactive */}
        {/* Hidden on mobile (< md) to prevent overlapping the contact section */}
        <motion.div
          className="hidden md:block"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            x: '-50%',
            y: buttonParallaxY,
            zIndex: 50,
          }}
        >
          <FloatingMagneticCTA onClick={scrollToForm} />
        </motion.div>
      </div>

      {/* ── Main Dark Contact Canvas ───────────────────────────── */}
      {/* -4px marginTop completely overlaps any subpixel rendering seam */}
      <div
        className="section-pad"
        style={{
          background: 'var(--charcoal)',
          marginTop: '-4px',
          paddingTop: 'clamp(50px, 7vw, 90px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="container-editorial" ref={formRef}>

          {/* Label */}
          <div style={{ overflow: 'hidden', marginBottom: '40px' }}>
            <motion.span
              className="text-label"
              initial={{ y: '110%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ color: 'rgba(242,237,231,0.4)' }}
            >
              Get In Touch
            </motion.span>
          </div>

          {/* Giant CTA heading */}
          <div style={{ overflow: 'hidden', marginBottom: '50px' }}>
            <motion.h2
              className="text-heading"
              initial={{ y: '110%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ color: '#f2ede7', lineHeight: 1.05 }}
            >
              Let's work<br />
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>together.</em>
            </motion.h2>
          </div>

          {/* Large email link */}
          <motion.a
            href={`mailto:${profile.email}`}
            className="block"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            data-cursor-label="Email ↗"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(20px, 3.2vw, 38px)',
              fontWeight: 350,
              letterSpacing: '-0.02em',
              color: '#f2ede7',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(242,237,231,0.2)',
              paddingBottom: '20px',
              marginBottom: '64px',
              display: 'inline-block',
              transition: 'color 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#f2ede7';
              e.currentTarget.style.borderColor = 'rgba(242,237,231,0.2)';
            }}
          >
            {profile.email} &nbsp;<span style={{ fontSize: '0.8em' }}>↗</span>
          </motion.a>

          {/* Two-column: form + socials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

            {/* Contact form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              {[
                { name: 'name',    label: 'Your Name',    type: 'text',  required: true },
                { name: 'email',   label: 'Your Email',   type: 'email', required: true },
              ].map(field => (
                <div key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label className="text-label" style={{ color: 'rgba(242,237,231,0.4)' }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formState[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(242,237,231,0.2)',
                      color: '#f2ede7',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '16px',
                      padding: '12px 0',
                      outline: 'none',
                      width: '100%',
                      transition: 'border-color 0.3s ease',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(242,237,231,0.2)'}
                    placeholder="—"
                  />
                </div>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="text-label" style={{ color: 'rgba(242,237,231,0.4)' }}>Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(242,237,231,0.2)',
                    color: '#f2ede7',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '16px',
                    padding: '12px 0',
                    outline: 'none',
                    width: '100%',
                    resize: 'none',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(242,237,231,0.2)'}
                  placeholder="—"
                />
              </div>
              <button
                type="submit"
                className="btn-magnetic filled"
                data-cursor-label="Send"
                style={{
                  alignSelf: 'flex-start',
                  marginTop: '8px',
                  background: 'var(--accent)',
                  color: '#111111',
                  borderColor: 'var(--accent)',
                }}
              >
                <span>{sent ? 'Opening mail client…' : 'Send Message →'}</span>
              </button>
            </motion.form>

            {/* Info + socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div>
                  <p className="text-label" style={{ color: 'rgba(242,237,231,0.4)', marginBottom: '8px' }}>Location</p>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 350, color: '#f2ede7' }}>
                    {profile.location}
                  </p>
                </div>
                <div>
                  <p className="text-label" style={{ color: 'rgba(242,237,231,0.4)', marginBottom: '8px' }}>Phone / WhatsApp</p>
                  <a
                    href={profile.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-label="Chat ↗"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 350, color: '#f2ede7', textDecoration: 'none' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#f2ede7'}
                  >
                    {profile.phone} ↗
                  </a>
                </div>
                <div>
                  <p className="text-label" style={{ color: 'rgba(242,237,231,0.4)', marginBottom: '16px' }}>Find me on</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { label: 'GitHub',     url: profile.socials.github },
                      { label: 'LinkedIn',   url: profile.socials.linkedin },
                      { label: 'GeeksforGeeks', url: profile.socials.gfg },
                    ].map(link => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-label="Open ↗"
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '14px',
                          fontWeight: 400,
                          color: 'rgba(242,237,231,0.6)',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'color 0.2s ease',
                          letterSpacing: '0.03em',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(242,237,231,0.6)'}
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
