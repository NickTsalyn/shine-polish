import React from "react";
import Checkbox from "@mui/material/Checkbox";

type CheckBoxProps = {
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const CheckBox = (props: CheckBoxProps) => {
  return (
    <Checkbox
      sx={{
        padding: "0",
      }}
      checked={props.checked}
      onChange={props.onChange}
      icon={
        <div className="flex w-[176px] h-[120px] border border-teal-700 items-center justify-center rounded-xl">
          <button className=" flex flex-col items-center  flex-shrink-0 text-teal-700 text-center font-intro_book text-base font-normal leading-6">
            {props.value}
          </button>
        </div>
      }
      checkedIcon={
        <div className="flex w-[176px] h-[120px] border border-red-800 items-center justify-center rounded-xl">
          <button className=" flex flex-col items-center  flex-shrink-0 text-teal-700 text-center font-intro_book text-base font-normal leading-6">
            {props.value}
          </button>
        </div>
      }
    />
  );
};

export default CheckBox;
