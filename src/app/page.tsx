import Footer from "@/components/Footer";
import LastSectionHome from "@/components/LastSectionHome";
import localFont from "next/font/local";

const kaufmann = localFont({ src: "../../public/fonts/kaufmann-bt.ttf" });

export default function Home() {
  return (
    <main>
      <LastSectionHome />
      <Footer />
      {/* <p className={`${kaufmann.className} text-lg`}>Very pleased with the quality of service provided by the cleaning company. Our home is sparkling clean, and the staff was very professional and attentive to detail.</p> */}{" "}
      {/* ЦЕ ДЛЯ ЖЕНІ ЗРАЗОК ЯК ПІДКЛЮЧИТИ КАСТОМНИЙ ШРИФТ*/}
    </main>
  );
}
