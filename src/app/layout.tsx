import type { Metadata } from "next";
import {
  Bubblegum_Sans,
  DM_Sans,
  Exo_2,
  Noto_Sans,
  PT_Sans,
  Pixelify_Sans,
  Racing_Sans_One,
  Shantell_Sans,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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

// const noto_sans = Noto_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
//   variable: "--font-noto_sans",
// });

const noto_sans = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-noto_sans",
});

export const metadata: Metadata = {
  title: "MetaLogic Software Pvt. Ltd.",
  description:
    "Discover how Metalogic Software Private Limited, based in Lalitpur, empowers businesses with cutting-edge web and mobile app solutions. From innovative technologies to personalized development, partner with us for excellence in software tailored to your unique needs.",
};

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
          noto_sans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
