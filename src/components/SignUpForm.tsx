import React from "react";
import Input from "./UI/Input";

interface SignUpProps {}

export default function SignUpForm({}: SignUpProps) {
  return (
    <div className="flex flex-col items-center w-[756px] h-[516px] relative">
      
      <h3 className="h3 text-main text-center block">Create a New Account</h3>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex w-[756px] h-[516px] rounded-xl overflow-hidden relative">
          <div className="block clip-path-signup-1 w-[771px] h-[484px] bg-tertial opacity-[.05] absolute bottom-0 left-0"></div>
          <div className="block clip-path-signup-2 w-[570px] h-[277px] bg-tertial opacity-[.32] absolute bottom-0 right-0 -z-10"></div>
        </div>
      </div>
    </div>
  );
}
