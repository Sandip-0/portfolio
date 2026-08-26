import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Trophy, CheckCircle2, Calendar, Building, Sparkles, Star } from 'lucide-react';
import { profile } from '../data/profile';

export default function ExperienceAndCertificates() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRAINING, CERTIFICATES & ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry Training & Verified Credentials
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Practical internship training, certified credentials, and coding achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Internship & Training */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-base font-bold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
              <Building className="w-4 h-4 text-cyan-400" />
              <span>Internship & Training Experience</span>
            </h3>

            {profile.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-7 rounded-2xl bg-[#0c101a]/95 border border-white/[0.08] hover:border-cyan-500/30 transition-all backdrop-blur-md relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span className="text-slate-600">—</span>
                      <span className="text-cyan-400 text-base">{exp.role}</span>
                    </h4>
                    <span className="text-xs font-mono text-emerald-400">{exp.type}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/[0.06] self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-slate-300 text-sm leading-relaxed">
                  {exp.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Achievements Card */}
            <div className="pt-2">
              <h3 className="text-base font-bold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2 mb-4">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Coding Achievements</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.achievements.map((ach, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-xl bg-[#0c101a] border border-white/[0.06] hover:border-amber-500/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-[10px] font-mono text-slate-400 uppercase">{ach.platform}</span>
                    </div>
                    <div className="text-sm font-bold text-white mb-1">{ach.title}</div>
                    <p className="text-xs text-slate-400 leading-relaxed">{ach.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Verified Certificates */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-bold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
              <Award className="w-4 h-4 text-violet-400" />
              <span>Certified Qualifications</span>
            </h3>

            <div className="space-y-3">
              {profile.certificates.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="p-4 rounded-xl bg-[#0c101a] border border-white/[0.06] hover:border-violet-500/30 transition-all flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0 border border-violet-500/20">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white leading-tight">
                        {cert.title}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                        {cert.issuer}
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20 shrink-0">
                    {cert.tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
