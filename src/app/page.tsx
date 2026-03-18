import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsCloud from "@/components/SkillsCloud";
// import BentoGrid from "@/components/BentoGrid";
import PetalProjects from "@/components/PetalProjects";
import OpenSource from "@/components/OpenSource";
import Certifications from "@/components/Certifications";
import ArchitectBlueprint from "@/components/ArchitectBlueprint"; // <-- Import here
import { Heart } from "lucide-react"; 

export default function Home() {
  return (
    <main className="min-h-screen text-foreground transition-colors duration-500 selection:bg-accent/30 flex flex-col">
      <Navbar />
      
      <div className="max-w-6xl mx-auto pt-20 px-6 relative z-10 flex-grow space-y-10">
        <Hero />
        <About />
        <SkillsCloud />
        {/* <Bentogrid /> */}
        <PetalProjects />
        <OpenSource />
        <Certifications />
        
        <ArchitectBlueprint /> 

      </div>

      <footer className="relative z-10 py-8 border-t border-[#ffb3c6]/20 bg-card/30 backdrop-blur-sm mt-auto flex items-center justify-center">
        <p className="text-foreground/60 text-sm flex items-center gap-1.5 font-medium">
          Designed and developed by Jalisa Malik
          <Heart className="w-4 h-4 text-accent fill-accent" />
        </p>
      </footer>
    </main>
  );
}