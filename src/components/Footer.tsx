"use client";

import Link from "next/link";

import FooterNavMobile from "./Navigation/FooterLinks";
import {FOOTER_MOBILE_LINKS, SOCIAL_MEDIA_LINKS} from "@/data/navigation-links";
import {FooterLogo} from "@/global/images";
import SocialMedia from "./Navigation/SocialMediaLinks";
import {FOOTER_NAV} from "../data/navigation-links";
import FooterMainNav from "./Navigation/FooterNav";

export default function Footer() {
 return (
  <footer className="lg:hidden  bg-main w-full h-auto px-4 pb-8">
   <div className="container grid  grid-cols-2 py-6 md:grid-cols-4 gap-5 mx-auto ">
    <div className="w-full h-[100px] lg:pr-px-[240px] xl:pr-px-[282px]  md:w-[80px] md:h-[70px] lg:w-[120px] lg:h-[90px] xl:w-[150px] xl:h-[130px]">
     <Link href={"#hero"}>
      <FooterLogo />
     </Link>
    </div>
    <div className="sm:col-span-1 mb-2 ">
     <FooterNavMobile links={FOOTER_MOBILE_LINKS} />
    </div>
    <div className="">
     <span className="mb-3 md:mb-4 text-[16px]  lg:text-[20px] text-white font-[300]">Follow us</span>
     <SocialMedia links={SOCIAL_MEDIA_LINKS} />

     <Link
      href="+14708003249"
      className="text-white text-[12px] md:text-[16px] lg:text-[20px] font-light"
     >
      Tel: 470-800-32-49
     </Link>
    </div>
    <div className=" sm:col-span-1 ">
     <FooterMainNav links={FOOTER_NAV} />
    </div>
   </div>
   <div className="flex flex-col justify-center items-center text-center w-[80%] md:w-[100%] ">
    <div className=" mx-auto h-[1px] bg-gradient-to-r from-main via-secondary to-main mb-1 md:mb-2 w-[280px] md:w-[600px]"></div>
    <p className="col-span-4 w-full text-center text-white lg:text-main text-[8px] md:text-[10px] font-light">
     All materials on this website are protected by Copyright ©2024
     <span>
      <Link href="/"> Lobsters Co.</Link>
     </span>
    </p>
   </div>
  </footer>
 );
}
