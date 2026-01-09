import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "KKN Bangka Bandhawa",
  description: "Website Resmi KKN-PPM UGM Bangka Bandhawa 2026",
  icons: {
    icon: "/logo/Logo KKN.png",
    shortcut: "/logo/Logo KKN.png",
    apple: "/logo/Logo KKN.png",
  },
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
