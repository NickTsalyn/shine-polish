"use client";

import { useEffect } from "react";
import Link from "next/link";
// import { redirect } from "next/navigation";
import Image from "next/image";

const BgnImg = () => {
  return (
    <div className="absolute inset-0 z-[-1]">
      <picture>
        <source
          srcSet="/images/success_img_tabl-desk.webp"
          media="(min-width: 768px)"
        />
        <Image src="/images/success_img_mob.webp" alt="photo success"
        layout="fill" 
        objectFit="cover"
        objectPosition="center"
        priority/>
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
      <div className="container flex flex-col justify-around items-center  py-9 md:py-11 lg:py-12 h-full">
        <h1>Payment Successful</h1>
        <p>
          Thank you for your payment! Return to{" "}
          <Link href="/" className="text-main">
            Home
          </Link>
        </p>
        <p>You will be redirected to the homepage in 5 seconds.</p>
      </div>
    </div>
  );
};

export default Success;