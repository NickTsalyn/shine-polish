"use client";
import Hero from "@/components/Home/Hero";
import SectionEstimate from "@/components/Home/SectionEstimate";
import BeforeAfter from "@/components/Home/BeforeAfter";
import dataSlider from "@/data/slider-data.json";
import {Reviews} from "@/components/Home/Reviews";
import ServiceAreas from "@/components/Home/ServiceAreas";
import SectionJustAsk from "@/components/Home/JustAskSection";
import React from "react";
import WorkWithUs from "@/components/Home/WorkWithUs";
import LastSectionHome from "@/components/Home/LastSectionHome";
import dataBackground from "@/data/background-data.json";
import dataHeroBackground from "@/data/background-hero.json";
import Arrow from "@/components/Home/Arrow";
import ArrowMobile from "@/components/Home/ArrrowMobile";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect, useState} from "react";

export default function Home() {
 const [hasScrolled, setHasScrolled] = useState(false);

 // eslint-disable-next-line react-hooks/exhaustive-deps
 const handleScroll = () => {
  if (!hasScrolled) {
   AOS.init({
    duration: 3000,
    once: true,
   });
   setHasScrolled(true);
  }
 };
 useEffect(() => {
  window.addEventListener("scroll", handleScroll);

  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, [hasScrolled, handleScroll]);

 return (
  <>
   <ArrowMobile />
   <Arrow />
   <Hero data={dataHeroBackground} />
   <SectionEstimate />
   <BeforeAfter data={dataSlider} />
   <Reviews />
   <ServiceAreas />
   <SectionJustAsk />
   <WorkWithUs />
   <LastSectionHome data={dataBackground} />
  </>
 );
}
