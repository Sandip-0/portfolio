import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Dennis Snellenberg–style Dual-Element Cursor:
 * 1. Small solid dot that tracks the mouse pointer with zero latency.
 * 2. Outer follower ring that lags behind with smooth lerp physics.
 * 3. Interactive Zoom Effect:
 *    - On Projects & Cards: Zooms to 80px solid bubble with "VIEW →" / "DEMO ▶" text.
 *    - On Buttons: Zooms to 58px hollow ring framing the button cleanly without obscuring text.
 *    - Default: 38px hollow ring + 8px dot.
 * 4. Uses mix-blend-mode: difference with white to automatically adapt across light & dark sections.
 */
export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const posRef  = useRef({ mx: -200, my: -200, rx: -200, ry: -200 });
  const rafRef  = useRef(null);

  const [hovered, setHovered] = useState(false);
  const [label,   setLabel]   = useState('');
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

    // ── Mouse tracking & element detection ─────────────────────
    const onMove = (e) => {
      pos.mx = e.clientX;
      pos.my = e.clientY;
      if (hidden) setHidden(false);

      // Detect interactive elements under or nearest the pointer
      const target = e.target.closest(
        'a, button, [role="button"], .project-row, .btn-magnetic, .cert-card, [data-cursor-label]'
      );

      if (target) {
        setHovered(true);
        // Magnetic buttons keep clean hollow zoom without text
        if (target.classList?.contains('btn-magnetic')) {
          setLabel('');
        } else if (target.dataset?.cursorLabel) {
          setLabel(target.dataset.cursorLabel);
        } else if (target.classList?.contains('project-row')) {
          setLabel(target.dataset?.cursorLabel || 'View →');
        } else {
          setLabel('');
        }
      } else {
        setHovered(false);
        setLabel('');
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp   = () => setClicked(false);
    const onLeave     = () => {
      setHidden(true);
      setHovered(false);
      setLabel('');
    };
    const onEnter     = () => setHidden(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup',   onMouseUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup',   onMouseUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  if (isTouch) return null;

  // Zoomed dimensions based on element type
  const ringSize = label 
    ? (clicked ? 70 : 82)
    : (hovered ? (clicked ? 48 : 58) : (clicked ? 28 : 38));

  return (
    <>
      {/* ── 1. The Tracking Dot (Fades out when label text is shown) */}
      <motion.div
        ref={dotRef}
        aria-hidden="true"
        animate={{
          scale:   clicked ? 0.75 : (hovered ? 1.2 : 1),
          opacity: (hidden || label) ? 0 : 1,
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

      {/* ── 2. The Follower Ring (Lerp physics + Zoom Effect + Text Label) ─── */}
      <motion.div
        ref={ringRef}
        aria-hidden="true"
        animate={{
          width:        ringSize,
          height:       ringSize,
          borderWidth:  label ? '0px' : (hovered ? '2px' : '1.5px'),
          background:   label ? '#ffffff' : 'transparent',
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
          display:       'flex',
          alignItems:    'center',
          justifyContent:'center',
          willChange:    'transform, width, height',
        }}
      >
        <AnimatePresence>
          {hovered && label && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily:    'var(--font-sans)',
                fontSize:      '10px',
                fontWeight:    600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color:         '#000000',
                whiteSpace:    'nowrap',
                userSelect:    'none',
                lineHeight:    1,
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
