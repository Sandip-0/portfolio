import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const navLinks = [
  { label: 'Work',    href: '#work' },
  { label: 'About',   href: '#about' },
  { label: 'Skills',  href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function NavbarDS({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav
        className="container-editorial flex items-center justify-between py-5 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(242,237,231,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        }}
      >
        {/* Monogram */}
        <a
          href="#"
          className="text-xl font-normal tracking-tight"
          style={{ color: 'var(--charcoal)', textDecoration: 'none', fontFamily: 'var(--font-heading)' }}
        >
          SA<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Nav Links */}
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

        {/* Resume CTA */}
        <button
          onClick={onOpenResume}
          className="btn-magnetic hidden md:inline-flex"
          style={{ fontSize: '11px', padding: '10px 22px' }}
        >
          Resume
          <span style={{ fontSize: '16px', lineHeight: 1 }}>↗</span>
        </button>

        {/* Mobile: email link */}
        <a
          href={`mailto:${profile.email}`}
          className="md:hidden text-label"
          style={{ textDecoration: 'none', color: 'var(--mid)' }}
        >
          Email
        </a>
      </nav>
    </motion.header>
  );
}
