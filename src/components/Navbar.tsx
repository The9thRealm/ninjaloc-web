"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-void/80 backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-white group-hover:fill-crimson transition-colors">
              <path d="M50 5C25 5 5 25 5 50C5 75 25 95 50 95C75 95 95 75 95 50C95 25 75 5 50 5ZM50 85C30.7 85 15 69.3 15 50C15 30.7 30.7 15 50 15C69.3 15 85 30.7 85 50C85 69.3 69.3 85 50 85Z" />
              <path d="M50 25C40 25 32 33 32 43V45C32 47.8 34.2 50 37 50H63C65.8 50 68 47.8 68 45V43C68 33 60 25 50 25ZM42 40C43.7 40 45 41.3 45 43C45 44.7 43.7 46 42 46C40.3 46 39 44.7 39 43C39 41.3 40.3 40 42 40ZM58 40C59.7 40 61 41.3 61 43C61 44.7 59.7 46 58 46C56.3 46 55 44.7 55 43C55 41.3 56.3 40 58 40Z" />
              <path d="M40 60L45 70H55L60 60H40Z" />
            </svg>
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
