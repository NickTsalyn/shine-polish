"use client";

import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popper, { PopperPlacementType } from "@mui/material/Popper";

import { styled } from "@mui/material/styles";
import Link from "next/link";
import { CustomButton } from "./CustomButton";

const links = [
  { href: "/", text: "Kitchen Cleaning Services" },
  { href: "/", text: "Bedroom Cleaning Services" },
  { href: "/", text: "Bathroom Cleaning Services" },
  { href: "/", text: "Living room Cleaning Services" },
  { href: "/", text: "Dining Room Cleaning Services" },
];

const CustomMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "#006778CC",
    width: "336px",
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

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  color: "white",
  borderRadius: "12px",
  borderBottom: "1px solid transparent", // transparent border to reserve space
  backgroundImage: `linear-gradient(90deg, #E6BA95 34.9%, rgba(230, 186, 149, 0.00) 100%);`,
  backgroundSize: "100% 1px", // height of the gradient border
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  "&:hover": {
    backgroundImage: `linear-gradient(90deg, rgba(128, 0, 54, 0.00) 0%, #780032 65.1%);`,
    backgroundColor: "#006778",
  },
}));
// width: 307px;
// height: 1px;
// background: linear-gradient(90deg, #E6BA95 34.9%, rgba(230, 186, 149, 0.00) 100%);

export default function CleaningServices() {
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  const [open, setOpen] = React.useState(false);

  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);

      // (event: React.MouseEvent<HTMLButtonElement>) => {
      //   setAnchorEl(event.currentTarget);
    };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="h-10 w-[200px] bg-main">
      <CustomButton
        id="service-btn"
        aria-controls={open ? "services-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick("right-start")}
      >
        <span className="text-white">Cleaning Services</span>
      </CustomButton>
      <Popper
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        <CustomMenu
          id="services-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "service-btn",
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
