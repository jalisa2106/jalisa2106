"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  project: string;
  summary: string;
  highlights: string[];
  tech: string[];
  caseStudy?: string;
};

const experiences: ExperienceItem[] = [
  {
    id: "lyrcon",
    role: "Software Developer Intern",
    company: "Lyrcon Solutions",
    period: "May 2026 – Jun 2026",
    project: "AutoNidhi",
    summary:
      "Engineered full-stack features for AutoNidhi, an auto finance platform serving three distinct user roles.",
    highlights: [
      "Implemented role-based access control (RBAC) across the Admin, Accountant, and Customer portals.",
      "Built a multi-stage pipeline workflow with secure state transitions.",
      "Added soft-delete safety mechanisms so financial records are never destroyed by accident.",
      "Shipped a real-time notification system that alerts users as records change stage.",
    ],
    tech: ["FastAPI", "React", "TypeScript (Vite)", "Neon PostgreSQL", "JWT"],
    caseStudy: "/architecture/lyrcon-autonidhi.html",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative z-10 scroll-mt-32">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-4">
          Professional{" "}
          <span className="text-accent dark:drop-shadow-[0_0_10px_rgba(255,128,171,0.5)]">
            Experience
          </span>
        </h2>
        <p className="text-foreground/70 dark:text-foreground/60 max-w-2xl mx-auto text-lg">
          Hands-on engineering inside a professional product team.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="relative max-w-3xl mx-auto"
      >
        {/* Timeline rail */}
        <div
          aria-hidden="true"
          className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent"
        />

        {experiences.map((exp) => (
          <motion.article
            key={exp.id}
            variants={itemVariants}
            className="relative pl-12 md:pl-16"
          >
            {/* Timeline node */}
            <span
              aria-hidden="true"
              className="absolute left-[10px] md:left-[18px] top-9 w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]"
            />

            <div className="group relative p-6 md:p-8 rounded-3xl bg-card/60 backdrop-blur-md border border-[#ffb3c6]/40 dark:border-accent/20 shadow-sm hover:shadow-[0_15px_35px_-10px_rgba(216,17,89,0.2)] dark:hover:shadow-[0_15px_35px_-10px_rgba(255,128,171,0.1)] hover:border-accent/60 dark:hover:border-accent/40 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/15 dark:group-hover:bg-accent/20 transition-colors duration-500 pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-[#fff0f3] dark:bg-background/80 text-accent rounded-xl border border-transparent dark:border-accent/10">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-foreground/70 dark:text-foreground/60 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <span className="self-start text-xs md:text-sm font-mono font-semibold text-accent/80 dark:text-accent/60 tracking-wider whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-foreground/80 dark:text-foreground/70 leading-relaxed mb-4 relative z-10">
                {exp.summary}
              </p>

              <ul className="space-y-2.5 mb-6 relative z-10">
                {exp.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm md:text-base text-foreground/70 dark:text-foreground/60 leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-5 border-t border-[#ffb3c6]/30 dark:border-accent/15 relative z-10">
                <div className="flex gap-2 flex-wrap">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs md:text-sm font-semibold bg-background/50 dark:bg-card/50 border border-[#ffb3c6]/40 dark:border-accent/20 text-foreground/80 dark:text-foreground/70 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.caseStudy && (
                  <a
                    href={exp.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-[#fff0f3] dark:bg-background/60 text-accent font-semibold rounded-full border border-[#ffb3c6]/50 dark:border-accent/30 hover:bg-accent hover:text-white transition-colors text-sm whitespace-nowrap"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {exp.project} Case Study
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
