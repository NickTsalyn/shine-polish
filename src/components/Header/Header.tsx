"use client";

import Link from "next/link";
import ThemeSwitch from "./Switcher";
import { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/menu";
import { styled } from "@mui/material/styles";
import Image from "next/legacy/image";

const StyledMenuIcon = styled(MenuIcon)(() => ({
  color: "#006778",
  fontSize: 42,
  "@media (min-width: 768px)": {
    fontSize: 52,
  },
}));

export default function Header() {
  const [lightMode, setDarkMode] = useState(false);
  const [auth] = useState(true);

  const handleChange = () => {
    setDarkMode(!lightMode);
  };

  return (
    <header className="bg-white lg:bg-transparent">
      <div className=" px-[20px] md:px-[28px] lg:px-[42px] xl:px-20 py-3 lg:py-[22px] flex direction-row justify-between lg:justify-end">
        <div className="block lg:hidden w-[68px] h-[60px] md:w-[80px] md:h-[70px]">
          <Link href={"/"}>
            <Image
              width={68}
              height={60}
              src="/icons/logo_shine.svg"
              alt="Logo"
              layout="responsive"
            />
          </Link>
        </div>

        <div className=" flex direction-row gap-4 md:gap-[22px] lg:gap-10 items-center justify-center ">
          {auth && (
            <div className=" block lg:hidden text-accent lg:text-white subtext">
              Hello, Fiona
            </div>
          )}
          <div className=" w-[38px] h-7 border rounded-[6px] border-light-main text-center">
            Uk
          </div>

          <ThemeSwitch checked={lightMode} onChange={handleChange} />
          <IconButton className="flex lg:hidden">
            <StyledMenuIcon />
          </IconButton>
        </div>
      </div>
    </header>
  );
}
