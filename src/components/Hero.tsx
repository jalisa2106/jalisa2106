"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, Cpu, Database, Network, ChevronRight, Activity, 
  Code2, User, ShieldCheck, Flower2, ChevronDown, AlertTriangle 
} from "lucide-react";
import { useTheme } from "next-themes";

export default function Hero() {
  const [isInitializing, setIsInitializing] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);
  const { theme, setTheme } = useTheme();

  // Manage Initialization, Scroll Locking, and Force-to-Top
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsInitializing(false);
      document.body.style.overflow = "";
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  // Intense Glitch Theme Swap Handler
  const handleSystemReboot = () => {
    if (isGlitching) return; // Prevent spam clicking

    setIsGlitching(true);
    
    // Extended delay to 1 full second for a violent glitch effect
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
      setIsGlitching(false);
    }, 1000); // 1000ms glitch duration
  };

  // Smooth scroll handler for the bounce arrow
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ================= PRELOADER (SYS.INIT WITH IDENTITY CARD) ================= */}
      <AnimatePresence>
        {isInitializing && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] bg-background/10 backdrop-blur-md flex flex-col items-center justify-center pointer-events-auto"
          >
            {/* Developer Identity Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="w-full max-w-md p-8 rounded-[2rem] bg-card/80 backdrop-blur-xl border border-accent/30 shadow-[0_20px_50px_-15px_rgba(216,17,89,0.3)] dark:shadow-[0_20px_50px_-15px_rgba(255,128,171,0.2)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-accent/20 blur-[40px] rounded-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-8 border-b border-[#ffb3c6]/40 dark:border-accent/20 pb-4">
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
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex items-center gap-3 text-foreground">
                  <User className="w-5 h-5 text-accent/70" />
                  <span className="text-foreground/60">Name:</span>
                  <span className="font-bold text-accent">Jalisa Malik</span>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className="flex items-center gap-3 text-foreground">
                  <Code2 className="w-5 h-5 text-accent/70" />
                  <span className="text-foreground/60">Status:</span>
                  <span className="font-bold">CS Student @ Charusat</span>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.9 }} className="flex items-center gap-3 text-foreground">
                  <ShieldCheck className="w-5 h-5 text-[#6b8e23]" /> 
                  <span className="text-foreground/60">Security Mode:</span>
                  <span className="font-bold text-[#6b8e23]">Enabled</span>
                  <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-4 bg-accent ml-1" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= HERO SECTION ================= */}
      {/* Glitch wrap - Extreme shaking, screen tearing, and color corruption during reboot */}
      <motion.section 
        animate={isGlitching ? { 
          x: [0, -15, 20, -20, 15, -10, 10, -15, 0], 
          y: [0, 8, -12, 10, -15, 8, -10, 5, 0], 
          skewX: [0, -10, 12, -15, 10, -5, 8, -10, 0],
          scale: [1, 1.05, 0.95, 1.08, 0.96, 1.02, 0.98, 1.04, 1],
          filter: [
            "hue-rotate(0deg) invert(0%) blur(0px)", 
            "hue-rotate(90deg) invert(20%) blur(2px)", 
            "hue-rotate(-180deg) invert(10%) blur(1px)", 
            "hue-rotate(270deg) invert(30%) blur(4px)", 
            "hue-rotate(0deg) invert(0%) blur(0px)"
          ] 
        } : {
          x: 0, y: 0, skewX: 0, scale: 1, filter: "hue-rotate(0deg) invert(0%) blur(0px)"
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative min-h-[calc(100vh-100px)] w-full flex items-center justify-center z-10 overflow-hidden"
      >
        
        {/* Background Blueprint Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#d8115915_1px,transparent_1px),linear-gradient(to_bottom,#d8115915_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </motion.div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 py-12">
          
          {/* ================= LEFT COLUMN: THE NARRATIVE ================= */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0 relative z-20">
            
            {/* INTERACTIVE SYS.INIT EASTER EGG CONTAINER */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.1 }} 
              className="flex flex-col items-center lg:items-start mb-6 lg:mb-8"
            >
              {/* STYLISH FLOATING HINT WITH CASCADING ARROWS */}
              <div className="flex flex-col items-center mb-3">
                <motion.span 
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="text-[10px] md:text-xs font-mono tracking-[0.2em] font-bold uppercase text-accent/80 dark:text-accent dark:drop-shadow-[0_0_8px_rgba(255,128,171,0.8)]"
                >
                  Switch_Mode
                </motion.span>
                
                {/* Staggered cascading arrows */}
                <div className="flex flex-col -space-y-3 mt-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        opacity: [0.2, 1, 0.2], 
                        y: [0, 4, 0] 
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 1.5, 
                        delay: i * 0.2, // Staggers the animation to create a downward flow
                        ease: "easeInOut" 
                      }}
                    >
                      <ChevronDown className="w-3.5 h-3.5 text-accent/50 dark:text-accent/80" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSystemReboot}
                className={`inline-flex items-center justify-center shrink-0 w-max min-w-[240px] md:min-w-[260px] whitespace-nowrap gap-2 px-4 py-2 rounded-full border border-accent/30 font-mono text-xs md:text-sm shadow-[0_0_10px_rgba(255,128,171,0.1)] transition-colors cursor-pointer overflow-hidden ${
                  isGlitching 
                    ? "bg-red-500/20 text-red-500 border-red-500" 
                    : "bg-background text-accent hover:bg-accent/10"
                }`}
              >
                {isGlitching ? (
                  <div className="flex items-center justify-center gap-2 w-full">
                    <AlertTriangle className="w-4 h-4 shrink-0 animate-ping" />
                    <span className="whitespace-nowrap tracking-tight">SYSTEM_GLITCH()</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 w-full">
                    <Activity className="w-4 h-4 shrink-0 animate-pulse" />
                    <span className="whitespace-nowrap tracking-tight">SYS.INIT // JALISA_MALIK</span>
                  </div>
                )}
              </button>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6 drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              Architecting <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#ff4d6d] to-accent bg-[length:200%_auto] animate-gradient dark:drop-shadow-[0_0_10px_rgba(255,128,171,0.5)]">
                Intelligent
              </span>{" "}
              Ecosystems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.3 }}
              className="text-foreground/80 dark:text-foreground/70 text-base md:text-lg max-w-xl mb-8 lg:mb-10 leading-relaxed"
            >
              Computer Science student & Full-Stack Developer. I specialize in engineering scalable web architectures, integrating zero-trust security, and building AI-driven solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 font-mono text-sm"
            >
              <a
                href="#work"
                className="flex items-center gap-2 px-6 py-3.5 bg-accent text-white font-bold rounded-xl shadow-[0_5px_15px_rgba(216,17,89,0.3)] dark:shadow-[0_0_20px_rgba(255,128,171,0.4)] transition-all hover:-translate-y-1 group shrink-0"
              >
                <Terminal className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">Deploy &lt;Project /&gt;</span>
              </a>
              <a
                href="#blueprint"
                className="flex items-center gap-2 px-6 py-3.5 bg-background text-accent font-bold rounded-xl border border-accent/30 hover:bg-accent/10 transition-all hover:-translate-y-1 group shrink-0"
              >
                <span className="whitespace-nowrap">init_contact()</span>
                <ChevronRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: THE COMPOSITE MONITOR ================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 3.5 }}
            className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center lg:justify-end"
          >
            {/* Glowing Background Orb */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 3.5 }}
              className="absolute w-72 h-72 bg-accent/20 dark:bg-accent/10 rounded-full blur-[80px] lg:right-10" 
            />

            {/* MAIN GLASS PANEL (System Architecture) */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-full max-w-sm rounded-2xl bg-card/60 backdrop-blur-xl border border-accent/30 shadow-2xl dark:shadow-[0_0_30px_rgba(255,128,171,0.05)] p-6 overflow-hidden"
            >
              {/* Top Bar */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-accent/20">
                <div className="flex items-center gap-2 text-foreground/80">
                  <Cpu className="w-4 h-4 text-accent" />
                  <span className="font-mono text-xs font-bold tracking-wider">SYSTEM_ARCHITECTURE</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
              </div>

              {/* Live Data Nodes */}
              <div className="space-y-5 font-mono text-xs md:text-sm">
                <div className="flex items-start gap-3 group cursor-default">
                  <div className="mt-0.5 p-1.5 bg-background rounded-md border border-accent/30 group-hover:border-accent transition-colors"><Code2 className="w-4 h-4 text-accent" /></div>
                  <div>
                    <div className="text-foreground/50 mb-0.5 text-[10px] md:text-xs">&gt;&nbsp;Core_Engine.mount()</div>
                    <div className="text-foreground font-semibold">Next.js 16 x TypeScript</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group cursor-default">
                  <div className="mt-0.5 p-1.5 bg-background rounded-md border border-accent/30 group-hover:border-accent transition-colors"><Database className="w-4 h-4 text-accent" /></div>
                  <div>
                    <div className="text-foreground/50 mb-0.5 text-[10px] md:text-xs">&gt;&nbsp;AI_Subsystem.init()</div>
                    <div className="text-foreground font-semibold">Gemini Flash / LLM Prompts</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 group cursor-default">
                  <div className="mt-0.5 p-1.5 bg-background rounded-md border border-accent/30 group-hover:border-accent transition-colors"><Network className="w-4 h-4 text-accent" /></div>
                  <div>
                    <div className="text-foreground/50 mb-0.5 text-[10px] md:text-xs">&gt;&nbsp;Security_Protocol.verify()</div>
                    <div className="text-green-500 font-semibold drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">Zero-Trust Secured</div>
                  </div>
                </div>
              </div>

              {/* Compiling Bar */}
              <div className="mt-8 pt-5 border-t border-accent/20">
                <div className="flex justify-between text-[10px] mb-2 font-mono text-foreground/60 font-semibold uppercase tracking-widest">
                  <span>Compiling Future</span>
                  <span className="text-accent">99%</span>
                </div>
                <div className="h-1.5 w-full bg-background/80 rounded-full overflow-hidden border border-accent/20">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "99%" }}
                    transition={{ duration: 2, ease: "easeOut", delay: 4.0 }}
                    className="h-full bg-gradient-to-r from-accent/50 to-accent rounded-full relative"
                  >
                    <motion.div 
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                      className="absolute inset-0 bg-white/40 w-1/2 skew-x-12" 
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* SECONDARY GLASS PANEL (Live Metrics) - Floating behind */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute z-10 -right-4 -bottom-6 md:-right-8 md:-bottom-2 w-56 rounded-2xl bg-card/80 backdrop-blur-2xl border border-accent/30 shadow-xl dark:shadow-[0_0_20px_rgba(255,128,171,0.05)] p-5 hidden sm:block"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="text-[10px] font-mono font-bold text-foreground/60 uppercase tracking-widest">Live Metrics</div>
                <Activity className="w-3 h-3 text-accent" />
              </div>
              
              <div className="flex items-end gap-2 mb-4">
                <div className="text-3xl font-black text-accent leading-none">~O(1)</div>
                <div className="text-xs text-foreground/60 font-semibold mb-0.5">Complexity</div>
              </div>

              {/* Animated Equalizer Graph */}
              <div className="flex gap-1.5 h-10 items-end justify-between">
                {[40, 70, 45, 90, 60, 85, 50, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [`${h}%`, `${h > 50 ? h - 30 : h + 30}%`, `${h}%`] }}
                    transition={{ duration: 1.5 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full bg-gradient-to-t from-accent/20 to-accent/80 rounded-sm"
                  />
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* ================= PERFECTLY CENTERED BOTTOM ARROW ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center z-30"
        >
          <motion.a 
            href="#about" 
            onClick={handleScroll}
            className="flex flex-col items-center group cursor-pointer"
            aria-label="Scroll to About section"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Flower2 className="w-5 h-5 text-accent/60 mb-2 group-hover:text-accent transition-colors duration-300 dark:drop-shadow-[0_0_5px_rgba(255,128,171,0.8)]" />
            <div className="p-3 bg-card/60 backdrop-blur-md rounded-full border border-accent/40 shadow-sm group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(var(--accent-rgb),0.3)] transition-all duration-300">
              <ChevronDown className="w-5 h-5 text-foreground/60 group-hover:text-accent transition-colors duration-300" />
            </div>
          </motion.a>
        </motion.div>

      </motion.section>
    </>
  );
}