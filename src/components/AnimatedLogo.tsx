"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimatedLogoProps {
  readonly onAnimationComplete?: () => void;
  readonly className?: string;
}

export default function AnimatedLogo({
  onAnimationComplete,
  className = "w-24 h-auto md:w-32",
}: AnimatedLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const els = containerRef.current.querySelectorAll("path, circle");

    gsap.set(containerRef.current, { opacity: 1 });
    gsap.set(els, {
      opacity: 0,
      y: 0,
      scale: 0,
      transformOrigin: "center center",
    });

    gsap.to(els, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.inOut",
      onComplete: onAnimationComplete,
    });
  }, [onAnimationComplete]);

  return (
    <div ref={containerRef} className={`relative opacity-0 ${className}`}>
      <svg
        viewBox="0 0 150 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient
            id="pl_g0"
            x1="44.75"
            y1="32"
            x2="55.5"
            y2="101"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#11446F" />
            <stop offset="1" stopColor="#304CB0" />
          </linearGradient>
          <linearGradient
            id="pl_g1"
            x1="44.75"
            y1="32"
            x2="55.5"
            y2="101"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#11446F" />
            <stop offset="1" stopColor="#304CB0" />
          </linearGradient>
          <linearGradient
            id="pl_g2"
            x1="28"
            y1="-4.5"
            x2="72.25"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5CB7C9" />
            <stop offset="1" stopColor="#14204A" />
          </linearGradient>
        </defs>

        {/* gradient fills */}
        <path
          d="M3.73162 91.6803L21.6979 51.6243C25.5428 43.0522 37.3015 42.0232 42.5767 49.7973L45.3378 53.8663C47.9612 57.7323 48.6392 62.6206 46.3796 66.7099C43.6062 71.729 38.764 78.8452 31 85.5C23.4294 91.9891 14.9816 95.7002 8.81899 97.7402C5.07149 98.9808 2.11611 95.2821 3.73162 91.6803Z"
          fill="url(#pl_g0)"
        />
        <path
          d="M58.5051 73.1141L56.431 70.2992C55.2274 68.6657 52.7739 68.6661 51.5399 70.2768C48.63 74.075 43.5991 80.4009 39 85C33.9888 90.0112 23.5965 96.0473 18.0958 99.0728C17.5161 99.3916 17.8544 100.329 18.5032 100.199C19.1661 100.067 19.8405 100 20.5166 100H28.2519C34.7981 100 41.0602 97.3261 45.5873 92.5977L58.0914 79.5379C59.7726 77.7819 59.9472 75.0712 58.5051 73.1141Z"
          fill="url(#pl_g1)"
        />
        <path
          d="M76.8371 89.7253L25.1917 15.6438C24.2673 14.3179 25.216 12.5 26.8323 12.5H44.8755C52.4997 12.5 59.6703 16.1225 64.1941 22.2595L119.151 96.8133C120.124 98.1338 119.182 100 117.541 100H96.525C88.6772 100 81.3252 96.1631 76.8371 89.7253Z"
          fill="url(#pl_g2)"
        />

        {/* teal fills */}
        <path
          d="M102.226 64.2168L97.0228 56.9319C94.9395 54.0152 95.0504 50.0688 97.2943 47.2738L118.998 20.2397C120.896 17.8755 123.764 16.5 126.796 16.5H131.124C131.683 16.5 132.215 16.2667 132.594 15.8566L142.979 4.60618C143.536 4.00254 144.484 3.9836 145.064 4.56449C145.594 5.0941 145.632 5.9404 145.151 6.515L124.525 31.1862C123.275 32.6813 124.683 34.8991 126.568 34.4031L135.084 32.1621C136.77 31.7185 138.177 33.4938 137.36 35.0337L122.591 62.8665C118.412 70.7421 107.408 71.4717 102.226 64.2168Z"
          fill="#3E99AB"
        />
        <path
          d="M87.6798 45.1443L85.0173 41.8674C84.1307 40.7763 84.1208 39.2158 84.9935 38.1135L100.098 19.0344C101.615 17.1177 103.926 16 106.37 16H111L122.469 3.15521C123.047 2.50734 124.031 2.42488 124.709 2.96745C125.42 3.53587 125.53 4.57503 124.953 5.27927L116.182 16L92.33 45.1523C91.127 46.6225 88.8777 46.6187 87.6798 45.1443Z"
          fill="#3E99AB"
        />
        <path d="M123.5 2L126 4L116.182 16H111L123.5 2Z" fill="#3E99AB" />
        <path
          d="M132.5 29C132.5 29 138 27 140 25.5C142 24 146.5 20 146.5 20"
          stroke="#3E99AB"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* three circles top-right */}
        <circle cx="123.5" cy="4" r="4" fill="#3E99AB" />
        <circle cx="143.5" cy="6" r="4" fill="#3E99AB" />
        <circle cx="145.5" cy="21" r="4" fill="#3E99AB" />
      </svg>
    </div>
  );
}
