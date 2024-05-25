import { ThemeProvider } from "../_components/theme-provider";
import { Header } from "../_components/header";
import { Footer } from "../_components/footer";

//import StoreProvider from "./_components/store-provider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //h-fit justify-stretch from-sky-200 to-blue-600 gap-y-3 items-center
  //className="w-screen overflow-x-hidden "
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div
        className="  relative w-full flex flex-col    min-h-screen bg-white
     bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
      dark:from-[#065179] dark:to-[#0e1425]"
      >
        <Header />
        <div className=" mb-[63px] pr-[20px]">{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
