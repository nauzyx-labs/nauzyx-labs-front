import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Image src="/logo_colored.svg" alt="Logo" width={32} height={32} />
          <span className="font-semibold text-xl tracking-tight text-gray-900">
            NauzyxLabs
          </span>
        </div>

        <nav className="flex items-center gap-6 sm:gap-8 text-sm font-medium text-gray-500">
          <Link href="#" className="hover:text-gray-900 transition-colors">
            Case Studies
          </Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">
            Features
          </Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="text-xs text-gray-400 font-medium">
          © {new Date().getFullYear()} NauzyxLabs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
