import { ThemeProvider } from "../../_components/theme-provider";
import { Header } from "../../_components/header";
import { Footer } from "../../_components/footer";

//import StoreProvider from "./_components/store-provider";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any; //{ locale: string };
}) {
  const { locale } = await params;
  //h-fit justify-stretch from-sky-200 to-blue-600 gap-y-3 items-center
  //className="w-screen overflow-x-hidden "
  //console.log("locale from RootLayout:", locale);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative flex min-h-screen w-full flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-[#065179] dark:to-[#0e1425]">
        <Header locale={locale} />
        <div className="mb-[63px] pr-[20px]">{children}</div>
        <Footer locale={locale} />
      </div>
    </ThemeProvider>
  );
}
