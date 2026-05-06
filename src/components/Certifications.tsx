"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Brain, Code, Database, Shield, Cloud, Award } from "lucide-react";

const certData = [
  {
    id: "ai", title: "AI & Prompt Engineering", issuer: "Google / Vanderbilt", icon: Brain,
    skills: ["LLM Reasoning", "Generative AI Ethics", "Prompt Design"],
    certs: ["Prompt Engineering Specialization", "ChatGPT Advanced Data Analysis", "Trustworthy Generative AI", "Google AI & Prompting Essentials"],
  },
  {
    id: "swe", title: "Software Engineering", issuer: "Meta", icon: Code,
    skills: ["Frontend", "JS/TS", "Version Control"],
    certs: ["Meta Full-Stack Developer", "Programming with JavaScript", "HTML & CSS in Depth", "Intro to Databases"],
  },
  {
    id: "data", title: "Data Science", issuer: "IBM", icon: Database,
    skills: ["Python", "Data Analysis", "Machine Learning"],
    certs: ["Python for Data Science", "Data Analysis & Visualization", "Machine Learning Basics"],
  },
  {
    id: "prog", title: "Core Programming", issuer: "NPTEL / Coursera", icon: Code,
    skills: ["C/C++", "Java", "Memory Management"],
    certs: ["Object-Oriented Hierarchies in Java", "Modern C++"],
  },
  {
    id: "sec", title: "Cyber Security", issuer: "Independent", icon: Shield,
    skills: ["Ethical Hacking", "WAF", "System Hardening"],
    certs: ["Web Vulnerabilities & WAF", "Hacking & Hardening"],
  },
  {
    id: "lead", title: "Leadership & Cloud", issuer: "Google / AWS", icon: Cloud,
    skills: ["Project Management", "Agile", "Cloud Architecture"],
    certs: ["AWS Cloud Club Completion", "Google People Management", "Deloitte Technology Program"],
  },
];

function HoloCard({ cert, idx }: { cert: any, idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    mouseX.set(mouseXPos / width - 0.5);
    mouseY.set(mouseYPos / height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      style={{ perspective: 1000 }}
      className="h-[320px] w-full cursor-pointer group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-full h-full rounded-3xl bg-card/80 backdrop-blur-xl border border-[#ffb3c6]/40 shadow-[0_10px_30px_rgba(216,17,89,0.1)] overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 pointer-events-none z-50 bg-gradient-to-tr from-transparent via-white/40 to-transparent"
          style={{ 
            opacity: isHovered ? 1 : 0,
            x: useTransform(mouseX, [-0.5, 0.5], ["-100%", "100%"]),
            y: useTransform(mouseY, [-0.5, 0.5], ["-100%", "100%"])
          }}
          transition={{ duration: 0.2 }}
        />

        <div className="p-8 h-full flex flex-col justify-between relative z-10" style={{ transform: "translateZ(30px)" }}>
          
          <div className={`transition-opacity duration-300 absolute inset-8 flex flex-col ${isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#fff0f3] flex items-center justify-center mb-6 shadow-inner border border-[#ffb3c6]/50">
                <cert.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{cert.title}</h3>
              <p className="text-accent font-semibold text-sm mb-6">{cert.issuer}</p>
            </div>
            
            <div className="mt-auto flex flex-wrap gap-2">
              {cert.skills.map((skill: string) => (
                <span key={skill} className="px-3 py-1 bg-background rounded-md text-xs font-medium text-foreground/70 border border-[#ffb3c6]/30">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={`transition-opacity duration-300 absolute inset-8 flex flex-col ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <h4 className="text-sm font-bold text-accent uppercase tracking-wider mb-4 flex items-center gap-2">
              <Award className="w-4 h-4" /> Credentials
            </h4>
            <ul className="space-y-3 flex-grow overflow-y-auto pr-2 custom-scrollbar">
              {cert.certs.map((item: string, i: number) => (
                <li key={i} className="text-sm font-medium text-foreground/90 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative z-10">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Knowledge <span className="text-accent">Pillars</span>
        </h2>
        <p className="text-foreground/70 max-w-2xl text-lg">
          Hover over a passport to inspect specific certifications and specializations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certData.map((cert, idx) => (
          <HoloCard key={cert.id} cert={cert} idx={idx} />
        ))}
      </div>
    </section>
  );
}