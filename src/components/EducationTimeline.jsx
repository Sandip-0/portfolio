import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { profile } from '../data/profile';

export default function EducationTimeline() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Academic Background
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            My academic foundation in Computer Science & Engineering, mathematics, and computing sciences.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-cyan-500/30 ml-4 sm:ml-8 space-y-8">
          {profile.education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#07090e] border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

              <div className="p-6 sm:p-7 rounded-2xl bg-[#0c101a]/90 border border-white/[0.08] hover:border-cyan-500/30 transition-colors backdrop-blur-md">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.degree}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="text-sm font-semibold text-slate-200 mb-2">
                  {item.institution}
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{item.location}</span>
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {item.grade}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
