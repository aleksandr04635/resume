import { GermanyFlag, GreatBritainFlag, UkraineFlag } from "@/lib/flags";
import React from "react";
// Імпортуємо прапори, які ми створили раніше

// 1. Описуємо типи для пропсів (Props Interface)
interface LanguageSwitchProps {
  availableLocales: string[];
  currentLocale: string;
  onLanguageChange: (newLocale: string) => void;
}

// Функція-помічник для рендеру відповідного прапора (опціонально)
const renderFlag = (locale: string) => {
  switch (locale) {
    case "uk":
      return (
        <UkraineFlag width={24} height={16} /* className="rounded-sm" */ />
      );
    case "en":
      return (
        <GreatBritainFlag
          width={24}
          height={16} /* className="rounded-sm"  */
        />
      );
    case "de":
      return (
        <GermanyFlag width={24} height={16} /* className="rounded-sm"  */ />
      );
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
    <div className="flex gap-2 rounded-md bg-white p-2">
      {availableLocales.map((loc) => {
        const isActive = loc === currentLocale;

        return (
          <button
            key={loc}
            // Запускаємо батьківську функцію handleLanguageChange і передаємо туди код мови
            onClick={() => onLanguageChange(loc)}
            className={`flex items-center gap-2 rounded border px-3 py-1.5 text-sm font-medium transition-all ${
              isActive
                ? "border-blue-500 bg-blue-50 text-blue-600 shadow-sm"
                : "border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100"
            } `}
          >
            {/* Рендеримо прапор для цієї мови */}
            {renderFlag(loc)}

            {/* Текст (назва мови у верхньому регістрі, наприклад: UK, EN, DE) */}
            {/*  <span className="uppercase">{loc}</span> */}
          </button>
        );
      })}
    </div>
  );
}
