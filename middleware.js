import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ua"],
  defaultLocale: "en",
});

export const config = {
  matcher: [
    "/",
    "/(ua|en)/:path*",
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
