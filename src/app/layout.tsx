import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aylix | The AI Workforce for Enterprise",
  description:
    "Scale your operations with autonomous AI agents. Secure, compliant, and ready for enterprise.",
  keywords: ["AI Workforce", "Enterprise AI", "Automation", "SaaS"],
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
