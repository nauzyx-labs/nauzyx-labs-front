"use client";

import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import TopNavigation from "./_components/TopNavigation";
import HeroSection from "./_sections/HeroSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [navDark, setNavDark] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    if (!loaded) return;

    const ctx = gsap.context(() => {
      gsap.set(".hero-item", { opacity: 0, y: 60 });
      gsap.set("nav", { opacity: 0, y: -20 });

      const tl = gsap.timeline();

      tl.to(
        "nav",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        0.3,
      );
      tl.to(
        ".hero-item",
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "back.out",
        },
        0.5,
      );

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
        <TopNavigation navDark={navDark} />
        <HeroSection heroRef={heroRef as React.RefObject<HTMLElement>} />
      </div>
    </>
  );
}
