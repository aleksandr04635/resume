"use client";
//import { Footer } from "flowbite-react";
import Link from "next/link";
//import { Link, useLocation } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
//import { useSelector, useDispatch } from "react-redux";

export const Footer = () => {
  //const { pageSize } = useSelector((state) => state.pageSize);
  //const location = useLocation();
  //console.log(" window.location.origin: ", window.location.origin);
  //dark:bg-transparent

  //absolute bottom-0  bg-secondary
  return (
    <div
      className="w-full  h-16 pr-[20px]  rounded-none border-t dark:border-none absolute bottom-0
      border-layout-border bg-white dark:bg-dark-additional-bg/40 flex items-center justify-between "
    >
      <Link
        className="link-stand mx-10  "
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
