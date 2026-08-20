import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "es", "pt"],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export const config = {
  matcher: ["/", "/(en|es|pt)/:path*"],
};