"use client";

import AppartmenrServices from "@/components/AppartmentService";

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className=" pt-5 px-[30px] pb-10 md:p-7 lg:p-[42px] xl:p-20">
      <AppartmenrServices />
    </div>
  );
}
