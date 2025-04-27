import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: [
          "/api/",
          "/_next/",
          "/static/",
          "/server/",
          "/_next/static/",
          " /favicon.ico",
        ],
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        disallow: ["/"],
      },
    ],
    sitemap: "https://www.robyy.com/sitemap.xml",
  };
}
