"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Grainient from "@/components/Grainient";

const CTASection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 sm:py-32 overflow-hidden my-4 mx-4 rounded-[2.5rem]"
    >
      <motion.div style={{ y }} className="absolute inset-[-20%] z-0">
        <Grainient
          color1="#0f2942"
          color2="#1a4a7a"
          color3="#2dd4bf"
          timeSpeed={0.4}
          colorBalance={0.6}
          warpStrength={2.0}
          warpFrequency={7}
          warpSpeed={12}
          warpAmplitude={18}
          blendAngle={40}
          blendSoftness={0.15}
          rotationAmount={500}
          grainAmount={0.04}
          contrast={1.4}
          gamma={0.92}
          saturation={0.75}
          centerX={0.2}
          centerY={0.3}
          zoom={0.3}
        />
        <div className="absolute inset-0 bg-black/35" />
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6">
            Ready to ship
            <br />
            faster?
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-md mx-auto mb-10">
            Start building with NauzyxLabs today. Free for up to 10,000 monthly
            active users.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              href="#"
              className="h-12 px-8 flex items-center justify-center text-base font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Building for Free
            </motion.a>
            <motion.a
              href="#"
              className="h-12 px-8 flex items-center justify-center text-base font-medium text-white border border-white/40 rounded-full hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Talk to Sales
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
