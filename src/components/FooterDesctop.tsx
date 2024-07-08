'use client';

import Link from 'next/link';
import FooterMainNav from './Navigation/FooterNav';
import {FOOTER_NAV} from '@/global/navigation';
// import { FooterImg } from "@/global/images";

export default function FooterDesctop() {
 return (
  <footer className="hidden backdrop-opacity-10 backdrop-invert bg-white/60 w-full h-[100px] lg:flex lg:flex-col lg:justify-end py-4 absolute bottom-0 z-20 right-0">
   <div className="lg:w-[1000px] xl:w-[1200px]  ml-auto mr-auto">
    <FooterMainNav links={FOOTER_NAV} />
   </div>
   <div className="flex flex-col justify-center items-center">
    <div className=" w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-main to-transparent mb-2 mt-2"></div>
    <p className=" text-white lg:text-main text-[8px] md:text-[10px] lg:text-[14px] font-light">
     All materials on this website are protected by Copyright ©2024
     <span className="">
      <Link href="/"> Lobsters Co.</Link>
     </span>
    </p>
   </div>
  </footer>
 );
}
