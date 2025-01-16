import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Content } from "next/font/google";
import MainContent from "../../_components/main-content";

type Props = { params: { locale: string } };

async function page({ params }: any /*  Props */) {
  const { locale } = await params;
  return <MainContent pageType="pdf" locale={locale} />;
}

export default page;
