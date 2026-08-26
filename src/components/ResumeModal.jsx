import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  Download, 
  Printer, 
  CheckCircle2, 
  GraduationCap, 
  Code2, 
  Cpu, 
  Mail, 
  Phone, 
  MapPin,
  Award,
  Briefcase,
  Trophy
} from 'lucide-react';
import { profile } from '../data/profile';
import { skills } from '../data/skills';
import { projects } from '../data/projects';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Resume Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl rounded-2xl bg-[#0c101a] border border-white/[0.12] p-6 sm:p-10 shadow-2xl z-10 max-h-[92vh] overflow-y-auto"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-8">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">OFFICIAL RESUME</span>
            <h2 className="text-xl font-bold text-white">Sandip Adak — Technical Resume</h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-xs font-mono text-cyan-300 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <a
              href={profile.resumePdf || "/resume.pdf"}
              download="Sandip_Adak_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-slate-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="space-y-8 text-slate-200 text-xs sm:text-sm">
          
          {/* Header Info */}
          <div className="p-6 rounded-xl bg-[#07090e] border border-white/[0.06]">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{profile.name}</h1>
            <p className="text-sm font-mono text-cyan-400 mt-1">
              Data Science • Machine Learning • Python
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/[0.06] text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${profile.email}`} className="hover:text-cyan-300">{profile.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </h3>
            <div className="space-y-2 p-4 rounded-xl bg-[#07090e] border border-white/[0.05] text-xs">
              <div><strong className="text-slate-200">Programming Languages:</strong> <span className="text-slate-300">Java, Python, C++</span></div>
              <div><strong className="text-slate-200">Libraries & Frameworks:</strong> <span className="text-slate-300">NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, LangChain, Streamlit, XGBoost</span></div>
              <div><strong className="text-slate-200">Databases & Querying:</strong> <span className="text-slate-300">MySQL, ChromaDB</span></div>
              <div><strong className="text-slate-200">Core Concepts:</strong> <span className="text-slate-300">OOPs, DBMS, Machine Learning, Data Analysis, Data Visualization, RAG Architectures</span></div>
            </div>
          </div>

          {/* Experience / Training */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Training & Internship Experience</span>
            </h3>
            <div className="space-y-3">
              {profile.experience.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#07090e] border border-white/[0.05]">
                  <div className="flex items-center justify-between font-bold text-white mb-1">
                    <span>{exp.company} — <span className="text-cyan-400 font-normal">{exp.role}</span></span>
                    <span className="text-slate-400 font-mono text-[11px]">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 mt-2">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Featured Projects</span>
            </h3>
            <div className="space-y-4">
              {projects.slice(0, 2).map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-[#07090e] border border-white/[0.05]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white mb-1.5 gap-1">
                    <span>{p.title}</span>
                    <span className="text-cyan-400 font-mono text-[11px] font-normal">{p.techStack.join(' • ')}</span>
                  </div>
                  {p.bulletPoints ? (
                    <ul className="list-disc list-inside space-y-1 text-slate-300 mb-2">
                      {p.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx}>{bp}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-300 mb-2">{p.overview}</p>
                  )}
                  <div className="flex items-center gap-4 text-[11px] font-mono pt-1 text-cyan-400">
                    {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">Live Demo: {p.liveUrl}</a>}
                    {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub: {p.githubUrl}</a>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Certificates</span>
              </h3>
              <div className="p-4 rounded-xl bg-[#07090e] border border-white/[0.05] space-y-1.5 text-xs">
                {profile.certificates.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <span className="text-cyan-400">•</span>
                    <span><strong>{c.title}</strong> — {c.issuer}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span>Achievements</span>
              </h3>
              <div className="p-4 rounded-xl bg-[#07090e] border border-white/[0.05] space-y-2 text-xs">
                {profile.achievements.map((a, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <span className="text-amber-400">•</span>
                    <span><strong>{a.title}</strong> ({a.platform}): {a.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>
            <div className="space-y-3">
              {profile.education.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#07090e] border border-white/[0.05]">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>{edu.degree} — <span className="text-slate-300 font-normal">{edu.institution}</span></span>
                    <span className="text-cyan-400 font-mono">{edu.period}</span>
                  </div>
                  <div className="text-slate-400 text-xs mt-1">
                    {edu.location} • <strong className="text-emerald-400">{edu.grade}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">Verified Resume Data • Updated 2026</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/30 transition-colors"
          >
            Close Window
          </button>
        </div>

      </motion.div>
    </div>
  );
}
