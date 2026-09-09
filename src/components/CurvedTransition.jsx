import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Dennis Snellenberg–style Curved Section Transition:
 * Creates the organic elastic curve between two slides.
 * 
 * As the user scrolls through the boundary:
 * 1. The SVG / rounded container starts with a deep curved arch (120px height)
 * 2. As the boundary scrolls past, it smoothly flattens down to 0px
 * 3. The floating seam badge moves with parallax speed, crossing between the slides
 */
export default function CurvedTransition({
  fill = '#111111',
  bg = 'transparent',
  direction = 'up', // 'up' = arch curves upward; 'down' = curves downward
  badge = null,
  badgeHref = null,
  maxHeight = 100,
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax float for the center badge: moves smoothly across the seam as you scroll
  const badgeY = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const badgeScale = useTransform(scrollYProgress, [0, 0.35, 0.7], [0.95, 1, 0.98]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        background: bg,
        zIndex: 2,
        marginBottom: '-1px',
        marginTop: '-1px',
      }}
    >
      {/* ── Solid Architectural Curve (No flattening, zero bleeding) ── */}
      <div
        style={{
          width: '100%',
          height: `${maxHeight}px`,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            overflow: 'visible',
          }}
        >
          {direction === 'up' ? (
            /* Upward convex arch with 6px overlap to eliminate sub-pixel seam */
            <path
              d="M 0,120 Q 720,0 1440,120 L 1440,126 L 0,126 Z"
              fill={fill}
            />
          ) : (
            /* Downward concave curve with 6px overlap */
            <path
              d="M 0,0 Q 720,120 1440,0 L 1440,-6 L 0,-6 Z"
              fill={fill}
            />
          )}
        </svg>
      </div>

      {/* ── Floating Parallax Seam Badge ───────────────────────── */}
      {badge && (
        <motion.div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            x: '-50%',
            y: badgeY,
            scale: badgeScale,
            zIndex: 10,
            pointerEvents: 'auto',
          }}
        >
          {badgeHref ? (
            <a
              href={badgeHref}
              className="btn-magnetic"
              style={{
                borderColor: 'var(--border-dark)',
                padding: '9px 24px',
                fontSize: '11px',
                boxShadow: '0 10px 25px rgba(17,17,17,0.08)',
                backdropFilter: 'blur(10px)',
                letterSpacing: '0.12em',
                background: 'var(--cream)',
              }}
            >
              <span>{badge}</span>
              <span style={{ fontSize: '14px', color: 'inherit' }}>↓</span>
            </a>
          ) : (
            <span
              className="text-label"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--cream)',
                border: '1px solid var(--border-dark)',
                padding: '8px 20px',
                borderRadius: '100px',
                color: 'var(--charcoal)',
                boxShadow: '0 10px 25px rgba(17,17,17,0.08)',
                letterSpacing: '0.12em',
                fontSize: '10px',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
              {badge}
            </span>
          )}
        </motion.div>
      )}
    </div>
  );
}
