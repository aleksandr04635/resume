//"use client";

import { Loader } from "@/components/ui/loader";

const Loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] pt-10 dark:from-[#065179] dark:to-[#0e1425]">
      <Loader />
    </div>
  );
};

export default Loading;
