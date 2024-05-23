import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { RadioCheckProps } from "@/types/types";

const CheckBox = (props: RadioCheckProps) => {
  return (
    <Checkbox
      sx={{
        padding: "0",
      }}
      checked={props.checked}
      onChange={props.onChange}
      icon={
        <div
          className={`${props.style} border border-main items-center justify-center rounded-xl shadow-button-shadow`}
        >
          <button className=" flex flex-col items-center  flex-shrink-0 text-main text-center font-intro_book text-base font-normal leading-6">
            {props.children}
            {props.text}
          </button>
        </div>
      }
      checkedIcon={
        <div
          className={`${props.style} flex  border border-main/35 items-center justify-center rounded-xl bg-tertial shadow-hover-shadow`}
        >
          <button className=" flex flex-col items-center  flex-shrink-0 text-white text-center font-intro_book text-base font-normal leading-6 ">
            {props.children}
            {props.text}
          </button>
        </div>
      }
    />
  );
};

export default CheckBox;
