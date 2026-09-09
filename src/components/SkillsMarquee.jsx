import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/skills';

// Build two rows for marquee — duplicate for seamless loop
const ROW_A = [...skills, ...skills];
const ROW_B = [...skills].reverse().concat([...skills].reverse());

/**
 * A single skill tag — clickable if it has a url
 */
function SkillTag({ skill, index }) {
  const Tag = skill.url ? 'a' : 'span';
  const props = skill.url
    ? { href: skill.url, target: '_blank', rel: 'noopener noreferrer', 'data-cursor-label': 'Open ↗' }
    : {};

  return (
    <Tag
      {...props}
      className={`skill-tag${skill.url ? ' has-link' : ''}`}
      style={{ margin: '5px' }}
    >
      <span style={{ fontWeight: 400, color: 'var(--charcoal)', opacity: 0.9 }}>{skill.name}</span>
      <span style={{
        fontSize: '10px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--light)',
        marginLeft: '4px',
      }}>
        {skill.tag}
      </span>
      {skill.url && (
        <span style={{ fontSize: '10px', color: 'var(--accent)', marginLeft: '2px' }}>↗</span>
      )}
    </Tag>
  );
}

function MarqueeRow({ items, reverse = false, speed = 42 }) {
  const trackClass = reverse ? 'marquee-track-right' : 'marquee-track-left';
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        className={trackClass}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((skill, i) => (
          <SkillTag key={`${skill.name}-${i}`} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  // Category breakdown counts
  const categories = [
    { label: 'Programming',    id: 'programming' },
    { label: 'Data Science',   id: 'ds' },
    { label: 'Machine Learning', id: 'ml' },
    { label: 'Agentic AI / NLP', id: 'ai' },
    { label: 'Web & Deploy',   id: 'web' },
    { label: 'Tools & DB',     id: 'tools' },
  ].map(c => ({ ...c, count: skills.filter(s => s.category === c.id).length }));

  return (
    <section id="skills" style={{ background: 'var(--cream)', overflow: 'hidden' }}>
      {/* ── Section header ─────────────────────────────────────── */}
      <div className="section-pad" style={{ paddingBottom: '0' }}>
        <div className="container-editorial" ref={ref}>
          <div style={{ overflow: 'hidden', marginBottom: '12px' }}>
            <motion.span
              className="text-label"
              initial={{ y: '110%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Technology Stack
            </motion.span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6"
            style={{ marginBottom: 'clamp(48px, 7vw, 80px)' }}>
            <div style={{ overflow: 'hidden' }}>
              <motion.h2
                className="text-heading"
                initial={{ y: '110%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                Tools &amp;{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Technologies</em>
              </motion.h2>
            </div>
            <motion.p
              className="text-label"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ maxWidth: '260px', color: 'var(--mid)', lineHeight: 1.8 }}
            >
              {skills.length} technologies · hover any tag to visit its official docs or repo
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── Full-bleed marquee rows ─────────────────────────────── */}
      <motion.div
        style={{ display: 'flex', flexDirection: 'column', gap: '0', paddingBottom: 'clamp(48px,7vw,80px)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.35 }}
      >
        <MarqueeRow items={ROW_A} reverse={false} speed={44} />
        <MarqueeRow items={ROW_B} reverse={true}  speed={38} />
      </motion.div>

      {/* ── Category breakdown grid ─────────────────────────────── */}
      <div className="container-editorial" style={{ paddingBottom: 'var(--sp-xl)' }}>
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px"
          style={{ background: 'var(--border)' }}
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className="flex flex-col justify-between p-6"
              style={{ background: 'var(--cream)', minHeight: '110px' }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.07, ease: [0.16,1,0.3,1] }}
            >
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(30px, 3.5vw, 48px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                color: 'var(--charcoal)',
                lineHeight: 1,
              }}>
                {cat.count}
              </span>
              <span className="text-label" style={{ color: 'var(--mid)', marginTop: '12px' }}>
                {cat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
