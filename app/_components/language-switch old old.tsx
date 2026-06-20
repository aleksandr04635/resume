/* "use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
//import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

import { useRouter, usePathname } from "@/navigation";

export const LanguageSwitch = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    //router.push(`/${newLocale}/${path}`);

    router.push(pathname, { locale: newLocale });
  };
  //console.log("locale from LanguageSwitch:", locale);

  return (
    <div className="flex justify-between">
      <select
        value={locale}
        onChange={handleLanguageChange}
        className="rounded-md bg-transparent px-4 py-2 hover:outline-none focus:outline-none"
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
    </div>
  );
};
 */
