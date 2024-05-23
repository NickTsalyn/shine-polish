import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const CustomButton = styled(Button)(() => ({
  backgroundColor: "#006778",
  fontFamily: "Lato",
  fontStyle: "normal",
  width: "100%",
  color: "white",
  "&:hover": {
    backgroundColor: "#02424DCC",
  },
}));

export default CustomButton;
