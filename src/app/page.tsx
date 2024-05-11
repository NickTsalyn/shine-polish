import localFont from 'next/font/local'
import React from "react";

const kaufmann = localFont({src: '../../public/fonts/kaufmann-bt.ttf'})


import { Reviews } from "@/components/Reviews";

export default function Home() {
  return <main>
    <Reviews/>
   <p className={`${kaufmann.className} text-lg`}>Very pleased with the quality of service provided by the cleaning company. Our home is sparkling clean, and the staff was very professional and attentive to detail.</p> 
   
  </main>;
}
