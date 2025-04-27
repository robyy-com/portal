import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.robyy.com/product/dot-key-vitamin-c-e-super-bright-gel-face-wash-100-ml",
      lastModified: "2025-03-02",
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://www.robyy.com/product/maybelline-baby-lips-color-berry-crush-spf11-4-ml",
      lastModified: "2025-02-02",
      changeFrequency: "monthly",
      priority: 2.0,
    },
    {
      url: "https://www.robyy.com/product/maybelline-baby-lips-color-spf11-lip-balm-pink-lolita-4-ml",
      lastModified: "2025-03-03",
      changeFrequency: "monthly",
      priority: 3.0,
    },
  ];
}
