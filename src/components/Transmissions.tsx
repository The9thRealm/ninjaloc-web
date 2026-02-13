"use client";

import { motion } from "framer-motion";
import { Radio, ArrowRight } from "lucide-react";

const news = [
  {
    id: 1,
    date: "2026.02.12",
    title: "SIGNAL DETECTED: DOOMZDAY DKAY",
    excerpt: "New frequencies intercepted from the wasteland. The end is beginning.",
    category: "RELEASE"
  },
  {
    id: 2,
    date: "2026.01.28",
    title: "FSA: INCURSION PROTOCOL",
    excerpt: "Freakshow Assassins announce cryptic tour dates. Locations redacted.",
    category: "EVENT"
  },
  {
    id: 3,
    date: "2025.12.15",
    title: "MANIFESTO UPDATED",
    excerpt: "The collective has expanded. New operatives have entered the void.",
    category: "INTEL"
  }
];

export default function Transmissions() {
  return (
    <section className="py-32 px-6 border-t border-white/5 bg-void">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex items-center gap-4 text-crimson">
          <Radio className="animate-pulse" size={24} />
          <h2 className="text-sm font-mono uppercase tracking-[0.5em] text-white">Transmissions</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {news.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-void p-10 group hover:bg-white/[0.02] transition-colors relative overflow-hidden"
            >
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[10px] text-crimson border border-crimson/30 px-2 py-1 uppercase tracking-widest">
                    {item.category}
                  </span>
                  <span className="font-mono text-[10px] text-white/20">
                    {item.date}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase tracking-wide group-hover:text-crimson transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/20 group-hover:text-white transition-colors">
                  Read Full Log <ArrowRight size={12} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
