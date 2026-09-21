import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Quran Group",
    short_name: "Quran Group",
    description:
      "Learn the Quran, Tajweed, Fiqh, and Arabic with qualified teachers.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9f6f1",
    theme_color: "#12201a",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
