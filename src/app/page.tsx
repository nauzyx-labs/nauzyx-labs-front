"use client";

import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import Footer from "./_components/Footer";
import Navigation from "./_components/Navigation";
import AboutSection from "./_sections/AboutSection";
import ClientsSection from "./_sections/ClientsSection";
import CTASection from "./_sections/CTASection";
import HeroSection from "./_sections/HeroSection";
import ProjectsSection from "./_sections/ProjectsSection";
import ServicesSection from "./_sections/ServicesSection";
import TestimonialsSection from "./_sections/TestimonialsSection";

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

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (t: number) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const timeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.set(".hero-item", { opacity: 0, y: 60 });
        gsap.set(".top-nav", { opacity: 0, y: -20 });

        const tl = gsap.timeline();

        tl.to(
          ".top-nav",
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
      }, mainRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timeout);
  }, [loaded]);

  return (
    <>
      <Cursor />
      <Preloader onComplete={() => setLoaded(true)} />

      <div
        ref={mainRef}
        className="bg-white text-gray-900 selection:bg-blue-500 selection:text-white font-sans overflow-x-clip"
      >
        <div id="home" className="absolute top-0" />
        <Navigation showPill={navDark} />
        <HeroSection
          heroRef={heroRef as React.RefObject<HTMLDivElement | null>}
        />
        <div className="relative z-20 -mt-[100vh]">
          <div className="bg-white rounded-t-[3rem] relative flex flex-col pt-8">
            <div id="services">
              <ServicesSection />
            </div>
            <div id="clients">
              <ClientsSection />
            </div>
            <div id="about">
              <AboutSection />
            </div>
            <div id="projects">
              <ProjectsSection />
            </div>
            <TestimonialsSection />
            <div id="contact">
              <CTASection />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
