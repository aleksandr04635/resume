import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Props = {};

export function Contacts({}: Props) {
  const t = useTranslations("Contacts");

  return (
    <div className="mt-0 flex flex-col gap-6 sm:flex-row">
      <div className="flex flex-row justify-center">
        <div className="relative flex h-[220px] w-[220px] flex-row justify-center">
          <a href="/my-photo.jpg" download="my-photo.jpg">
            <Image
              fill
              className="object-cover"
              alt="Image"
              src={"/my-photo.jpg"}
            />
          </a>
        </div>{" "}
      </div>
      <div className="flex w-full flex-col">
        <h1 className="mb-2 text-xl font-semibold">{t("name")}</h1>
        <h3 className="mb-2 text-base font-semibold">{t("title")}</h3>
        <div className="mb-2 flex w-full flex-col text-sm">
          <div>{t("location")}</div>
          <div className="ml-0">{t("work-type")}</div>
        </div>

        <div className="flex w-full justify-between text-sm">
          <div>{t("phone")}</div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className=""
            href={`tel:+38 097 835 91 43`}
          >
            <h3 className="link-stand text-sm">
              <div>+38 097 835 91 43 (Telegram, Viber)</div>
            </h3>
          </Link>
        </div>
        <div className="flex w-full justify-between text-sm">
          <div>E-mail:</div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className=""
            href={`mailto:oleksandr.liashchenko.1988@gmail.com`}
          >
            <h3 className="link-stand text-center text-sm">
              <div>oleksandr.liashchenko.1988@gmail.com</div>
            </h3>
          </Link>
        </div>
        <div className="flex w-full justify-between text-sm">
          <div>Telegram:</div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className=""
            href={`https://t.me/OleksandrLiashcheko`}
          >
            <h3 className="link-stand text-center text-sm">
              <div>@OleksandrLiashcheko </div>
            </h3>
          </Link>
        </div>
        <div className="flex w-full justify-between text-sm">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className=""
            href={`https://www.linkedin.com/in/oleksandr-liashchenko-9b4740305`}
          >
            <h3 className="link-stand text-center text-sm">
              <div>LinkedIn</div>
            </h3>
          </Link>
        </div>

        <div className="flex w-full justify-between text-sm">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className=""
            href={`https://github.com/aleksandr04635`}
          >
            <h3 className="link-stand text-center text-sm">
              <div>Github</div>
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
