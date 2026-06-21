import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "uk", "de"],
  defaultLocale: "en",
});

export const config = {
  matcher: [
    "/",
    "/(uk|en)/:path*",
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    //old - worked
    //  "/((?!_next|_vercel|.*\\..*).*)",
    //new
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};

/* import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing"; // Adjust path if it's in src/

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(uk|en)/:path*",
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
}; */
