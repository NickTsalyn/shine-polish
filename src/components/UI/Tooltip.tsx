import { Tooltip, TooltipProps } from "@mui/material";

export const CustomTooltip = (props: JSX.IntrinsicAttributes & TooltipProps) => (
  <Tooltip
    {...props}
    classes={{
      tooltip:
        " bg-[#E6BA95CC] text-white text-center text-xs md:text-sm lg:text-base rounded-xl w-20 md:w-28 lg:w-36 p-2 lg:p-3",
    }}
  />
);
