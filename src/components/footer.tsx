"use client";

import Image from "next/legacy/image";
import Link from "next/link";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import logo from "../../public/images/logo/logo_dark_bg.svg";

const links = [
  { href: "/", text: "Cleaning Services" },
  { href: "/", text: "Service Areas" },
  { href: "/", text: "About us" },
];

const socialIcons = [
  {
    icon: <FacebookRoundedIcon style={{ color: "white" }} />,
    href: "https://facebook.com",
  },
  {
    icon: <InstagramIcon style={{ color: "white" }} />,
    href: "https://instagram.com",
  },
  {
    icon: <WhatsAppIcon style={{ color: "white" }} />,
    href: "https://whatsapp.com",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-5 w-auto h-auto py-5 md:py-7 lg:py-9 px-5 md:px-7 lg:px-7 lg:pl-[240px] xl:pl-[282px] bg-main">
        <div className="lg:pr-px-[240px] xl:pr-px-[282px] w-[68px] h-[60px] md:w-[80px] md:h-[70px] lg:w-[120px] lg:h-[90px] xl:w-[150px] xl:h-[130px]">
          <Link href={"/"}>
            <Image
              src={logo}
              height={28}
              width={30}
              alt="logo"
              layout="responsive"
            ></Image>
          </Link>
        </div>
        <div className="sm:col-span-1 ">
          <ul className="mb-2 text-3 md:text-4 lg:text-[20px] text-white font-[300]">
            {links.map((link, index) => (
              <li key={index} className="mb-3">
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <span className="mb-3 md:mb-4 text-3 md:text-4 lg:text-[20px] text-white font-[300]">
            Follow us
          </span>
          <ul className="flex gap-2 mb-3">
            {socialIcons.map((socialIcon, index) => (
              <li key={index}>
                <Link href={socialIcon.href}>{socialIcon.icon}</Link>
              </li>
            ))}
          </ul>

          <Link
            href="+14708003249"
            className="text-white text-[14px] lg:text-[20px] font-light"
          >
            Tel: 470-800-32-49
          </Link>
        </div>
        <div className=" sm:col-span-1">
          <ul className="mb-2 text-3 md:text-4 lg:text-[20px] text-white font-[300]">
            <li className=" mb-3">
              <Link href="https://icons8.com">Icons by icons8.com</Link>
            </li>
            <li className="mb-3">
              <Link href="https://pixabay.com">Images by pixabay.com</Link>
            </li>
            <li>
              <Link href="/">Created by Developers Team</Link>
            </li>
          </ul>
        </div>
        <div className="col-start-1 col-end-3 md:col-end-5 text-center">
          <p className="text-white text-[8px] md:text-[10px] lg:text-[12px] ">
            All materials on this website are protected by copyright ©2024 Nick
            Tsalyn. <br />
            Any use of these materials without prior permission may constitute
            copyright infringement and may result in legal consequences.
          </p>
        </div>
      </div>
    </footer>
  );
}
