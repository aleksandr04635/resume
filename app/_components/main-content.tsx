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
        "mx-auto flex gap-5 px-1 py-4 text-justify",
        pageType === "site"
          ? "mb-16 mt-4 max-w-[1000px] flex-col-reverse lg:flex-row"
          : "mt-0 max-w-[1150px] flex-row",
      )}
    >
      <SideList pageType={pageType} locale={locale} />

      <div className="flex flex-col pl-2">
        <Contacts />
        <MainList pageType={pageType} locale={locale} />
      </div>
    </div>
  );
}

export default MainContent;
