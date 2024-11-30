//"use client";

import Link from "next/link";

import ThemeSwitch from "./theme-switch";
import MyButton from "@/components/ui/my-button";

export const Header = () => {
  //rounded-xl bg-secondary  h-16

  //https://drive.google.com/file/d/1P0Pl251KuAyKPUFfvLjcNccoMt1Cb5Rd/view?usp=sharing
  const fileId = "1P0Pl251KuAyKPUFfvLjcNccoMt1Cb5Rd"; // Replace with your actual file ID

  const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

  return (
    <nav className="h-fit w-full border-b border-layout-border bg-white py-1 pl-1 shadow-sm dark:border-none dark:bg-dark-additional-bg/40 sm:py-3 sm:pl-4 sm:pr-[35px]">
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-col items-center justify-between gap-1 sm:flex-row sm:gap-5">
          <div className="flex w-full flex-col flex-wrap items-center justify-between gap-1 sm:flex-row md:w-4/5">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className=""
              href={`https://churchonline.com.ua/`}
            >
              <MyButton className="font-semibold">Hillsong</MyButton>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className=""
              href={`https://emigral.uk/`}
            >
              <MyButton className="font-semibold">Emigral</MyButton>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className=""
              href={`https://metagistics-admin-frontend-test.vercel.app/new-post/batches`}
            >
              <MyButton className="font-semibold">Metagistics</MyButton>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className=""
              href={`https://neurolide-cpa.vercel.app`}
            >
              <MyButton className="font-semibold">Neurolide</MyButton>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className=""
              href={`https://oleksandrs-next-marketplace.vercel.app`}
            >
              <MyButton className="font-semibold">My&nbsp;Marketplace</MyButton>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className=""
              href={`https://oleksandrs-mern-blog.vercel.app`}
            >
              <MyButton className="font-semibold">My&nbsp;Blog</MyButton>
            </Link>
          </div>
          {/* <Link
            target="_blank"
            rel="noopener noreferrer"
            className=""
            href={`/pdf`}
          >
            <h3 className="link-stand text-center text-sm">
              version for PDF creation
            </h3>
          </Link> */}
          <Link
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link-stand text-center text-sm"
          >
            Download PDF
          </Link>
          <div className="flex w-fit items-center justify-center gap-2 sm:justify-end">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
};
