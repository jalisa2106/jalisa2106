"use client";

import { motion } from "framer-motion";
import { Terminal, Lightbulb, Code2, Cpu, ArrowRight } from "lucide-react";

export default function Ideology() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4"
          >
            Developer's <span className="text-accent">Corner</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/70 text-lg max-w-2xl mx-auto"
          >
            Where ideas meet execution.
          </motion.p>
        </div>

        {/* Top 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group rounded-3xl p-[1px] overflow-hidden bg-gradient-to-b from-[#ffb3c6]/50 to-transparent hover:from-accent/50 transition-colors duration-500"
          >
            <div className="h-full bg-card/80 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#fff0f3] rounded-xl flex items-center justify-center mb-6 border border-[#ffb3c6]/50">
                  <span className="font-bold text-accent">AI</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">AI-First Mindset</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                  Building intelligent systems that learn, adapt, and enhance human capabilities.
                </p>
              </div>
              <span className="text-xs font-mono text-accent/80 bg-accent/10 px-3 py-1.5 rounded-lg w-fit">
                &lt;intelligence/&gt;
              </span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group rounded-3xl p-[1px] overflow-hidden bg-gradient-to-b from-[#ffb3c6]/50 to-transparent hover:from-accent/50 transition-colors duration-500"
          >
            <div className="h-full bg-card/80 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#fff0f3] rounded-xl flex items-center justify-center mb-6 border border-[#ffb3c6]/50">
                  <span className="font-bold text-accent">UX</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">User-Centric Design</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                  Creating intuitive interfaces that make complex technology accessible to everyone.
                </p>
              </div>
              <span className="text-xs font-mono text-accent/80 bg-accent/10 px-3 py-1.5 rounded-lg w-fit">
                &lt;experience/&gt;
              </span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group rounded-3xl p-[1px] overflow-hidden bg-gradient-to-b from-[#ffb3c6]/50 to-transparent hover:from-accent/50 transition-colors duration-500"
          >
            <div className="h-full bg-card/80 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#fff0f3] rounded-xl flex items-center justify-center mb-6 border border-[#ffb3c6]/50">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Innovation Focus</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                  Transforming complex problems into elegant, scalable solutions with cutting-edge tech.
                </p>
              </div>
              <span className="text-xs font-mono text-accent/80 bg-accent/10 px-3 py-1.5 rounded-lg w-fit">
                &lt;innovation/&gt;
              </span>
            </div>
          </motion.div>

        </div>

        {/* The Quote Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-card/50 backdrop-blur-md border border-[#ffb3c6]/30 rounded-3xl p-8 md:p-10 mb-6 flex flex-col md:flex-row items-center gap-6 md:gap-10"
        >
          <div className="text-6xl font-serif text-accent/30 leading-none">"</div>
          <div>
            <p className="text-xl md:text-2xl font-medium text-foreground/90 italic mb-4">
              "First, solve the problem. Then, write the code."
            </p>
            <p className="text-sm font-bold text-accent uppercase tracking-widest flex items-center gap-2">
               John Johnson <span className="w-6 h-[1px] bg-accent/50 block"></span>
            </p>
          </div>
        </motion.div>

        {/* Code Snippet Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a0f11] rounded-2xl p-6 border border-accent/20 flex items-center gap-4"
          >
            <Terminal className="w-5 h-5 text-[#ffb3c6]" />
            <code className="text-sm font-mono text-[#fce4ec]">
              console.log('Always learning!');
            </code>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a0f11] rounded-2xl p-6 border border-accent/20 flex items-center gap-4"
          >
            <Cpu className="w-5 h-5 text-[#ffb3c6]" />
            <code className="text-sm font-mono text-[#fce4ec]">
              Powered by coffee & curiosity
            </code>
          </motion.div>

        </div>

        {/* Final Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a 
            href="mailto:your.email@example.com" // UPDATE THIS EMAIL
            className="group flex items-center gap-3 px-8 py-4 bg-[#fff0f3] text-accent font-bold rounded-full border border-accent/30 hover:bg-accent hover:text-white transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(216,17,89,0.3)] hover:shadow-[0_15px_25px_-10px_rgba(216,17,89,0.5)] hover:-translate-y-1"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 group-hover:bg-white"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent group-hover:bg-white/80"></span>
            </span>
            Available for opportunities
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}