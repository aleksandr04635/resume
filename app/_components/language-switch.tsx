"use client";

//import { useTranslations } from "next-intl";
//import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

//import { useRouter, usePathname } from "@/navigation";
import { cn } from "@/lib/utils";

export const LanguageSwitch = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    console.log("locale from LanguageSwitch:", locale);
    console.log("newLocale from LanguageSwitch:", newLocale);
    if (newLocale !== locale) {
      const path = pathname.split("/").slice(2).join("/");
      console.log("path from LanguageSwitch:", path);
      router.push(`/${newLocale}/${path}`);
      //for import { useRouter, usePathname } from "@/navigation";
      //router.push(pathname, { locale: newLocale });
    }
  };
  //console.log("locale from LanguageSwitch:", locale);
  const anyStyle = "w-[30px] text-center";
  const activeStyle = "font-semibold text-cyan-500 dark:text-blue-500";
  const passiveStyle =
    "cursor-pointer font-light text-blue-500 hover:text-cyan-500 dark:text-cyan-500 dark:hover:text-blue-500";

  return (
    <div className="flex flex-row items-center justify-between gap-1">
      <div
        onClick={() => handleLanguageChange("en")}
        className={cn(anyStyle, locale === "en" ? activeStyle : passiveStyle)}
      >
        EN
      </div>
      <div className="h-[18px] border-l border-cyan-500 dark:border-blue-500"></div>
      <div
        onClick={() => handleLanguageChange("ua")}
        className={cn(anyStyle, locale === "ua" ? activeStyle : passiveStyle)}
      >
        UA
      </div>
    </div>
  );
};
