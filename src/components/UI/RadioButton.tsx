import React from "react";

import Radio from "@mui/material/Radio";

type RadioButtonProps = {
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  checked,
  onChange,
}) => {
  return (
    <Radio
      sx={{
        padding: "0",
      }}
      checked={checked}
      onChange={onChange}
      icon={
        <div className="flex w-[176px] h-[120px] border border-teal-700 items-center justify-center rounded-xl">
          <button className=" flex flex-col items-center  flex-shrink-0 text-teal-700 text-center font-intro_book text-base font-normal leading-6">
            {value}
          </button>
        </div>
      }
      checkedIcon={
        <div className="flex w-[176px] h-[120px] border border-red-800 items-center justify-center rounded-xl">
          <button className=" flex flex-col items-center  flex-shrink-0 text-teal-700 text-center font-intro_book text-base font-normal leading-6">
            {value}
          </button>
        </div>
      }
    />
  );
};
export default RadioButton;
