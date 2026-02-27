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
    <section className="py-24 sm:py-32 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4">
              Our Recent Work
            </h2>
            <p className="text-gray-500 max-w-md">
              Discover how we&apos;ve helped forward-thinking companies
              transform their ideas into reality through innovative digital
              solutions.
            </p>
          </div>
          <button className="self-start md:self-end border border-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500">{project.category}</p>
                </div>
                <span className="text-gray-400 text-sm font-medium">
                  {project.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
