import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Sparkles, Activity, Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectCard({ project, onSelect, isLarge = false }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={`group relative rounded-2xl bg-[#0c101a]/90 border border-white/[0.08] hover:border-cyan-500/40 p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/[0.06] ${
        isLarge ? 'md:col-span-8' : 'md:col-span-4'
      }`}
    >
      {/* Background Gradient Accent */}
      <div 
        className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity"
        style={{ background: project.accentColor || '#06b6d4' }}
      />

      <div>
        {/* Card Header: Category Badge & Direct Links */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            {project.badge || project.category.toUpperCase()}
          </span>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
                title="View GitHub Repository"
                onClick={(e) => e.stopPropagation()}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition-colors"
                title="Open Live Application"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Project Title & Tagline */}
        <h3 
          onClick={() => onSelect(project)}
          className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer flex items-center justify-between gap-2 mb-1.5"
        >
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </h3>

        <p className="text-xs font-mono text-cyan-400/80 mb-3">{project.tagline}</p>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-6">
          {project.overview}
        </p>

        {/* Key Metrics / Highlights if large */}
        {isLarge && project.keyMetrics && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 p-3.5 rounded-xl bg-[#07090e] border border-white/[0.05]">
            {project.keyMetrics.map((m, idx) => (
              <div key={idx} className="text-left">
                <div className="text-[10px] font-mono text-slate-400 uppercase">{m.label}</div>
                <div className="text-xs font-bold text-cyan-300 truncate">{m.value}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tech Stack Pills & Modal Trigger */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5 overflow-hidden">
          {project.techStack.slice(0, isLarge ? 5 : 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.04]"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > (isLarge ? 5 : 3) && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
              +{project.techStack.length - (isLarge ? 5 : 3)}
            </span>
          )}
        </div>

        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Details</span>
        </button>
      </div>
    </motion.div>
  );
}
