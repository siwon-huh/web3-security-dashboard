import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crypto Security Scoring",
  description:
    "Web3 audit firm tier list and project security scoring checklist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-50 text-neutral-900">
        <Navigation />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-neutral-200 py-8 text-center text-xs text-neutral-500">
          Tier list and weights are opinionated heuristics. Verify before
          relying on them.
        </footer>
      </body>
    </html>
  );
}
