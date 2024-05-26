import localFont from "next/font/local";

import Hero from "@/components/hero";
import SectionEstimate from "@/components/SectionEstimate";
import BeforeAfter from "@/components/BeforeAfter";
import dataSlider from "@/data/slider-data.json";
import { Reviews } from "@/components/Reviews";
import ServiceAreas from "@/components/ServiceAreas";
import SectionJustAsk from "@/components/JustAskSection";
import React from "react";
import WorkWithUs from "@/components/WorkWithUs";
import LastSectionHome from "@/components/LastSectionHome";


export default function Home() {
  return (
    <>
      <Hero/>
      <SectionEstimate />
      <BeforeAfter data={dataSlider} />
      <Reviews />
      <ServiceAreas />
      <SectionJustAsk />
      <WorkWithUs/>
      <LastSectionHome />

    </>
  );
}
