import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import AuthProvider from "@/utils/SessionProvider";
import { getServerSession } from "next-auth";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Shine&Polish",
  description: "Cleaning service Atlanta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = getServerSession();
  return (
    <html lang="en">
      <body className={lato.className}>
        <AuthProvider session={session}>
        <Header />
        <Sidebar />
        <main className="lg:ml-[200px] xl:ml-[244px]">{children}</main>
        <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
