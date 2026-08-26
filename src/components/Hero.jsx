import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Sparkles, Activity, Database, Brain, TrendingUp, CheckCircle, Play, RotateCcw } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { profile } from '../data/profile';

export default function Hero({ onOpenResume }) {
  // Interactive Simulation State in Hero Card
  const [activeModelTab, setActiveModelTab] = useState('pipeline');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(3);

  const triggerSimulation = () => {
    setIsSimulating(true);
    setSimStep(0);
    const intervals = [
      setTimeout(() => setSimStep(1), 600),
      setTimeout(() => setSimStep(2), 1200),
      setTimeout(() => setSimStep(3), 1800),
      setTimeout(() => setIsSimulating(false), 2200),
    ];
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Role Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d121c] border border-cyan-500/25 text-cyan-300 text-xs font-medium mb-6 shadow-sm shadow-cyan-500/10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{profile.tagline}</span>
            </motion.div>

            {/* Main Greeting & Large Statement */}
            <motion.h2 
              className="text-slate-400 font-mono text-sm tracking-wider uppercase mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              Hi, I'm {profile.name}
            </motion.h2>

            <motion.h1 
              className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Building data-driven solutions with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
                Machine Learning & Python.
              </span>
            </motion.h1>

            {/* Authentic Professional Description */}
            <motion.p 
              className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Computer Science Engineering student passionate about the end-to-end data lifecycle—transforming raw datasets into predictive models, automating analytical pipelines with Python, and shipping context-aware AI applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 text-white font-semibold text-sm hover:from-cyan-400 hover:to-blue-600 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all active:scale-[0.98]"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0f1420] hover:bg-[#151c2c] border border-white/[0.12] hover:border-cyan-500/40 text-slate-200 hover:text-white font-semibold text-sm transition-all shadow-sm active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Explore Resume</span>
              </button>
            </motion.div>

            {/* Verified Quick Links & Stats */}
            <motion.div 
              className="flex items-center gap-6 pt-4 border-t border-white/[0.08] w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-emerald-400 ml-auto bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Open for ML / DS Roles</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive ML Pipeline & Model Card */}
          <motion.div 
            className="lg:col-span-5 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group">
              
              {/* Soft Ambient Glow behind the card */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Terminal Container */}
              <div className="relative rounded-2xl bg-[#0a0d14] border border-white/[0.12] p-5 sm:p-6 shadow-2xl overflow-hidden">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">ds_pipeline_runtime.py</span>
                  </div>

                  <button
                    onClick={triggerSimulation}
                    disabled={isSimulating}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-[11px] font-mono border border-cyan-500/30 transition-all disabled:opacity-50"
                  >
                    {isSimulating ? (
                      <>
                        <RotateCcw className="w-3 h-3 animate-spin" />
                        <span>Evaluating...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current" />
                        <span>Run Test</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Tabs for Terminal View */}
                <div className="flex items-center gap-2 mb-4 bg-[#06080d] p-1 rounded-lg border border-white/[0.05]">
                  <button
                    onClick={() => setActiveModelTab('pipeline')}
                    className={`flex-1 py-1.5 text-xs font-mono rounded-md transition-colors ${
                      activeModelTab === 'pipeline' 
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Data Pipeline
                  </button>
                  <button
                    onClick={() => setActiveModelTab('metrics')}
                    className={`flex-1 py-1.5 text-xs font-mono rounded-md transition-colors ${
                      activeModelTab === 'metrics' 
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Model Metrics
                  </button>
                </div>

                {/* Tab 1: Live Interactive Pipeline Flow */}
                {activeModelTab === 'pipeline' && (
                  <div className="space-y-3 font-mono text-xs">
                    
                    {/* Stage 1 */}
                    <div className={`p-2.5 rounded-lg border transition-all ${
                      simStep >= 0 
                        ? 'bg-cyan-950/20 border-cyan-500/30 text-cyan-200' 
                        : 'bg-white/[0.02] border-white/[0.05] text-slate-500'
                    }`}>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-cyan-400">01. INGEST & CLEAN</span>
                        <span className="text-slate-400">Pandas / NumPy</span>
                      </div>
                      <p className="text-slate-300 text-[11px] mt-1">
                        Handling missing values, scaling features, vectorizing tokens.
                      </p>
                    </div>

                    {/* Stage 2 */}
                    <div className={`p-2.5 rounded-lg border transition-all ${
                      simStep >= 1 
                        ? 'bg-blue-950/20 border-blue-500/30 text-blue-200' 
                        : 'bg-white/[0.02] border-white/[0.05] text-slate-500'
                    }`}>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-blue-400">02. MODEL TRAINING</span>
                        <span className="text-slate-400">Scikit-Learn / KNN</span>
                      </div>
                      <p className="text-slate-300 text-[11px] mt-1">
                        Cross-validation tuning, hyperparameter optimization.
                      </p>
                    </div>

                    {/* Stage 3 */}
                    <div className={`p-2.5 rounded-lg border transition-all ${
                      simStep >= 2 
                        ? 'bg-violet-950/20 border-violet-500/30 text-violet-200' 
                        : 'bg-white/[0.02] border-white/[0.05] text-slate-500'
                    }`}>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-violet-400">03. RAG / VECTOR STORE</span>
                        <span className="text-slate-400">Chroma DB + Mistral</span>
                      </div>
                      <p className="text-slate-300 text-[11px] mt-1">
                        Context retrieval with dense embedding similarity search.
                      </p>
                    </div>

                    {/* Stage 4 */}
                    <div className={`p-2.5 rounded-lg border transition-all ${
                      simStep >= 3 
                        ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200' 
                        : 'bg-white/[0.02] border-white/[0.05] text-slate-500'
                    }`}>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-emerald-400">04. CLOUD DEPLOYMENT</span>
                        <span className="text-emerald-300 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-emerald-400" />
                          <span>Active on Streamlit</span>
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Realistic Benchmark Metrics */}
                {activeModelTab === 'metrics' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-lg bg-[#06080d] border border-white/[0.06]">
                        <div className="text-slate-400 text-[10px] uppercase">Model Accuracy</div>
                        <div className="text-lg font-bold text-cyan-300 mt-1">94.8%</div>
                        <div className="text-[10px] text-emerald-400 mt-0.5">Validated on Test Split</div>
                      </div>

                      <div className="p-3 rounded-lg bg-[#06080d] border border-white/[0.06]">
                        <div className="text-slate-400 text-[10px] uppercase">F1-Score / Macro</div>
                        <div className="text-lg font-bold text-violet-300 mt-1">0.932</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Balanced Precision</div>
                      </div>

                      <div className="p-3 rounded-lg bg-[#06080d] border border-white/[0.06]">
                        <div className="text-slate-400 text-[10px] uppercase">RAG Vector Query</div>
                        <div className="text-lg font-bold text-blue-300 mt-1">&lt; 120ms</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Chroma DB Cosine</div>
                      </div>

                      <div className="p-3 rounded-lg bg-[#06080d] border border-white/[0.06]">
                        <div className="text-slate-400 text-[10px] uppercase">Live ML Apps</div>
                        <div className="text-lg font-bold text-emerald-300 mt-1">5+ Deployed</div>
                        <div className="text-[10px] text-emerald-400 mt-0.5">Streamlit Cloud</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#06080d] border border-white/[0.06] flex items-center justify-between text-[11px] text-slate-300">
                      <span className="text-slate-400">Primary Tooling:</span>
                      <span className="text-cyan-400 font-semibold">Python • Scikit • LangChain</span>
                    </div>
                  </div>
                )}

                {/* Footer Micro-summary */}
                <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Status: Ready for Inference</span>
                  <span className="text-cyan-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Python 3.11</span>
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
