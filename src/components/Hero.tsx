"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none p-20"
      >
        <div className="relative w-full h-full max-w-4xl">
          <Image 
            src="/logo.png" 
            alt="NinjaLOC Watermark" 
            fill
            className="object-contain opacity-20 grayscale"
            priority
          />
        </div>
      </motion.div>

      <div className="relative z-10 text-center space-y-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-crimson font-mono tracking-[0.3em] text-sm uppercase">
            Established in the Shadows
          </span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="text-5xl md:text-8xl font-bold tracking-tight uppercase"
        >
          The Underground <br /> 
          <span className="text-outline">Manifest</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
        >
          A collective for the uncompromising. No control, just raw talent. 
          NinjaLOC Records is the pulse of the unseen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="pt-10"
        >
          <Link href="#records">
            <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-crimson hover:text-white transition-colors duration-500 cursor-pointer">
              Enter the Vault
            </button>
          </Link>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10"
      >
        <ChevronDown size={32} className="opacity-30" />
      </motion.div>
    </section>
  );
}
