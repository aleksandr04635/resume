"use client";

//import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

//import { useRouter, usePathname } from "@/navigation";
import { cn } from "@/lib/utils";
import { GermanyFlag, GreatBritainFlag, UkraineFlag } from "@/lib/flags";
import LanguageSwitchComp from "./LanguageSwitchComp";

export const LanguageSwitch = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const path = pathname.split("/").slice(2).join("/");

  const handleLanguageChange = (newLocale: string) => {
    //console.log("locale from LanguageSwitch:", locale);
    //console.log("newLocale from LanguageSwitch:", newLocale);
    if (newLocale !== locale) {
      //console.log("path from LanguageSwitch:", path);
      router.push(`/${newLocale}/${path}`);
      router.refresh();
      //for import { useRouter, usePathname } from "@/navigation";
      //router.push(pathname, { locale: newLocale });
    }
  };
  //console.log("locale from LanguageSwitch:", locale);

  return (
    <div className="flex flex-row items-center justify-between gap-1">
      <LanguageSwitchComp
        availableLocales={["de", "en", "uk"]} // Ваші componentsLokale
        currentLocale={locale} // Ваш current Lokale (наприклад, з параметрів або hook)
        onLanguageChange={handleLanguageChange} // Функція зміни мови
      />

      {/*  <UkraineFlag width={24} height={24} className="rounded-sm" /> */}
    </div>
  );
};
