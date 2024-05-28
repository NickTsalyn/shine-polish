"use client";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import React, { useState } from "react";

import Button from "./UI/Button";
import Input from "./UI/Input";
import {
  DesctopScreenFirstWave,
  DesctopScreenSecondWave,
  MobileScrinWaves,
  SocialMediaSignIn,
  TabletScreenFirstWave,
  TabletScreenSecondWave,
} from "./UI/SignInDesing";

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
      <div className="mx-auto my-0 relative w-[320px] md:w-[760px] lg:w-[960px] h-auto md:h-[516px] lg:h-[575px] rounded-[12px] md:rounded-[50px] md:flex shadow-main-shadow">
        <div className="absolute top-0 right-0 z-10 md:top-4 md:right-4">
          <Button style="close-button" type="button" onClick={handleClose}>
            <span className="text-main md:text-white ">
              <CloseRoundedIcon />
            </span>
          </Button>
        </div>
        <div className="pt-4 md:pt-[76px] lg:pt-[80px] pl-8 pr-8 flex flex-col md:items-center lg:w-[480px]">
          <h2 className="text-main text-[40px] lg:text-[48] text-center mb-4 md:mb-5 lg:mb-6">
            Sign in
          </h2>

          <div className="flex gap-[24px] lg:gap-[48px] mb-5 md:mb-7 lg:mb-9 justify-center">
            <SocialMediaSignIn />
          </div>
          <p className="text-text text-[14px] lg:text-[20px] mb-[10px]">
            Or sing using E-Mail Address
          </p>
          <Input style="sign-in-input" type="email" placeholder="Email*" />
          <Input style="sign-in-input" type="password" placeholder="Password" />
          <p className="text-accent text-[14px] lg:text-[20px] mb-[18px] md:mb-[30px]">
            Forgot your password?
          </p>
          <Button style="auth-sign" type="button">
            <span className="text-white text-[20px] uppercase">Sing In</span>
          </Button>
        </div>

        <div className="md:bg-main md:w-[380px] lg:w-[480px] md:h-[516px] lg:h-[576px] relative z-[-1] bottom-0 left-0 md:rounded-br-[50px] md:rounded-tr-[50px]">
          <div>
            <MobileScrinWaves />
          </div>
          <div className="absolute z-11 hidden md:block lg:hidden md:rounded-br-[50px] bottom-0 right-0 md:w-[380px] lg:w-[480px] md:h-[178px] lg:h-[204px] lg:bottom-0">
            <TabletScreenFirstWave />
          </div>
          <div className=" md:w-[380px] lg:w-[480px] md:h-[181px] lg:h-[250px] absolute z-10 hidden md:block md:rounded-br-[50px] bottom-0 right-0">
            <TabletScreenSecondWave />
          </div>
          <div className="lg:w-[480px]lg:h-[250px] absolute z-10 hidden lg:block lg:rounded-br-[50px] bottom-0 right-0">
            <DesctopScreenFirstWave />
          </div>
          <div className="absolute z-11 hidden lg:block lg:rounded-br-[50px] bottom-0 right-0  lg:w-[480px]  lg:h-[204px]">
            <DesctopScreenSecondWave />
          </div>
          <div className="absolute z-30 bottom-[40px] md:bottom-[183px] left-[20px] flex flex-col md:px-[60px] md:justify-center md:items-center">
            <h3 className="text-white text-[32px] font-bold mb-2 lg:mb-[42px] lg:font-light lg:text-[48px]">
              Create Account!
            </h3>
            <p className="text-white text-[16px] mb-3 md:mb-[42px] md:w-[207px] md:text-center lg:text-[24px] lg:w-[323px]">
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
