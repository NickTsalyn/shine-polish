"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from "next/legacy/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import NavLinks from "./Navigation/NavLinks";

const StyledUserIcon = styled(AccountCircleIcon)(() => ({
  color: "#fff",
  fontSize: 28,
}));

export default function Sidebar() {
  const [auth] = useState(true);

  return (
    <aside className=" px-6 xl:px-[36px] pt-10 pb-6 hidden lg:block fixed inset-y-0 left-0 w-[200px] h-full xl:w-[244px] bg-main">
      <div className="flex items-center justify-center w-[128px] h-[93px] xl:w-[156px] md:h-[106px] mx-auto mb-8 xl-[58px]">
        <Link href={"/"}>
          <Image
            width={128}
            height={93}
            src="/icons/logo_dark_bg.svg"
            alt="Logo"
          />
        </Link>
      </div>

      {auth && (
        <div className="flex items-center gap-5 xl:gap-6 mb-8">
          <StyledUserIcon />
          <p className=" text-white body font-light">Hello, Fiona</p>
        </div>
      )}
      <NavLinks />
      
    </aside>
  );
}
