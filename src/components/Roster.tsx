"use client";

import { motion } from "framer-motion";
import { artists } from "@/data/collective";
import Link from "next/link";

export default function Roster() {
  return (
    <section id="roster" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-[0.2em] uppercase">The Roster</h2>
          <p className="text-bone/40 font-mono text-sm uppercase">Active Operatives</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
          {artists.map((artist, idx) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-void p-10 space-y-6 group relative overflow-hidden"
            >
              <div className="space-y-2 relative z-10">
                <Link href={`/artist/${artist.id}`}>
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-crimson transition-colors duration-500 cursor-pointer">
                    {artist.name}
                  </h3>
                </Link>
                <p className="text-crimson/80 font-mono text-xs uppercase tracking-widest italic">
                  {artist.role}
                </p>
              </div>
              
              <p className="text-bone/60 font-light leading-relaxed relative z-10">
                {artist.bio}
              </p>

              <div className="pt-4 flex gap-4 relative z-10">
                <Link 
                  href={`/artist/${artist.id}`}
                  className="text-[10px] uppercase tracking-[0.3em] font-bold text-bone/30 hover:text-crimson transition-colors"
                >
                  View Dossier
                </Link>
              </div>

              {/* Spectral background effect */}
              <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/5 transition-colors duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
