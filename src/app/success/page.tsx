"use client";

import { useEffect } from "react";
import Link from "next/link";
// import { redirect } from "next/navigation";
import Image from "next/image";
import LogoutIcon from "@mui/icons-material/Logout";

const BgnImg = () => {
  return (
    <div className="absolute inset-0 z-[-1]">
      <picture>
        <source
          srcSet="/images/success_img_tabl-desk.webp"
          media="(min-width: 768px)"
        />
        <Image
          src="/images/success_img_mob.webp"
          alt="photo success"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </picture>
    </div>
  );
};

const Success = () => {
  useEffect(() => {
    localStorage.clear();

    // const timer = setTimeout(() => {
    //   window.location.href = "/";
    // }, 5000);

    // return () => clearTimeout(timer); // Очищення таймера при анмаунті
  }, []);

  return (
    <div className="relative h-[calc(100vh-84px)] md:h-[calc(100vh-96px)] lg:h-screen w-full ">
      <BgnImg />
      <div className="container flex flex-col justify-between items-center  py-9 md:py-11 lg:py-12 h-full">
        <p className="text-main text-xl font-semibold md:text-2xl lg:text-4xl ">
          Thank you for your payment!
        </p>

        <div className="flex flex-col md:flex-row  justify-between items-baseline w-full">
          <p className="text-center text-accent subtext">
            You will be redirected to the homepage in 5 seconds.
          </p>

          <div className=" flex justify-end items-center text-main font-semibold text-xl md:text-2xl lg:text-4xl w-full md:w-auto mt-4 md:mt-0">
            <Link  href={"/"}>
              to Home
              <LogoutIcon className="size-5 md:size-7 lg:size-9 xl:size-11 ml-2" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
