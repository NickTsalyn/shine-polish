"use client";
import Link from "next/link";
import Image from "next/legacy/image";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { styled } from "@mui/material/styles";

import NavLinks from "./Navigation/NavLinks";
import Button from "./UI/Button";

const UserIcon = styled(AccountCircleIcon)(() => ({
  color: "#fff",
  fontSize: 28,
}));

const socialIcons = [
  {
    icon: <FacebookRoundedIcon style={{ color: "white", fontSize: 36 }} />,
    href: "https://facebook.com",
  },
  {
    icon: <InstagramIcon style={{ color: "white", fontSize: 36 }} />,
    href: "https://instagram.com",
  },
  {
    icon: <WhatsAppIcon style={{ color: "white", fontSize: 36 }} />,
    href: "https://whatsapp.com",
  },
];

export default function Sidebar() {
  const [auth] = useState(false);

  return (
    <aside className="  hidden lg:flex flex-col content-around fixed inset-y-0 left-0 px-5 xl:px-[26px] pt-[46px] pb-6 w-[200px] h-full xl:w-[244px] bg-main z-10">
       <div className="flex w-[128px] h-[115px] xl:w-[156px] xl:h-[140px] mx-auto mb-9 xl:mb-[46px] ">
        <Link href={"/"} className="w-full h-full relative">
          <Image
            src="/icons/logo/logo_dark_bg.svg"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </Link>
      </div>

      {auth && (
        <div className="flex items-center gap-5 xl:gap-6 mb-6">
          <UserIcon />
          <p className=" body font-light text-white">Hello, Fiona</p>
        </div>
      )}

      <div className="mb-5 ">
        <NavLinks />
      </div>

      <div className="mt-auto">
        <ul className="mb-5 flex flex-col align-center gap-5 xl:gap-6">
          {auth && (
            <li>
              <Button style="sidebar-log-out" type="button">
                <span className="body text-secondary">Log Out</span>
              </Button>
            </li>
          )}
          {!auth && (
            <li>
              <Button style="sidebar-auth-in" type="button">
                <span className="body text-secondary">
                  Sign In <span className="text-white">or </span>Sign Up
                </span>
              </Button>
            </li>
          )}
          <li>
            <Button style="sidebar-book-now" type="button">
              <span className="body font-bold text-secondary">Book Now</span>
            </Button>
          </li>
          <li>
            <div className="relative px-1 xl:px-[10px] py-1 border border-solid border-white rounded-xl text-[18px] xl:text-[20px] font-light xl:font-normal leading-normal text-white">
              <Link href="tel:+4708003249">tel: 470-800-32-49</Link>

              <div className="absolute top-[-18px] left-0 z-10">
                <Image
                  width={30}
                  height={24}
                  src="/images/woman_with_a_phone.png"
                  alt="woman with a phone"
                />
              </div>
            </div>
          </li>
        </ul>
        <p className="mb-2 xl:mb-4 text-[28px] xl:text-[36px] font-light text-white">
          Follow us
        </p>
        <ul className="flex  gap-5 ">
          {socialIcons.map((socialIcon, index) => (
            <li key={index}>
              <Link href={socialIcon.href}>{socialIcon.icon} </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
