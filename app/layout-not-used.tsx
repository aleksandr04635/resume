import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My CV - Oleksandr Liashchenko",
  description:
    "A CV created with Next.js 14 by Oleksandr Liashchenko - Full-stack web-developer",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //h-fit justify-stretch from-sky-200 to-blue-600 gap-y-3 items-center
  //className="w-screen overflow-x-hidden "
  return (
    <html lang="en">
      <body className="w-screen overflow-x-hidden ">
        <div className={` ${inter.className}`}>
          <div className=" ">{children}</div>
        </div>
      </body>
    </html>
  );
}
