import type { MetadataRoute } from "next";

const siteUrl = "https://auranzapk.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/blog", "/about", "/services", "/contact", "/privacy-policy", "/terms"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
