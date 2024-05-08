import Image from "next/image";
import React from "react";
import before from '../images/Before-bath.jpg'
import after from '../images/After-bath.jpg'

interface BeforeAfterProps {
  children?: React.ReactNode;
}

export default function BeforeAfter({ children }: BeforeAfterProps) {
  return (
    <div className="flex">
      <div className="block w-[870px] h-[533px] bg-red-400 clip-path-swiper-before absolute">
        <Image src={before} alt="" fill={true} style={{objectFit: "cover"}}/>
      </div>
      <div className="block w-[982px] h-[533px] bg-blue clip-path-swiper-after absolute left-[576px]">
        <Image src={after} alt="" fill={true} style={{objectFit: "cover"}}/>
      </div>
    </div>
  );
}
