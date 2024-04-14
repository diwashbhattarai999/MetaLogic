import type { Metadata } from "next";
import { DM_Sans, Exo_2, PT_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

import { siteConfig } from "@/configs";

import "./globals.css";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dm_sans",
});

const pt_sans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt_sans",
});

const exo_2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-exo_2",
});

export const metadata: Metadata = siteConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background font-dm",
          dm_sans.variable,
          pt_sans.variable,
          exo_2.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
