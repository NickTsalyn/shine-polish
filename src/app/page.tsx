import localFont from 'next/font/local'

const kaufmann = localFont({src: '../../public/fonts/kaufmann-bt.ttf'})


import BeforeAfter from "@/components/BeforeAfter";

export default function Home() {
  return <main>
    {/* <Footer/> */}
    <BeforeAfter/>
    {/* <p className={`${kaufmann.className} text-lg`}>Very pleased with the quality of service provided by the cleaning company. Our home is sparkling clean, and the staff was very professional and attentive to detail.</p> */}      {/* ЦЕ ДЛЯ ЖЕНІ ЗРАЗОК ЯК ПІДКЛЮЧИТИ КАСТОМНИЙ ШРИФТ*/}
  </main>;
}
