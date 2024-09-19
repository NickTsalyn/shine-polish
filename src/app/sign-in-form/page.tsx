"use client";

import SignInForm from "@/components/SignInForm";

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className=" py-5 md:p-7 lg:py-20 ">
      <SignInForm />
    </div>
  );
}
