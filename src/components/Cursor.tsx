"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    // Only run on desktop/large screens
    if (window.matchMedia("(pointer: coarse)").matches) return;

    if (!cursor || !follower) return;

    // Hide default cursor
    document.documentElement.style.cursor = "none";

    // Smooth, fluid cursor movement
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.03,
        ease: "linear",
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "sine.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Hover effects
    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 0.8, opacity: 0.6, duration: 0.15 });
      gsap.to(follower, {
        scale: 1.8,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        mixBlendMode: "screen",
        duration: 0.25,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.15 });
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "transparent",
        mixBlendMode: "difference",
        duration: 0.25,
      });
    };

    const interactiveSelectors =
      "a, button, input, textarea, [role='button'], .hover-trigger";
    const interactiveElements = document.querySelectorAll(interactiveSelectors);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Add observer for dynamic elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const newElements = document.querySelectorAll(interactiveSelectors);
          newElements.forEach((el) => {
            el.removeEventListener("mouseenter", handleMouseEnter);
            el.removeEventListener("mouseleave", handleMouseLeave);
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
      document.documentElement.style.cursor = "auto";
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block will-change-transform"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-white rounded-full pointer-events-none z-[9998] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block will-change-transform"
      />
    </>
  );
}
