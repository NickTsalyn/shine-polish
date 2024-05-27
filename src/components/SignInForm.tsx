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

const SignInForm = (props: Props) => {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);

    // const handleClose = () => {
    //   onClose();
    // };
  }

  return (
    <div className="flex flex-col ">
      <div className=" relative w-[320px] md:w-[760px] lg:w-[963px] h-auto md:h-[516px] lg:h-[575px] rounded-[12px] md:rounded-[50px] md:flex shadow-main-shadow">
        <div className="absolute top-0 right-0 z-10 md:top-4 md:right-4">
          <Button style="close-button" type="button" onClick={handleClose}>
            <span className="text-main md:text-white ">
              <CloseRoundedIcon />
            </span>
          </Button>
        </div>
        <div className="pt-4 md:pt-76px] pl-8 pr-8 flex flex-col md:items-center">
          <h2 className="text-main text-[40px] text-center mb-4 md:mb-5 lg:mb-6">
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
          <p className="text-accent text-[14px] lg:text-[24px] mb-[18px] md:mb-[30px]">
            Forgot your password?
          </p>
          <Button style="auth-sign" type="button">
            <span className="text-white text-[20px] uppercase">Sing In</span>
          </Button>
        </div>

        <div className="md:bg-main md:w-[380px] md:h-[516px] lg:h-[576px] relative z-[-1] bottom-0 left-0 md:rounded-br-[50px] md:rounded-tr-[50px]">
          <Image
            src="/icons/bgSignInForm/bgShine.png"
            alt="just color"
            width={324}
            height={251}
            className="z-0 rounded-b-[12px] md:hidden"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          ></Image>
          <Image
            src="/icons/bgSignInForm/bgDark.png"
            alt="just color"
            width={326}
            height={275}
            className="absolute z-1 bottom-0 left-0 rounded-b-[12px] md:hidden"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          ></Image>
          <div className="absolute z-10 hidden md:block md:rounded-br-[50px] bottom-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="380"
              height="178"
              viewBox="0 0 380 178"
              fill="none"
              className="rounded-br-[50px]"
            >
              <path
                d="M118.912 138.444C163.869 114.288 192.981 78.3039 215.151 58.5261C237.321 38.7483 259.995 29.4649 309.374 43.9955C358.753 58.5261 391 0 391 0L382.938 178H0C0 178 77.1534 160.882 118.912 138.444Z"
                fill="#00BFDE"
                fill-opacity="0.32"
              />
            </svg>
          </div>
          <div className="absolute z-10 hidden md:block md:rounded-br-[50px] bottom-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="380"
              height="181"
              viewBox="0 0 380 181"
              fill="none"
              className="rounded-br-[50px]"
            >
              <path
                d="M0 0C0 0 108 64.5 171 120.5C234 176.5 391 181 391 181H0V0Z"
                fill="white"
                fill-opacity="0.32"
              />
            </svg>
          </div>
          <div className="absolute z-30 bottom-[40px] md:bottom-[183px] left-[20px] flex flex-col px-[60px] md:justify-center md:items-center">
            <h3 className="text-white text-[32px] font-bold mb-2">
              Create Account!
            </h3>
            <p className="text-white text-[16px] mb-3 md:mb-[42px] md:w-[207px] md:text-center ">
              Sing Up if you still don’t have an account...{" "}
            </p>
            <div className="flex justify-end items-end md:justify-center md:items-center">
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

export default SignInForm;
