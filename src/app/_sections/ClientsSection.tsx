"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Cloud,
  AlignHorizontalSpaceAround,
  Focus,
  Moon,
  Shuffle,
  LayoutGrid,
  Box,
} from "lucide-react";

const CLIENTS = [
  { name: "Acme Corp", icon: Sparkles },
  { name: "CloudWatch", icon: Cloud },
  { name: "Epicurious", icon: AlignHorizontalSpaceAround },
  { name: "FocalPoint", icon: Focus },
  { name: "Galileo", icon: Moon },
  { name: "Interlock", icon: Shuffle },
  { name: "Luminous", icon: LayoutGrid },
  { name: "Segment", icon: Box },
  { name: "Nietzsche", icon: Sparkles },
  { name: "Lightbox", icon: Box },
];

const ClientsSection = () => {
  return (
    <section
      id="clients"
      className="py-24 sm:py-32 bg-white relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Z-pattern: title right, cards left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left: cards grid */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {CLIENTS.map((client, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  key={client.name}
                  className="flex items-center justify-center gap-3 p-5 sm:p-6 bg-[#f3f6fb] rounded-[26px] hover:scale-[1.02] transition-transform"
                >
                  <div
                    className="w-9 h-9 rounded-[6px] flex items-center justify-center shrink-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgb(33,127,241) 0%, rgb(31,43,56) 100%)",
                      boxShadow: "rgba(33,127,241,0.2) 0px 2px 8px 0px",
                    }}
                  >
                    <client.icon className="w-4.5 h-4.5 text-white" />
                  </div>
                  <span className="text-[#1f2b38] font-semibold text-sm sm:text-base tracking-tight">
                    {client.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: title area */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:text-right"
            >
              <div className="inline-flex mb-6 items-center px-6 py-2.5 rounded-full border border-[rgb(33,127,241)] text-[rgb(33,127,241)] text-sm font-semibold">
                Clients
              </div>
              <h2 className="text-4xl xl:text-6xl font-medium text-[rgb(33,127,241)] tracking-tight leading-9 xl:leading-14">
                Trusted by forward
                <br />
                thinking teams
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
