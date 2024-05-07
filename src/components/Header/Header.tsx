"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./Switcher";
import { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/menu";
import { styled } from "@mui/material/styles";

const StyledMenuIcon = styled(MenuIcon)(() => ({
  color: "#006778",
  fontSize: 42,
  "@media (min-width: 768px)": {
    fontSize: 52,
  },
}));

export default function Header() {
  const [lightMode, setDarkMode] = useState(false);

  const handleChange = () => {
    setDarkMode(!lightMode);
  };

  return (
    <header className="bg-white lg:bg-transparent">
      <div className=" px-[20px] md:px-[28px] lg:px-[42px] xl:px-20 py-3 md:py-[18px] lg:py-5 flex direction-row justify-between lg:justify-end">
        <div className="block lg:hidden">
          <Link href={"/"}>
            <Image
              width={78}
              height={66}
              src="/icons/logo_shine.svg"
              alt="Logo"
            />
          </Link>
        </div>

        <div className=" flex direction-row gap-6 items-center justify-center ">
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
