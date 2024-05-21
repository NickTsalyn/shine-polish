"use client";

import Link from "next/link";
import { useState } from "react";

interface NavLink {
  href: string;
  text: string;
}

const links: NavLink[] = [
  { href: "/", text: "Home" },
  { href: "/checklists", text: "Checklists" },
  { href: "/cleaning-services", text: "Cleaning Services" },
  { href: "/cleaning-process", text: "Cleaning Process" },
  { href: "/reviews", text: "Reviews" },
  { href: "/cleaning-services", text: "Not sure? Just Ask!" },
];

export default function NavLinks() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleClick = (index: number | null) => {
    setSelectedItem(index);
  };

  return (
    <ul className="flex flex-col gap-5 justify-start text-white body font-light">
      {links.map((link, index) => (
        <li key={index} className="relative transition-colors duration-300">
          <Link href={link.href} onClick={() => handleClick(index)}>
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
}
