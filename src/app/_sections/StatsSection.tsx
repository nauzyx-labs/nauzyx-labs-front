"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  {
    target: 2.4,
    prefix: "$",
    suffix: "B+",
    decimals: 1,
    label: "Revenue Generated",
    description: "Processed through our identity infrastructure",
  },
  {
    target: 99.99,
    prefix: "",
    suffix: "%",
    decimals: 2,
    label: "Uptime SLA",
    description: "Enterprise-grade reliability guarantee",
  },
  {
    target: 50,
    prefix: "",
    suffix: "M+",
    decimals: 0,
    label: "API Calls Daily",
    description: "Authentications served every single day",
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      numbersRef.current.forEach((el) => {
        if (!el) return;
        const target = parseFloat(el.getAttribute("data-target") || "0");
        const prefix = el.getAttribute("data-prefix") || "";
        const suffix = el.getAttribute("data-suffix") || "";
        const decimals = parseInt(el.getAttribute("data-decimals") || "0");

        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1.5,
          },
          onUpdate: () => {
            el.textContent = `${prefix}${counter.value.toFixed(decimals)}${suffix}`;
          },
        });
      });

      // Stagger reveal for stat cards
      gsap.from(".stat-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1b3864 0%, #1c4786 50%, #1a3a6b 100%)",
      }}
    >
      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex mb-6 items-center px-4 py-1.5 rounded-full border border-white/20 text-white/70 text-xs sm:text-sm font-semibold tracking-wide">
            By the Numbers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.1]">
            Trusted at scale
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-white/10">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-card flex flex-col items-center text-center px-4 sm:px-8 py-8"
            >
              <span
                ref={(el) => {
                  numbersRef.current[i] = el;
                }}
                data-target={stat.target}
                data-prefix={stat.prefix}
                data-suffix={stat.suffix}
                data-decimals={stat.decimals}
                className="text-5xl sm:text-6xl md:text-7xl font-medium text-white tracking-tight mb-3"
              >
                {stat.prefix}0.{"0".repeat(stat.decimals)}
                {stat.suffix}
              </span>
              <span className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </span>
              <span className="text-sm text-white/50">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
