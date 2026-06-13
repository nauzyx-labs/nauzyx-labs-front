"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Database,
  Server,
  Cloud,
  Cpu,
  Globe,
  Layers,
  Box,
  Terminal,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const systemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rotate the entire system on scroll
      gsap.to(systemRef.current, {
        rotationZ: 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Counter-rotate the icons so they stay upright
      gsap.to(".tech-icon", {
        rotationZ: -360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-[#121216] text-white"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              The Digital Ecosystem
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Powered by modern technologies to build scalable, high-performance
              solutions.
            </p>
          </div>

          <div className="col-span-12 relative h-[600px] flex items-center justify-center perspective-[1000px]">
            {/* 3D System Container */}
            <div
              ref={systemRef}
              className="relative w-full max-w-[600px] aspect-square flex items-center justify-center"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateX(60deg) rotateZ(20deg)",
              }}
            >
              {/* Central Orb */}
              <div
                className="absolute w-32 h-32 rounded-full bg-indigo-500/20 flex items-center justify-center backdrop-blur-md border border-indigo-500/50 shadow-[0_0_60px_rgba(99,102,241,0.5)] z-10"
                style={{ transform: "rotateX(-60deg) rotateZ(-20deg)" }}
              >
                <span className="font-bold text-xl tracking-wider text-white">
                  NauzyxLabs
                </span>
              </div>

              {/* Ring 1 (Inner) */}
              <div className="absolute w-[60%] h-[60%] rounded-full border border-white/10 flex items-center justify-center">
                <div className="absolute top-0 -translate-y-1/2 tech-icon bg-[#1A1A20] p-3 rounded-full border border-white/10">
                  <Code2 className="w-6 h-6 text-blue-400" />
                </div>
                <div className="absolute bottom-0 translate-y-1/2 tech-icon bg-[#1A1A20] p-3 rounded-full border border-white/10">
                  <Server className="w-6 h-6 text-green-400" />
                </div>
                <div className="absolute left-0 -translate-x-1/2 tech-icon bg-[#1A1A20] p-3 rounded-full border border-white/10">
                  <Database className="w-6 h-6 text-yellow-400" />
                </div>
              </div>

              {/* Ring 2 (Middle) */}
              <div className="absolute w-[80%] h-[80%] rounded-full border border-white/10 flex items-center justify-center">
                <div className="absolute top-[15%] right-[15%] translate-x-1/2 -translate-y-1/2 tech-icon bg-[#1A1A20] p-3 rounded-full border border-white/10">
                  <Cloud className="w-6 h-6 text-orange-400" />
                </div>
                <div className="absolute bottom-[15%] left-[15%] -translate-x-1/2 translate-y-1/2 tech-icon bg-[#1A1A20] p-3 rounded-full border border-white/10">
                  <Cpu className="w-6 h-6 text-purple-400" />
                </div>
                <div className="absolute top-[15%] left-[15%] -translate-x-1/2 -translate-y-1/2 tech-icon bg-[#1A1A20] p-3 rounded-full border border-white/10">
                  <Globe className="w-6 h-6 text-cyan-400" />
                </div>
              </div>

              {/* Ring 3 (Outer) */}
              <div className="absolute w-[100%] h-[100%] rounded-full border border-white/10 flex items-center justify-center">
                <div className="absolute right-0 translate-x-1/2 tech-icon bg-[#1A1A20] p-3 rounded-full border border-white/10">
                  <Layers className="w-6 h-6 text-pink-400" />
                </div>
                <div className="absolute bottom-[5%] right-[20%] translate-x-1/2 translate-y-1/2 tech-icon bg-[#1A1A20] p-3 rounded-full border border-white/10">
                  <Box className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="absolute top-[5%] left-[20%] -translate-x-1/2 -translate-y-1/2 tech-icon bg-[#1A1A20] p-3 rounded-full border border-white/10">
                  <Terminal className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
