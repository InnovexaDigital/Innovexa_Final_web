import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "INNOVEXA DIGITAL",
    short_name: "Innovexa",
    description:
      "Innovexa Digital transforms businesses through websites, mobile apps, AI automation, digital marketing, and creative content solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#040712",
    theme_color: "#02040a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
    ]
  };
}
