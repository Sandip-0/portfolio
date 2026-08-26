import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Workflow, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
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

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-3xl rounded-2xl bg-[#0c101a] border border-white/[0.12] p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-3">
            <span>{project.badge || project.category.toUpperCase()}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-cyan-400/90 mt-1">{project.tagline}</p>
        </div>

        {/* Overview */}
        <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Project Overview</span>
            </h4>
            <p className="p-4 rounded-xl bg-[#07090e] border border-white/[0.06] text-slate-200">
              {project.overview}
            </p>
          </div>

          {project.problemSolved && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Problem Solved & Practical Application</span>
              </h4>
              <p className="p-4 rounded-xl bg-[#07090e] border border-white/[0.06] text-slate-200">
                {project.problemSolved}
              </p>
            </div>
          )}

          {/* Key Metrics if available */}
          {project.keyMetrics && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Key Metrics & Architecture Specs
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.keyMetrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#07090e] border border-white/[0.06]">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">{m.label}</div>
                    <div className="text-sm font-bold text-cyan-300 mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Steps if available */}
          {project.architectureSteps && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Workflow className="w-4 h-4 text-cyan-400" />
                <span>Pipeline Architecture</span>
              </h4>
              <div className="space-y-2">
                {project.architectureSteps.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#07090e] border border-white/[0.05] flex items-start gap-3">
                    <span className="text-xs font-mono text-cyan-400 font-bold mt-0.5">0{idx + 1}.</span>
                    <div>
                      <div className="text-xs font-bold text-white">{step.title}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Launch Live Application</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#07090e] hover:bg-white/[0.06] border border-white/[0.1] text-slate-200 font-semibold text-xs transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Source on GitHub</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
          >
            Close Window
          </button>
        </div>

      </motion.div>
    </div>
  );
}
