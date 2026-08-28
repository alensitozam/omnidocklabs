import type {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://omnidocklabs.com";

  const locales = ["en", "es", "pt"];

  const routes = [
    "",
    "/snipdock",
    "/privacy",
    "/terms"
  ];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency:
        route === ""
          ? ("weekly" as const)
          : route === "/snipdock"
            ? ("weekly" as const)
            : ("monthly" as const),
      priority:
        route === ""
          ? 1
          : route === "/snipdock"
            ? 0.9
            : 0.4
    }))
  );
}