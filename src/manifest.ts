import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MetaLogic Software Pvt. Ltd.",
    short_name: "MetaLogic",
    description:
      "Discover how Metalogic Software Private Limited, based in Lalitpur, empowers businesses with cutting-edge web and mobile app solutions. From innovative technologies to personalized development, partner with us for excellence in software tailored to your unique needs.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
      },
      {
        src: "/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
