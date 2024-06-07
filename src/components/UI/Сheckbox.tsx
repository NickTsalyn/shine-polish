import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { RadioCheckProps } from "@/types/types";

const CheckBox = (props: RadioCheckProps) => {
  return (
    <div
    className={`${props.style}  border  items-center justify-center rounded-xl  ${props.isActive ? 'bg-tertial border-main/35 shadow-hover-shadow ': 'border-main shadow-hover-shadow' }`} 
  >
    <button className={` flex flex-col items-center t text-center font-intro_book text-base font-normal leading-6 ${props.isActive ? 'text-white' : 'text-main'}`} onClick = {props.onClick}>
      {props.children}
      {props.text}
    </button>
  </div>
  );
};

export default CheckBox;
