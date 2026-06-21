import { GermanyFlag, GreatBritainFlag, UkraineFlag } from "@/lib/flags";
import React from "react";

interface LanguageSwitchProps {
  availableLocales: string[];
  currentLocale: string;
  onLanguageChange: (newLocale: string) => void;
}

// Функція-помічник для рендеру відповідного прапора (опціонально)
const renderFlag = (locale: string, isLocaleActive: boolean) => {
  /* var style = isLocaleActive ? "w-12 h-8" : "w-9 h-6"; */
  var style = isLocaleActive ? "w-9 h-6" : "w-6 h-4";
  switch (locale) {
    case "uk":
      return <UkraineFlag className={style} />;
    case "en":
      return <GreatBritainFlag className={style} />;
    case "de":
      return <GermanyFlag className={style} />;
    default:
      return null;
  }
};

export default function LanguageSwitchComp({
  availableLocales,
  currentLocale,
  onLanguageChange,
}: LanguageSwitchProps) {
  return (
    <div className="flex items-center gap-0">
      {availableLocales.map((loc) => {
        const isActive = loc === currentLocale;
        /*  w-8 */
        return (
          <div key={loc} className="flex w-[36px] items-center justify-center">
            <div
              onClick={() => onLanguageChange(loc)}
              className={` ${isActive ? "" : "cursor-pointer p-0.5 hover:bg-cyan-500 dark:hover:bg-blue-500"} `}
            >
              {renderFlag(loc, isActive)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
