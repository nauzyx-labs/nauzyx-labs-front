"use client";

import Logo from "@/components/Logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(href: string) {
  if (href === "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const Navigation = ({ showPill }: { showPill?: boolean }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop pill nav */}
      <nav
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden sm:flex items-center gap-4 md:gap-8 px-4 md:px-6 py-3 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full border border-gray-200 transition-all duration-500 ${
          showPill
            ? "opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none translate-y-8"
        } text-gray-900`}
      >
        <button
          onClick={() => scrollToSection("#home")}
          className="flex items-center gap-1.5 md:gap-2"
        >
          <Logo className="w-5 md:w-6 h-auto" />
        </button>

        <div className="flex items-center gap-4 md:gap-5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollToSection("#contact")}
          className="bg-gray-900 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap"
        >
          Get started
        </button>
      </nav>

      {/* Mobile pill nav */}
      <nav
        className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex sm:hidden items-center gap-3 px-4 py-2.5 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full border border-gray-200 transition-all duration-500 ${
          showPill
            ? "opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none translate-y-8"
        } text-gray-900`}
      >
        <button
          onClick={() => scrollToSection("#home")}
          className="flex items-center gap-2"
        >
          <Logo className="w-5 h-auto" />
        </button>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-gray-700 hover:text-black transition-colors p-1"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <button
          onClick={() => scrollToSection("#contact")}
          className="bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap"
        >
          Get started
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm sm:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 min-w-[200px]"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  scrollToSection(item.href);
                  setMobileOpen(false);
                }}
                className="block w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
