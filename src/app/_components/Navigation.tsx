import Logo from "@/components/Logo";

const Navigation = ({ showPill }: { showPill?: boolean }) => {
  return (
    <nav
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 sm:gap-8 px-4 sm:px-6 py-3 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full border border-gray-200 transition-all duration-500 ${
        showPill
          ? "opacity-100 translate-y-0"
          : "opacity-0 pointer-events-none translate-y-8"
      } text-gray-900`}
    >
      <div className="flex items-center gap-1.5 sm:gap-2">
        <Logo className="w-5 sm:w-6 h-auto" />
      </div>

      <div className="hidden sm:flex items-center gap-5">
        <button className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
          Home
        </button>
        <button className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
          Services
        </button>
        <button className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
          About
        </button>
        <button className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
          Contact
        </button>
      </div>

      <button className="bg-gray-900 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap">
        Get started
      </button>
    </nav>
  );
};

export default Navigation;
