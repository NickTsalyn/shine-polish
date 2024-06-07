import React from "react";

import Radio from "@mui/material/Radio";
import { RadioCheckProps } from "@/types/types";

const RadioButton: React.FC<RadioCheckProps> = ({
  style,
  isActive,
  text,
  onClick,
  children,
  onChange,
}) => {
  return (
   
        <div
          className={`${style}  border border-main items-center justify-center rounded-xl shadow-button-shadow ${isActive ? 'bg-tertial border-main/35 shadow-hover-shadow ': 'border-main shadow-hover-shadow' }`} onClick = {onClick}
        >
          <button className={` flex flex-col items-center text-main text-center font-intro_book text-base font-normal leading-6 ${isActive ? 'text-white' : 'text-main'}`}>
            {children}
            {text}
          </button>
        </div>
  )
      }
    
     
       
export default RadioButton;
