"use client";
// import type {Metadata} from "next";
import { Lato } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { FormProvider } from "@/components/FormContext";
import FooterDesctop from "@/components/FooterDesctop";
import QueryProvider from "@/app/_tansctackprovider";
import { Suspense } from "react";
import Loading from "./loading";
import { usePathname } from "next/navigation";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

// export const metadata: Metadata = {
//  title: "Shine&Polish",
//  description: "Cleaning service Atlanta",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //  const router = useRouter();
  const pathname = usePathname();
  const hideFooter =
    pathname === "/booking" ||
    pathname === "/booking/step_1" ||
    pathname === "/booking/1" ||
    pathname === "/booking/step_2" ||
    pathname === "/booking/2" ||
    pathname === "/booking/step_3" ||
    pathname === "/booking/3" ||
    pathname === "/booking/step_4" ||
    pathname === "/booking/4" ||
    pathname === "/booking/step_5" ||
    pathname === "/booking/5" ||
    pathname === "/booking/step_6" ||
    pathname === "/booking/6" ||
    pathname === "/success" ||
    pathname === "/sign-in-form" ||
    pathname === "/sign-up" ||
    pathname === "/not-found";
  return (
    <html lang="en">
      <body className={lato.className}>
        <QueryProvider>
          <FormProvider>
            <div className="relative h-full">
              <Header />
              <Sidebar />
              <Suspense fallback={<Loading />}>
                <main className="lg:ml-[200px] xl:ml-[244px]">{children}</main>
              </Suspense>
              <Footer />
              {!hideFooter && <FooterDesctop />}
            </div>
          </FormProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
