import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { RadioCheckProps } from "@/types/types";

const CheckBox = (props: RadioCheckProps) => {
  return (
   
    <button className={`${props.style}  border   justify-center  flex flex-col items-center  rounded-xl  text-center font-intro_book text-base font-normal leading-6 ${props.isActive ? 'text-white bg-tertial border-main/35 shadow-hover-shadow ' : 'text-main border-main shadow-hover-shadow'}`} onClick = {props.onClick}>
      {props.children}
      {props.text}
    </button>

  );
};

export default CheckBox;
