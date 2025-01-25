//"use client";

import { Loader } from "@/components/ui/loader";

//bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-[#065179] dark:to-[#0e1425]
const Loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center pt-10 dark:bg-[radial-gradient(ellipse_at_top,_hsl(206,95%,20%)_0%,_hsl(224,45%,5%)_100%)]">
      <Loader />
    </div>
  );
};

export default Loading;
