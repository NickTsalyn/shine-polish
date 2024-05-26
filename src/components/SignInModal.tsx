"use client";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleIcon from "@mui/icons-material/Google";
import React, { useState } from "react";

import Button from "./UI/Button";
import Link from "next/link";
import Input from "./UI/Input";
import Image from "next/image";

type Props = {
  open: boolean;
  onClose?: () => void;
};

const SignInModal = (props: Props) => {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);

    // const handleClose = () => {
    //   onClose();
    // };
  }

  return (
    <div className=" modal flex flex-col ">
      <div className=" relative w-[320px] md:w-[760px] lg:w-[963px] h-[568px] md:h-[516px] lg:h-[575px] rounded-[50px] md:flex">
        <div className="">
          <div className="absolute top-0 right-0 z-10">
            <Button style="close-button" type="button" onClick={handleClose}>
              <span className="text-main md:text-white ">
                <CloseRoundedIcon />
              </span>
            </Button>
          </div>
          <h2 className="text-main text-[40px] text-center mb-4 lg:mb-6">
            Sign in
          </h2>

          <div className="flex gap-[24px] lg:gap-[48px] mb-5 md:mb-7 lg:mb-9 justify-center">
            <div
              className="rounded-full flex items-center justify-center w-[52px] h-[52px] lg:w-[64px] lg:h-[64px] border border-tertial"
              style={{
                backgroundImage:
                  "linear-gradient(164deg, #006778 4.74%, #00BFDE 88.81%)",
              }}
            >
              <Button style="transparent-button" type="button">
                <Link href="/" />
                <span className="text-white w-[52px] h-[52px] text-center items-center">
                  <FacebookRoundedIcon className="w-[32px] h-[32px] lg:w-[56px] lg-h:[56px]" />
                </span>
              </Button>
            </div>
            <div
              className="rounded-full flex items-center justify-center w-[52px] h-[52px] lg:w-[64px] lg:h-[64px] border border-tertial"
              style={{
                backgroundImage:
                  "linear-gradient(9deg, #00BFDE 5.7%, #008298 71.75%, #006778 83.33%)",
              }}
            >
              <Button style="transparent-button" type="button">
                <Link href="/" />
                <span className="text-white w-[32px] h-[32px] text-center items-center">
                  <WhatsAppIcon className="w-[32px] h-[32px] lg:w-[56px] lg-h:[56px]" />
                </span>
              </Button>
            </div>
            <div
              className="rounded-full flex items-center justify-center w-[52px] h-[52px] lg:w-[64px] lg:h-[64px] border border-tertial"
              style={{
                backgroundImage:
                  "linear-gradient(69deg, #00BFDE 8.52%, #006778 91.48%)",
              }}
            >
              <Button style="transparent-button" type="button">
                <Link href="/" />
                <span className="text-white w-[32px] h-[32px] text-center items-center">
                  <GoogleIcon className="w-[32px] h-[32px] lg:w-[56px] lg-h:[56px]" />
                </span>
              </Button>
            </div>
          </div>
          <p className="text-text text-[14px] lg:text-[24px] mb-[10px]">
            Or sing using E-Mail Address
          </p>
          <Input style="sign-in-input" type="email" placeholder="Email*" />
          <Input style="sign-in-input" type="password" placeholder="Password" />
          <p className="text-accent text-[14px] lg:text-[24px] mb-[18px]">
            Forgot your password?
          </p>
          <Button style="auth-sign" type="button">
            <span className="text-white text-[20px] uppercase">Sing In</span>
          </Button>
        </div>

        <div className="md:bg-main md:w-[380px] md:h-[652px] relative z-[-1] bottom-0 left-0">
          <Image
            src="/icons/bgSignInForm/bgShine.png"
            alt="just color"
            width={324}
            height={251}
            className="z-0"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          ></Image>
          <Image
            src="/icons/bgSignInForm/bgDark.png"
            alt="just color"
            width={326}
            height={275}
            className="absolute z-1 bottom-0 left-0"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          ></Image>
          <div className="absolute z-20 bottom-[40px] left-[20px] flex flex-col">
            <h3 className="text-white text-[32px] font-bold mb-2">
              Create Account!
            </h3>
            <p className="text-white text-[16px] mb-3">
              Sing Up if you still don’t have an account...{" "}
            </p>
            <div className="flex justify-end items-end">
              <Button style="auth-sign-up-border" type="button">
                <span className="text-white uppercase text-[20px]">
                  SING UP
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
