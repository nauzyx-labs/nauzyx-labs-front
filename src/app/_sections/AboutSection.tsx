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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex mb-6 items-center px-4 py-1.5 rounded-full border border-blue-200 text-blue-500 text-xs sm:text-sm font-semibold">
              Why NauzyxLabs
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 tracking-tight leading-[1.1] mb-4">
              Everything you need
              <br />
              to authenticate users
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-base sm:text-lg">
              One platform for SSO, OAuth, MFA, RBAC, and user management. Stop
              stitching together auth libraries.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 sm:p-8 rounded-2xl bg-gray-50/80 hover:bg-gray-100/80 transition-colors group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background:
                    "linear-gradient(180deg, rgb(33,127,241) 0%, rgb(31,43,56) 100%)",
                  boxShadow: "rgba(33,127,241,0.2) 0px 2px 8px 0px",
                }}
              >
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
