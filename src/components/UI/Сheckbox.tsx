import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { RadioCheckProps } from "@/types/types";

const CheckBox = (props: RadioCheckProps) => {
  return (
    <div
    className={`${props.style}  border border-main items-center justify-center rounded-xl shadow-button-shadow ${props.isActive ? 'bg-tertial border-main/35 shadow-hover-shadow ': 'border-main shadow-hover-shadow' }`} onClick = {props.onClick}
  >
    <button className={` flex flex-col items-center text-main text-center font-intro_book text-base font-normal leading-6 ${props.isActive ? 'text-white' : 'text-main'}`}>
      {props.children}
      {props.text}
    </button>
  </div>
  );
};

export default CheckBox;
