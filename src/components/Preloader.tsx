"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import AnimatedLogo from "./AnimatedLogo";

interface PreloaderProps {
  readonly onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [logoFinished, setLogoFinished] = useState(false);

  useEffect(() => {
    if (!logoFinished) return;

    const tl = gsap.timeline();

    // Step 1: brief pause after logo build, then zoom elegantly
    // Step 2: simultaneously — signal onComplete so the page renders UNDER the preloader
    // Step 3: zoom finishes and preloader fades out, revealing the page seamlessly
    tl.to(logoRef.current, {
      scale: 30,
      duration: 0.9,
      ease: "power3.in",
      onStart: () => {
        // Fire onComplete early — page renders while preloader is still covering screen
        onComplete();
      },
    }).to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.25,
        ease: "none",
      },
      "-=0.15",
    );

    return () => {
      tl.kill();
    };
  }, [logoFinished, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-200 flex flex-col items-center justify-center bg-white overflow-hidden"
    >
      <div ref={logoRef}>
        <AnimatedLogo
          className="w-24 md:w-32"
          onAnimationComplete={() => setLogoFinished(true)}
        />
      </div>
    </div>
  );
}
