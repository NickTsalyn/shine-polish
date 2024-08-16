import React from "react";
import {RadioCheckProps} from "@/types/types";

const CheckBox = (props: RadioCheckProps) => {
 return (
  <button
   disabled={props.disabled}
   className={`${props.style}  border py-1 flex flex-col rounded-xl items-center   
       ${
        props.isActive
         ? "text-accent-light bg-lightBlue/20 border-main shadow-hover-shadow "
         : "text-main border-main shadow-hover-shadow"
       }
       ${props.disabled && "pointer-events-none opacity-30"}`}
   onClick={props.onClick}
  >
   {props.children}
   {/* {props.text} */}
  </button>
 );
};

export default CheckBox;
