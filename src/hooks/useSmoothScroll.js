import { useEffect } from 'react';

/**
 * Pure CSS + requestAnimationFrame smooth scroll (Lenis-style)
 * without any external dependency.
 */
export default function useSmoothScroll() {
  useEffect(() => {
    let currentY = window.scrollY;
    let targetY  = window.scrollY;
    let raf;
    const ease = 0.085; // lower = slower/smoother (Dennis uses ~0.08)

    // Expand document height so native scrollbar still exists
    document.documentElement.style.setProperty('--scroll-height', `${document.body.scrollHeight}px`);

    const onWheel = (e) => {
      if (document.body.dataset.modalOpen === 'true') return;
      e.preventDefault();
      targetY = Math.max(0, Math.min(targetY + e.deltaY, document.body.scrollHeight - window.innerHeight));
    };

    const tick = () => {
      if (document.body.dataset.modalOpen === 'true') {
        currentY = window.scrollY;
        targetY = currentY;
        raf = requestAnimationFrame(tick);
        return;
      }
      currentY += (targetY - currentY) * ease;
      if (Math.abs(targetY - currentY) < 0.5) currentY = targetY;
      window.scrollTo(0, currentY);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('wheel', onWheel);
      cancelAnimationFrame(raf);
    };
  }, []);
}
