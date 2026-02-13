"use client";

import { motion } from "framer-motion";
import { Send, Terminal } from "lucide-react";

export default function JoinCollective() {
  return (
    <section className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-[0.3em] uppercase">Join the Manifest</h2>
          <p className="text-bone/40 font-mono text-xs uppercase tracking-widest">Underground Submission Portal</p>
        </div>

        <form className="space-y-6 bg-shadow/40 p-8 md:p-12 horror-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-bone/40 font-mono">Alias / Name</label>
              <input 
                type="text" 
                className="w-full bg-void border border-white/10 p-3 focus:border-crimson outline-none transition-colors font-light"
                placeholder="UNIDENTIFIED"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-bone/40 font-mono">Contact Email</label>
              <input 
                type="email" 
                className="w-full bg-void border border-white/10 p-3 focus:border-crimson outline-none transition-colors font-light"
                placeholder="VOICE@THEVOID.COM"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-bone/40 font-mono">Link to Transmission (Music/Demo)</label>
            <input 
              type="url" 
              className="w-full bg-void border border-white/10 p-3 focus:border-crimson outline-none transition-colors font-light"
              placeholder="HTTPS://SOUNDCLOUD.COM/..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-bone/40 font-mono">Message / Intent</label>
            <textarea 
              rows={4}
              className="w-full bg-void border border-white/10 p-3 focus:border-crimson outline-none transition-colors font-light"
              placeholder="STATE YOUR PURPOSE..."
            />
          </div>

          <button className="w-full py-4 bg-bone text-void font-bold uppercase tracking-[0.3em] hover:bg-crimson hover:text-white transition-all duration-500 flex items-center justify-center gap-3">
            <Send size={16} /> Submit to the Void
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 text-bone/20 font-mono text-[10px] uppercase tracking-tighter">
          <Terminal size={12} />
          <span>Encrypted Transmission Active</span>
        </div>
      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-radial from-crimson/5 to-transparent pointer-events-none opacity-50" />
    </section>
  );
}
