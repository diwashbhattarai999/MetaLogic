import { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "MetaLogic Software Pvt. Ltd.",
  metadataBase: new URL("http://localhost:3000"), //TODO: Replace "example.com" with your actual website URL
  icons: [
    { rel: "icon", url: "/favicon-32x32.png" },
    { rel: "apple-touch-icon", url: "/apple-icon.png" },
  ],

  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Diwash Bhattarai", url: "https://diwashb.com.np" }],
  description:
    "Discover how Metalogic Software Private Limited, based in Lalitpur, empowers businesses with cutting-edge web and mobile app solutions. From innovative technologies to personalized development, partner with us for excellence in software tailored to your unique needs.",
  openGraph: {
    title: "MetaLogic Software Pvt. Ltd.",
    description:
      "Discover how Metalogic Software Private Limited, based in Lalitpur, empowers businesses with cutting-edge web and mobile app solutions. From innovative technologies to personalized development, partner with us for excellence in software tailored to your unique needs.",
    images: [
      {
        url: "/favicon-32x32.png",
        alt: "MetaLogic",
        width: 1200,
        height: 630,
      },
    ],
  },
  keywords: [
    "metalogic",
    "Metalogic Software Pvt Ltd",
    "Metalogic Software",
    "Lalitpur",
    "Saptakhel",
    "Metalogic Aashis Thapa",
    "innovative software solutions",
    "web development",
    "mobile app development",
    "technology company",
    "Kathmandu",
    "Nepal",
  ],
} as const;
