import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing"; // Make sure this path points to your i18n/routing.ts

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Ensure that a valid locale is used, falling back to your routing default ("uk")
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
