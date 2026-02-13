"use client";

import { motion } from "framer-motion";
import { releases } from "@/data/collective";
import { Disc } from "lucide-react";

export default function Records() {
  return (
    <section id="records" className="py-24 px-6 bg-shadow/20">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex justify-between items-end">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-[0.2em] uppercase">The Vault</h2>
            <p className="text-bone/40 font-mono text-sm uppercase">NinjaLOC Records Catalog</p>
          </div>
          <Disc className="text-crimson opacity-20 animate-spin-slow" size={48} />
        </div>

        <div className="border-t border-white/10">
          {releases.map((release, idx) => (
            <motion.div
              key={release.id}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/5 group hover:bg-white/[0.02] px-4 transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="text-bone/20 font-mono text-xs">{release.year}</span>
                <div>
                  <h4 className="text-xl font-bold tracking-wide group-hover:text-white transition-colors">
                    {release.title}
                  </h4>
                  <p className="text-bone/40 text-sm uppercase tracking-widest">{release.artist}</p>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center gap-8">
                <span className="text-[10px] border border-white/20 px-2 py-1 uppercase tracking-tighter text-bone/40">
                  {release.type}
                </span>
                <a 
                  href="https://instagram.com/ninjaloc" 
                  target="_blank"
                  className="text-xs font-bold uppercase tracking-[0.2em] text-crimson opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Listen
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
