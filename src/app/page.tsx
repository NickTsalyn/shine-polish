import localFont from "next/font/local";

const kaufmann = localFont({src: '../../public/fonts/kaufmann-bt.ttf'})
import dataSlider from "@/data/slider-data.json";

import BeforeAfter from "@/components/BeforeAfter";
import { Reviews } from "@/components/Reviews";
import LastSectionHome from "@/components/LastSectionHome";


export default function Home() {
  return (
    <main>
      <BeforeAfter data={dataSlider}/>
      <Reviews />
      <LastSectionHome/>
    </main>
  );
}
