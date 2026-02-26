import Logo from "@/components/Logo";

const TopNavigation = ({ navDark }: { navDark: boolean }) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-5 transition-colors duration-300 ${
        navDark ? "text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center gap-1.5 sm:gap-2">
        <Logo className="w-6 sm:w-8 h-auto" />
        <span className="font-bold text-base sm:text-lg tracking-tight">
          nauzyxlabs
        </span>
      </div>

      <div className="hidden sm:flex items-center gap-6">
        <button
          className={`text-sm font-medium transition-colors ${
            navDark
              ? "text-gray-900 hover:text-gray-700"
              : "text-white hover:text-white/80"
          }`}
        >
          Home
        </button>
        <button
          className={`text-sm font-medium transition-colors ${
            navDark
              ? "text-gray-900 hover:text-gray-700"
              : "text-white hover:text-white/80"
          }`}
        >
          Services
        </button>
        <button
          className={`text-sm font-medium transition-colors ${
            navDark
              ? "text-gray-900 hover:text-gray-700"
              : "text-white hover:text-white/80"
          }`}
        >
          About
        </button>
        <button
          className={`text-sm font-medium transition-colors ${
            navDark
              ? "text-gray-900 hover:text-gray-700"
              : "text-white hover:text-white/80"
          }`}
        >
          Contact
        </button>
      </div>

      <button
        className={`border text-xs sm:text-sm font-semibold px-3 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all ${
          navDark
            ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
            : "border-white text-white hover:bg-white/10"
        }`}
      >
        Get started
      </button>
    </nav>
  );
};

export default TopNavigation;
