"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Shield, Code, Cpu, LayoutTemplate } from "lucide-react";

const projects = [
  {
    title: "CareXpert",
    description: "Architecting frontend interfaces and securing token pipelines for this open-source healthcare platform.",
    tags: ["Next.js", "TypeScript", "Security"],
    colSpan: "col-span-1 md:col-span-2",
    icon: <LayoutTemplate className="w-6 h-6 text-[#d81159]" />,
  },
  {
    title: "Skeleton API",
    description: "A streamlined Microsoft Edge sidebar extension designed for quick API testing and mock data generation.",
    tags: ["Browser Extension", "JavaScript"],
    colSpan: "col-span-1",
    icon: <Code className="w-6 h-6 text-[#d81159]" />,
  },
  {
    title: "Vulnerability Research",
    description: "Active participant in bug bounty hunting on Intigriti, focusing on Vulnerability Disclosure Programs.",
    tags: ["Cybersecurity", "Intigriti", "WebSec"],
    colSpan: "col-span-1",
    icon: <Shield className="w-6 h-6 text-[#d81159]" />,
  },
  {
    title: "Algorithmic Architecture",
    description: "Extensive repository of complex C++ implementations, including Kruskal's, Prim's, and dynamic programming solutions.",
    tags: ["C++", "Data Structures", "Algorithms"],
    colSpan: "col-span-1 md:col-span-2",
    icon: <Cpu className="w-6 h-6 text-[#d81159]" />,
  },
];

export default function BentoGrid() {
  return (
    <section id="work" className="py-20 z-10 relative">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
          Featured <span className="text-[#d81159]">Work</span>
        </h2>
        <p className="text-foreground/70 max-w-2xl text-lg">
          A collection of my recent projects blending deep technical architecture with intuitive design.
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
            className={project.colSpan} // The grid sizing stays on the animated wrapper
          >
            {/* The inner div handles the ultra-fast hover in AND hover out */}
            <div 
              className="p-8 h-full rounded-[2rem] bg-card/60 backdrop-blur-md border border-[#ffb3c6]/30 flex flex-col justify-between group transition-all duration-200 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(136,13,30,0.35)]"
            >
              <div>
                <div className="p-3 bg-[#fff0f3] w-fit rounded-2xl mb-6 border border-[#ffb3c6]/40 transition-transform duration-200 group-hover:scale-110">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#ffb3c6]/20">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 bg-[#fff0f3] text-[#d81159] rounded-full border border-[#ffb3c6]/50">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a href="#" className="p-2 hover:bg-[#ffb3c6]/40 rounded-full transition-colors text-foreground">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 hover:bg-[#ffb3c6]/40 rounded-full transition-colors text-foreground">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}