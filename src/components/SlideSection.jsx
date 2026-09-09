import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * SlideSection wrapper:
 * Gives each section the authentic Dennis Snellenberg "editorial slide" effect:
 * - Rounded top corners so it visibly slides OVER the previous section
 * - Soft elevated top shadow creating physical depth between slides
 * - Outgoing parallax: as this slide is scrolled past, it gently softens and shifts upward
 * - Z-index layering: ensures incoming slides sit on top of earlier ones
 */
export default function SlideSection({
  children,
  id,
  zIndex = 1,
  bg = 'var(--cream)',
  roundedTop = true,
  enableParallax = true,
  className = '',
  style = {},
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Outgoing depth: content shifts slightly and fades when being scrolled past
  const contentY = useTransform(scrollYProgress, [0, 1], ['0px', enableParallax ? '-40px' : '0px']);
  const contentOpacity = useTransform(scrollYProgress, [0.75, 1], [1, enableParallax ? 0.75 : 1]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={className}
      style={{
        position: 'relative',
        zIndex,
        background: bg,
        borderRadius: roundedTop ? 'clamp(24px, 4vw, 48px) clamp(24px, 4vw, 48px) 0 0' : '0',
        boxShadow: roundedTop ? '0 -24px 60px rgba(17, 17, 17, 0.06)' : 'none',
        marginTop: roundedTop ? '-32px' : '0', // slight negative margin creates the overlap seam
        overflow: 'hidden',
        ...style,
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
