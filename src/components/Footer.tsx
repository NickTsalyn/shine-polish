"use client";

import Link from "next/link";

import FooterNavMobile from "./Navigation/FooterLinks";
import { FOOTER_MOBILE_LINKS, SOCIAL_MEDIA_LINKS } from "@/global/navigation";
import { FooterLogo } from "@/global/images";
import SocialMedia from "./Navigation/SocialMediaLinks";
import { FOOTER_NAV } from "../global/navigation";
import FooterMainNav from "./Navigation/FooterNav";

export default function Footer() {
  return (
    <footer className="lg:hidden  bg-main w-auto h-auto ">
      <div className="container grid  grid-cols-2 py-6 md:py-[48px] md:grid-cols-4 gap-5  ">
        <div className="lg:pr-px-[240px] xl:pr-px-[282px] w-[68px] h-[60px] md:w-[80px] md:h-[70px] lg:w-[120px] lg:h-[90px] xl:w-[150px] xl:h-[130px]">
          <Link href={"#hero"}>
            <FooterLogo />
          </Link>
        </div>
        <div className="sm:col-span-1 mb-2 ">
          <FooterNavMobile links={FOOTER_MOBILE_LINKS} />
        </div>
        <div className="">
          <span className="mb-3 md:mb-4 text-3 md:text-4 lg:text-[20px] text-white font-[300]">
            Follow us
          </span>
          <SocialMedia links={SOCIAL_MEDIA_LINKS} />

          <Link
            href="+14708003249"
            className="text-white text-[14px] lg:text-[20px] font-light"
          >
            Tel: 470-800-32-49
          </Link>
        </div>
        <div className=" sm:col-span-1">
          <FooterMainNav links={FOOTER_NAV} />
        </div>
        {/* <div className="col-start-1 col-end-3 md:col-end-5 text-center">
          <p className="text-white text-[8px] md:text-[10px] lg:text-[12px] ">
            All materials on this website are protected by copyright ©2024
            <span>
              <Link href="/">Lobsters Co.</Link>
            </span>
          </p>
        </div> */}
      </div>
    </footer>
  );
}
