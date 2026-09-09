import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Dennis Snellenberg–style Dual-Element Cursor:
 * 1. Small solid dot that tracks the mouse pointer with zero latency.
 * 2. Outer follower ring that lags behind with smooth lerp physics.
 * 3. Interactive Zoom Effect: Smoothly expands/zooms up when hovering over
 *    buttons, links, project rows, and cards.
 * 4. Uses mix-blend-mode: difference with white to automatically adapt:
 *    → Inverts to black/charcoal on light cream sections.
 *    → Inverts to crisp white on dark charcoal sections (Contact, Footer).
 */
export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const posRef  = useRef({ mx: -200, my: -200, rx: -200, ry: -200 });
  const rafRef  = useRef(null);

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden,  setHidden]  = useState(true);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices with fine mouse pointers
    const touchDevice = window.matchMedia('(hover: none) or (pointer: coarse)').matches;
    if (touchDevice) {
      setIsTouch(true);
      return;
    }

    const pos = posRef.current;

    // ── Smooth 60/120fps hardware-accelerated rAF lerp loop ────
    const tick = () => {
      // Lerp physics: follower ring smoothly chases the dot
      pos.rx += (pos.mx - pos.rx) * 0.15;
      pos.ry += (pos.my - pos.ry) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${pos.mx}px, ${pos.my}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate3d(${pos.rx}px, ${pos.ry}px, 0) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    // ── Mouse tracking ─────────────────────────────────────────
    const onMove = (e) => {
      pos.mx = e.clientX;
      pos.my = e.clientY;
      if (hidden) setHidden(false);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp   = () => setClicked(false);
    const onLeave     = () => setHidden(true);
    const onEnter     = () => setHidden(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup',   onMouseUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    // ── Interactive Hover Detection (Triggers Zoom Effect) ─────
    const onElementEnter = () => setHovered(true);
    const onElementLeave = () => setHovered(false);

    const selectors = 'a, button, [role="button"], .project-row, .btn-magnetic, .skill-tag, .cert-card, input, textarea, select';
    let targets = [];

    const bindAll = () => {
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onElementEnter);
        el.removeEventListener('mouseleave', onElementLeave);
      });
      targets = [...document.querySelectorAll(selectors)];
      targets.forEach((el) => {
        el.addEventListener('mouseenter', onElementEnter);
        el.addEventListener('mouseleave', onElementLeave);
      });
    };

    const observer = new MutationObserver(bindAll);
    observer.observe(document.body, { childList: true, subtree: true });
    bindAll();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup',   onMouseUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      observer.disconnect();
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onElementEnter);
        el.removeEventListener('mouseleave', onElementLeave);
      });
    };
  }, []);

  if (isTouch) return null;

  // Zoomed dimensions when hovering interactive elements
  const ringSize = hovered ? (clicked ? 52 : 64) : (clicked ? 28 : 38);

  return (
    <>
      {/* ── 1. The Tracking Dot (Instant response) ─────────────── */}
      <motion.div
        ref={dotRef}
        aria-hidden="true"
        animate={{
          scale: clicked ? 0.75 : (hovered ? 1.2 : 1),
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        style={{
          position:       'fixed',
          top:            0,
          left:           0,
          width:          '8px',
          height:         '8px',
          borderRadius:   '50%',
          background:     '#ffffff',       /* Inverts: Black on cream, White on dark */
          pointerEvents:  'none',
          zIndex:         9999999,
          willChange:     'transform',
          mixBlendMode:   'difference',
        }}
      />

      {/* ── 2. The Follower Ring (Lerp physics + Zoom Effect) ─── */}
      <motion.div
        ref={ringRef}
        aria-hidden="true"
        animate={{
          width:        ringSize,
          height:       ringSize,
          borderWidth:  hovered ? '2px' : '1.5px',
          background:   hovered ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
          opacity:      hidden ? 0 : 1,
        }}
        transition={{
          type:      'spring',
          stiffness: 380,
          damping:   26,
          mass:      0.5,
        }}
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          borderRadius:  '50%',
          borderStyle:   'solid',
          borderColor:   '#ffffff',        /* Inverts: Black ring on cream, White ring on dark */
          pointerEvents: 'none',
          zIndex:        9999998,
          mixBlendMode:  'difference',
          willChange:    'transform, width, height',
        }}
      />
    </>
  );
}
