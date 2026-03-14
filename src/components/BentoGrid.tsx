"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Shield, Code, Cpu, LayoutTemplate } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "CareXpert",
    icon: <LayoutTemplate className="w-5 h-5 text-accent" />,
    problem: "The open-source healthcare platform lacked a centralized API structure, leading to vulnerable token pipelines and fragmented frontend state.",
    solution: "Architected a unified Next.js interface and secured the token handling process, establishing a rigid, scalable frontend architecture.",
    tags: ["Next.js", "TypeScript", "Security"],
    colSpan: "col-span-1 md:col-span-2",
    image: "/care-expert.jpg", // Replace with your actual screenshot in the /public folder
    isVideo: false,
  },
  {
    title: "Skeleton API",
    icon: <Code className="w-5 h-5 text-accent" />,
    problem: "Developers needed a faster way to generate mock data and test API endpoints without leaving their current browser tab.",
    solution: "Developed a lightweight Microsoft Edge sidebar extension that allows instant, out-of-the-blue API testing and data generation.",
    tags: ["Edge Extension", "JavaScript"],
    colSpan: "col-span-1",
    image: "/skeleton-api.mp4", // Example of using a screen recording!
    isVideo: true,
  },
  {
    title: "Vulnerability Research",
    icon: <Shield className="w-5 h-5 text-accent" />,
    problem: "Identifying undocumented security flaws in enterprise-level applications, specifically within PeopleCert's infrastructure.",
    solution: "Actively engaged in Intigriti's VDP, utilizing advanced reconnaissance to map and report critical vulnerabilities.",
    tags: ["Cybersecurity", "Intigriti", "Bug Bounty"],
    colSpan: "col-span-1",
    image: "/bug-bounty.jpg",
    isVideo: false,
  },
  {
    title: "Algorithmic Architecture",
    icon: <Cpu className="w-5 h-5 text-accent" />,
    problem: "Standard library solutions were inefficient for complex graph processing and dynamic programming challenges.",
    solution: "Built a highly optimized C++ repository featuring from-scratch implementations of Kruskal's, Prim's, and the Karatsuba algorithm.",
    tags: ["C++", "Data Structures", "Algorithms"],
    colSpan: "col-span-1 md:col-span-2",
    image: "/algorithms.jpg",
    isVideo: false,
  },
];

export default function BentoGrid() {
  return (
    <section id="work" className="py-20 z-10 relative">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
          Featured <span className="text-accent">Work</span>
        </h2>
        <p className="text-foreground/70 max-w-2xl text-lg">
          A deep dive into the architectural problems I've solved and the secure, aesthetic experiences I've crafted.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            className={project.colSpan}
          >
            <div className="h-full rounded-[2rem] bg-card/60 backdrop-blur-md border border-[#ffb3c6]/30 flex flex-col overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(136,13,30,0.35)]">
              
              {/* Top Half: The Visual Evidence */}
              <div className="relative w-full h-48 md:h-60 bg-[#fff0f3] border-b border-[#ffb3c6]/30 overflow-hidden">
                {/* Fallback pattern if image is missing, keeping the pink aesthetic */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent to-transparent"></div>
                
                {project.isVideo ? (
                  <video 
                    src={project.image} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-all duration-500"
                    // Note: Using standard <img> for easier local placeholder testing. 
                    // You can swap to next/image <Image> when you have the exact file dimensions.
                  />
                )}
                
                {/* Floating Icon Badge */}
                <div className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-md rounded-xl border border-[#ffb3c6]/50 shadow-sm">
                  {project.icon}
                </div>
              </div>

              {/* Bottom Half: The Narrative */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                
                <div className="space-y-4 mb-6 flex-grow">
                  <div>
                    <h4 className="text-sm font-bold text-accent uppercase tracking-wider mb-1">The Problem</h4>
                    <p className="text-foreground/80 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#880d1e] uppercase tracking-wider mb-1">The Solution</h4>
                    <p className="text-foreground/80 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>
                
                {/* Tags and Links */}
                <div className="flex items-center justify-between mt-auto pt-5 border-t border-[#ffb3c6]/30">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] md:text-xs font-bold px-3 py-1 bg-[#fff0f3] text-accent rounded-full border border-[#ffb3c6]/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href="#" className="p-2 hover:bg-[#fff0f3] rounded-full transition-colors text-foreground/70 hover:text-accent">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 hover:bg-[#fff0f3] rounded-full transition-colors text-foreground/70 hover:text-accent">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}