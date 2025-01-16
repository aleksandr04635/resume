"use client";

import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { useTranslations } from "next-intl";

export const Footer = ({ locale }: { locale: string }) => {
  const t = useTranslations("Contacts");
  //absolute bottom-0  bg-secondary
  return (
    <div className="absolute bottom-0 flex h-16 w-full items-center justify-between rounded-none border-t border-layout-border bg-white pr-[20px] dark:border-none dark:bg-dark-additional-bg/40">
      <Link
        className="link-stand mx-10"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        &copy; {new Date().getFullYear()} {t("name")}
      </Link>

      <Link
        className="link-stand mx-10"
        target="_blank"
        rel="noopener noreferrer"
        href={"https://github.com/aleksandr04635"}
      >
        <BsGithub className="h-6 w-6" />
      </Link>
    </div>
  );
};
