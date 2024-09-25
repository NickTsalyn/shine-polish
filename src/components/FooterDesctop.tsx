"use client";

import Link from "next/link";
import FooterMainNav from "./Navigation/FooterNav";
import {FOOTER_NAV} from "@/data/navigation-links";

export default function FooterDesctop() {
 return (
  <footer className="hidden backdrop-opacity-10 backdrop-invert bg-black/70 lg:bg-black/80 w-full h-[100px] lg:flex lg:flex-col lg:justify-end py-4 absolute bottom-0 z-20 right-0 lg:pl-[200px] xl:pl-[220px] ">
   <div className=" lg:w-[1000px] xl:w-[1200px]  mx-auto">
    <FooterMainNav links={FOOTER_NAV} />
   </div>
   <div className="flex flex-col justify-center items-center">
    <div className=" w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-tertial to-transparent mb-2 mt-2"></div>
    <p className=" text-white lg:text-secondary text-[8px] md:text-[10px] lg:text-[14px] font-light">
     All materials on this website are protected by Copyright ©2024
     <span className="">
      <Link href="/"> Lobsters Co.</Link>
     </span>
    </p>
   </div>
  </footer>
 );
}
