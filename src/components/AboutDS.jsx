import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { profile } from '../data/profile';

const STATS = [
  { value: '300+', label: 'DSA Problems Solved' },
  { value: '11+',  label: 'ML / AI Projects' },
  { value: '8.00', label: 'CGPA, B.Tech CSE' },
  { value: '23+',  label: 'GitHub Repositories' },
];


export default function AboutDS() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-pad" style={{ background: 'var(--cream-dark)' }}>
      <div ref={ref} className="container-editorial">

        {/* Top label */}
        <div style={{ overflow: 'hidden', marginBottom: '60px' }}>
          <motion.span
            className="text-label"
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            About
          </motion.span>
        </div>

        {/* Main layout: bio paragraph left + stats right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          {/* Left: large bio text */}
          <div>
            <div style={{ overflow: 'hidden', marginBottom: '32px' }}>
              <motion.h2
                className="text-subheading"
                style={{ fontFamily: 'var(--font-serif)', lineHeight: 1.3 }}
                initial={{ y: '110%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Computer Science student &amp; Data Science Intern, building{' '}
                <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
                  data-driven solutions
                </em>{' '}
                from West Bengal, India.
              </motion.h2>
            </div>

            <motion.p
              className="text-body-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {profile.bioPhilosophy}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              style={{ marginTop: '32px' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic"
                style={{ fontSize: '11px', padding: '10px 20px' }}
              >
                LinkedIn ↗
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic"
                style={{ fontSize: '11px', padding: '10px 20px' }}
              >
                GitHub ↗
              </a>
            </motion.div>
          </div>

          {/* Right: stats grid */}
          <div>
            <div
              className="grid grid-cols-2 gap-px"
              style={{ background: 'var(--border)' }}
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col justify-between p-8"
                  style={{ background: 'var(--cream-dark)', minHeight: '140px' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(36px, 4vw, 56px)',
                      fontWeight: 300,
                      color: 'var(--charcoal)',
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-label" style={{ color: 'var(--mid)' }}>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Philosophy quote */}
            <motion.blockquote
              style={{
                marginTop: '32px',
                borderLeft: '2px solid var(--accent)',
                paddingLeft: '20px',
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(16px, 1.35vw, 20px)',
                fontWeight: 350,
                color: 'var(--charcoal)',
                lineHeight: 1.6,
              }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              "I don't just 'run models'—I focus on the entire lifecycle: from efficient data collection to deploying transparent, high-performance solutions."
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
