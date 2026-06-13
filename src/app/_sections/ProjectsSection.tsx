"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Global FinTech Platform",
    category: "Financial Services",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    year: "2023",
  },
  {
    title: "AI Health Assistant",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
  },
  {
    title: "Sustainable Supply Chain",
    category: "Logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    year: "2023",
  },
  {
    title: "Smart City Infrastructure",
    category: "Urban Planning",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Z-pattern: title left, cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left: title area */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex mb-6 items-center px-6 py-2.5 rounded-full border border-[rgb(33,127,241)] text-[rgb(33,127,241)] text-sm font-semibold">
                Projects
              </div>
              <h2 className="text-4xl xl:text-6xl font-medium text-[rgb(33,127,241)] tracking-tight leading-9 xl:leading-14 mb-4">
                Our Recent Work
              </h2>
              <p className="text-gray-500 max-w-sm mb-6">
                Discover how we&apos;ve helped forward-thinking companies
                transform their ideas into reality through innovative digital
                solutions.
              </p>
              <button className="border border-[rgb(33,127,241)] text-[rgb(33,127,241)] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[rgb(33,127,241)] hover:text-white transition-colors">
                View All Projects
              </button>
            </motion.div>
          </div>

          {/* Right: project cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PROJECTS.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group cursor-pointer bg-[#f3f6fb] rounded-[26px] overflow-hidden hover:scale-[1.01] transition-transform"
                >
                  <div className="relative overflow-hidden aspect-[4/3] mx-3 mt-3 rounded-4xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="p-5 flex justify-between items-start">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#1f2b38] mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{project.category}</p>
                    </div>
                    <span className="text-gray-400 text-sm font-medium">
                      {project.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
