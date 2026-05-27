"use client";

import { motion } from "framer-motion";
import Grainient from "@/components/Grainient";

const CTASection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#1b3864"
          color2="#1c4786"
          color3="#3e99ab"
          timeSpeed={0.3}
          colorBalance={0.5}
          warpStrength={1.5}
          warpFrequency={6}
          warpSpeed={10}
          warpAmplitude={15}
          blendAngle={30}
          blendSoftness={0.2}
          rotationAmount={400}
          grainAmount={0.03}
          contrast={1.3}
          gamma={0.95}
          saturation={0.7}
          centerX={0}
          centerY={0}
          zoom={0.4}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

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
