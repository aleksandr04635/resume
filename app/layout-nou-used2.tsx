import { NextIntlClientProvider } from "next-intl";
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
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`w-screen overflow-x-hidden ${inter.className} `}>
        {children}
      </body>
    </html>
  );
}
