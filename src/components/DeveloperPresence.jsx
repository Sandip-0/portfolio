import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Globe, Cpu, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { profile } from '../data/profile';
import { projects } from '../data/projects';

export default function DeveloperPresence() {
  const liveDeployments = projects.filter(p => p.liveUrl);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>DEVELOPER HUBS & OPEN PROFILES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Developer Presence
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Explore my active repositories, interactive live deployments, and technical profiles.
          </p>
        </div>

        {/* 3 Grid Hubs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Hub 1: GitHub Card */}
          <motion.a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-7 rounded-2xl bg-[#0c101a] border border-white/[0.08] hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-100 group-hover:scale-110 group-hover:text-cyan-300 transition-all mb-6">
                <GithubIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                GitHub Repositories
              </h3>
              <p className="text-xs font-mono text-cyan-400 mb-3">@Sandip-0</p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                22+ public repositories spanning machine learning experiments, Streamlit pipelines, RAG implementations, and web clones.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyan-300 transition-colors">
              <span>Explore GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </motion.a>

          {/* Hub 2: Live Streamlit & Web Deployments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-7 rounded-2xl bg-[#0c101a] border border-white/[0.08] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Live Cloud Deployments
              </h3>
              <p className="text-xs font-mono text-emerald-400 mb-3">Streamlit Cloud & Vercel</p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                Interactive web apps deployed for immediate recruiter testing with real-time inference.
              </p>

              <div className="space-y-1.5 text-xs font-mono">
                {liveDeployments.slice(0, 3).map((d) => (
                  <a
                    key={d.id}
                    href={d.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-[#07090e] text-slate-300 hover:text-cyan-300 transition-colors border border-white/[0.04]"
                  >
                    <span className="truncate">{d.title.split('-')[0]}</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>All deployments verified active</span>
            </div>
          </motion.div>

          {/* Hub 3: LinkedIn & Problem Solving */}
          <motion.a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-7 rounded-2xl bg-[#0c101a] border border-white/[0.08] hover:border-blue-500/40 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-all mb-6">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                Professional Network
              </h3>
              <p className="text-xs font-mono text-blue-400 mb-3">LinkedIn & GeeksforGeeks</p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Connect for full-time Data Science / Machine Learning engineering opportunities, project collaborations, and tech discussions.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-blue-300 transition-colors">
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </motion.a>

        </div>

      </div>
    </section>
  );
}
