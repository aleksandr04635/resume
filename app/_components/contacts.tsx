import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Props = {};

export function Contacts({}: Props) {
  const t = useTranslations("Contacts");

  return (
    <div className="mt-0 flex flex-col gap-3 sm:flex-row">
      <div className="flex flex-row justify-center">
        <div className="relative flex h-[255px] w-[200px] flex-row justify-center">
          <a href="/my-photo.jpg" download="my-photo.jpg">
            <Image
              fill
              className="object-cover"
              alt="Image"
              src={"/my-photo.jpg"}
            />
          </a>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <h1 className="mb-2 text-xl font-semibold">{t("name")}</h1>
        <h3 className="mb-2 text-base font-semibold">{t("title")}</h3>

        <table className="-ml-2 w-[calc(100%+1rem)] border-separate border-spacing-x-2 border-spacing-y-0 text-sm [&_td]:align-top">
          <tbody>
            <tr>
              <td>{t("work-type-n")}</td>
              <td>{t("work-type-w")}</td>
            </tr>
            <tr>
              <td>{t("location-n")}</td>
              <td>{t("location-w")}</td>
            </tr>
            <tr>
              <td>{t("phone")}</td>
              <td>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-stand"
                  href={`tel:+38 097 835 91 43`}
                >
                  +38 097 835 91 43 (Telegram, Viber)
                </Link>
              </td>
            </tr>
            <tr>
              <td>E-mail:</td>
              <td>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-stand"
                  href={`mailto:oleksandr.liashchenko.1988@gmail.com`}
                >
                  oleksandr.liashchenko.1988@gmail.com
                </Link>
              </td>
            </tr>
            <tr>
              <td>Telegram:</td>
              <td>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-stand"
                  href={`https://t.me/OleksandrLiashchenko`}
                >
                  <div>@OleksandrLiashchenko </div>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand text-sm"
          href={`https://oleksandrs-resume.vercel.app`}
        >
          {t("site")}
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand text-sm"
          href={`https://www.linkedin.com/in/oleksandr-liashchenko-9b4740305`}
        >
          LinkedIn
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand text-sm"
          href={`https://github.com/aleksandr04635`}
        >
          Github
        </Link>
      </div>
    </div>
  );
}
