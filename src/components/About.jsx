import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Bot, 
  Cpu, 
  Layers, 
  Database, 
  Code2, 
  Sparkles, 
  CheckCircle,
  Compass,
  GraduationCap,
  MapPin,
  Flame
} from 'lucide-react';
import { profile } from '../data/profile';

export default function About() {
  const iconMap = {
    BarChart3: BarChart3,
    Bot: Bot,
    Cpu: Cpu
  };

  const lifecycleStages = [
    {
      step: "01",
      title: "Data Collection & Wrangling",
      desc: "Automated ingestion from APIs, documents, and web endpoints; cleaning missing values with Pandas & NumPy."
    },
    {
      step: "02",
      title: "Feature Engineering & Math",
      desc: "Rigorous statistical analysis, dimensionality reduction, scaling, and feature selection."
    },
    {
      step: "03",
      title: "Modeling & Evaluation",
      desc: "Selecting algorithms (KNN, Regression, Ensemble Trees, Mistral LLM) and tuning via cross-validation."
    },
    {
      step: "04",
      title: "Cloud Deployment",
      desc: "Deploying interactive interfaces on Streamlit and Vercel with fast inference and zero bloat."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>ABOUT ME & APPROACH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging the gap between raw data and actionable intelligence.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Core Philosophy (Wide 8 columns) */}
          <motion.div 
            className="md:col-span-8 p-7 rounded-2xl bg-[#0c101a]/90 border border-white/[0.08] backdrop-blur-md relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/[0.05] rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <span>The Data Science Journey</span>
            </h3>

            <p className="text-slate-300 text-base leading-relaxed mb-4">
              I am a Computer Science Engineering student passionate about the DS Journey—taking raw, unstructured data and engineering it into something useful. Whether it's building a document intelligence assistant or training predictive algorithms, I thrive on the logic of code and the power of data.
            </p>

            <blockquote className="p-4 rounded-xl bg-[#07090e]/80 border-l-2 border-cyan-400 text-sm text-slate-300 italic font-mono mb-6">
              "My approach to Data Science is rooted in my Computer Science background. I don't just 'run models'—I focus on the entire lifecycle: from efficient data collection and rigorous cleaning to selecting the right mathematical algorithms and deploying transparent solutions."
            </blockquote>

            {/* 4-Step Lifecycle Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {lifecycleStages.map((stage) => (
                <div key={stage.step} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold mb-1">
                    <span>{stage.step}.</span>
                    <span className="text-slate-200">{stage.title}</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{stage.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bento Card 2: Quick Info & Education Card (4 columns) */}
          <motion.div 
            className="md:col-span-4 p-7 rounded-2xl bg-[#0c101a]/90 border border-white/[0.08] backdrop-blur-md flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Quick Profile</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-mono border border-emerald-500/20">
                  Active Builder
                </span>
              </div>

              {/* Education Snippet */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#07090e] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span>Degree & Discipline</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-100">B.Tech in Computer Science</div>
                  <div className="text-xs text-slate-400 mt-1">Computer Science & Engineering</div>
                </div>

                <div className="p-4 rounded-xl bg-[#07090e] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                    <MapPin className="w-4 h-4 text-rose-400" />
                    <span>Location</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-100">{profile.location}</div>
                  <div className="text-xs text-slate-400 mt-1">Available for Remote / Hybrid Opportunities</div>
                </div>

                <div className="p-4 rounded-xl bg-[#07090e] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                    <Flame className="w-4 h-4 text-amber-400" />
                    <span>Current Focus</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-100">RAG Architectures & Predictive ML</div>
                  <div className="text-xs text-slate-400 mt-1">Chroma DB • Mistral AI • Time Series</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3 Core Pillars (3 Bento Cards at bottom) */}
          {profile.pillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || Cpu;
            return (
              <motion.div
                key={pillar.title}
                className="md:col-span-4 p-6 rounded-2xl bg-[#0c101a]/70 border border-white/[0.06] hover:border-cyan-500/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
