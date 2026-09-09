import { useEffect, useState } from 'react';
import { profile } from '../data/profile';

function LocalTime() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{time} IST</span>;
}

export default function FooterDS() {
  return (
    <footer style={{ background: 'var(--charcoal)', borderTop: '1px solid rgba(240,236,230,0.08)' }}>
      <div className="container-editorial">
        {/* Giant name */}
        <div
          style={{
            borderBottom: '1px solid rgba(240,236,230,0.08)',
            paddingTop: 'clamp(60px, 10vw, 120px)',
            paddingBottom: 'clamp(40px, 6vw, 80px)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(60px, 11vw, 160px)',
              fontWeight: 350,
              color: '#f2ede7',
              lineHeight: 0.90,
              letterSpacing: '-0.04em',
            }}
          >
            Sandip
            <br />
            <span style={{ color: 'var(--accent)' }}>Adak.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              color: 'rgba(240,236,230,0.4)',
              marginTop: '32px',
              maxWidth: '400px',
              lineHeight: 1.7,
            }}
          >
            {profile.tagline}.<br />
            {profile.location}.
          </p>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8"
        >
          {/* Availability badge */}
          <div className="flex items-center gap-2">
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
                animation: 'pulse 2s infinite',
              }}
            />
            <style>{`
              @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.4; }
              }
            `}</style>
            <span className="text-label" style={{ color: 'rgba(240,236,230,0.5)' }}>
              Available for opportunities
            </span>
          </div>

          {/* Links row */}
          <nav style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[
              { label: 'GitHub',   url: profile.socials.github },
              { label: 'LinkedIn', url: profile.socials.linkedin },
              { label: 'Email',    url: `mailto:${profile.email}` },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-label"
                style={{ color: 'rgba(240,236,230,0.4)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(240,236,230,0.4)'}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Time */}
          <span className="text-label" style={{ color: 'rgba(240,236,230,0.3)' }}>
            <LocalTime />
          </span>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid rgba(240,236,230,0.06)', paddingTop: '16px', paddingBottom: '24px' }}>
          <p className="text-label" style={{ color: 'rgba(240,236,230,0.2)' }}>
            © {new Date().getFullYear()} Sandip Adak. Designed &amp; Built with React + Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
