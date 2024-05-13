import localFont from "next/font/local";

const kaufmann = localFont({src: '../../public/fonts/kaufmann-bt.ttf'})
import dataSlider from "@/data/slider-data.json";

import { Reviews } from "@/components/Reviews";
import LastSectionHome from "@/components/LastSectionHome";

import BeforeAfter from "@/components/BeforeAfter";

export default function Home() {
  return (
    <main>
      <BeforeAfter data={dataSlider}/>
      <Reviews />
      <LastSectionHome/>
    </main>
  );
}
