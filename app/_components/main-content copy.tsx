import Link from "next/link";
import React from "react";
import { SideList } from "./sidebar";
import { Contacts } from "./contacts";
import { MainList } from "./main-list";
import { cn } from "@/lib/utils";

type Props = { pageType: "site" | "pdf"; locale: string };

function MainContent({ pageType, locale }: Props) {
  return (
    <div
      className={cn(
        "mx-auto flex gap-5 px-1 py-0 text-justify",
        pageType === "site"
          ? "mb-16 mt-4 max-w-[1000px] flex-col lg:flex-row-reverse"
          : "mt-0 max-w-[1000px] flex-row-reverse",
      )}
    >
      <div className="flex flex-col pl-2">
        <Contacts />
        <MainList pageType={pageType} locale={locale} />
      </div>
      <SideList pageType={pageType} locale={locale} />
    </div>
  );
}

export default MainContent;
