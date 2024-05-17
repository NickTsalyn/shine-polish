import localFont from "next/font/local";

const kaufmann = localFont({ src: "../../public/fonts/kaufmann-bt.ttf" });

import { Reviews } from "@/components/Reviews";
import LastSectionHome from "@/components/LastSectionHome";
import SectionJustAsk from "@/components/JustAskSection";

export default function Home() {
  return (
    <>
      <Reviews />
      <SectionJustAsk />
      <LastSectionHome />
    </>
  );
}
