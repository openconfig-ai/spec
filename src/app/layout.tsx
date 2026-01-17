import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "OpenConfig.ai - Unified AI Agent Configuration",
    template: "%s | OpenConfig.ai",
  },
  description:
    "A unified specification for AI agent configurations. Define skills, agents, commands, and memory in a standardized .ai directory.",
  keywords: [
    "AI agents",
    "configuration",
    "specification",
    "skills",
    "commands",
    "LLM",
    "Claude",
    "GPT",
  ],
  authors: [{ name: "OpenConfig.ai" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "OpenConfig.ai",
    title: "OpenConfig.ai - Unified AI Agent Configuration",
    description:
      "A unified specification for AI agent configurations. Define skills, agents, commands, and memory in a standardized .ai directory.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenConfig.ai - Unified AI Agent Configuration",
    description:
      "A unified specification for AI agent configurations. Define skills, agents, commands, and memory in a standardized .ai directory.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
