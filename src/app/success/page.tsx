"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoutIcon from "@mui/icons-material/Logout";
import { addBooking } from "@/api";
import { useMutation } from "@tanstack/react-query";
import { FormValues } from "@/types/interfaces";

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
  const [timer, setTimer] = useState(5);
  const mutation = useMutation({
    mutationFn: (booking: FormValues) => addBooking(booking),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  useEffect(() => {
    const objectBooking = localStorage.getItem("form");

    if (!objectBooking) {
      return;
    }
    const booking = JSON.parse(objectBooking);
    console.log(booking);
    mutation.mutate(booking);

    localStorage.clear();
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          window.location.href = "/";
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [mutation]);

  useEffect(() => {
    if (timer <= 0) {
      window.location.href = "/";
    }
  }, [timer]);

  return (
    <div className="relative h-[calc(100vh-84px)] md:h-[calc(100vh-96px)] lg:h-screen  flex flex-col justify-between ">
      <BgnImg />
      <div className="flex-grow flex flex-col justify-end w-full">
        <div className="container flex flex-col justify-end items-center gap-3 md:gap-6 l py-6 md:py-11 lg:py-12">
          {timer > 0 && (
            <p className="text-center text-accent subtext lg:text-4xl">
              You will be redirected to the homepage in {timer} seconds.
            </p>
          )}
          <div className=" flex justify-end items-center text-text font-semibold text-xl md:text-2xl lg:text-4xl w-full ml-auto">
            <Link href={"/"}>
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