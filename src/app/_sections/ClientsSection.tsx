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
];

const ClientsSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-white relative z-10 overflow-hidden rounded-[2.5rem] mt-[-2.5rem]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16 px-4">
          <div className="border border-blue-200 text-blue-500 rounded-full px-4 py-1.5 text-xs sm:text-sm mb-6 bg-white shrink-0 mx-auto">
            Clients
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium text-blue-500 tracking-tight leading-[1.1] max-w-2xl">
            Trusted by forward
            <br />
            thinking teams
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {CLIENTS.map((client, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              key={client.name}
              className="flex items-center justify-center gap-2 p-6 sm:p-8 bg-gray-50/80 rounded-2xl hover:bg-gray-100 transition-colors"
            >
              <client.icon
                className="text-gray-900 w-6 h-6 sm:w-8 sm:h-8"
                strokeWidth={2.5}
              />
              <span className="text-gray-900 font-semibold text-lg sm:text-xl tracking-tight">
                {client.name}
              </span>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 8 * 0.05 }}
            className="flex items-center justify-center gap-2 p-6 sm:p-8 bg-gray-50/80 rounded-2xl hover:bg-gray-100 transition-colors"
          >
            <Sparkles
              className="text-gray-900 w-6 h-6 sm:w-8 sm:h-8"
              strokeWidth={2.5}
            />
            <span className="text-gray-900 font-semibold text-lg sm:text-xl tracking-tight">
              Nietzsche
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 9 * 0.05 }}
            className="flex items-center justify-center gap-2 p-6 sm:p-8 bg-gray-50/80 rounded-2xl hover:bg-gray-100 transition-colors"
          >
            <Box
              className="text-gray-900 w-6 h-6 sm:w-8 sm:h-8"
              strokeWidth={2.5}
            />
            <span className="text-gray-900 font-semibold text-lg sm:text-xl tracking-tight">
              Lightbox
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
