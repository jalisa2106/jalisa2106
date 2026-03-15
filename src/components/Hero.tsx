"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ShieldCheck, User, Code2, ChevronRight } from "lucide-react";

export default function Hero() {
  const [isBooting, setIsBooting] = useState(true);

  // Controls how long the ID card stays on screen (3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-10">
      
      <AnimatePresence mode="wait">
        {isBooting ? (
          /* ============================== */
          /* 1. DEVELOPER IDENTITY CARD     */
          /* ============================== */
          <motion.div
            key="identity-card"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)", transition: { duration: 0.5 } }}
            className="w-full max-w-md p-8 rounded-[2rem] bg-card/80 backdrop-blur-xl border border-accent/30 shadow-[0_20px_50px_-15px_rgba(216,17,89,0.3)] relative overflow-hidden"
          >
            {/* Soft glowing background orb inside the card */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-accent/20 blur-[40px] rounded-full pointer-events-none" />

            <div className="flex items-center gap-3 mb-8 border-b border-[#ffb3c6]/40 pb-4">
              <Terminal className="w-6 h-6 text-accent" />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm font-bold tracking-widest text-foreground/70 uppercase"
              >
                Initializing Portfolio...
              </motion.span>
            </div>

            <div className="space-y-5 font-mono text-sm md:text-base">
              {/* Name Row */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
                className="flex items-center gap-3 text-foreground"
              >
                <User className="w-5 h-5 text-accent/70" />
                <span className="text-foreground/60">Name:</span>
                <span className="font-bold text-accent">Jalisa Malik</span>
              </motion.div>

              {/* Role Row */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}
                className="flex items-center gap-3 text-foreground"
              >
                <Code2 className="w-5 h-5 text-accent/70" />
                <span className="text-foreground/60">Role:</span>
                <span className="font-bold">Full-Stack Developer</span>
              </motion.div>

              {/* Security Mode Row */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.9 }}
                className="flex items-center gap-3 text-foreground"
              >
                <ShieldCheck className="w-5 h-5 text-[#6b8e23]" /> {/* Soft Green for success */}
                <span className="text-foreground/60">Security Mode:</span>
                <span className="font-bold text-[#6b8e23]">Enabled</span>
                
                {/* Blinking Cursor */}
                <motion.div 
                  animate={{ opacity: [1, 0, 1] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }} 
                  className="w-2 h-4 bg-accent ml-1" 
                />
              </motion.div>
            </div>
          </motion.div>

        ) : (

          /* ============================== */
          /* 2. MAIN HERO SECTION           */
          /* ============================== */
          <motion.div
            key="main-hero"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center z-10 flex flex-col items-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Jalisa <span className="text-accent">Malik</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-2xl text-foreground/80 max-w-2xl leading-relaxed mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Full-Stack Developer & Cybersecurity Enthusiast. <br className="hidden md:block" />
              Crafting secure, aesthetic digital experiences.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a 
                href="#work" 
                className="px-8 py-4 bg-accent text-white font-bold rounded-full flex items-center gap-2 hover:bg-[#880d1e] transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(216,17,89,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(216,17,89,0.7)] group"
              >
                View Projects 
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-[#fff0f3] text-foreground font-bold rounded-full border border-[#ffb3c6]/50 hover:border-accent hover:text-accent transition-all duration-300 shadow-sm"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </section>
  );
}