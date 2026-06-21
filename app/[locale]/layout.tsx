import { NextIntlClientProvider } from "next-intl";

import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

import { Inter } from "next/font/google";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata = {
  title: "My Resume",
  description: "Oleksandr Liashchenko - Full-stack web-developer",
}; */

/*   title: "My CV - Oleksandr Liashchenko",
  description:
    "A CV created with Next.js 14 by Oleksandr Liashchenko - Full-stack web-developer", */

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  const messages: any = await getMessages({ locale });
  const title = messages.Header.title;
  const description = messages.Header.description;

  return {
    title,
    description,
    icons: {
      //icon: "/favicon.ico",
      icon: "/android-chrome-512x512.png",
      shortcut: "/favicon-32x32.png",
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Must be a Promise in Next 15!
}) {
  const { locale } = await params;
  // Validate that the incoming route matches your allowed locales
  /*  if (!routing.locales.includes(locale as any)) {
    notFound();
  } */

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`w-screen overflow-x-hidden ${inter.className} `}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
