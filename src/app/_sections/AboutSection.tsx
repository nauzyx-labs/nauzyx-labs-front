"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Key,
  Users,
  Zap,
  Lock,
  Globe,
} from "lucide-react";

const FEATURES = [
  {
    icon: Shield,
    title: "Enterprise SSO",
    description:
      "SAML, OIDC, and social login — unified under a single API. Connect Okta, Azure AD, Google, GitHub, and more.",
  },
  {
    icon: Key,
    title: "OAuth 2.0 + PKCE",
    description:
      "Full RFC 6749 compliance with authorization code, client credentials, and refresh token flows.",
  },
  {
    icon: Lock,
    title: "Multi-Factor Auth",
    description:
      "TOTP, SMS, and email verification. Recovery codes for account safety.",
  },
  {
    icon: Users,
    title: "User Management",
    description:
      "Profiles, metadata, email verification, password resets, and account linking — all handled.",
  },
  {
    icon: Zap,
    title: "RBAC & Permissions",
    description:
      "Define roles, assign permissions, check access in real-time with sub-millisecond latency.",
  },
  {
    icon: Globe,
    title: "Organizations",
    description:
      "Multi-tenant organizations with member management, invitations, and per-org roles.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
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
                Why NauzyxLabs
              </div>
              <h2 className="text-4xl xl:text-6xl font-medium text-[rgb(33,127,241)] tracking-tight leading-9 xl:leading-14 mb-4">
                Everything you need
                <br />
                to authenticate users
              </h2>
              <p className="text-gray-500 max-w-sm text-base sm:text-lg">
                One platform for SSO, OAuth, MFA, RBAC, and user management. Stop
                stitching together auth libraries.
              </p>
            </motion.div>
          </div>

          {/* Right: cards grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-6 rounded-[26px] bg-[#f3f6fb] hover:scale-[1.02] transition-transform"
                >
                  <div
                    className="w-10 h-10 rounded-[6px] flex items-center justify-center mb-4"
                    style={{
                      background:
                        "linear-gradient(180deg, rgb(33,127,241) 0%, rgb(31,43,56) 100%)",
                      boxShadow: "rgba(33,127,241,0.2) 0px 2px 8px 0px",
                    }}
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1f2b38] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
