import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "uk", "de"],
  defaultLocale: "en",
  localePrefix: {
    mode: "always",
  },
  pathnames: {
    "/": "/",
  },
});
