import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NauzyxLabs — Enterprise Identity Platform",
  description:
    "SSO, OAuth2, MFA, RBAC, and user management — all in one platform. Ship secure authentication without the complexity.",
  keywords: [
    "SSO",
    "OAuth2",
    "MFA",
    "RBAC",
    "Identity Platform",
    "Authentication",
    "User Management",
    "Enterprise SSO",
    "SaaS",
  ],
  openGraph: {
    title: "NauzyxLabs — Enterprise Identity Platform",
    description:
      "SSO, OAuth2, MFA, RBAC, and user management — all in one platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sora.variable}>
      <body className="antialiased font-sora">{children}</body>
    </html>
  );
}
