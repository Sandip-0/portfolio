import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile';

const navLinks = [
  { label: 'Work',    href: '#work' },
  { label: 'About',   href: '#about' },
  { label: 'Skills',  href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function NavbarDS({ onOpenResume }) {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav
          className="container-editorial  flex items-center justify-between py-5 transition-all duration-500"
          style={{
            background: scrolled || menuOpen ? 'rgba(242,237,231,0.96)' : 'transparent',
            backdropFilter: scrolled || menuOpen ? 'blur(16px)' : 'none',
            borderBottom: scrolled || menuOpen ? '1px solid var(--border)' : 'none',
            height:'40px' ,
          }}
        >
          {/* Monogram */}
          <a
            href="#"
            className="text-xl font-normal tracking-tight"
            style={{ color: 'var(--charcoal)', textDecoration: 'none', fontFamily: 'var(--font-heading)' }}
            onClick={handleLinkClick}
          >
            SA<span style={{ color: 'var(--accent)' }}>.</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-label transition-colors duration-200 hover:text-[var(--charcoal)]"
                  style={{ textDecoration: 'none', color: 'var(--mid)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Resume CTA */}
          {/* <button
            onClick={onOpenResume}
            className="btn-magnetic hidden md:inline-flex"
            style={{ fontSize: '11px', padding: '10px 22px' }}
          >
            <span>Resume</span>
            <span style={{ fontSize: '16px', lineHeight: 1 }}>↗</span>
          </button> */}

          {/* Mobile: Hamburger toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden"
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              alignItems: 'flex-end',
            }}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7, width: '24px' } : { rotate: 0, y: 0, width: '24px' }}
              transition={{ duration: 0.3 }}
              style={{ display: 'block', height: '1.5px', background: 'var(--charcoal)', borderRadius: '2px', transformOrigin: 'center' }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'block', height: '1.5px', width: '18px', background: 'var(--charcoal)', borderRadius: '2px' }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7, width: '24px' } : { rotate: 0, y: 0, width: '24px' }}
              transition={{ duration: 0.3 }}
              style={{ display: 'block', height: '1.5px', background: 'var(--charcoal)', borderRadius: '2px', transformOrigin: 'center' }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Full-screen Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 49,
              background: 'var(--cream)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: 'clamp(20px, 8vw, 60px)',
            }}
          >
            {/* Nav links — large editorial style */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(40px, 10vw, 72px)',
                    fontWeight: 300,
                    color: 'var(--charcoal)',
                    textDecoration: 'none',
                    letterSpacing: '-0.035em',
                    lineHeight: 1.1,
                    borderBottom: '1px solid var(--border)',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    display: 'block',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--charcoal)'}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Resume button */}
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => { setMenuOpen(false); onOpenResume(); }}
              className="btn-magnetic filled"
              style={{ marginTop: '32px', fontSize: '12px' }}
            >
              <span>View Resume</span>
              <span style={{ fontSize: '16px', lineHeight: 1 }}>↗</span>
            </motion.button>

            {/* Email link */}
            <motion.a
              href={`mailto:${profile.email}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="text-label"
              style={{
                marginTop: '28px',
                color: 'var(--mid)',
                textDecoration: 'none',
                fontSize: '11px',
              }}
            >
              {profile.email}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
