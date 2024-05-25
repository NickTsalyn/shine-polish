"use client";

import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

type BasicSelectProps = {
  value: string | number;
  label: string;
  onChange: (event: SelectChangeEvent<string | number>) => void;
  items: { value: string | number; label: string; color?: string }[];
  placeholder: string;
};

export default function BasicSelect(props: BasicSelectProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Box className="min-w-[280px] lg:text-[24px]">
      <label className="body lg:text-[24px]">{props.label}</label>

      <FormControl
        fullWidth
        sx={{
          padding: "12",
          border: "2px solid #E6BA95",
          borderRadius: "12px",
          transition: "all 0.3s ease",
          "&:hover": {
            border: "3px solid #E6BA95",
            background: "var(--Color, #FFF)",
            boxShadow:
              "0px 30px 60px -12px rgba(50, 50, 93, 0.25), 0px 18px 36px -18px rgba(0, 0, 0, 0.30)",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        <Select
          id="demo-simple-select"
          value={props.value}
          displayEmpty
          onChange={props.onChange}
          open={open}
          onOpen={handleOpen}
          onClose={handleOpen}
          className=" body focus:outline-none"
          MenuProps={{
            PaperProps: {
              style: {
                borderRadius: "20px",
              },
            },
          }}
        >
          <MenuItem value="" disabled>
            <em className="lg:text-[24px] text-secondary-placeholder/50 not-italic body opacity-50">
              {props.placeholder}
            </em>
          </MenuItem>
          {props.items.map((item) => (
            <MenuItem
              key={item.value}
              value={item.value}
              className="body lg:text-[24px] w-[86%] bg-white text-secondary border-b border-solid border-secondary mx-auto"
            >
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
