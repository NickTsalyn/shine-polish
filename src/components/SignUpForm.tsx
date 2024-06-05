import React from "react";
import Input from "./UI/Input";
import Button from "@/components/UI/Button";

import whatsup from "../../public/icons/sign-in/whatsapp-icon.svg";
import google from "../../public/icons/sign-in/google-icon.svg";
import facebook from "../../public/icons/sign-in/facebook.svg";
import Image from "next/image";


interface SignUpProps {}

export default function SignUpForm({}: SignUpProps) {
  return (
    <div className="w-full md:w-[760px] lg:w-[960px] md:p-8  mx-auto">
      <div className="flex flex-col items-center  relative">
        <h3 className="h2 text-main text-center block mb-3 md:mb-1.5">
          Create a New Account
        </h3>
        <h4 className="text-base/[22px] md:text-[18px] text-text text-center block mb-8 md:mb-4">
          Let’s set up your account. Already have one?{" "}
          <a href="/" className="text-tertial">
            Sign In here
          </a>
        </h4>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-x-[77px] gap-y-10 justify-between w-full lg:w-[960px] ">
          <div className="flex flex-col gap-3 md:w-[300px]">
            <label htmlFor="text">
              <span className="text-main text-[14px] md:text-[16px] ml-3">
                Name:
              </span>
              <Input type="text" style="sign-up-input" />
            </label>
            <label htmlFor="email">
              <span className="text-main text-[14px] md:text-[16px] ml-3">
                Email:
              </span>
              <Input type="email" style="sign-up-input" />
            </label>
            <label htmlFor="password">
              <span className="text-main text-[14px] md:text-[16px] ml-3">
                Password:
              </span>
              <Input type="password" style="sign-up-input" />
            </label>
          </div>
          <div className="flex flex-col order-last md:order-none gap-4 md:gap-9 w-[256px] mx-auto md:m-0">
            <h4 className="h4 text-text text-start inline-block">
              You can also sing up with these:
            </h4>
            <div className="flex gap-6">
              <div className="w-16 h-16 border border-tertial rounded-full p-3 content-center vertical-baseline">
                <Image src={facebook} alt="whatsup-icon"></Image>
              </div>
              <div className="w-16 h-16 border border-tertial rounded-full p-3 content-center vertical-baseline">
                <Image src={whatsup} alt="whatsup-icon"></Image>
              </div>
              <div className="w-16 h-16 border border-tertial rounded-full p-3 content-center vertical-baseline">
                <Image src={google} alt="whatsup-icon" width={36}></Image>
              </div>
            </div>
          </div>
          <div className="flex gap-x-8 md:gap-x-5 items-center justify-center">
            <p className="block text-text text-[10px]/3 w-[120px] md:w-[154px]">
              By submitting the form you are agree to our{" "}
              <span className="text-tertial">Terms of Service</span>
            </p>
            <Button type="submit" style="auth-sign">
              <span className="text-white text-[20px] uppercase">Sing Up</span>
            </Button>
          </div>
        </div>

        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 ">
          <div className="flex w-[768px] h-[516px] rounded-xl shadow-main-shadow overflow-hidden relative">
            <div className="block clip-path-signup-1 w-[771px] h-[484px] bg-tertial opacity-[.05] absolute bottom-0 left-0  -z-20"></div>
            <div className="block clip-path-signup-2 w-[570px] h-[277px] bg-tertial opacity-[.32] absolute bottom-0 right-0 -z-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
