import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo_colored.svg"
                alt="Logo"
                width={32}
                height={32}
              />
              <span className="font-semibold text-xl tracking-tight text-gray-900">
                NauzyxLabs
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Enterprise identity platform. SSO, OAuth2, MFA, RBAC, and user
              management — all in one API.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">
                  {category}
                </h4>
                <nav className="flex flex-col gap-3">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 font-medium">
            &copy; {new Date().getFullYear()} NauzyxLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
