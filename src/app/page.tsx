import localFont from "next/font/local";
import { Reviews } from "@/components/Reviews";
import LastSectionHome from "@/components/LastSectionHome";
import SectionEstimate from "@/components/SectionEstimate";
import ServiceAreas from "@/components/ServiceAreas";
import SectionJustAsk from "@/components/JustAskSection";

const kaufmann = localFont({ src: "../../public/fonts/kaufmann-bt.ttf" });

export default function Home() {
  return (
    <>
      <SectionEstimate />
      <Reviews />

      <ServiceAreas />
      <SectionJustAsk />
      <LastSectionHome />
    </>
  );
}
