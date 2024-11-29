//"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeSwitch from "./theme-switch";
import MyButton from "@/components/ui/my-button";

export const Header = () => {
  //const pathname = usePathname();
  // const user = useCurrentUser();

  //rounded-xl bg-secondary  h-16
  return (
    <nav
      className=" bg-white dark:bg-dark-additional-bg/40  
    pl-1 sm:pl-4 py-1 sm:py-3  sm:pr-[35px] w-full h-fit shadow-sm border-layout-border border-b dark:border-none"
    >
      <div className="flex w-full flex-col">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-5 ">
          <div className="w-full flex flex-col sm:flex-row justify-between items-center md:w-1/2 gap-1 ">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className=""
              href={`https://oleksandrs-mern-blog.vercel.app`}
            >
              <MyButton className=" font-semibold">My&nbsp;Blog</MyButton>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className=""
              href={`https://oleksandrs-next-marketplace.vercel.app`}
            >
              <MyButton className=" font-semibold">
                My&nbsp;Marketplace
              </MyButton>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className=""
              href={`https://neurolide-cpa.vercel.app`}
            >
              <MyButton className=" font-semibold">My&nbsp;CPA</MyButton>
            </Link>
          </div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className=""
            href={`/pdf`}
          >
            <h3 className="link-stand text-center text-sm ">
              version for PDF creation
            </h3>
          </Link>
          <div className="w-fit flex justify-center sm:justify-end items-center gap-2  ">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
};
