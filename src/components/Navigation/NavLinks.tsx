import Link from "next/link";
import { useState } from "react";

export default function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul className=" flex flex-col gap-5 justify-start text-white body font-light">
      <li>
        <Link href="/" onClick={handleClick}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/checklists" onClick={handleClick}>
          Checklists
        </Link>
      </li>
      <li>
        <Link href="/cleaning-services" onClick={handleClick}>
          Cleaning Services
        </Link>
      </li>
      <li>
        <Link href="/cleaning-process" onClick={handleClick}>
          Cleaning Process
        </Link>
      </li>
      <li>
        <Link href="/reviews" onClick={handleClick}>
          Reviews
        </Link>
      </li>
      <li>
        <Link href="/cleaning-services" onClick={handleClick}>
          Not sure? Just Ask!
        </Link>
      </li>
    </ul>
  );
}
