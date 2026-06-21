"use client";
import Link from "next/link";
import React, { Fragment } from "react";
import Image from "next/image";
//import { sideList } from "@/lib/data";
import { cn } from "@/lib/utils";
import { sideList } from "@/lib/side-data";
import { useTranslations } from "next-intl";

type Props = { pageType: "site" | "pdf"; locale: string };
type PropsC = { pageType: "site" | "pdf" };

function PSymbol({ pageType }: PropsC) {
  if (pageType == "site") {
    return (
      <span className="bg-gradient-to-bl from-yellow-200 via-yellow-500 to-yellow-800 bg-clip-text text-transparent">
        {"p"}
      </span>
    );
  } else {
    return <span className="text-yellow-500">{"p"}</span>;
  }
}
function TSymbol({ pageType }: PropsC) {
  if (pageType == "site") {
    return (
      <span className="bg-gradient-to-bl from-gray-200 via-gray-500 to-gray-800 bg-clip-text text-transparent">
        {"t"}
      </span>
    );
  } else {
    return <span className="text-gray-400">{"t"}</span>;
  }
}

export function SideList({ pageType, locale }: Props) {
  // console.log("locale from SideList:", locale);
  const t = useTranslations("Skills");

  /*   pageType === "site" ? "min-w-[290px]" : "min-w-[240px]", */
  return (
    <aside
      className={cn("pl-5 pr-3", pageType === "site" ? "min-w-[290px]" : "")}
    >
      <ul className={cn("", pageType === "site" ? "text-sm" : "text-sm")}>
        {sideList.map((item, i) => {
          let toWrite =
            locale == "uk" && item.textUA
              ? item.textUA
              : locale == "de" && item.textDE
                ? item.textDE
                : item.text;
          switch (item.type) {
            /*  only the introduction */
            case "intro":
              return (
                <Fragment key={i}>
                  <li key={i} className="mt-0 list-none p-0 pt-1 text-left">
                    <PSymbol pageType={pageType} /> {"- "}
                    {t("practical")}
                  </li>
                  <li
                    key={i + "intro2"}
                    className="mt-0 list-none p-0 pt-1 text-left"
                  >
                    <TSymbol pageType={pageType} /> {"- "}
                    {t("theoretical")}
                  </li>
                </Fragment>
              );
            case "h2":
              return (
                <li
                  key={i}
                  className="mb-0 mt-0 list-none p-0 text-left text-lg font-semibold"
                >
                  {toWrite}
                </li>
              );
            case "h3":
              return (
                <li
                  key={i}
                  className={cn(
                    "mb-0 mt-2 list-none p-0 text-left text-base font-semibold",
                    pageType === "site" ? "mt-3 text-lg" : "mt-1 text-base",
                  )}
                >
                  {toWrite}
                </li>
              );
            default:
              return (
                <li
                  key={i}
                  /*  className={cn(
                    "mt-0 px-0 text-left",
                    pageType === "site"
                      ? "list-image-[url(/li-for-light.svg)] pt-1 dark:list-image-[url(/li-for-dark.svg)]"
                      : "list-none pt-1",
                  )} */
                  className={cn(
                    "mt-0 list-image-[url(/li-for-light.svg)] px-0 text-left dark:list-image-[url(/li-for-dark.svg)]",
                    pageType === "site" ? "pt-1" : "pt-1",
                  )}
                >
                  <div className="flex flex-row justify-between gap-2">
                    <div className="">{toWrite}</div>

                    {/*  AI told to remove this */}
                    {/*    {item.knowledgeType == "p" ? (
                      <PSymbol pageType={pageType} />
                    ) : item.knowledgeType == "t" ? (
                      <TSymbol pageType={pageType} />
                    ) : null} */}
                  </div>
                </li>
              );
          }
        })}
      </ul>
    </aside>
  );
}
