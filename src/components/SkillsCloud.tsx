"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  {
    id: "languages", label: "Languages", duration: "25s",
    items: [
      { name: "C", icon: "https://skillicons.dev/icons?i=c", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
      { name: "C++", icon: "https://skillicons.dev/icons?i=cpp", link: "https://isocpp.org/" },
      { name: "Java", icon: "https://skillicons.dev/icons?i=java", link: "https://www.java.com/" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts", link: "https://www.typescriptlang.org/" },
      { name: "PHP", icon: "https://skillicons.dev/icons?i=php", link: "https://www.php.net/" },
    ]
  },
  {
    id: "frameworks", label: "Frameworks", duration: "30s",
    items: [
      { name: "React", icon: "https://skillicons.dev/icons?i=react", link: "https://react.dev/" },
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs", link: "https://nextjs.org/" },
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs", link: "https://nodejs.org/" },
      { name: "Python", icon: "https://skillicons.dev/icons?i=py", link: "https://www.python.org/" },
      { name: "HTML", icon: "https://skillicons.dev/icons?i=html", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", icon: "https://skillicons.dev/icons?i=css", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    ]
  },
  {
    id: "databases", label: "Databases", duration: "35s",
    items: [
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb", link: "https://www.mongodb.com/" },
      { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql", link: "https://www.mysql.com/" },
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres", link: "https://www.postgresql.org/" },
      { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase", link: "https://firebase.google.com/" },
      { name: "Supabase", icon: "https://skillicons.dev/icons?i=supabase", link: "https://supabase.com/" },
      { name: "Oracle", icon: "https://5.imimg.com/data5/SELLER/Default/2022/7/FT/WW/IM/7756102/oracle-database-enterprise-edition-license-1-processor-500x500.png", link: "https://www.oracle.com/database/" },
      { name: "MSSQL", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Microsoft_SQL_Server_2025_icon.svg/960px-Microsoft_SQL_Server_2025_icon.svg.png", link: "https://www.microsoft.com/en-us/sql-server/" },
      { name: "XAMPP", icon: "https://cdn.simpleicons.org/xampp", invert: true, link: "https://www.apachefriends.org/" },
    ]
  },
  {
    id: "cloud-devops", label: "Cloud & DevOps", duration: "25s",
    items: [
      { name: "Git", icon: "https://skillicons.dev/icons?i=git", link: "https://git-scm.com/" },
      { name: "GitHub", icon: "https://skillicons.dev/icons?i=github", link: "https://github.com/" },
      { name: "n8n", icon: "https://cdn.simpleicons.org/n8n", invert: true, link: "https://n8n.io/" },
    ]
  },
  {
    id: "data-analytics", label: "Data & Analytics", duration: "20s",
    items: [
      { name: "Jupyter", icon: "https://images.seeklogo.com/logo-png/35/1/jupyter-logo-png_seeklogo-354673.png", link: "https://jupyter.org/" },
      { name: "Google Colab", icon: "https://cdn.simpleicons.org/googlecolab", invert: true, link: "https://colab.research.google.com/" },
    ]
  },
  {
    id: "ai-llms", label: "AI & LLMs", duration: "40s",
    items: [
      { name: "ChatGPT", icon: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/openai.png", link: "https://chatgpt.com/" }, 
      { name: "Claude", icon: "https://cdn.simpleicons.org/anthropic", invert: true, link: "https://claude.ai/" },
      { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini", link: "https://gemini.google.com/" }, 
      { name: "Grok", icon:"https://cdn.simpleicons.org/x", link: "https://x.ai/" }, 
      { name: "Perplexity", icon: "https://cdn.simpleicons.org/perplexity", invert: true, link: "https://www.perplexity.ai/" },
      { name: "Copilot", icon: "https://cdn.simpleicons.org/githubcopilot",
    invertDark: true, link: "https://github.com/features/copilot" }, 
      { name: "Ollama", icon:"https://cdn.simpleicons.org/ollama" , link: "https://ollama.com/" }, 
      { name: "Sora", icon: "data:image/jpeg;base64,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", link: "https://openai.com/sora" }, 
      { name: "Suno AI", icon: "https://play-lh.googleusercontent.com/5UR_1gDasYzAjJYSdx9onJ5FT68TVzxcV6O_FjTS2X_95_qHgexX__mCa_23lUIgWlU", link: "https://suno.com/" }, 
      { name: "Canva AI", icon: "https://miro.medium.com/v2/resize:fit:1400/0*tviVu77uKID2H6Jn.png", link: "https://www.canva.com/ai-image-generator/" }, 
      { name: "Gamma", icon: "https://www.wpcrafter.com/wp-content/uploads/2024/08/gamma-1.png", link: "https://gamma.app/" }, 
      { name: "Notion AI", icon: "https://skillicons.dev/icons?i=notion", link: "https://www.notion.so/product/ai" },
    ]
  },
  {
    id: "dev-tools", label: "Dev Tools", duration: "30s", 
    items: [
      { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode", link: "https://code.visualstudio.com/" },
      { name: "Visual Studio", icon: "https://skillicons.dev/icons?i=visualstudio", link: "https://visualstudio.microsoft.com/" },
      { name: "Antigravity", icon: "https://media.licdn.com/dms/image/v2/D560BAQG5wmEaqHfmDg/company-logo_200_200/B56ZqUSJh0I4AM-/0/1763424377586/google_antigravity_logo?e=2147483647&v=beta&t=09EGMp77uIgS77oquLNRli_4mMEV8oGvXklIXLBP6YM", link: "https://elgoog.im/antigravity/" },
      { name: "Shadcn/UI", icon: "https://cdn.simpleicons.org/shadcnui", link: "https://ui.shadcn.com/" }, 
      { name: "Trello", icon: "https://cdn.simpleicons.org/trello", invert: true, link: "https://trello.com/" },
      { name: "Asana", icon: "https://cdn.simpleicons.org/asana", invert: true, link: "https://asana.com/" },
      { name: "Canva", icon: "https://miro.medium.com/v2/resize:fit:1400/0*tviVu77uKID2H6Jn.png", invert: true, link: "https://www.canva.com/" },
      { name: "Windows", icon: "https://skillicons.dev/icons?i=windows", link: "https://www.microsoft.com/windows" },
      { name: "Ubuntu", icon: "https://skillicons.dev/icons?i=ubuntu", link: "https://ubuntu.com/" },
    ]
  }
];

// Constant radius for the single Focus Ring
const ORBIT_RADIUS = 170;

export default function SkillsCloud() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 z-10 relative">      
      <style>{`
        @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes orbit-reverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        
        .orbit-system { animation: orbit var(--duration) linear infinite; }
        .orbit-stabilizer { animation: orbit-reverse var(--duration) linear infinite; }
        
        .is-paused .orbit-system,
        .is-paused .orbit-stabilizer { animation-play-state: paused !important; }
      `}</style>

      <div className="max-w-5xl mx-auto text-center px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Technical <span className="text-accent">Arsenal</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            My architectural ecosystem. Select a system layer to explore its components.
          </p>
        </motion.div>

        <div className={`relative w-full h-[400px] flex items-center justify-center my-12 pointer-events-none ${hoveredSkill ? 'is-paused' : ''}`}>
          <div className="relative flex items-center justify-center scale-75 md:scale-100">
            
            <div className="absolute z-50 w-32 h-32 rounded-full bg-[#fff0f3] border-2 border-accent/40 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(216,17,89,0.3)] backdrop-blur-md pointer-events-auto transition-colors duration-300">
              <span className="font-extrabold text-accent tracking-widest uppercase text-sm text-center px-2">
                {activeCategory.label}
              </span>
              <span className="text-[10px] font-medium text-foreground/50 mt-1">Core</span>
            </div>

            <div 
              className="absolute rounded-full border border-accent/20 shadow-[inset_0_0_20px_rgba(216,17,89,0.05)] z-10"
              style={{ width: ORBIT_RADIUS * 2, height: ORBIT_RADIUS * 2 }}
            />

            <div className="absolute top-1/2 left-1/2 w-0 h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 w-0 h-0"
                >
                  <div className="orbit-system absolute top-0 left-0" style={{ "--duration": activeCategory.duration } as React.CSSProperties}>
                    
                    {activeCategory.items.map((item, i) => {
                      const angle = (360 / activeCategory.items.length) * i;
                      const isHovered = hoveredSkill === item.name;
                      const isDimmed = hoveredSkill !== null && !isHovered;

                      return (
                        <div 
                          key={item.name}
                          className="absolute top-0 left-0"
                          style={{ transform: `rotate(${angle}deg) translateY(-${ORBIT_RADIUS}px)` }}
                        >
                          <div className="absolute top-0 left-0" style={{ transform: `rotate(-${angle}deg)` }}>
                            
                            <div className="orbit-stabilizer absolute top-0 left-0" style={{ "--duration": activeCategory.duration } as React.CSSProperties}>
                              
                              <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.05 }}
                                className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 ${isHovered ? 'z-50' : 'z-10'}`}
                              >
                                <a 
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onMouseEnter={() => setHoveredSkill(item.name)}
                                  onMouseLeave={() => setHoveredSkill(null)}
                                  className={`relative flex items-center justify-center w-14 h-14 rounded-full bg-card/90 backdrop-blur-xl border border-accent/30 shadow-md transition-all duration-300 group/node pointer-events-auto
                                    ${isHovered ? 'scale-125 bg-[#fff0f3] border-accent shadow-[0_0_25px_rgba(216,17,89,0.5)] z-50' : ''}
                                    ${isDimmed ? 'opacity-30 scale-90' : 'opacity-100'}
                                  `}
                                >
                                  {(item as any).isText ? (
                                    <span className={`font-bold text-sm transition-colors ${isHovered ? 'text-accent' : 'text-foreground'}`}>
                                      {(item as any).symbol}
                                    </span>
                                  ) : (
                                    <img 
                                      src={item.icon} 
                                      alt={item.name} 
                                      className={`w-8 h-8 object-contain ${(item as any).invert ? 'filter invert opacity-70' : ''}`}
                                    />
                                  )}

                                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-1 bg-foreground text-background text-xs font-semibold rounded-lg opacity-0 group-hover/node:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl z-[100]">
                                    {item.name}
                                  </div>
                                </a>
                              </motion.div>

                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mt-8 max-w-3xl mx-auto pointer-events-auto"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory.id === cat.id 
                  ? "bg-accent text-white shadow-[0_5px_15px_rgba(216,17,89,0.4)] scale-105" 
                  : "bg-[#fff0f3] text-accent border border-[#ffb3c6]/50 hover:bg-[#ffb3c6]/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

      </div>
    </section>
  );
}