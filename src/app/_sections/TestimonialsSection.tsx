import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Soho's consulting system completely transformed the way I run my business. It gave me clarity, structure, and a clear path to scaling.",
    name: "Lauren Meyers",
    role: "Growth Strategist",
    avatar: "https://i.pravatar.cc/150?img=47",
    stars: 5,
  },
  {
    quote:
      "Soho's consulting system completely transformed the way I run my business. It gave me clarity, structure, and a clear path to scaling.",
    name: "Lauren Meyers",
    role: "Growth Strategist",
    avatar: "https://i.pravatar.cc/150?img=47",
    stars: 5,
  },
  {
    quote:
      "Soho's consulting system completely transformed the way I run my business. It gave me clarity, structure, and a clear path to scaling.",
    name: "Lauren Meyers",
    role: "Growth Strategist",
    avatar: "https://i.pravatar.cc/150?img=47",
    stars: 5,
  },
  {
    quote:
      "Soho's consulting system completely transformed the way I run my business. It gave me clarity, structure, and a clear path to scaling.",
    name: "Lauren Meyers",
    role: "Growth Strategist",
    avatar: "https://i.pravatar.cc/150?img=47",
    stars: 5,
  },
  {
    quote:
      "Soho's consulting system completely transformed the way I run my business. It gave me clarity, structure, and a clear path to scaling.",
    name: "Lauren Meyers",
    role: "Growth Strategist",
    avatar: "https://i.pravatar.cc/150?img=47",
    stars: 5,
    highlight: true,
  },
  {
    quote:
      "Soho's consulting system completely transformed the way I run my business. It gave me clarity, structure, and a clear path to scaling.",
    name: "Lauren Meyers",
    role: "Growth Strategist",
    avatar: "https://i.pravatar.cc/150?img=47",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 sm:py-32 overflow-hidden min-h-[800px] flex items-center rounded-[2.5rem] my-4 mx-4"
    >
      <motion.div style={{ y }} className="absolute inset-[-20%] z-0">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
          alt="Mountains Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center mb-16">
          <Image
            src="/logo_white.svg"
            alt="Logo"
            width={48}
            height={48}
            className="opacity-80"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`p-8 rounded-3xl flex flex-col justify-between min-h-[300px] shadow-lg border border-white/10 ${
                t.highlight
                  ? "bg-white text-gray-900"
                  : "bg-black/30 backdrop-blur-md text-white"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(t.stars)].map((_, s) => (
                      <span
                        key={s}
                        className={t.highlight ? "text-blue-500" : "text-white"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span
                    className={`text-2xl font-serif leading-none ${t.highlight ? "text-blue-500" : "text-white/40"}`}
                  >
                    &quot;
                  </span>
                </div>
                <p
                  className={`text-sm sm:text-base leading-relaxed mb-8 ${t.highlight ? "text-gray-600" : "text-white/80"}`}
                >
                  {t.quote}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4
                    className={`font-semibold text-sm ${t.highlight ? "text-blue-500" : "text-white"}`}
                  >
                    {t.name}
                  </h4>
                  <p
                    className={`text-xs ${t.highlight ? "text-gray-500" : "text-white/60"}`}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 5, 9].map((img) => (
                <Image
                  key={img}
                  src={`https://i.pravatar.cc/40?img=${img}`}
                  alt="client avatar"
                  width={42}
                  height={42}
                  className="rounded-full object-cover border-2 border-transparent"
                />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 items-center">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-white text-[10px]">
                    ★
                  </span>
                ))}
                <span className="text-xs font-semibold text-white ml-2">
                  4.9 / 5
                </span>
              </div>
              <p className="text-xs text-white/80">
                Trusted by{" "}
                <span className="font-bold text-white">300+ clients</span>
              </p>
            </div>
          </div>

          <div className="text-white/80 text-sm font-semibold tracking-widest uppercase">
            Testimonials
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
