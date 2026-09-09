import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LOADER_ITEMS,
  MS_PER_WORD,
  FINAL_HOLD_MS,
  EXIT_SLIDE_SECONDS,
} from '../data/loaderConfig';

export default function PageLoader({ onComplete }) {
  const onCompleteRef = useRef(onComplete);
  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  const [wordIndex, setWordIndex] = useState(0);
  const [progress,  setProgress]  = useState(20);
  const [exiting,   setExiting]   = useState(false);

  useEffect(() => {
    let idx = 0;
    const total = LOADER_ITEMS.length;

    const iv = setInterval(() => {
      idx++;
      const currentPct = Math.min(100, Math.round(((idx + 1) / total) * 100));
      setProgress(currentPct);

      if (idx < total) {
        setWordIndex(idx);
      } else {
        clearInterval(iv);
        // Pause briefly on "Welcome", then slide curtain away
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => {
            onCompleteRef.current?.();
          }, Math.round(EXIT_SLIDE_SECONDS * 1000));
        }, FINAL_HOLD_MS);
      }
    }, MS_PER_WORD);

    return () => clearInterval(iv);
  }, []);

  const currentItem = LOADER_ITEMS[wordIndex] || LOADER_ITEMS[0];

  return (
    <motion.div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        pointerEvents: 'all',
        background: '#111111',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
      animate={exiting ? { y: '-100%' } : { y: '0%' }}
      transition={exiting
        ? { duration: EXIT_SLIDE_SECONDS, ease: [0.76, 0, 0.24, 1] }
        : { duration: 0 }
      }
    >
      {/* ── 5-Language Step Counter + Language Tag ───────────────── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '16px',
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`meta-${wordIndex}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 400,
              color: 'var(--accent)',
              letterSpacing: '0.14em',
            }}>
              {currentItem.index}
            </span>
            <span style={{ color: 'rgba(242,237,231,0.25)' }}>·</span>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 400,
              color: 'rgba(242,237,231,0.7)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              {currentItem.lang}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Word Container ────────────────────────────────────────── */}
      <div style={{
        height: 'clamp(90px, 16vw, 170px)',
        width: '100%',
        maxWidth: '960px',
        padding: '0 24px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        boxSizing: 'border-box',
      }}>
        <AnimatePresence>
          <motion.div
            key={wordIndex}
            style={{
              position: 'absolute',
              display: 'inline-flex',
              alignItems: 'baseline',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(50px, 9.5vw, 120px)',
              fontWeight: 300,
              color: '#f2ede7',
              letterSpacing: '-0.035em',
              whiteSpace: 'nowrap',
              lineHeight: 1.25,
              padding: '8px 16px',
            }}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%',   opacity: 1 }}
            exit={{    y: '-100%', opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>{currentItem.word}</span>
            <span style={{ color: 'var(--accent)', marginLeft: '3px' }}>.</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── 5 Step Dots Indicator ─────────────────────────────────── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '20px',
      }}>
        {LOADER_ITEMS.map((item, i) => (
          <motion.span
            key={item.word}
            style={{
              width: i === wordIndex ? '18px' : '5px',
              height: '5px',
              borderRadius: '10px',
              background: i === wordIndex ? 'var(--accent)' : 'rgba(242,237,231,0.18)',
              transition: 'all 0.25s ease',
            }}
          />
        ))}
      </div>

      {/* ── Progress bar ─────────────────────────────────────────── */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
      }}>
        <div style={{
          width: '160px',
          height: '1.5px',
          background: 'rgba(242,237,231,0.12)',
          position: 'relative',
          borderRadius: '2px',
          overflow: 'hidden',
        }}>
          <motion.div
            style={{
              position: 'absolute',
              left: 0, top: 0, bottom: 0,
              background: '#c8a96e',
              originX: 0,
            }}
            animate={{ scaleX: progress / 100 }}
            transition={{ ease: 'easeOut', duration: 0.2 }}
          />
        </div>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          letterSpacing: '0.10em',
          color: 'rgba(242,237,231,0.35)',
          minWidth: '34px',
          fontVariantNumeric: 'tabular-nums',
        }}>
          {progress}%
        </span>
      </div>

      {/* ── Dennis curved arch at bottom of the sliding panel ────── */}
      <div style={{
        position: 'absolute',
        bottom: '-70px',
        left: '-5%',
        width: '110%',
        height: '140px',
        background: '#f2ede7',
        borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
        pointerEvents: 'none',
      }} />
    </motion.div>
  );
}
