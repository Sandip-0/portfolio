import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Adaptive cursor using mix-blend-mode: difference
 * → appears BLACK on light backgrounds (cream sections)
 * → appears WHITE on dark backgrounds (contact, footer, loader)
 * This is how Dennis Snellenberg's cursor works.
 */
export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const posRef  = useRef({ mx: -200, my: -200, rx: -200, ry: -200 });
  const rafRef  = useRef(null);

  const [label,  setLabel]  = useState('');
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const pos = posRef.current;

    // ── rAF lerp loop ──────────────────────────────────────────
    const tick = () => {
      pos.rx += (pos.mx - pos.rx) * 0.10;
      pos.ry += (pos.my - pos.ry) * 0.10;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${pos.mx - 3}px, ${pos.my - 3}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${pos.rx}px`;
        ringRef.current.style.top  = `${pos.ry}px`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    // ── Mouse events ───────────────────────────────────────────
    const onMove = (e) => {
      pos.mx = e.clientX;
      pos.my = e.clientY;
      if (hidden) setHidden(false);
    };
    const onLeave  = () => setHidden(true);
    const onEnter  = () => setHidden(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    // ── Hover detection ────────────────────────────────────────
    const getLabel = (el) => {
      if (el.dataset?.cursorLabel) return el.dataset.cursorLabel;
      if (el.tagName === 'A')       return 'Open ↗';
      if (el.tagName === 'BUTTON')  return 'Click';
      if (el.classList?.contains('project-row')) return 'View →';
      return '';
    };

    const onEnterEl = (e) => {
      setActive(true);
      setLabel(getLabel(e.currentTarget));
    };
    const onLeaveEl = () => { setActive(false); setLabel(''); };

    const selectors = 'a, button, [role="button"], .project-row, .btn-magnetic, .skill-tag, .cert-card';
    let targets = [];

    const bindAll = () => {
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnterEl);
        el.removeEventListener('mouseleave', onLeaveEl);
      });
      targets = [...document.querySelectorAll(selectors)];
      targets.forEach(el => {
        el.addEventListener('mouseenter', onEnterEl);
        el.addEventListener('mouseleave', onLeaveEl);
      });
    };

    const observer = new MutationObserver(bindAll);
    observer.observe(document.body, { childList: true, subtree: true });
    bindAll();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      observer.disconnect();
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnterEl);
        el.removeEventListener('mouseleave', onLeaveEl);
      });
    };
  }, []); // run once only

  const ringSize = active ? (label ? 76 : 46) : 34;

  return (
    <>
      {/* ── Dot — always WHITE, mix-blend-mode: difference ──────
          Result: black on cream, white on charcoal/black — automatic! */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position:       'fixed',
          top:            0,
          left:           0,
          width:          '6px',
          height:         '6px',
          borderRadius:   '50%',
          background:     '#ffffff',       /* white → inverts to black on cream */
          pointerEvents:  'none',
          zIndex:         9999999,
          opacity:        hidden ? 0 : 1,
          transition:     'opacity 0.15s ease',
          willChange:     'transform',
          mixBlendMode:   'difference',    /* the magic ✨ */
        }}
      />

      {/* ── Ring — same trick ────────────────────────────────────── */}
      <motion.div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          transform:     'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex:        9999998,
          borderRadius:  '50%',
          display:       'flex',
          alignItems:    'center',
          justifyContent:'center',
          mixBlendMode:  'difference',     /* white ring → visible on any bg */
          opacity:       hidden ? 0 : 1,
          transition:    'opacity 0.15s ease',
          willChange:    'left, top',
        }}
        animate={{
          width:      ringSize,
          height:     ringSize,
          background: active ? '#ffffff' : 'transparent',
          border:     active ? '0px solid transparent' : '1.5px solid #ffffff',
        }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      >
        <AnimatePresence>
          {active && label && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.18 }}
              style={{
                fontFamily:    'var(--font-sans)',
                fontSize:      '9px',
                fontWeight:    600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                /* Black text inside white ring — inverts correctly on any bg */
                color:         '#000000',
                whiteSpace:    'nowrap',
                userSelect:    'none',
                mixBlendMode:  'normal',   /* don't double-invert the label */
              }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
