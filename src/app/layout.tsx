import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import ChatbotWidget from "@/components/ChatbotWidget";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "KKN Bangka Bandhawa",
  description: "Website Resmi KKN-PPM UGM Bangka Bandhawa 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          jakarta.variable
        )}
      >
        <LoadingScreen />
        <Navbar />
        {children}
        <ChatbotWidget />
        <Footer />
      </body>
    </html>
  );
}
