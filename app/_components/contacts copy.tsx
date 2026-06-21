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
        <div className="relative flex h-[250px] w-[200px] flex-row justify-center">
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
          <div className="ml-0">{t("work-type")}</div>
          <div>{t("location")}</div>
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
          <div>{t("site")}</div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className=""
            href={`https://oleksandrs-resume.vercel.app `}
          >
            <h3 className="link-stand text-center text-sm">
              <div>oleksandrs-resume.vercel.app</div>
            </h3>
          </Link>
        </div>
        <div className="flex w-full justify-between text-sm">
          <div>Telegram:</div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className=""
            href={`https://t.me/OleksandrLiashchenko`}
          >
            <h3 className="link-stand text-center text-sm">
              <div>@OleksandrLiashchenko </div>
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
        <table className="w-full border-collapse border-none text-sm">
          <tbody>
            <tr>
              <td>Ячейка 1.1</td>
              <td>Ячейка 1.2</td>
            </tr>
            <tr>
              <td>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-stand"
                  href={`https://www.linkedin.com/in/oleksandr-liashchenko-9b4740305`}
                >
                  <div>LinkedIn</div>
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-stand"
                  href={`https://github.com/aleksandr04635`}
                >
                  Github
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
