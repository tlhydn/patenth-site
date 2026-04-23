import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../constants';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src={ASSETS.hero}
          alt="Streetwear Hero"
          className="w-full h-full object-cover filter grayscale contrast-125 brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 font-sans text-[10px] tracking-[0.4em] uppercase text-on-surface-variant font-bold border-b border-outline pb-2"
        >
          Established 2024 • Limited Collection
        </motion.span>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="font-epilogue font-black text-6xl md:text-8xl lg:text-[10rem] text-on-background mb-12 tracking-tighter leading-[0.8] uppercase"
        >
          PATENTH<br/><span className="text-secondary opacity-30">ARCHIVE</span>
        </motion.h1>

        <motion.div
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 1, delay: 0.8 }}
           className="flex flex-col md:flex-row gap-6 mt-4"
        >
          <button className="group relative bg-on-background text-background font-sans font-bold text-[11px] uppercase tracking-[0.2em] px-12 py-5 overflow-hidden transition-all duration-500">
            <span className="relative z-10">KOLEKSİYONU KEŞFET</span>
            <div className="absolute inset-0 bg-on-surface-variant/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
          
          <button className="group flex items-center gap-3 border border-outline bg-transparent text-on-background font-sans font-bold text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:border-primary transition-all duration-500">
            YENİ GELENLER
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-30">
        <div className="w-[1px] h-20 bg-gradient-to-t from-transparent via-on-background to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}
