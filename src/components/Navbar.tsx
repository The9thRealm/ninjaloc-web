"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-void/80 backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4 group">
          {/* Logo Placeholder - Will be replaced by Ninja Skull */}
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/10 group-hover:border-crimson transition-colors overflow-hidden">
             <span className="text-[10px] font-bold text-crimson group-hover:text-white transition-colors">N-LOC</span>
          </div>
          <span className="font-bold tracking-[0.3em] uppercase text-sm hidden md:block">NinjaLOC Records</span>
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest text-bone/40">
            <Link href="#roster" className="hover:text-crimson transition-colors">Roster</Link>
            <Link href="#records" className="hover:text-crimson transition-colors">Vault</Link>
            <Link href="https://blvckmvgick.com" target="_blank" className="hover:text-crimson transition-colors flex items-center gap-1">
              Store <ExternalLink size={10} />
            </Link>
          </div>

          <div className="flex items-center gap-4 text-bone/60">
            <Link href="https://instagram.com/ninjaloc" target="_blank" className="hover:text-crimson transition-colors">
              <Instagram size={18} />
            </Link>
            <Link href="#" className="hover:text-crimson transition-colors">
              <Youtube size={18} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
