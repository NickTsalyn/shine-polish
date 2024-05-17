import localFont from "next/font/local";

const kaufmann = localFont({ src: "../../public/fonts/kaufmann-bt.ttf" });

import { Reviews } from "@/components/Reviews";
import LastSectionHome from "@/components/LastSectionHome";
import ServiceAreas from "@/components/ServiceAreas";
import SectionJustAsk from "@/components/JustAskSection";

export default function Home() {
  return (
    <>
      <Reviews />
      <ServiceAreas />
      <SectionJustAsk />
      <LastSectionHome />
    </>
  );
}
