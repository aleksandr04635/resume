import Link from "next/link";
import React from "react";
import Image from "next/image";
import MainContent from "../_components/main-content";

type Props = {};

export const metadata = {
  title: "My Resume",
  description: "Oleksandr Liashchenko - Full-stack web-developer",
};

function page({}: Props) {
  return <MainContent pageType="site" />;
}

export default page;
