"use client";

import Link from "next/link";
import { FC } from "react";
import CleaningOptions from "../Menu/CleaningOptions";
import { PROCESSES_LINKS, SERVICES_LINKS } from "@/global/navigation";

interface NavLink {
  href: string;
  text: string;
}

interface NavLinksProps {
  links: NavLink[];
  toggleDrawer?: () => void;
}

const NavMobile: FC<NavLinksProps> = ({ links, toggleDrawer }) => {
  return (
    <ul className="flex flex-col gap-3 md:gap-[18px] justify-start ">
      {links.map((link, index) => (
        <li
          key={index}
          className="text-[20px] font-normal leading-[1.2]"
          onClick={toggleDrawer}
        >
          <Link href={link.href}>{link.text}</Link>
        </li>
      ))}
      <li>
        <CleaningOptions
          color="#006778"
          buttonText="Cleaning Process"
          links={PROCESSES_LINKS}
          toggleDrawer={toggleDrawer}
        />
      </li>
      <li>
        <CleaningOptions
          color="#006778"
          buttonText="Cleaning Services"
          links={SERVICES_LINKS}
          toggleDrawer={toggleDrawer}
        />
      </li>
    </ul>
  );
};
export default NavMobile;
