"use client";

import React, { useState, MouseEvent } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import Link from "next/link";
import Image from "next/legacy/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CustomButton from "./UI/Button";
import NavMobile from "./Navigation/NavMobile";
import { MOBILE_LINKS } from "@/global/navigation";

const StyledMenuIcon = styled(MenuIcon)(() => ({
  color: "#006778",
  fontSize: 42,
  "@media (min-width: 768px)": {
    fontSize: 52,
  },
}));

const DrawerContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFF",
  width: "280px",
  height: "598px",
  padding: "16px",
  borderRadius: "12px",
  "@media (min-width: 768px)": {
    width: "400px",
    padding: "28px",
    height: "820px",
  },
}));

const StyledItem = styled(ListItem)(() => ({
  color: "#006778",
  padding: "0px",
  fontFamily: "Lato",
}));

const socialIcons = [
  {
    icon: <FacebookRoundedIcon className="text-[#006778] size-9 md:size-11" />,
    href: "https://facebook.com",
  },
  {
    icon: <InstagramIcon className="text-[#006778] size-9 md:size-11" />,
    href: "https://instagram.com",
  },
  {
    icon: <WhatsAppIcon className="text-[#006778] size-9 md:size-11" />,
    href: "https://whatsapp.com",
  },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: MouseEvent | KeyboardEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(open);
    };

  return (
    <div className="flex lg:hidden ">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <StyledMenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            borderRadius: "12px",
            overflow: "hidden",
            width: "auto",
            height: "auto",
          },
        }}
      >
        <DrawerContent>
          <div className="flex flex-row md:flex-row-reverse justify-between items-start mb-4 md:mb-8">
            <div
              className="flex w-[108px] h-[97px] md:w-[136px] md:h-[122px]"
              onClick={toggleDrawer(false)}
            >
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
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon className="text-main size-6 md:size-9" />
            </IconButton>
          </div>

          <List className="p-0 flex flex-col grow gap-4 md:gap-6">
            <StyledItem>
              <NavMobile
                links={MOBILE_LINKS}
                handleClose={toggleDrawer(false)}
              />
            </StyledItem>
            <StyledItem onClick={toggleDrawer(false)}>
              <CustomButton style="burger-book-now" type="button">
                <span className=" text-[20px] md:text-[24px] font-bold text-accent text-center">
                  Book Now
                </span>
              </CustomButton>
            </StyledItem>
            <StyledItem onClick={toggleDrawer(false)}>
              <span className="w-full py-1 md:py-1.5 border border-solid border-main rounded-xl text-[18px] md:text-[20px] font-normal leading-normal text-main text-center">
                <Link href="tel:+4708003249">tel: 470-800-32-49</Link>
              </span>
            </StyledItem>
            <StyledItem onClick={toggleDrawer(false)}>
              <CustomButton style="burger-contact-us" type="button">
                <span className="text-[20px] md:text-[24px] font-bold leading-normal text-secondary text-center">
                  Contact us
                </span>
              </CustomButton>
            </StyledItem>
          </List>

          <div className="flex flex-col items-center gap-1 md:gap-2 mt-auto">
            <p className="text-[24px] xl:text-[32px] font-light leading-normal text-main">
              Follow us
            </p>
            <ul className="flex gap-[10px] md:gap-[18px]">
              {socialIcons.map((socialIcon, index) => (
                <li key={index} onClick={toggleDrawer(false)}>
                  <Link href={socialIcon.href}>{socialIcon.icon}</Link>
                </li>
              ))}
            </ul>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

// "use client";

// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import { styled } from "@mui/system";
// import MenuIcon from "@mui/icons-material/Menu";
// import Link from "next/link";
// import Image from "next/legacy/image";
// import { IconButton, Popper } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import { MOBILE_LINKS } from "@/global/navigation";
// import CustomButton from "./UI/Button";
// import { MouseEvent, useState } from "react";
// import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import NavMobile from "./Navigation/NavMobile";

// const StyledMenuIcon = styled(MenuIcon)(() => ({
//   color: "#006778",
//   fontSize: 42,
//   "@media (min-width: 768px)": {
//     fontSize: 52,
//   },
// }));

// const MobMenu = styled(Menu)(() => ({
//   "& .MuiPaper-root": {
//     backgroundColor: "#FFF",
//     width: "280px",
//     height: "594px",
//     padding: "16px",
//     "@media (min-width: 768px)": {
//       width: "400px",
//       padding: "28px",
//       height: "820px",
//     },

//     transformOrigin: "right start",
//     animation: "slide-in 0.3s ease-out forwards",
//   },
//   "@keyframes slide-in": {
//     "0%": {
//       transform: "translateX(100%)",
//     },
//     "100%": {
//       transform: "translateX(0)",
//     },
//   },
// }));

// const MobMenuItem = styled(MenuItem)(() => ({
//   color: "#006778",
//   padding: "0px",
//   margin: "0px",
//   fontFamily: "Lato",
// }));

// const socialIcons = [
//   {
//     icon: <FacebookRoundedIcon style={{ color: "#006778", fontSize: 36 }} />,
//     href: "https://facebook.com",
//   },
//   {
//     icon: <InstagramIcon style={{ color: "#006778", fontSize: 36 }} />,
//     href: "https://instagram.com",
//   },
//   {
//     icon: <WhatsAppIcon style={{ color: "#006778", fontSize: 36 }} />,
//     href: "https://whatsapp.com",
//   },
// ];

// export default function MobileMenu() {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event: MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className="flex lg:hidden ">
//       <Button
//         id="menu-button"
//         aria-controls={open ? "mobile-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         onClick={handleClick}
//       >
//         <StyledMenuIcon />
//       </Button>
//       <Popper
//         sx={{ zIndex: 1100 }}
//         open={open}
//         anchorEl={anchorEl}
//         transition
//         // placement="right-start"
//       >
//         <MobMenu
//           id="mobile-menu"
//           aria-labelledby="menu-button"
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleClose}
//           // anchorOrigin={{
//           //   vertical: "top",
//           //   horizontal: "right",
//           // }}
//           // transformOrigin={{
//           //   vertical: "top",
//           //   horizontal: "left",
//           // }}
//         >
//           <MobMenuItem className="flex flex-row md:flex-row-reverse justify-between items-start">
//             <div
//               className="flex w-[108px] h-[97px] md:w-[136px] md:h-[122px]"
//               onClick={handleClose}
//             >
//               <Link href={"/"} className="w-full h-full relative">
//                 <Image
//                   src="/icons/logo/logo_shine.svg"
//                   alt="Logo"
//                   layout="fill"
//                   objectFit="contain"
//                   priority
//                 />
//               </Link>
//             </div>
//             <IconButton
//               className="flex  p-0 size-6 md:size-9"
//               onClick={handleClose}
//             >
//               <CloseIcon className="text-main size-6 md:size-9" />
//             </IconButton>
//           </MobMenuItem>
//           <MobMenuItem>
//             <NavMobile links={MOBILE_LINKS} />
//             {/* handleClose={handleClose}             */}
//           </MobMenuItem>
//           <MobMenuItem>
//             <ul className="flex flex-col grow gap-4 md:gap-6">
//               <li onClick={handleClose}>
//                 <CustomButton style="burger-book-now" type="button">
//                   <span className=" text-[20px] md:text-[24px] font-bold text-accent text-center">
//                     Book Now
//                   </span>
//                 </CustomButton>
//               </li>
//               <li onClick={handleClose}>
//                 <div className=" py-1 md:py-1.5 border border-solid border-main rounded-xl text-[18px] md:text-[20px] font-normal leading-normal text-main text-center">
//                   <Link href="tel:+4708003249">tel: 470-800-32-49</Link>
//                 </div>
//               </li>
//               <li onClick={handleClose}>
//                 <CustomButton style="burger-contact-us" type="button">
//                   <span className="text-[18px] md:text-[24px] font-bold leading-normal text-secondary text-center">
//                     Contact us
//                   </span>
//                 </CustomButton>
//               </li>
//             </ul>
//           </MobMenuItem>
//           <MobMenuItem className="flex flex-col gap-2 md:gap-4">
//             <p className="text-[28px] xl:text-[36px] font-light text-main">
//               Follow us
//             </p>
//             <ul className="flex  gap-5 ">
//               {socialIcons.map((socialIcon, index) => (
//                 <li key={index} onClick={handleClose}>
//                   <Link href={socialIcon.href}>{socialIcon.icon} </Link>
//                 </li>
//               ))}
//             </ul>
//           </MobMenuItem>
//         </MobMenu>
//       </Popper>
//     </div>
//   );
// }

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
