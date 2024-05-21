"use client";

import Link from "next/link";
import { FC, useState } from "react";

interface NavLink {
  href: string;
  text: string;
}

interface NavLinksProps {
  color: string;
  links: NavLink[];
}

const NavLinks: FC<NavLinksProps> = ({ color, links }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleClick = (index: number | null) => {
    setSelectedItem(index);
  };

  return (
    <ul className="flex flex-col gap-5 justify-start text-[20px] font-normal leading-[1.2]">
      {links.map((link, index) => (
        <li key={index} className="relative">
          <Link
            href={link.href}
            onClick={() => handleClick(index)}
            style={{ color: color }}
          >
            {link.text}
          </Link>
          {selectedItem === index && (
            <span
              className="absolute top-0 right-0 bottom-0 w-[2px]  bg-white rounded"
              style={{ content: "" }}
            />
          )}
        </li>
      ))}
    </ul>
  );
};
export default NavLinks;
