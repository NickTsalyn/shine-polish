"use client";

import Link from "next/link";
import { FC } from "react";
import CleaningServices from "../Menu/CleaningServises";
import CleaningProcesses from "../Menu/CleningProcesses";

interface NavLink {
  href: string;
  text: string;
}

interface NavLinksProps {
  links: NavLink[];
  handleClose?: () => void;
}

const NavMobile: FC<NavLinksProps> = ({ links, handleClose }) => {
  return (
    <ul className="flex flex-col gap-3 md:gap-[18px] justify-start ">
      {links.map((link, index) => (
        <li
          key={index}
          className="text-[20px] font-normal leading-[1.2]"
          onClick={handleClose}
        >
          <Link href={link.href} >
            {link.text}
          </Link>
        </li>
      ))}
      <li onClick={handleClose}>
        <CleaningServices color="#006778" />
      </li>
      <li onClick={handleClose}>
        <CleaningProcesses color="#006778" />
      </li>
    </ul>
  );
};
export default NavMobile;
