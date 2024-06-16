"use client";

import SignUpForm from "@/components/SignUpForm";

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="p-5 md:p-0 md:py-7 lg:py-20">
      <SignUpForm />
    </div>
  );
}