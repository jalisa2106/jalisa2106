"use client";

import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Code2, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-8 md:p-12 rounded-[2.5rem] bg-card/60 backdrop-blur-md border border-[#ffb3c6]/30 shadow-[0_20px_40px_-10px_rgba(255,179,198,0.2)]"
      >
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-8 h-8 text-accent" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            About <span className="text-accent">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: The Narrative */}
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              I am a Computer Science student at Charusat University with a deep 
              passion for bridging the gap between beautiful, minimalist aesthetics 
              and robust backend architectures.
            </p>
            <p>
              My technical journey is driven by curiosity. Whether I am architecting 
              full-stack applications with Next.js and TypeScript, diving deep into 
              complex C++ algorithms, or participating in the Google Gemini Student Community, 
              I love building things that are as secure as they are visually stunning.
            </p>
          </div>

          {/* Right Column: Core Focus Areas */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#fff0f3]/50 border border-[#ffb3c6]/40 transition-transform hover:-translate-y-1 duration-200">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <Code2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Full-Stack Architecture</h4>
                <p className="text-sm text-foreground/70">Crafting seamless experiences using Next.js, Tailwind CSS, and scalable databases.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#fff0f3]/50 border border-[#ffb3c6]/40 transition-transform hover:-translate-y-1 duration-200">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <ShieldCheck className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Cybersecurity & Research</h4>
                <p className="text-sm text-foreground/70">Actively hunting bugs on Intigriti and securing application pipelines.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#fff0f3]/50 border border-[#ffb3c6]/40 transition-transform hover:-translate-y-1 duration-200">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Continuous Learning</h4>
                <p className="text-sm text-foreground/70">Mastering System Analysis and Design alongside advanced Data Structures.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}