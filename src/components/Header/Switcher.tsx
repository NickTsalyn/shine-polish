import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const ThemeSwitch = styled(Switch)(() => ({
  width: 44,
  height: 22,
  padding: 0,
  margin: 0,
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(22px)",
      color: "#fff", 
      "& + .MuiSwitch-track": {
        backgroundColor: "#006778", 
        opacity: 1,
        border: "none",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 18,
    height: 18,
  },
  "& .MuiSwitch-track": {
    width: 44,
    height: 22,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.25)", 
    opacity: 1,
  },
}));

export default ThemeSwitch;
