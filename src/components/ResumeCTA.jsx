import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle2 } from 'lucide-react';
import { profile } from '../data/profile';

export default function ResumeCTA({ onOpenResume }) {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#0c101a] to-violet-950/40 border border-cyan-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-4">
                <FileText className="w-3.5 h-3.5" />
                <span>OFFICIAL RESUME & CREDENTIALS</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                Want to explore my full technical background?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                View my complete coursework, verified certifications, internship training, machine learning proficiencies, and developer projects.
              </p>

              <div className="flex flex-wrap gap-4 mt-6 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>CS Engineering (CGPA: 8.00)</span>
                </span>
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Data Science Intern (ElevanceSkill)</span>
                </span>
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Production ML Deployed</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 hover:from-cyan-400 hover:to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>

              <a
                href={profile.resumePdf || "/resume.pdf"}
                download="Sandip_Adak_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#07090e] hover:bg-white/[0.06] border border-white/[0.12] text-slate-200 hover:text-white font-semibold text-sm transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download PDF Resume</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
