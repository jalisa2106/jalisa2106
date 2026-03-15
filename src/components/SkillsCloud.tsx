"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Database, Atom, Leaf, Shield, Bug, Cpu, Network, Github, Code2 } from "lucide-react";

const ORBITS = [
  {
    id: "core-languages",
    radius: 120,
    duration: "25s",
    items: [
      { name: "TypeScript", symbol: "TS", isText: true, link: "https://www.typescriptlang.org/" },
      { name: "C++", symbol: "C++", isText: true, link: "https://isocpp.org/" },
      { name: "SQL", symbol: <Database className="w-5 h-5" />, isText: false, link: "https://en.wikipedia.org/wiki/SQL" },
    ]
  },
  {
    id: "frameworks-dbs",
    radius: 200,
    duration: "35s",
    items: [
      { name: "Next.js", symbol: "N", isText: true, link: "https://nextjs.org/" },
      { name: "React", symbol: <Atom className="w-5 h-5" />, isText: false, link: "https://react.dev/" },
      { name: "Tailwind CSS", symbol: "TW", isText: true, link: "https://tailwindcss.com/" },
      { name: "MongoDB", symbol: <Leaf className="w-5 h-5" />, isText: false, link: "https://www.mongodb.com/" },
      { name: "System Analysis", symbol: <Code2 className="w-5 h-5" />, isText: false, link: "https://en.wikipedia.org/wiki/Systems_analysis" },
    ]
  },
  {
    id: "cyber-concepts",
    radius: 280,
    duration: "45s",
    items: [
      { name: "Cybersecurity", symbol: <Shield className="w-5 h-5" />, isText: false, link: "https://portswigger.net/" },
      { name: "Bug Bounty", symbol: <Bug className="w-5 h-5" />, isText: false, link: "https://www.intigriti.com/" },
      { name: "Algorithms", symbol: <Cpu className="w-5 h-5" />, isText: false, link: "https://en.wikipedia.org/wiki/Algorithm" },
      { name: "Data Structures", symbol: <Network className="w-5 h-5" />, isText: false, link: "https://en.wikipedia.org/wiki/Data_structure" },
      { name: "API Architecture", symbol: "API", isText: true, link: "https://restfulapi.net/" },
      { name: "Git & GitHub", symbol: <Github className="w-5 h-5" />, isText: false, link: "https://github.com/" }
    ]
  }
];

export default function SkillsCloud() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 z-10 relative overflow-hidden">
      
      <style>{`
        @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes orbit-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .orbit-container { animation: orbit var(--duration) linear infinite; }
        .orbit-item { animation: orbit-reverse var(--duration) linear infinite; }
        
        .is-paused .orbit-container,
        .is-paused .orbit-item { animation-play-state: paused !important; }
      `}</style>

      <div className="max-w-5xl mx-auto text-center px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Technical <span className="text-accent">Arsenal</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            My architectural ecosystem. Hover over a node to pause the orbit and explore.
          </p>
        </motion.div>

        <div className={`relative w-full h-[400px] md:h-[650px] flex items-center justify-center mt-10 ${hoveredSkill ? 'is-paused' : ''}`}>
          
          <div className="relative flex items-center justify-center scale-[0.6] sm:scale-75 md:scale-100">
            
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute z-50 w-32 h-32 rounded-full bg-[#fff0f3] border-2 border-accent/40 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(216,17,89,0.3)] backdrop-blur-md pointer-events-auto"
            >
              <span className="font-extrabold text-accent tracking-widest uppercase text-sm">Architecture</span>
              <span className="text-[10px] font-medium text-foreground/50 mt-1">Core</span>
            </motion.div>

            {ORBITS.map((orbit) => {
              // MAGIC FIX 1: Check if the currently hovered skill belongs to THIS specific orbit
              const isOrbitHovered = orbit.items.some(item => item.name === hoveredSkill);

              return (
                <div 
                  key={orbit.id}
                  // Dynamically boost the z-index of the entire ring if one of its children is hovered!
                  className={`absolute rounded-full border border-accent/20 orbit-container shadow-[inset_0_0_20px_rgba(216,17,89,0.05)] pointer-events-none ${isOrbitHovered ? 'z-50' : 'z-10'}`}
                  style={{ 
                    width: orbit.radius * 2, 
                    height: orbit.radius * 2,
                    "--duration": orbit.duration 
                  } as React.CSSProperties}
                >
                  {orbit.items.map((item, i) => {
                    const angle = (360 / orbit.items.length) * i;
                    const isHovered = hoveredSkill === item.name;
                    const isDimmed = hoveredSkill !== null && !isHovered;

                    return (
                      <div 
                        key={item.name}
                        // MAGIC FIX 2: Boost the z-index of the specific node container as well
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isHovered ? 'z-50' : 'z-10'}`}
                        style={{ transform: `rotate(${angle}deg) translateY(-${orbit.radius}px)` }}
                      >
                        <div style={{ transform: `rotate(-${angle}deg)` }}>
                          <div className="orbit-item" style={{ "--duration": orbit.duration } as React.CSSProperties}>
                            
                            <a 
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onMouseEnter={() => setHoveredSkill(item.name)}
                              onMouseLeave={() => setHoveredSkill(null)}
                              className={`relative flex items-center justify-center w-14 h-14 rounded-full bg-card/90 backdrop-blur-xl border border-accent/30 shadow-md transition-all duration-300 group/node cursor-pointer pointer-events-auto
                                ${isHovered ? 'scale-125 bg-[#fff0f3] border-accent shadow-[0_0_25px_rgba(216,17,89,0.5)] z-50' : ''}
                                ${isDimmed ? 'opacity-30 scale-90' : 'opacity-100'}
                              `}
                            >
                              {item.isText ? (
                                <span className={`font-bold text-sm transition-colors ${isHovered ? 'text-accent' : 'text-foreground'}`}>
                                  {item.symbol}
                                </span>
                              ) : (
                                <span className={`transition-colors ${isHovered ? 'text-accent' : 'text-foreground'}`}>
                                  {item.symbol}
                                </span>
                              )}

                              {/* Tooltip gets an ultra-high z-index just to be safe */}
                              <div className="absolute top-full mt-3 px-3 py-1 bg-foreground text-background text-xs font-semibold rounded-lg opacity-0 group-hover/node:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl z-[100]">
                                {item.name}
                              </div>
                            </a>

                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}