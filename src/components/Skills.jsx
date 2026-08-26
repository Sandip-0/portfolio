import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  FileCode, 
  Database, 
  Code, 
  Binary, 
  Table, 
  LineChart, 
  PieChart, 
  Sparkles, 
  TrendingUp, 
  Network, 
  Layers, 
  CheckCircle2, 
  Activity, 
  Share2, 
  GitMerge, 
  Brain, 
  Workflow, 
  Fingerprint, 
  Box, 
  Mic, 
  Atom, 
  Palette, 
  MonitorPlay, 
  Server, 
  Layout, 
  DatabaseZap, 
  Boxes, 
  GitBranch, 
  Cloud, 
  Terminal,
  Layers3
} from 'lucide-react';
import { skills, skillCategories } from '../data/skills';

const iconMap = {
  Code2, Cpu, FileCode, Database, Code, Binary, Table, LineChart, PieChart,
  Sparkles, TrendingUp, Network, Layers, CheckCircle2, Activity, Share2,
  GitMerge, Brain, Workflow, Fingerprint, Box, Mic, Atom, Palette,
  MonitorPlay, Server, Layout, DatabaseZap, Boxes, GitBranch, Cloud, Terminal
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono mb-3">
            <Layers3 className="w-3.5 h-3.5" />
            <span>TECHNICAL STACK & COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools & frameworks I use to solve practical problems.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Categorized technical stack based on real coursework, machine learning pipelines, and software deployments.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {skillCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                    : 'bg-[#0d111a] text-slate-400 border border-white/[0.06] hover:text-slate-200 hover:bg-[#131926]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = iconMap[skill.icon] || Code;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-xl bg-[#0c101a]/80 border border-white/[0.07] hover:border-cyan-500/40 hover:bg-[#121724] transition-all group flex items-start justify-between cursor-default"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#07090e] border border-white/[0.08] flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-mono mt-0.5">{skill.tag}</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.05]">
                    {skill.level}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
