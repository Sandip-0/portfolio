import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  MessageSquare, 
  CheckCircle, 
  Copy, 
  ExternalLink,
  Phone,
  Sparkles
} from 'lucide-react';
import { profile } from '../data/profile';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatusMessage('Please fill in required fields.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name} [${service || 'General'}]`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nLooking for: ${service || 'N/A'}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatusMessage('Opening your mail client...');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>DIRECT COMMUNICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's build something useful together.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Whether you have a machine learning project, an internship opportunity, or want to discuss data architectures, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Hub */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-7 rounded-2xl bg-[#0c101a] border border-white/[0.08] backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-4">Direct Contact Channels</h3>

              <div className="space-y-3">
                
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-[#07090e] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Email Address</div>
                      <a 
                        href={`mailto:${profile.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-300 transition-colors truncate block"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-cyan-300 transition-colors shrink-0 ml-2"
                    title="Copy Email to Clipboard"
                  >
                    {copiedEmail ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Item */}
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#07090e] border border-white/[0.06] hover:border-emerald-500/30 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase">WhatsApp / Phone</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                        {profile.phone}
                      </div>
                    </div>
                  </div>

                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </a>

              </div>

              {/* Status Note */}
              <div className="mt-6 p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-cyan-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Typically responding within 24 hours.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-7 sm:p-8 rounded-2xl bg-[#0c101a] border border-white/[0.08] backdrop-blur-md space-y-4 shadow-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-3 rounded-xl bg-[#07090e] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-sm text-white placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#07090e] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-sm text-white placeholder:text-slate-600 transition-colors"
                  />
                </div>

              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  Subject / Service Area (Optional)
                </label>
                <input
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="e.g. Machine Learning, RAG System, Full-Time Role..."
                  className="w-full px-4 py-3 rounded-xl bg-[#07090e] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-sm text-white placeholder:text-slate-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Sandip, I would like to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-[#07090e] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-sm text-white placeholder:text-slate-600 transition-colors resize-none"
                />
              </div>

              {statusMessage && (
                <div className="text-xs font-mono text-cyan-300">
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 hover:from-cyan-400 hover:to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
