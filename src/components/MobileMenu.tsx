"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/legacy/image";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NavLinks from "./Navigation/NavLinks";
import { MOBILE_LINKS } from "@/global/navigation";
import CustomButton from "./UI/Button";

const StyledMenuIcon = styled(MenuIcon)(() => ({
  color: "#006778",
  fontSize: 42,
  "@media (min-width: 768px)": {
    fontSize: 52,
  },
}));

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex lg:hidden ">
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <StyledMenuIcon />
      </Button>

      <Menu
        className="p-4 md:p-7 "
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem className="flex flex-row md:flex-row-reverse justify-between items-start mb-4 md:mb-9">
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
          <IconButton
            className="flex  p-0 size-6 md:size-9"
            onClick={handleClose}
          >
            <CloseIcon className="text-main size-6 md:size-9" />
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLinks color="#006778" links={MOBILE_LINKS} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ul className="flex flex-col gap-4 md:gap-6 mt-9">
            <li>
              <CustomButton style="burger-book-now" type="button">
                <span className="body font-bold text-secondary">Book Now</span>
              </CustomButton>
            </li>
            <li>
              <div className="px-1 py-1 border border-solid border-main rounded-xl text-[18px] font-normal leading-normal text-main text-center">
                <Link href="tel:+4708003249">tel: 470-800-32-49</Link>
              </div>
            </li>
            <li>
              <CustomButton style="burger-contact-us" type="button">
                <span className="body font-bold text-secondary">
                  Contact Us
                </span>
              </CustomButton>
            </li>
          </ul>
        </MenuItem>
      </Menu>
    </div>
  );
}

// import Image from "next/legacy/image";
// import Link from "next/link";
// import { IconButton } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// // import { styled } from "@mui/material/styles";
// import NavLinks from "./Navigation/NavLinks";
// import { MOBILE_LINKS } from "@/global/navigation";
// import Button from "./UI/Button";

// type Props = {
//   onClose: () => void;
// };

// // const StyledMenuIcon = styled(CloseIcon)(() => ({
// //   color: "#006778",
// //   size: 24,
// //   "@media (min-width: 768px)": {
// //     fontSize: 36,
// //   },
// // }));

// export default function MobileMenu({ onClose }: Props) {
//   return (
//     <
// <div className="p-4 md:p-7 ">
//   <div className="flex justify-between mb-4 md:mb-9">
//     <div className="flex w-[108px] h-[97px] md:w-[162px] md:h-[145px]">
//       <Link href={"/"} className="w-full h-full relative">
//         <Image
//           src="/icons/logo/logo_shine.svg"
//           alt="Logo"
//           layout="fill"
//           objectFit="contain"
//           priority
//         />
//       </Link>
//     </div>
//     <IconButton className="flex p-0 size-6 md:size-9" onClick={onClose}>
//       <CloseIcon className="text-main size-6 md:size-9" />
//     </IconButton>
//   </div>
//       <NavLinks color="#006778" links={MOBILE_LINKS} />
// <ul className="flex flex-col gap-4 md:gap-6 mt-9">
//   <li>
//     <Button style="burger-book-now" type="button">
//       <span className="body font-bold text-secondary">Book Now</span>
//     </Button>
//   </li>
//   <li>
//     <div className="px-1 py-1 border border-solid border-main rounded-xl text-[18px] font-normal leading-normal text-main text-center">
//       <Link href="tel:+4708003249">tel: 470-800-32-49</Link>
//     </div>
//   </li>
//   <li>
//     <Button style="burger-contact-us" type="button">
//       <span className="body font-bold text-secondary">Contact Us</span>{" "}
//     </Button>
//   </li>
// </ul>
//     </div>
//   );
// }
