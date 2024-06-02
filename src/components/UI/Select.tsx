"use client";

import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from "@mui/material";
import { useState } from "react";

const StyledMenuItem = styled(MenuItem)(() => ({
  fontFamily: "Lato",
}));

type BasicSelectProps = {
  value: string;
  items: { value?: string | number; label: string; color?: string }[];
  onChange: (event: SelectChangeEvent<string | number>) => void;
  label?: string;
  placeholder?: string;
  name?: string;
};

export default function BasicSelect(props: BasicSelectProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Box className="min-w-[280px] lg:text-[24px] xl:text-[32px]">
      {props.label && (
        <label className="body lg:text-[24px] xl:text-[32px]">
          {props.label}
        </label>
      )}

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
          ".MuiSelect-icon": {
            color: " #E6BA95",
          },
        }}
      >
        <Select
          id="demo-simple-select"
          value={props.value}
          name={props.name}
          displayEmpty
          renderValue={(selected) => {
            if (selected === "") {
              return props.placeholder ? (
                <p
                  className="lg:text-[24px] xl:text-[32px] text-secondary-placeholder/50 body"
                  style={{ fontFamily: "Lato" }}
                >
                  {props.placeholder}
                </p>
              ) : (
                <p
                  className="lg:text-[24px] xl:text-[32px] text-secondary-placeholder/50 body"
                  style={{ fontFamily: "Lato" }}
                >
                  {props.items.length > 0 && props.items[0].label}
                </p>
              );
            }
            const selectedItem = props.items.find(
              (item) => item.value === selected
            );
            return (
              <p
                className="lg:text-[24px] xl:text-[32px] text-secondary-placeholder/50 body"
                style={{ fontFamily: "Lato" }}
              >
                {selectedItem ? selectedItem.label : selected}
              </p>
            );
          }}
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
          {props.items.map((item) => (
            <StyledMenuItem
              key={item.value}
              value={item.value}
              className="body lg:text-[24px] w-[86%] bg-white text-secondary border-b border-solid border-secondary mx-auto"
            >
              {item.label}
            </StyledMenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
