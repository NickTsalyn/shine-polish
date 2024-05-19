"use client";

import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Popper from "@mui/material/Popper";
import Link from "next/link";
import { CustomButton } from "./CustomButton";

const links = [
  { href: "/", text: "House Cleaning" },
  { href: "/", text: "Apartment Cleaning" },
  { href: "/", text: "Deep Cleaning" },
  { href: "/", text: "Move-In/Move-Out Cleaning" },
  { href: "/", text: "Carpet Cleaning" },
  { href: "/", text: "Airbnb Cleaning" },
];

const CustomMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "#006778CC",
    width: "336px",

    transformOrigin: "left center",
    animation: "slide-in 0.3s ease-out forwards",
  },
  "@keyframes slide-in": {
    "0%": {
      transform: "translateX(-100%)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  color: "white",
  borderRadius: "12px",
  borderBottom: "1px solid transparent",
  backgroundImage: `linear-gradient(90deg, #E6BA95 34.9%, rgba(230, 186, 149, 0.00) 100%);`,
  backgroundSize: "100% 1px",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  "&:hover": {
    backgroundImage: `linear-gradient(90deg, rgba(128, 0, 54, 0.00) 0%, #780032 65.1%);`,
    backgroundColor: "#006778",
  },
}));

export default function CleaningProcesses() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="h-10 w-[200px] bg-main">
      <CustomButton
        id="process-btn"
        aria-controls={open ? "process-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span className="text-white">Cleaning Prosess</span>
      </CustomButton>
      <Popper sx={{ zIndex: 1200 }} open={open} anchorEl={anchorEl} transition>
        <CustomMenu
          id="process-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "process-btn",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <CustomMenuItem onClick={handleClose}>
                  <Link href={link.href}>{link.text}</Link>
                </CustomMenuItem>
              </li>
            ))}
          </ul>
        </CustomMenu>
      </Popper>
    </div>
  );
}
