import localFont from "next/font/local";

const kaufmann = localFont({ src: "../../public/fonts/kaufmann-bt.ttf" });
import dataSlider from "@/data/slider-data.json";

import BeforeAfter from "@/components/BeforeAfter";
import { Reviews } from "@/components/Reviews";
import LastSectionHome from "@/components/LastSectionHome";
import ServiceAreas from "@/components/ServiceAreas";
import SectionJustAsk from "@/components/JustAskSection";

export default function Home() {
  return (
    <>
      <BeforeAfter data={dataSlider} />
      <Reviews />
      <ServiceAreas />
      <SectionJustAsk />
      <LastSectionHome />
    </>
  );
}
