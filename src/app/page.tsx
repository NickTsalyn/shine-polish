import localFont from "next/font/local";

import Hero from "@/components/hero";
import SectionEstimate from "@/components/SectionEstimate";
import BeforeAfter from "@/components/BeforeAfter";
import dataSlider from "@/data/slider-data.json";
import { Reviews } from "@/components/Reviews";
import ServiceAreas from "@/components/ServiceAreas";
import SectionJustAsk from "@/components/JustAskSection";
import LastSectionHome from "@/components/LastSectionHome";

const kaufmann = localFont({ src: "../../public/fonts/kaufmann-bt.ttf" });

export default function Home() {
  return (
    <>
      <Hero/>
      <SectionEstimate />
      <BeforeAfter data={dataSlider} />
      <Reviews />
      <ServiceAreas />
      <SectionJustAsk />
      <LastSectionHome />
    </>
  );
}
