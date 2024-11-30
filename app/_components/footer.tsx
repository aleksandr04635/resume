"use client";

import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

export const Footer = () => {
  //absolute bottom-0  bg-secondary
  return (
    <div className="absolute bottom-0 flex h-16 w-full items-center justify-between rounded-none border-t border-layout-border bg-white pr-[20px] dark:border-none dark:bg-dark-additional-bg/40">
      <Link
        className="link-stand mx-10"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        &copy; {new Date().getFullYear()} Oleksandr Liashchenko
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
