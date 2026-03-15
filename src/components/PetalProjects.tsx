"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code, GraduationCap, Map, X, Repeat } from "lucide-react";

type Project = {
  id: string;
  title: string;
  icon: ReactNode;
  problem: string;
  solution: string;
  tags: string[];
  github: string;
  status?: string; 
  live?: string;   
};

const projects: Project[] = [
  {
    id: "arcade",
    title: "ARCADE Portal",
    icon: <GraduationCap className="w-10 h-10 text-[#d81159]" />,
    problem: "Students lacked a centralized digital environment for academic resources, structured career roadmaps, and faculty-approved study materials.",
    solution: "Collaboratively built a role-based academic portal featuring an approval-queued notes sharing system, visual career roadmaps, and automated skill gap analysis.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Team Collaboration"],
    github: "https://github.com/Sp2736/arcade.git",
    status: "Work in Progress" 
  },
  {
    id: "greece-explorer",
    title: "Greece Explorer",
    icon: <Map className="w-10 h-10 text-[#d81159]" />,
    problem: "For our 3rd-semester practical, we had the freedom to select any project. I chose to build a comprehensive 11-page travel guide to demonstrate core front-end architecture.",
    solution: "Designed an immersive, interactive destination guide featuring clean, responsive layouts, modern UI/UX principles, and seamless navigation entirely from scratch.",
    tags: ["HTML5", "CSS3", "JavaScript", "UI/UX Design"],
    github: "https://github.com/jalisa2106/Greece-Explorer.git",
    status: "Deployment Left" 
  },
  {
    id: "skeleton-api",
    title: "Skeleton API",
    icon: <Code className="w-10 h-10 text-[#d81159]" />,
    problem: "Developers waste valuable time manually writing and maintaining TypeScript interfaces and client code for complex, evolving API responses.",
    solution: "Built a Microsoft Edge extension functioning as an API Intelligence Tool, instantly auto-generating TypeScript interfaces directly from live responses.",
    tags: ["Edge Extension", "TypeScript", "API Intelligence", "Automation"],
    github: "#",
    status: "Work in Progress" 
  }
];

const ANIMATION_DURATION = 1.5;

export default function PetalProjects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const selectedProject = projects.find((p) => p.id === selectedId);

  useEffect(() => {
    if (selectedId) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedId]);

  const handleClose = () => {
    setSelectedId(null);
    setTimeout(() => setIsFlipped(false), 300);
  };

  const generateNodes = (tags: string[]) => {
    const count = tags.length;
    return tags.map((tag, i) => {
      const y = count === 1 ? 50 : 15 + (70 / (count - 1)) * i;
      const xPatterns = [30, 70, 35, 65, 25, 75];
      const x = xPatterns[i % xPatterns.length];
      const isRightSide = x >= 50;
      return { x, y, tag, isRightSide };
    });
  };

  const currentNodes = selectedProject ? generateNodes(selectedProject.tags) : [];

  return (
    <section id="work" className={`py-20 relative min-h-[60vh] transition-all ${selectedId ? 'z-[9999]' : 'z-10'}`}>
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
          Featured <span className="text-accent">Work</span>
        </h2>
        <p className="text-foreground/70 max-w-2xl text-lg">
          Click on a petal to reveal the architecture and narrative behind each project.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-12 md:gap-20 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            animate={{ y: [0, -15, 0] }}
            transition={{ y: { repeat: Infinity, duration: 3 + index * 0.5, ease: "easeInOut" } }}
            whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            className="w-32 h-32 md:w-40 md:h-40 bg-card/60 backdrop-blur-md border border-[#ffb3c6]/50 shadow-[0_10px_30px_rgba(216,17,89,0.15)] cursor-pointer flex flex-col items-center justify-center gap-3 group"
            style={{ borderRadius: "50% 0 50% 50%" }}
          >
            <motion.div layoutId={`icon-${project.id}`} className="group-hover:scale-110 transition-transform duration-300">
              {project.icon}
            </motion.div>
            <motion.span layoutId={`title-${project.id}`} className="text-xs md:text-sm font-bold text-foreground text-center px-4">
              {project.title}
            </motion.span>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" style={{ perspective: "1000px" }}>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="relative w-full max-w-2xl h-[550px] z-10"
              style={{ borderRadius: "2.5rem" }}
            >
              <motion.div 
                className="w-full h-full relative"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 100, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                
                {/* ======================= FRONT FACE ======================= */}
                <div 
                  className="absolute inset-0 w-full h-full bg-card/95 backdrop-blur-xl border border-[#ffb3c6]/60 shadow-[0_30px_60px_-15px_rgba(136,13,30,0.4)] flex flex-col overflow-hidden"
                  style={{ borderRadius: "2.5rem", backfaceVisibility: "hidden" }}
                >
                  <button onClick={handleClose} className="absolute top-6 right-6 p-2 bg-[#fff0f3] text-accent rounded-full hover:bg-accent hover:text-white transition-colors z-20">
                    <X className="w-5 h-5" />
                  </button>

                  <div className="p-8 md:p-12 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div layoutId={`icon-${selectedProject.id}`} className="p-4 bg-[#fff0f3] rounded-2xl border border-[#ffb3c6]/40">
                        {selectedProject.icon}
                      </motion.div>
                      <motion.h3 layoutId={`title-${selectedProject.id}`} className="text-3xl font-bold text-foreground">
                        {selectedProject.title}
                      </motion.h3>
                    </div>
                    
                    <div className="space-y-6 mb-8 flex-grow overflow-y-auto pr-2 custom-scrollbar">
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <h4 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">The Problem</h4>
                        <p className="text-foreground/80 leading-relaxed text-sm md:text-base">{selectedProject.problem}</p>
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <h4 className="text-sm font-bold text-[#880d1e] uppercase tracking-wider mb-2 mt-4">The Solution</h4>
                        <p className="text-foreground/80 leading-relaxed text-sm md:text-base">{selectedProject.solution}</p>
                      </motion.div>
                    </div>
                    
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-6 border-t border-[#ffb3c6]/30">
                      
                      <button 
                        onClick={() => setIsFlipped(true)}
                        className="flex items-center justify-center px-4 py-2 bg-[#fff0f3] text-accent font-bold rounded-full border border-accent/30 shadow-[0_0_15px_rgba(216,17,89,0.3)] hover:shadow-[0_0_25px_rgba(216,17,89,0.6)] hover:bg-accent hover:text-white transition-all duration-300 text-sm md:text-base w-full md:w-auto"
                      >
                        View Tech Stack
                      </button>

                      <div className="flex gap-2 md:gap-3 items-center justify-end">
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 md:w-auto md:h-auto md:px-4 md:py-2 bg-foreground text-background font-semibold rounded-full hover:bg-accent hover:text-white transition-colors">
                          <Github className="w-4 h-4" /> 
                          <span className="hidden md:inline ml-2 text-sm">Code</span>
                        </a>
                        
                        <div className="flex items-center gap-2">
                          {selectedProject.status ? (
                            <>
                              <span className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-wider bg-[#fff0f3] px-2 py-1 rounded-md border border-accent/20 whitespace-nowrap">
                                {selectedProject.status}
                              </span>
                              <button disabled className="flex items-center justify-center w-10 h-10 md:w-auto md:h-auto md:px-4 md:py-2 bg-[#fff0f3] text-accent font-semibold rounded-full border border-[#ffb3c6]/50 opacity-50 cursor-not-allowed">
                                <ExternalLink className="w-4 h-4" /> 
                                <span className="hidden md:inline ml-2 text-sm">Live</span>
                              </button>
                            </>
                          ) : (
                            <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 md:w-auto md:h-auto md:px-4 md:py-2 bg-[#fff0f3] text-accent font-semibold rounded-full border border-[#ffb3c6]/50 hover:bg-accent hover:text-white transition-colors">
                              <ExternalLink className="w-4 h-4" /> 
                              <span className="hidden md:inline ml-2 text-sm">Live</span>
                            </a>
                          )}
                        </div>
                      </div>
                      
                    </motion.div>
                  </div>
                </div>

                {/* ======================= BACK FACE ======================= */}
                <div 
                  className="absolute inset-0 w-full h-full bg-[#1a0f11]/95 backdrop-blur-xl border border-accent/40 shadow-[0_30px_60px_-15px_rgba(136,13,30,0.6)] flex flex-col overflow-hidden"
                  style={{ borderRadius: "2.5rem", backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="p-8 md:p-12 flex flex-col h-full relative">
                    <h3 className="text-xl md:text-2xl font-bold text-[#fce4ec] mb-4 flex items-center gap-3 relative z-30">
                      Architecture Stack
                    </h3>

                    <div className="relative flex-grow w-full my-4">
                      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full z-0 overflow-visible" style={{ filter: "drop-shadow(0 0 6px #d81159)" }}>
                        <motion.path
                          d={currentNodes.length > 0 ? currentNodes.map((n, i) => `${i === 0 ? 'M' : 'L'} ${n.x} ${n.y}`).join(" ") : ""}
                          stroke="#d81159"
                          strokeWidth="0.4"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round" 
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: isFlipped ? 1 : 0 }}
                          transition={{ duration: ANIMATION_DURATION, ease: "easeInOut" }}
                        />
                      </svg>

                      {currentNodes.map((node, i) => {
                        const timeDelay = i * (ANIMATION_DURATION / Math.max(1, currentNodes.length - 1));

                        return (
                          <div key={i} className="absolute inset-0 pointer-events-none">
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: isFlipped ? 1 : 0, opacity: isFlipped ? 1 : 0 }}
                              transition={{ delay: isFlipped ? timeDelay : 0, duration: 0.3 }}
                              className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-accent shadow-[0_0_12px_#d81159] absolute -translate-x-1/2 -translate-y-1/2 z-20"
                              style={{ left: `${node.x}%`, top: `${node.y}%` }}
                            />
                            
                            <motion.div
                              initial={{ x: node.isRightSide ? -15 : 15, opacity: 0 }}
                              animate={{ x: 0, opacity: isFlipped ? 1 : 0 }}
                              transition={{ delay: isFlipped ? timeDelay + 0.1 : 0, duration: 0.4 }}
                              className={`absolute -translate-y-1/2 flex z-10 ${node.isRightSide ? 'justify-start' : 'justify-end'}`}
                              style={{
                                top: `${node.y}%`,
                                transform: "translateZ(1px)", // FIX: Hardware acceleration for crisp text
                                ...(node.isRightSide 
                                  ? { left: `calc(${node.x}% + 1.25rem)`, right: "1rem" } 
                                  : { right: `calc(${100 - node.x}% + 1.25rem)`, left: "1rem" })
                              }}
                            >
                              {/* FIX: Removed nested backdrop-blur to prevent browser rasterization blur */}
                              <span 
                                className="text-xs md:text-base font-semibold text-[#fce4ec] bg-white/5 px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-accent/30 shadow-md text-center leading-snug break-words"
                                style={{ WebkitFontSmoothing: "antialiased" }}
                              >
                                {node.tag}
                              </span>
                            </motion.div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="absolute bottom-8 right-8 z-30 pointer-events-auto">
                      <button 
                        onClick={() => setIsFlipped(false)}
                        className="p-3 bg-accent text-white rounded-full shadow-[0_0_15px_rgba(216,17,89,0.5)] hover:shadow-[0_0_25px_rgba(216,17,89,0.8)] transition-all duration-300"
                        title="Flip back"
                      >
                        <Repeat className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}