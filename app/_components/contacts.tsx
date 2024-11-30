import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {};

export function Contacts({}: Props) {
  return (
    <div className="mt-0 flex flex-row gap-6">
      <div className="relative h-[200px] w-[200px]">
        <a href="/my-photo.jpg" download="my-photo.jpg">
          <Image
            fill
            className="object-cover"
            alt="Image"
            src={"/my-photo.jpg"}
          />
        </a>
      </div>
      <div className="flex w-full flex-col">
        <h1 className="mb-2 text-xl font-semibold">Oleksandr Liashchenko</h1>
        <h3 className="mb-2 text-base font-semibold">
          Full Stack Web Developer
        </h3>
        <div className="mb-2 flex w-full flex-row text-sm">
          <div>Kyiv, Ukraine; </div>
          <div className="ml-4">Remote</div>
        </div>

        <div className="flex w-full justify-between text-sm">
          <div>Phone:</div>
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
