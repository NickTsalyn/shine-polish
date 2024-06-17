import { styled } from "@mui/material";

const CustomCalendarWrapper = styled("div")(() => ({
  borderRadius: "12px",
  overflow: "hidden",
  "& .MuiPickersDay-today": {
    backgroundColor: "#E6BA95",
    color: "white",
    borderColor: "#E6BA95",
    "&:hover": {
      backgroundColor: "#E6BA95",
      color: "white",
    },
  },
  "& .MuiButtonBase-root": {
    "&:hover": {
      backgroundColor: "#DE005D",
      color: "white",
    },
  },
  "& .MuiPickersDay-root": {
    borderRadius: "50%",
    fontSize: "0.8rem",
    padding: "4px",
    "&:hover": {
      backgroundColor: "#DE005D",
      color: "white",
    },
  },
  "& .MuiPickersDay-withMargin": {
    margin: "0px 4px",
    backgroundColor: "white",
  },
  "& .Mui-selected": {
    backgroundColor: "#DE005D",
    color: "white",
  },
  "& .MuiTypography-h4": {
    color: "#DE005D",
  },
  "& .MuiDigitalClock-item": {
    borderRadius: "12px",

    "&:hover": {
      backgroundColor: "#DE005D",
      color: "#fff",
    },
  },
  "& .MuiDigitalClock-selected": {
    backgroundColor: "#DE005D",
    color: "#fff",
  },

  "& .MuiDigitalClock-pin": {
    backgroundColor: "#DE005D",
  },
  "& .MuiMenuItem-root": {
    borderRadius: "12px",
    borderBottom: "1px solid transparent",
    backgroundImage: `linear-gradient(90deg, #E6BA95 34.9%, rgba(230, 186, 149, 0.00) 100%);`,
    "&:hover": {
      backgroundColor: "#DE005D",
      color: "#fff",
    },
  },
  "& .MuiDigitalClock-root": {
    padding: "8px 0px",
    backgroundColor: "#fff",
  },
}));

export default CustomCalendarWrapper;
