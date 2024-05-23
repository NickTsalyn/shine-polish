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

const CustomMenu = styled(Menu)(() => ({
  "& .MuiPaper-root": {
    backgroundColor: "#006778CC",
    width: "336px",

    transformOrigin: "left center",
    animation: "slide-in 0.3s ease-out forwards",
  },
  "@keyframes slide-in": {
    "0%": {
      transform: "translateX(-100%) translateY(130%)",
    },
    "100%": {
      transform: "translateX(60%) translateY(130%)",
    },
  },
  "@media (min-width: 1920px)": {
    "@keyframes slide-in": {
      "0%": {
        transform: "translateX(-100%) translateY(150%)",
      },
      "100%": {
        transform: "translateX(75%) translateY(150%)",
      },
    },
  },
}));

const CustomMenuItem = styled(MenuItem)(() => ({
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

interface Props {
  color: string;
  handleClose?: () => void;
}

export default function CleaningProcesses({ color, handleClose }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = () => {
    onClose();
    if (handleClose) {
      handleClose();
    }
  };

  const ServButton = styled(CustomButton)`
    color: ${color};
  `;

  return (
    <>
      <ServButton
        id="process-btn"
        aria-controls={open ? "process-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span className="capitalize">Cleaning Prosess</span>
      </ServButton>
      <Popper
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        transition
        placement="right-start"
      >
        <CustomMenu
          id="process-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={onClose}
          MenuListProps={{
            "aria-labelledby": "process-btn",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {links.map((link, index) => (
            <CustomMenuItem key={index} onClick={handleMenuItemClick}>
              <Link href={link.href} >
                {link.text}
              </Link>
            </CustomMenuItem>
          ))}
        </CustomMenu>
      </Popper>
    </>
  );
}
