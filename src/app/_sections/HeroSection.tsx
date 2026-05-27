"use client";

import Grainient from "@/components/Grainient";
import Logo from "@/components/Logo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MouseIcon } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AVATAR_URLS = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=5",
  "https://i.pravatar.cc/40?img=9",
];

const STARS_ARR = [0, 1, 2, 3, 4];

function AvatarGroup() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4">
      <div className="flex -space-x-2">
        {AVATAR_URLS.map((src) => (
          <Image
            key={src}
            src={src}
            alt="client avatar"
            width={42}
            height={42}
            className="rounded-full object-cover ring-2 ring-black/20"
          />
        ))}
      </div>
      <div className="text-center sm:text-left">
        <div className="flex gap-0.5 mb-0.5 items-center justify-center sm:justify-start">
          {STARS_ARR.map((s) => (
            <span key={s} className="text-white font-mono text-xs">
              ★
            </span>
          ))}
          <span className="text-xs font-semibold text-white ml-1">
            4.9 / 5
          </span>
        </div>
        <p className="text-xs text-gray-100">
          Trusted by{" "}
          <span className="font-bold text-gray-200">500+ companies</span>
        </p>
      </div>
    </div>
  );
}

const HeroSection = ({
  heroRef,
}: {
  heroRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const grainientRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!panelRef.current || !containerRef.current) return;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        pin: panelRef.current,
        pinSpacing: false,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      tl.to(
        grainientRef.current,
        {
          y: "-130vh",
          ease: "none",
        },
        0,
      );

      tl.to(
        contentRef.current,
        {
          y: "-110vh",
          ease: "none",
        },
        0,
      );
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="relative w-full h-[200vh]">
      <div
        className="absolute top-0 w-10 h-10 pointer-events-none"
        ref={heroRef}
      />

      <section
        ref={panelRef}
        className="relative w-full h-screen overflow-hidden"
      >
        <div
          ref={grainientRef}
          className="absolute top-0 left-0 right-0 h-[130vh] z-0"
        >
          <Grainient
            color1="#1b3864"
            color2="#1c4786"
            color3="#3e99ab"
            timeSpeed={0.5}
            colorBalance={0.5}
            warpStrength={2.25}
            warpFrequency={8.1}
            warpSpeed={15}
            warpAmplitude={20}
            blendAngle={48}
            blendSoftness={0.18}
            rotationAmount={600}
            grainAmount={0.05}
            contrast={1.5}
            gamma={0.9}
            saturation={0.8}
            centerX={0}
            centerY={0.5}
            zoom={0.25}
          />
        </div>

        <div
          ref={contentRef}
          className="relative z-10 w-full h-full flex flex-col justify-between pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-10"
        >
          {/* Nav */}
          <nav className="top-nav absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-5 transition-all duration-500 opacity-100 text-white">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Logo className="w-6 sm:w-8 h-auto" />
              <span className="font-bold text-base sm:text-lg tracking-tight">
                nauzyxlabs
              </span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    if (item.href === "#home") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-sm font-medium transition-colors text-white hover:text-white/80"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border text-xs sm:text-sm font-semibold px-3 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all border-white text-white hover:bg-white/10"
            >
              Get started
            </button>
          </nav>

          {/* Main content area */}
          <div className="flex flex-col justify-end flex-1 pt-20 sm:pt-24 pb-4">
            <div className="max-w-4xl text-left mb-6 sm:mb-8">
              <p className="hero-item text-white/70 text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-3 sm:mb-4">
                Digital Solutions for Modern Business
              </p>
              <h1 className="hero-item text-white font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] sm:leading-none">
                Transform Your
                <br className="hidden sm:block" />{" "}
                <span className="sm:hidden"> </span>
                Business with
                <br className="hidden sm:block" />{" "}
                <span className="sm:hidden"> </span>
                Smart Solutions
              </h1>
            </div>

            {/* Bottom row: avatar group + description */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 sm:gap-8">
              <div className="hero-item order-2 md:order-1">
                <AvatarGroup />
              </div>

              <div className="hero-item order-1 md:order-2 max-w-sm md:max-w-md text-left md:text-right">
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                  <strong>Empower your team.</strong> Drive efficiency,
                  accelerate growth, and stay ahead with cutting-edge digital
                  solutions designed for modern enterprises.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-start md:justify-end">
                  <button
                    onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                    className="border border-white/60 text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-white/10 transition-all"
                  >
                    Learn more
                  </button>
                  <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="bg-blue-500/80 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-blue-400 transition-all backdrop-blur-sm"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 text-xs z-20">
          <MouseIcon size={16} className="mb-2 animate-bounce" />
          <span className="hidden sm:block">Scroll down</span>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
