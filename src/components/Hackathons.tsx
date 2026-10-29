"use client";

import { motion, Variants } from "framer-motion";
import { Trophy, Flag, ExternalLink, Github } from "lucide-react";

type Hackathon = {
  id: string;
  name: string;
  type: string;
  event: string;
  result: "Finalist" | "Qualifier";
  date: string;
  highlights: string[];
  tech: string[];
  caseStudy: string;
  repo?: string;
};

const hackathons: Hackathon[] = [
  {
    id: "dealflow360",
    name: "DealFlow360",
    type: "B2B Quotation & Deal Governance Platform",
    event: "Odoo Hackathon",
    result: "Finalist",
    date: "Sep 2026",
    highlights: [
      "Engineered API route handlers and frontend views for a neo-brutalist platform driven by 12 pure-function business engines (pricing, discount ceilings, greedy multi-warehouse allocation).",
      "Built secure session endpoints and a tokenized client negotiation portal with strict data-isolation boundaries.",
      "Added an AI deal-health explanation layer using the Groq API.",
    ],
    tech: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Groq LLM API",
      "TanStack Query",
      "Tailwind CSS",
    ],
    caseStudy: "/architecture/dealflow360.html",
    repo: "https://github.com/jalisa2106/team-488-dealflow360",
  },
  {
    id: "assetflow",
    name: "AssetFlow",
    type: "Enterprise Asset & Resource ERP",
    event: "Odoo Hackathon",
    result: "Qualifier",
    date: "Jul 2026",
    highlights: [
      "Built the frontend authentication and onboarding workflows.",
      "Designed interface specifications across 10 operational modules.",
      "Platform enforces booking concurrency via Postgres btree_gist exclusion constraints and manages lifecycle state transitions through strict row-level security (RLS).",
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Zod",
    ],
    caseStudy: "/architecture/assetflow.html",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const pillLink =
  "flex items-center justify-center gap-2 px-4 py-2 bg-[#fff0f3] dark:bg-background/60 text-accent font-semibold rounded-full border border-[#ffb3c6]/50 dark:border-accent/30 hover:bg-accent hover:text-white transition-colors text-sm whitespace-nowrap";

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-20 relative z-10 scroll-mt-32">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-4">
          Hackathon{" "}
          <span className="text-accent dark:drop-shadow-[0_0_10px_rgba(255,128,171,0.5)]">
            Builds
          </span>
        </h2>
        <p className="text-foreground/70 dark:text-foreground/60 max-w-2xl mx-auto text-lg">
          Production-minded products shipped under tight deadlines.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
      >
        {hackathons.map((h) => {
          const isFinalist = h.result === "Finalist";
          const BadgeIcon = isFinalist ? Trophy : Flag;

          return (
            <motion.article
              key={h.id}
              variants={cardVariants}
              className="group relative flex flex-col p-6 md:p-8 rounded-3xl bg-card/60 backdrop-blur-md border border-[#ffb3c6]/40 dark:border-accent/20 shadow-sm hover:shadow-[0_15px_35px_-10px_rgba(216,17,89,0.2)] dark:hover:shadow-[0_15px_35px_-10px_rgba(255,128,171,0.1)] hover:border-accent/60 dark:hover:border-accent/40 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/15 dark:group-hover:bg-accent/20 transition-colors duration-500 pointer-events-none" />

              <div className="flex items-start justify-between gap-3 mb-5 relative z-10">
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${
                    isFinalist
                      ? "bg-accent text-white border-accent shadow-[0_0_15px_rgba(216,17,89,0.35)]"
                      : "bg-[#fff0f3] dark:bg-background/80 text-accent border-accent/30"
                  }`}
                >
                  <BadgeIcon className="w-3.5 h-3.5" />
                  {h.result}
                </span>
                <span className="text-xs md:text-sm font-mono font-semibold text-accent/80 dark:text-accent/60 tracking-wider">
                  {h.date}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors relative z-10">
                {h.name}
              </h3>
              <p className="text-sm font-semibold text-foreground/60 dark:text-foreground/50 mt-1 mb-5 relative z-10">
                {h.type} · {h.event}
              </p>

              <ul className="space-y-2.5 mb-6 relative z-10 flex-grow">
                {h.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm md:text-[15px] text-foreground/70 dark:text-foreground/60 leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-2 flex-wrap mb-6 relative z-10">
                {h.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-semibold bg-background/50 dark:bg-card/50 border border-[#ffb3c6]/40 dark:border-accent/20 text-foreground/80 dark:text-foreground/70 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap pt-5 border-t border-[#ffb3c6]/30 dark:border-accent/15 relative z-10">
                <a
                  href={h.caseStudy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={pillLink}
                >
                  <ExternalLink className="w-4 h-4" />
                  System Case Study
                </a>
                {h.repo && (
                  <a
                    href={h.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pillLink}
                  >
                    <Github className="w-4 h-4" />
                    Repository
                  </a>
                )}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
