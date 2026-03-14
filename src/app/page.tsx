import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BentoGrid from "@/components/BentoGrid";
import Contact from "@/components/Contact";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground transition-colors duration-500 selection:bg-accent/30 flex flex-col">
      <Navbar />
      
      <div className="max-w-6xl mx-auto pt-20 px-6 relative z-10 flex-grow">
        <Hero />
        <About />
        <BentoGrid />
        <Contact />
      </div>

      {/* Sweet Minimalist Footer */}
      <div className="mt-24 pb-8 text-center text-foreground/60 flex items-center justify-center gap-2 text-sm font-semibold">
        <span>Designed & Built by Jalisa Malik</span>
        <Heart className="w-4 h-4 text-accent fill-accent" />
      </div>
    </main>
  );
}