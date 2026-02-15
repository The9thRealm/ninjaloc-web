"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-void/80 backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 transition-transform duration-500 group-hover:scale-110">
            <Image 
              src="/logo.png" 
              alt="NinjaLOC Logo" 
              fill
              className="object-contain"
            />
          </div>
          <span className="font-bold tracking-[0.3em] uppercase text-sm hidden md:block">NinjaLOC Records</span>
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest text-bone/40">
            <Link href="#roster" className="hover:text-crimson transition-colors">Roster</Link>
            <Link href="#records" className="hover:text-crimson transition-colors">Vault</Link>
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
