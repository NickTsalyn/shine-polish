import { useState } from "react";
import { Tooltip, TooltipProps } from "@mui/material";

export const CustomTooltip = (props: JSX.IntrinsicAttributes & TooltipProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip
      {...props}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      onClick={() => setOpen(!open)}
      classes={{
        tooltip:
          " bg-[#E6BA95CC] text-white text-center text-xs md:text-sm lg:text-base rounded-xl w-20 md:w-28 lg:w-36 p-2 lg:p-3",
      }}
    />
  );
};
