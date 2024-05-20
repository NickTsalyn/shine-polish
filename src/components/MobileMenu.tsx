"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

type Props = {
    onClose: () => void;    
  };

const StyledMenuIcon = styled(CloseIcon)(() => ({
  color: "#006778",
  fontSize: 24,
  "@media (min-width: 768px)": {
    fontSize: 36,
  },
}));

export default function MobileMenu({onClose}: Props) {
  return (
    <div className="p-4 md:p-7 ">
      <div className="flex w-[108px] h-[97px] md:w-[162px] md:h-[145px]">
        <Link href={"/"} className="w-full h-full relative">
          <Image
            src="/icons/logo/logo_shine.svg"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </Link>
      </div>
      <IconButton className="flex" onClick={onClose}>
        <StyledMenuIcon />
      </IconButton>
    </div>
  );
}
