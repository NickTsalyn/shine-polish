import Button from "@mui/material/Button";

type PropsButtton = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
};
