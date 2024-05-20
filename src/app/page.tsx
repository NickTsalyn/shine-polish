import localFont from "next/font/local";

const kaufmann = localFont({ src: "../../public/fonts/kaufmann-bt.ttf" });

import { Reviews } from "@/components/Reviews";
import LastSectionHome from "@/components/LastSectionHome";
import ServiceAreas from "@/components/ServiceAreas";
import SectionJustAsk from "@/components/JustAskSection";
import React from "react";

export default function Home() {
  return (
    <>
      <Reviews />

      <ServiceAreas />
      <SectionJustAsk />
      <SectionJustAsk />
      <LastSectionHome />
    </>
  );
}
