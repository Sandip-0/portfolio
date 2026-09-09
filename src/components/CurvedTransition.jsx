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

  // Fixed container height prevents layout shifts and scroll jumping ("unknowing scroll")
  // GPU scaleY flattens the curve visually without altering DOM document height
  const curveScaleY = useTransform(scrollYProgress, [0, 0.45, 0.85], [1, 0.15, 0]);

  // Parallax float for the center badge: travels smoothly with GPU transform
  const badgeY = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]);
  const badgeScale = useTransform(scrollYProgress, [0, 0.35, 0.7], [0.9, 1, 0.95]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        background: bg,
        overflow: 'visible',
        zIndex: 20,
        pointerEvents: 'none',
      }}
    >
      {/* ── Dennis Snellenberg rounded curve (Stable Fixed Height) ── */}
      <div
        style={{
          width: '100%',
          height: `${maxHeight}px`,
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <motion.svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            scaleY: curveScaleY,
            transformOrigin: direction === 'up' ? 'bottom center' : 'top center',
          }}
        >
          {direction === 'up' ? (
            /* Upward convex arch */
            <path
              d="M 0,120 Q 720,0 1440,120 L 1440,120 L 0,120 Z"
              fill={fill}
            />
          ) : (
            /* Downward concave curve */
            <path
              d="M 0,0 Q 720,120 1440,0 L 1440,0 L 0,0 Z"
              fill={fill}
            />
          )}
        </motion.svg>
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
            zIndex: 30,
            pointerEvents: 'auto',
          }}
        >
          {badgeHref ? (
            <a
              href={badgeHref}
              className="btn-magnetic"
              data-cursor-label="View ↓"
              style={{
                background: 'var(--cream)',
                borderColor: 'var(--border-dark)',
                color: 'var(--charcoal)',
                padding: '9px 24px',
                fontSize: '11px',
                boxShadow: '0 12px 30px rgba(17,17,17,0.12)',
                backdropFilter: 'blur(10px)',
                letterSpacing: '0.12em',
              }}
            >
              <span>{badge}</span>
              <span style={{ fontSize: '14px', color: 'var(--accent)' }}>↓</span>
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
                boxShadow: '0 10px 28px rgba(17,17,17,0.10)',
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
