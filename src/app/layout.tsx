import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MemoTag - AI Driven Wearables for Proactive Caregiving",
  description:
    "MemoTag empowers caregivers with real-time insights, safety alerts, and cognitive health tracking for loved ones with dementia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <ThemeToggle />
        {children}
        <Footer />
      </body>
    </html>
  );
}
