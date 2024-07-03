"use client";

import KitchenServices from "@/components/Kitchen";
import { FooterImg } from "@/global/images";

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className=" p-5 md:p-7 lg:p-[42px] xl:p-20">
      <KitchenServices />
      <FooterImg />
    </div>
  );
}
