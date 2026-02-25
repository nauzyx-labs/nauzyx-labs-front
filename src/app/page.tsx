"use client";

import Cursor from "@/components/Cursor";
import Grainient from "@/components/Grainient";
import Preloader from "@/components/Preloader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Mouse, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function AylixLogo({ className = "w-8 h-8" }: { readonly className?: string }) {
  return (
    <svg viewBox="0 0 150 101" fill="none" className={className}>
      <path
        d="M132.5 29C132.5 29 138 27 140 25.5C142 24 146.5 20 146.5 20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M3.73162 91.6803L21.6979 51.6243C25.5428 43.0522 37.3015 42.0232 42.5767 49.7973L45.3378 53.8663C47.9612 57.7323 48.6392 62.6206 46.3796 66.7099C43.6062 71.729 38.764 78.8452 31 85.5C23.4294 91.9891 14.9816 95.7002 8.81899 97.7402C5.07149 98.9808 2.11611 95.2821 3.73162 91.6803Z"
        fill="currentColor"
      />
      <path
        d="M58.5051 73.1141L56.431 70.2992C55.2274 68.6657 52.7739 68.6661 51.5399 70.2768C48.63 74.075 43.5991 80.4009 39 85C33.9888 90.0112 23.5965 96.0473 18.0958 99.0728C17.5161 99.3916 17.8544 100.329 18.5032 100.199C19.1661 100.067 19.8405 100 20.5166 100H28.2519C34.7981 100 41.0602 97.3261 45.5873 92.5977L58.0914 79.5379C59.7726 77.7819 59.9472 75.0712 58.5051 73.1141Z"
        fill="currentColor"
      />
      <path
        d="M76.8371 89.7253L25.1917 15.6438C24.2673 14.3179 25.216 12.5 26.8323 12.5H44.8755C52.4997 12.5 59.6703 16.1225 64.1941 22.2595L119.151 96.8133C120.124 98.1338 119.182 100 117.541 100H96.525C88.6772 100 81.3252 96.1631 76.8371 89.7253Z"
        fill="currentColor"
      />
      <path
        d="M102.226 64.2168L97.0228 56.9319C94.9395 54.0152 95.0504 50.0688 97.2943 47.2738L118.998 20.2397C120.896 17.8755 123.764 16.5 126.796 16.5H131.124C131.683 16.5 132.215 16.2667 132.594 15.8566L142.979 4.60618C143.536 4.00254 144.484 3.9836 145.064 4.56449C145.594 5.0941 145.632 5.9404 145.151 6.515L124.525 31.1862C123.275 32.6813 124.683 34.8991 126.568 34.4031L135.084 32.1621C136.77 31.7185 138.177 33.4938 137.36 35.0337L122.591 62.8665C118.412 70.7421 107.408 71.4717 102.226 64.2168Z"
        fill="currentColor"
      />
      <path
        d="M87.6798 45.1443L85.0173 41.8674C84.1307 40.7763 84.1208 39.2158 84.9935 38.1135L100.098 19.0344C101.615 17.1177 103.926 16 106.37 16H111L122.469 3.15521C123.047 2.50734 124.031 2.42488 124.709 2.96745C125.42 3.53587 125.53 4.57503 124.953 5.27927L116.182 16L92.33 45.1523C91.127 46.6225 88.8777 46.6187 87.6798 45.1443Z"
        fill="currentColor"
      />
      <path d="M123.5 2L126 4L116.182 16H111L123.5 2Z" fill="currentColor" />
    </svg>
  );
}

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
            width={36}
            height={36}
            className="rounded-full border-2 border-white object-cover"
          />
        ))}
      </div>
      <div className="text-center sm:text-left">
        <div className="flex gap-0.5 mb-0.5 items-center justify-center sm:justify-start">
          {STARS_ARR.map((s) => (
            <Star key={s} size={10} className="fill-blue-500 text-blue-500" />
          ))}
          <span className="text-xs font-semibold text-blue-500 ml-1">
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

const SILK_LINES = [0, 1, 2, 3, 4, 5, 6, 7];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [navDark, setNavDark] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const silkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setNavDark(!entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    const raf = (t: number) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Silk line animations — start immediately, independent of preloader
  useEffect(() => {
    const container = silkRef.current;
    if (!container) return;
    const lines = container.querySelectorAll<HTMLDivElement>(".silk-line");
    const tweens: gsap.core.Tween[] = [];
    lines.forEach((line, i) => {
      const dur = 6 + i * 1.1;
      const drift = 18 + i * 6;
      const delay = i * 0.55;
      tweens.push(
        gsap.to(line, {
          x: drift,
          duration: dur,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay,
        }),
        gsap.to(line, {
          opacity: 0.35 + (i % 3) * 0.2,
          duration: dur * 0.7,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: delay + 1,
        }),
        gsap.to(line, {
          scaleX: 1.08,
          duration: dur * 0.55,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: delay + 2,
          transformOrigin: "center center",
        }),
      );
    });
    return () => tweens.forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".services-heading", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 88%",
        },
      });
    }, mainRef);

    return () => ctx.revert();
  }, [loaded]);

  return (
    <>
      <Cursor />
      <Preloader onComplete={() => setLoaded(true)} />

      <div
        ref={mainRef}
        className="bg-white text-gray-900 selection:bg-blue-500 selection:text-white font-sans overflow-x-hidden"
      >
        {/* ── TOP NAV ── */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-5 transition-colors duration-300 ${
            navDark ? "text-gray-900" : "text-white"
          }`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2">
            <AylixLogo className="w-6 sm:w-8 h-auto" />
            <span className="font-bold text-base sm:text-lg tracking-tight">
              nauzyxlabs
            </span>
          </div>

          <button
            className={`border text-xs sm:text-sm font-semibold px-3 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all ${
              navDark
                ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                : "border-white text-white hover:bg-white/10"
            }`}
          >
            Get started
          </button>
        </nav>

        <section
          ref={heroRef}
          className="relative min-h-screen flex flex-col justify-end pb-12 sm:pb-16 px-4 sm:px-6 md:px-10 overflow-hidden"
        >
          {/* Grainient WebGL background */}
          <div className="absolute inset-0 z-0">
            <Grainient
              color1="#1b3864"
              color2="#1c4786"
              color3="#3e99ab"
              timeSpeed={0.55}
              colorBalance={-0.08}
              warpStrength={2.25}
              warpFrequency={8.1}
              warpSpeed={1.2}
              warpAmplitude={43}
              blendAngle={48}
              blendSoftness={0.18}
              rotationAmount={600}
              grainAmount={0}
              contrast={1.5}
              gamma={1}
              saturation={1}
              centerX={0}
              centerY={0.17}
              zoom={1}
            />
          </div>

          <p className="hero-item text-white/70 text-xs font-bold tracking-[0.25em] uppercase mb-4 relative z-10">
            Digital Solutions for Modern Business
          </p>
          <h1 className="hero-item relative z-10 text-white font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] max-w-4xl mb-0">
            Transform Your
            <br />
            Business with
            <br />
            Smart Solutions
          </h1>
          {/* Right side description + CTAs */}
          <div className="hero-item absolute right-4 sm:right-6 md:right-10 bottom-16 md:bottom-20 max-w-xs md:max-w-sm text-right z-10">
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-5">
              <strong>Empower your team.</strong> Drive efficiency, accelerate
              growth, and stay ahead with cutting-edge digital solutions
              designed for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-end">
              <button className="border border-white/60 text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-white/10 transition-all">
                Learn more
              </button>
              <button className="bg-blue-500/80 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-blue-400 transition-all backdrop-blur-sm">
                Get started
              </button>
            </div>
          </div>
          <div className="hero-item relative z-10 mt-8 sm:mt-12 px-4 sm:px-0">
            <AvatarGroup />
          </div>
          <div className="hero-item absolute bottom-4 sm:bottom-6 right-4 sm:right-10 flex items-center gap-2 text-white/60 text-xs z-10">
            <Mouse size={14} />
            <span className="hidden sm:inline">Scroll to explore</span>
            <span className="sm:hidden">Explore</span>
          </div>
        </section>
      </div>
    </>
  );
}
