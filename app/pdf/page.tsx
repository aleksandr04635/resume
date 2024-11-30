import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Content } from "next/font/google";
import MainContent from "../_components/main-content";

type Props = {};

function page({}: Props) {
  return <MainContent pageType="pdf" />;
}

export default page;
