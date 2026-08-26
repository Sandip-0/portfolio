import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowDown, ArrowRight, Split, Binary, Database, Search, Brain, Sparkles, ExternalLink, Play, Check, Workflow } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/projects';

export default function RagPipelineVisualizer({ onOpenModal }) {
  const ragProject = projects.find(p => p.id === 'insightforge-rag');
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "input",
      title: "Document / URL Input",
      icon: FileText,
      tech: "PyPDF / Web Loader",
      desc: "User inputs PDF files or live web URLs. Raw unstructured data is parsed and extracted into clean textual streams."
    },
    {
      id: "chunk",
      title: "Recursive Text Splitting",
      icon: Split,
      tech: "LangChain Chunking",
      desc: "Splits raw text into semantically cohesive chunks (e.g. 500-1000 tokens) with sliding window overlap to preserve contextual boundaries."
    },
    {
      id: "embed",
      title: "Vector Embeddings",
      icon: Binary,
      tech: "Dense Embedding Models",
      desc: "Transforms each text chunk into a high-dimensional dense vector representing its semantic meaning."
    },
    {
      id: "chroma",
      title: "Chroma Vector DB",
      icon: Database,
      tech: "Chroma Store Indexing",
      desc: "Indexes and stores vector representations in high-performance memory for real-time nearest neighbor similarity queries."
    },
    {
      id: "retriever",
      title: "Semantic Retriever",
      icon: Search,
      tech: "Cosine Similarity Search",
      desc: "When a user asks a question, the retriever extracts the top-K most semantically relevant document chunks."
    },
    {
      id: "llm",
      title: "Mistral AI Synthesis",
      icon: Brain,
      tech: "Mistral 7B / Instruct",
      desc: "Feeds retrieved context chunks + user prompt to Mistral AI, generating precise, hallucination-free answers with exact citations."
    }
  ];

  return (
    <section id="rag-demo" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
              <Workflow className="w-3.5 h-3.5" />
              <span>FEATURED ARCHITECTURE • RAG PIPELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              InsightForge RAG Architecture
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              An interactive visual breakdown of how I designed and deployed the Retrieval-Augmented Generation pipeline.
            </p>
          </div>

          {ragProject && (
            <div className="flex items-center gap-3">
              {ragProject.liveUrl && (
                <a
                  href={ragProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 font-semibold text-xs transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Streamlit App</span>
                </a>
              )}
              <a
                href={ragProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.08] text-slate-200 font-semibold text-xs transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Source</span>
              </a>
            </div>
          )}
        </div>

        {/* Interactive Architecture Flow Panel */}
        <div className="rounded-2xl bg-[#0c101a] border border-white/[0.1] p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6 flex items-center justify-between">
            <span>Click any stage in the pipeline to view implementation mechanics:</span>
            <span className="text-cyan-400">Step {activeStep + 1} of {steps.length}</span>
          </div>

          {/* Pipeline Horizontal Flow (Desktop) / Vertical (Mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-8">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isCurrent = activeStep === idx;
              const isPast = idx < activeStep;

              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-4 rounded-xl text-left transition-all border ${
                    isCurrent
                      ? 'bg-cyan-950/40 border-cyan-400 text-white shadow-lg shadow-cyan-500/10 scale-[1.02]'
                      : isPast
                        ? 'bg-[#080b12] border-white/[0.08] text-slate-300 hover:border-cyan-500/30'
                        : 'bg-[#06080e] border-white/[0.04] text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {/* Step Indicator Header */}
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono ${isCurrent ? 'text-cyan-400 font-bold' : 'text-slate-500'}`}>
                      0{idx + 1}
                    </span>
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center ${
                      isCurrent ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/[0.04] text-slate-400'
                    }`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="text-xs font-bold leading-tight mb-1">{s.title}</div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">{s.tech}</div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Container */}
          <motion.div 
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-xl bg-[#07090e] border border-cyan-500/20"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06] mb-4">
              <div>
                <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                  Stage Mechanics #{activeStep + 1}
                </div>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {steps[activeStep].title}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20 text-cyan-300">
                <span>Tooling:</span>
                <span className="font-semibold text-white">{steps[activeStep].tech}</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {steps[activeStep].desc}
            </p>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                className="px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-slate-300 transition-colors"
              >
                ← Previous Stage
              </button>

              <button
                onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                className="px-4 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-xs font-mono text-cyan-300 border border-cyan-500/30 transition-colors"
              >
                Next Stage →
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
