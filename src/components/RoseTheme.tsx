"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RoseTheme() {
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const trailCanvasRef = useRef<HTMLCanvasElement>(null);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);

  // 1. Visible, Growing Rose Vines (Background)
  useEffect(() => {
    const canvas = bgCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let generation = 0; // Tracks which drawing cycle is active to prevent overlapping animations

    const initVines = () => {
      generation++;
      const currentGen = generation;

      // Resizing wipes the canvas automatically
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const drawRose = (x: number, y: number, size: number) => {
        if (currentGen !== generation) return; // Stop drawing if a resize happened

        ctx.fillStyle = "rgba(255, 179, 198, 0.8)"; 
        ctx.strokeStyle = "rgba(136, 13, 30, 0.4)"; 
        ctx.lineWidth = 1.5;
        
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          ctx.arc(x + Math.cos(i) * (size/2), y + Math.sin(i) * (size/2), size, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(x, y, size / 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(216, 17, 89, 0.6)"; 
        ctx.fill();
      };

      const drawVine = (x: number, y: number, angle: number, len: number, width: number) => {
        if (currentGen !== generation) return; // Stop drawing if a resize happened
        if (len < 15) return; 
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        const nx = x + Math.cos(angle) * len;
        const ny = y + Math.sin(angle) * len;
        
        ctx.strokeStyle = "rgba(143, 162, 122, 0.5)"; 
        ctx.lineWidth = width;
        ctx.lineTo(nx, ny);
        ctx.stroke();

        if (Math.random() > 0.8) {
          drawRose(nx, ny, Math.random() * 12 + 6);
        }

        setTimeout(() => {
          if (currentGen !== generation) return; // Prevent ghost branches from spawning
          drawVine(nx, ny, angle + (Math.random() * 0.4 - 0.2), len * 0.85, width * 0.8);
          if (Math.random() > 0.75) drawVine(nx, ny, angle - 0.6, len * 0.6, width * 0.6);
          if (Math.random() > 0.75) drawVine(nx, ny, angle + 0.6, len * 0.6, width * 0.6);
        }, 150);
      };

      // Start the growth
      drawVine(0, window.innerHeight * 0.8, -Math.PI / 4, 120, 5);
      drawVine(window.innerWidth, window.innerHeight * 0.8, -Math.PI / 1.3, 120, 5);
    };

    // Draw immediately on mount
    initVines();
    
    // Debounce the resize so it doesn't stutter while actively dragging the window
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initVines();
      }, 300); // Waits 300ms after you stop resizing before redrawing
    };

    window.addEventListener("resize", handleResize);
    return () => {
      generation++; // Kills any ongoing timeouts on unmount
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // 2. Continuous Maroon Ribbon Trail
  useEffect(() => {
    const canvas = trailCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let points: { x: number; y: number; timestamp: number }[] = [];
    let animationFrameId: number;

    const resizeTrail = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeTrail();
    window.addEventListener("resize", resizeTrail);

    const handleMove = (e: MouseEvent) => {
      points.push({ x: e.clientX, y: e.clientY, timestamp: Date.now() });
    };
    window.addEventListener("mousemove", handleMove);

    const animateTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();
      
      points = points.filter((p) => now - p.timestamp < 500);

      if (points.length > 1) {
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const age = now - p1.timestamp;
          const opacity = Math.max(0, 1 - age / 500);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(136, 13, 30, ${opacity})`; 
          ctx.lineWidth = 6 * opacity; 
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.stroke();
        }
      }
      animationFrameId = requestAnimationFrame(animateTrail);
    };
    animateTrail();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", resizeTrail);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // 3. Petal Burst Click Logic
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      setClicks((prev) => [...prev, { id: Date.now(), x: e.clientX, y: e.clientY }]);
      setTimeout(() => setClicks((prev) => prev.slice(1)), 1500);
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      {/* Background Vines Layer */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <canvas ref={bgCanvasRef} className="absolute inset-0 opacity-60" />
      </div>

      {/* Continuous Trail Layer */}
      <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
        <canvas ref={trailCanvasRef} className="absolute inset-0" />
      </div>

      {/* Click Petals Layer */}
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        <AnimatePresence>
          {clicks.map((click) => (
            <PetalBurst key={click.id} x={click.x} y={click.y} />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

function PetalBurst({ x, y }: { x: number; y: number }) {
  const petals = Array.from({ length: 12 }); 
  
  return (
    <>
      {petals.map((_, i) => {
        const angle = Math.random() * Math.PI * 2; 
        const distance = Math.random() * 150 + 50; 
        
        return (
          <motion.div
            key={i}
            initial={{ x: x - 8, y: y - 12, opacity: 1, scale: 1 }}
            animate={{
              x: x - 8 + Math.cos(angle) * distance,
              y: y - 12 + Math.sin(angle) * distance,
              opacity: 0,
              rotate: Math.random() * 720 - 360, 
              scale: Math.random() * 0.5 + 0.2,
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-4 h-6 bg-[#880d1e] blur-[1px]" 
            style={{ borderRadius: "50% 0 50% 50%" }}
          />
        );
      })}
    </>
  );
}