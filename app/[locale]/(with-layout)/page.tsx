import Link from "next/link";
import React from "react";
import Image from "next/image";
import MainContent from "../../_components/main-content";

type Props = { params: { locale: string } };

async function page({ params }: Props) {
  const { locale } = await params;
  return <MainContent pageType="site" locale={locale} />;
}

export default page;
