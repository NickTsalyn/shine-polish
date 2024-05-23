"use client";

import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popper from "@mui/material/Popper";

import { styled } from "@mui/material/styles";
import Link from "next/link";
import { CustomButton } from "./CustomButton";

const links = [
  { href: "/kitchen-process", text: "Kitchen Cleaning Services" },
  { href: "/", text: "Bedroom Cleaning Services" },
  { href: "/", text: "Bathroom Cleaning Services" },
  { href: "/living-room-processes", text: "Living room Cleaning Services" },
  { href: "/", text: "Dining Room Cleaning Services" },
];

const CustomMenu = styled(Menu)(() => ({
  "& .MuiPaper-root": {
    backgroundColor: "#006778CC",
    width: "300px",
    padding: "12px",
    borderRadius: "12px",
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

const CustomMenuItem = styled(MenuItem)(() => ({
  fontFamily: "Lato",
  color: "white",
  fontSize: "16px",
  paddingLeft: "4px",
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

export default function CleaningServices() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="h-10 w-[200px] bg-main">
      <CustomButton
        id="processes-btn"
        aria-controls={open ? "processes-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span className="text-white">Cleaning Process</span>
      </CustomButton>
      <Popper sx={{ zIndex: 1200 }} open={open} anchorEl={anchorEl} transition>
        <CustomMenu
          id="processes-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "processes-btn",
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
