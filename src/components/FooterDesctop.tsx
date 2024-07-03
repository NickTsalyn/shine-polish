"use client";

import Link from "next/link";
import FooterMainNav from "./Navigation/FooterNav";
import { FOOTER_NAV } from "@/global/navigation";
// import { FooterImg } from "@/global/images";

export default function FooterDesctop() {
  return (
    <footer className="lg:absolute lg:inset-x-0 lg:top-auto lg:left-50 lg:z-100 lg:left-1/2 transform lg:-translate-x-1/2 hidden lg:blok bg-secondary lg:w-[1000px] h-[100px] lg:flex lg:flex-col lg:justify-end  py-4">
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
