import localFont from "next/font/local";

const kaufmann = localFont({ src: "../../public/fonts/kaufmann-bt.ttf" });

import { Reviews } from "@/components/Reviews";
import LastSectionHome from "@/components/LastSectionHome";
import ServiceAreas from "@/components/ServiceAreas";
import SectionJustAsk from "@/components/JustAskSection";
import CleaningProcesses from "@/components/Menu/CleningProcesses";
import CleaningServices from "@/components/Menu/CleaningServises";

export default function Home() {
  return (
    <>
      <Reviews />
      <ServiceAreas />
      <SectionJustAsk />
      <CleaningProcesses />
      <CleaningServices />
      <LastSectionHome />
    </>
  );
}
