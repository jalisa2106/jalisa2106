"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// Populated with your specific technical stack and focus areas
const skills = [
  "Next.js", "TypeScript", "Tailwind CSS", "React",
  "C++", "Data Structures", "Algorithms", 
  "Cybersecurity", "Bug Bounty Hunting", 
  "SQL", "MongoDB", "System Analysis & UML",
  "API Architecture", "Git & GitHub"
];

export default function SkillsCloud() {
  return (
    <section id="skills" className="py-20 z-10 relative">
      <div className="max-w-5xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground flex items-center justify-center gap-3">
            Technical <span className="text-accent">Arsenal</span>
            {/* <Sparkles className="w-8 h-8 text-accent" /> */}
          </h2>
          <p className="text-foreground/70 mt-4 text-lg">
            The languages, frameworks, and concepts I use to build and secure digital experiences.
          </p>
        </motion.div>

        {/* The Cloud Container */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-5 px-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              // Stagger the entrance of each pill based on its index
              transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
              // Snappy hover effect matching the Bento cards
              whileHover={{ 
                y: -5, 
                scale: 1.05,
                backgroundColor: "#fff0f3", 
                borderColor: "#d81159",
                boxShadow: "0 10px 20px -5px rgba(216, 17, 89, 0.2)",
                transition: { duration: 0.2 }
              }}
              className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-card/80 backdrop-blur-sm border border-[#ffb3c6]/50 text-foreground font-semibold shadow-sm transition-colors duration-200"
            >
              {skill}
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}