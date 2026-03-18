"use client";

import { motion } from "framer-motion";
import { Terminal, Lightbulb, MapPin, Github, Linkedin, Send, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Ultra-compact code string that fits perfectly in the smaller window
const CODE_STRING = `export const jalisa: Architect = {
  role: "Full-Stack Developer",
  skills: ["Next.js", "AI", "Security"],
  location: "Gujarat, India",
  status: "Actively building...",
  init: () => system.start()
};`;

export default function ArchitectBlueprint() {
  const [displayedText, setDisplayedText] = useState("");
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    let currentIndex = 0;
    let isWaiting = false;

    // Reset text if scrolled out of view
    if (!inView) {
      setDisplayedText("");
      return;
    }

    const typingInterval = setInterval(() => {
      if (isWaiting) return; // Pause typing while waiting to clear

      setDisplayedText(CODE_STRING.slice(0, currentIndex + 1));
      currentIndex++;

      // When the string finishes typing
      if (currentIndex >= CODE_STRING.length) {
        isWaiting = true;
        
        // Pause for 2.5 seconds to let the user read it, then clear instantly
        setTimeout(() => {
          currentIndex = 0;
          setDisplayedText("");
          isWaiting = false;
        }, 2500);
      }
    }, 40); // Fast typing speed

    return () => clearInterval(typingInterval);
  }, [inView]);

  return (
    <section className="py-20 relative z-10" ref={ref}>
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          The <span className="text-accent">Blueprint</span>
        </h2>
        <p className="text-foreground/70 max-w-2xl text-lg">
          My core philosophy, current status, and communication channels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* BOX 1: The Engine Room (Terminal) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // Reduced height to 250px for a sleeker look
          className="md:col-span-2 relative p-1 rounded-3xl bg-gradient-to-br from-[#ffb3c6]/40 to-transparent shadow-sm overflow-hidden h-[250px]"
        >
          <div className="absolute inset-0 bg-card/60 backdrop-blur-md rounded-3xl" />
          <div className="relative h-full bg-[#1a0f11]/95 rounded-[1.35rem] p-6 font-mono text-sm shadow-[inset_0_0_20px_rgba(216,17,89,0.15)] flex flex-col">
            
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#ffb3c6]/20">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="ml-4 flex items-center gap-2 text-[#ffb3c6]/70 text-xs font-semibold">
                <Terminal className="w-3.5 h-3.5" />
                jalisa.config.ts
              </div>
            </div>

            <div className="flex-grow overflow-hidden text-[13px] md:text-sm">
              <pre className="text-white whitespace-pre-wrap font-mono">
                <code className="text-accent">{displayedText}</code>
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="inline-block w-2.5 h-4 bg-accent align-middle ml-1"
                />
              </pre>
            </div>
          </div>
        </motion.div>

        {/* BOX 2: Core Philosophy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          // Height perfectly matches the terminal
          className="h-[250px] p-6 md:p-8 rounded-3xl bg-card/60 backdrop-blur-md border border-[#ffb3c6]/40 shadow-sm flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-500" />
          
          <div className="w-10 h-10 bg-[#fff0f3] rounded-2xl flex items-center justify-center mb-4 border border-[#ffb3c6]/50 shadow-inner">
            <Lightbulb className="w-5 h-5 text-accent" />
          </div>
          
          <h3 className="text-lg font-bold text-foreground mb-2">Architectural Mindset</h3>
          <p className="text-foreground/70 leading-relaxed text-xs md:text-sm">
            I don't just write code to complete tasks. I build resilient, scalable ecosystems. Whether crafting a pixel-perfect frontend or a secure backend, I focus on the holistic lifecycle of a product.
          </p>
        </motion.div>

        {/* BOX 3: Command Center (Status & Connect) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-3 p-6 md:p-8 rounded-3xl bg-card/60 backdrop-blur-md border border-[#ffb3c6]/40 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4 w-full md:w-auto p-4 rounded-2xl bg-background/50 border border-[#ffb3c6]/30">
            <div className="relative flex h-4 w-4 mt-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-background"></span>
            </div>
            <div>
              <p className="text-sm font-bold text-foreground mb-1">Available for Opportunities</p>
              <div className="flex flex-col gap-1 text-xs text-foreground/70 font-medium">
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-accent" /> India & Global Remote</span>
                <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-accent" /> Open to Part-Time & Freelance</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-center">
            <a href="https://github.com/jalisa2106" target="_blank" rel="noopener noreferrer" className="p-3 bg-background rounded-full border border-[#ffb3c6]/40 text-foreground hover:bg-accent hover:text-white transition-all shadow-sm hover:shadow-[0_0_15px_rgba(216,17,89,0.3)]">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/jalisa-malik-8b0308333?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="p-3 bg-background rounded-full border border-[#ffb3c6]/40 text-foreground hover:bg-accent hover:text-white transition-all shadow-sm hover:shadow-[0_0_15px_rgba(216,17,89,0.3)]">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:jalisamalik21.email@example.com" className="flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-full shadow-[0_5px_15px_rgba(216,17,89,0.3)] hover:shadow-[0_5px_25px_rgba(216,17,89,0.5)] transition-all hover:-translate-y-0.5">
              <Send className="w-4 h-4" /> Let's Connect
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}