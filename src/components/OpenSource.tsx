"use client";

import { motion } from "framer-motion";
import { FolderGit2, ArrowUpRight } from "lucide-react";

const openSourceRepos = [
  { 
    name: "Zaplink_frontend", 
    url: "https://github.com/Sp2736/Zaplink_frontend", 
    desc: "Frontend architecture and UI ecosystem for the Zaplink platform.",
    tech: ["Frontend", "UI/UX"]
  },
  { 
    name: "keploy", 
    url: "https://github.com/Sp2736/keploy", 
    desc: "Contributions to Keploy, a powerful open-source API testing platform.",
    tech: ["Testing", "Open Source"]
  },
  { 
    name: "CareXpert_frontend", 
    url: "https://github.com/Sp2736/CareXpert_frontend", 
    desc: "The client-facing interface and dashboard ecosystem for CareXpert.",
    tech: ["Next.js", "Client"]
  },
  { 
    name: "CareXpert_backend", 
    url: "https://github.com/Sp2736/CareXpert_backend", 
    desc: "Robust API, auth, and database architecture powering CareXpert.",
    tech: ["Node.js", "API"]
  }
];

export default function OpenSource() {
  return (
    <section className="py-20 relative z-10">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Open Source <span className="text-accent">Contributions</span>
        </h2>
        <p className="text-foreground/70 max-w-2xl text-lg">
          Collaborative engineering and team-driven architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {openSourceRepos.map((repo, idx) => (
          <motion.a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            key={repo.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group relative p-6 rounded-3xl bg-card/60 backdrop-blur-md border border-[#ffb3c6]/40 shadow-sm hover:shadow-[0_15px_35px_-10px_rgba(216,17,89,0.2)] hover:border-accent/60 transition-all duration-300 overflow-hidden block"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/15 transition-colors duration-500 pointer-events-none" />
            
            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className="p-3 bg-[#fff0f3] text-accent rounded-xl">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-foreground/40 group-hover:text-accent transition-colors" />
            </div>

            <h3 className="text-xl font-bold text-foreground mb-2 relative z-10 group-hover:text-accent transition-colors">
              {repo.name}
            </h3>
            <p className="text-foreground/70 text-sm mb-6 leading-relaxed relative z-10">
              {repo.desc}
            </p>

            <div className="flex gap-2 relative z-10">
              {repo.tech.map(tech => (
                <span key={tech} className="px-3 py-1 text-xs font-semibold bg-background/50 border border-[#ffb3c6]/40 text-foreground/80 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}