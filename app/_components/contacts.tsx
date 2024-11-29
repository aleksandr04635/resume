import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SideList } from "./sidebar";

type Props = {};

//max-w-[1050px]
export function Contacts({}: Props) {
  return (
    <div className=" flex flex-row gap-6 mt-0">
      <div className="relative w-[200px] h-[200px] ">
        <a href="/my-photo.jpg" download="my-photo.jpg">
          <Image
            fill
            className="object-cover"
            alt="Image"
            src={"/my-photo.jpg"}
          />
        </a>
      </div>
      <div className="flex flex-col w-full">
        <h1 className=" mb-2  text-xl font-semibold">Oleksandr Liashchenko</h1>
        <h3 className=" mb-2  text-base font-semibold">
          Full Stack Web Developer
        </h3>
        <div className=" mb-2 w-full text-sm flex flex-row">
          <div>Kyiv, Ukraine; </div>
          <div className=" ml-4">Remote</div>
        </div>

        <div className="w-full flex justify-between text-sm">
          <div>Phone:</div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className=""
            href={`tel:+38 097 835 91 43`}
          >
            <h3 className="link-stand  text-sm ">
              <div>+38 097 835 91 43 (Telegram, Viber)</div>
            </h3>
          </Link>
        </div>
        <div className="w-full flex justify-between text-sm">
          <div>E-mail:</div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className=""
            href={`mailto:oleksandr.liashchenko.1988@gmail.com`}
          >
            <h3 className="link-stand text-center text-sm ">
              <div>oleksandr.liashchenko.1988@gmail.com</div>
            </h3>
          </Link>
        </div>
        <div className="w-full flex justify-between text-sm">
          <div>Telegram:</div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className=""
            href={`https://t.me/OleksandrLiashcheko`}
          >
            <h3 className="link-stand text-center text-sm ">
              <div>@OleksandrLiashcheko </div>
            </h3>
          </Link>
        </div>
        <div className="w-full flex justify-between text-sm">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className=""
            href={`https://www.linkedin.com/in/oleksandr-liashchenko-9b4740305`}
          >
            <h3 className="link-stand text-center text-sm ">
              <div>LinkedIn</div>
            </h3>
          </Link>
        </div>

        <div className="w-full flex justify-between text-sm">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className=""
            href={`https://github.com/aleksandr04635`}
          >
            <h3 className="link-stand text-center text-sm ">
              <div>Github</div>
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
