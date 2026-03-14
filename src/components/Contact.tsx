"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 z-10 relative mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-8 md:p-12 rounded-[2.5rem] bg-card/60 backdrop-blur-md border border-[#ffb3c6]/30 shadow-[0_20px_40px_-10px_rgba(255,179,198,0.2)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: The Invitation */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                Let's <span className="text-accent">Connect</span>
              </h2>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Whether you want to discuss a potential collaboration, talk about secure 
              full-stack architectures, or just say hi, my inbox is always open. 
              I'll try my best to get back to you!
            </p>
            
            <a 
              href="mailto:your.email@example.com" 
              className="inline-flex items-center gap-3 text-lg font-semibold text-foreground hover:text-accent transition-colors"
            >
              <div className="p-3 bg-[#fff0f3] rounded-2xl border border-[#ffb3c6]/40">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              Say Hello
            </a>
          </div>

          {/* Right Column: The Form UI */}
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-semibold text-foreground/80 ml-2">Name</label>
              <input 
                type="text" 
                id="name"
                placeholder="Jane Doe"
                className="w-full bg-[#fff0f3]/50 border border-[#ffb3c6]/50 rounded-2xl px-5 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-semibold text-foreground/80 ml-2">Email</label>
              <input 
                type="email" 
                id="email"
                placeholder="jane@example.com"
                className="w-full bg-[#fff0f3]/50 border border-[#ffb3c6]/50 rounded-2xl px-5 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-semibold text-foreground/80 ml-2">Message</label>
              <textarea 
                id="message"
                rows={4}
                placeholder="What's on your mind?"
                className="w-full bg-[#fff0f3]/50 border border-[#ffb3c6]/50 rounded-2xl px-5 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-2 w-full bg-accent text-white font-bold py-4 rounded-2xl hover:bg-[#880d1e] transition-colors flex justify-center items-center gap-2 group"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>

        </div>
      </motion.div>
    </section>
  );
}