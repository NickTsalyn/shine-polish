import React from "react";
import {RadioCheckProps} from "@/types/types";

const CheckBox = (props: RadioCheckProps) => {
 return (
  <button
   disabled={props.disabled}
   className={`${
    props.style
   }  border  flex flex-col  rounded-xl text-center  text-base font-normal items-center justify-between
       ${
        props.isActive
         ? "text-accent bg-light border-main/50 shadow-hover-shadow "
         : "text-main border-main shadow-hover-shadow"
       }
       ${props.disabled && "pointer-events-none opacity-50"}`}
   onClick={props.onClick}
  >
   {props.children}
   {props.text}
  </button>
 );
};

export default CheckBox;
