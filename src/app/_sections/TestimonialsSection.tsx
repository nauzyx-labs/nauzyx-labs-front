"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const TESTIMONIALS = [
  {
    quote:
      "NauzyxLabs cut our auth implementation from 3 months to 2 weeks. The SSO integration with Okta was seamless — our enterprise clients were impressed.",
    name: "Sarah Chen",
    role: "CTO, Finova",
    avatar: "https://i.pravatar.cc/150?img=47",
    stars: 5,
  },
  {
    quote:
      "We migrated from a custom auth system to NauzyxLabs and haven't looked back. The RBAC system is incredibly flexible and the audit logs are a compliance lifesaver.",
    name: "Marcus Rodriguez",
    role: "VP Engineering, HealthBridge",
    avatar: "https://i.pravatar.cc/150?img=12",
    stars: 5,
  },
  {
    quote:
      "The developer experience is unmatched. One API call to add Google SSO, another for MFA. Our team stopped debating auth architecture and started shipping features.",
    name: "Aisha Patel",
    role: "Lead Developer, EduScale",
    avatar: "https://i.pravatar.cc/150?img=32",
    stars: 5,
  },
  {
    quote:
      "Multi-tenant organizations with per-org roles — exactly what we needed. NauzyxLabs handles the complexity so we can focus on our product.",
    name: "James Whitfield",
    role: "Founder, LogiFlow",
    avatar: "https://i.pravatar.cc/150?img=53",
    stars: 5,
  },
  {
    quote:
      "Sub-millisecond permission checks at scale. We're serving 2M+ daily active users and the performance hasn't budged. Enterprise-grade infrastructure.",
    name: "Elena Vasquez",
    role: "Platform Architect, NexGen",
    avatar: "https://i.pravatar.cc/150?img=44",
    stars: 5,
  },
  {
    quote:
      "The webhook system with HMAC signatures gives us confidence that every event is authentic. Our compliance team loves the detailed audit trail.",
    name: "David Kim",
    role: "Security Lead, TrustVault",
    avatar: "https://i.pravatar.cc/150?img=60",
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
      className="relative py-24 sm:py-32 overflow-hidden min-h-[800px] flex items-center my-4 mx-4 rounded-[2.5rem]"
    >
      <motion.div style={{ y }} className="absolute inset-[-20%] z-0">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
          alt="Mountains Background"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex mb-6 items-center px-6 py-2.5 rounded-full border border-white/30 text-white/80 text-sm font-semibold">
            Testimonials
          </div>
          <h2 className="text-4xl xl:text-7xl font-medium text-white tracking-tight leading-9 xl:leading-16">
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#f3f6fb] rounded-[26px] p-8 flex flex-col justify-between min-h-[300px] hover:scale-[1.02] transition-transform"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(t.stars)].map((_, s) => (
                      <span key={s} className="text-[rgb(33,127,241)]">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-3xl font-serif leading-none text-[rgb(33,127,241)]/40">
                    &quot;
                  </span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed mb-8 text-gray-600">
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
                  <h4 className="font-semibold text-sm text-[rgb(33,127,241)]">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 5, 9].map((img) => (
                <Image
                  key={img}
                  src={`https://i.pravatar.cc/40?img=${img}`}
                  alt="client avatar"
                  width={42}
                  height={42}
                  className="rounded-full object-cover border-2 border-white"
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
                <span className="font-bold text-white">500+ companies</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
