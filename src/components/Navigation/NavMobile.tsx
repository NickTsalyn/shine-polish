"use client";

import Link from "next/link";
import { FC } from "react";
import CleaningOptions from "../Menu/CleaningOptions";
import { PROCESSES_LINKS, SERVICES_LINKS } from "@/data/navigation-links";
import { useAuth } from "@/components/AuthContext";
import { signout } from "@/helpers/api";
import { useRouter } from "next/navigation";

interface NavLink {
  href: string;
  text: string;
}

interface NavLinksProps {
  links: NavLink[];
  toggleDrawer?: () => void;
}

const NavMobile: FC<NavLinksProps> = ({ links, toggleDrawer }) => {
  const router = useRouter();
  const { userData, signOutContext } = useAuth();

  const handleSignOut = () => {
    signout;
    localStorage.removeItem("user");
    signOutContext();
    router.push("/");
  };

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
      <li
        className="text-[20px] font-normal leading-[1.2]"
        onClick={toggleDrawer}
      >
        {userData ? (
          <p onClick={handleSignOut}>Sign Out</p>
        ) : (
          <>
            <Link href="/sign-in-form">Sign In /</Link>{" "}
            <Link href="/sign-up">Sign Up</Link>
          </>
        )}
      </li>
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
