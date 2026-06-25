"use client";

import { motion, Variants } from "framer-motion";
import { FolderGit2, ArrowUpRight } from "lucide-react";

const openSourceRepos = [
  { 
    name: "GSSoC '26: CommitPulse", 
    url: "https://github.com/jalisa2106/commitpulse/",
    desc: "Transforming raw GitHub data into dynamic, cinematic SVG visualizations. Optimized rendering pipelines and maintained rigorous open-source CI/CD workflows.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    date: "May 2026 – Present"
  }
];

// 1. Explicitly type as Variants to keep TypeScript happy
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

// 2. Explicitly type as Variants and use an array or literal assertion for easing
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] // Custom smooth ease-out bezier curve that passes strict types perfectly
    } 
  },
};

export default function OpenSource() {
  return (
    <section id="contributions" className="py-20 relative z-10 scroll-mt-32">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-4">
          Open Source <span className="text-accent dark:drop-shadow-[0_0_10px_rgba(255,128,171,0.5)]">Contributions</span>
        </h2>
        <p className="text-foreground/70 dark:text-foreground/60 max-w-2xl mx-auto text-lg">
          Collaborative engineering and team-driven architecture.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-3xl mx-auto grid grid-cols-1"
      >
        {openSourceRepos.map((repo) => (
          <motion.a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            key={repo.name}
            variants={cardVariants} 
            className="group relative p-6 rounded-3xl bg-card/60 backdrop-blur-md border border-[#ffb3c6]/40 dark:border-accent/20 shadow-sm hover:shadow-[0_15px_35px_-10px_rgba(216,17,89,0.2)] dark:hover:shadow-[0_15px_35px_-10px_rgba(255,128,171,0.1)] hover:border-accent/60 dark:hover:border-accent/40 transition-all duration-300 overflow-hidden block"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/15 dark:group-hover:bg-accent/20 transition-colors duration-500 pointer-events-none" />
            
            <div className="flex items-start justify-between mb-6 relative z-10">
              <div className="p-4 bg-[#fff0f3] dark:bg-background/80 text-accent rounded-xl border border-transparent dark:border-accent/10">
                <FolderGit2 className="w-8 h-8" />
              </div>
              
              <div className="flex items-center gap-3">
                {repo.date && (
                  <span className="text-xs md:text-sm font-mono font-semibold text-accent/80 dark:text-accent/60 tracking-wider">
                    {repo.date}
                  </span>
                )}
                <ArrowUpRight className="w-6 h-6 text-foreground/40 dark:text-foreground/30 group-hover:text-accent transition-colors" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-3 relative z-10 group-hover:text-accent transition-colors">
              {repo.name}
            </h3>
            <p className="text-foreground/70 dark:text-foreground/60 text-base md:text-lg mb-8 leading-relaxed relative z-10">
              {repo.desc}
            </p>

            <div className="flex gap-3 relative z-10 flex-wrap">
              {repo.tech.map(tech => (
                <span key={tech} className="px-4 py-1.5 text-xs md:text-sm font-semibold bg-background/50 dark:bg-card/50 border border-[#ffb3c6]/40 dark:border-accent/20 text-foreground/80 dark:text-foreground/70 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}