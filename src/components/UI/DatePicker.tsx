import * as React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { pickersLayoutClasses } from "@mui/x-date-pickers/PickersLayout";
import dayjs, { Dayjs } from "dayjs";
import {
  MobileDatePicker,
  MobileTimePicker,
  StaticDatePicker,
} from "@mui/x-date-pickers";
import { styled } from "@mui/material";
import useFormStorage from "@/hooks/formStorage";
import { DateIcon } from "@/global/images";
// import { handleCustomChange } from "@/hooks/formStorage";
interface CustomDesctopDatePickerProps {
  value: Dayjs | string | number | any | null | undefined;
  onChange: (date: Dayjs | null) => void;
  disablePast?: boolean;
  views?: string[];
  orientation?: "portrait" | "landscape";
  openTo?: "day" | "month" | "year";
  slots?: { actionBar: () => null };
}

const today = dayjs();

const CustomCalendarWrapper = styled("div")(({ theme }) => ({
  borderRadius: "12px",
  overflow: "hidden",
  "& .MuiPickersDay-today": {
    backgroundColor: "#E6BA95",
  },
  "& .MuiPickersDay-current": {
    color: "#5FE4F9E5",
    backgroundColor: "#DE005D",
  },
  "& .MuiPickersDay-Selected": {
    backgroundColor: "#DE005D",
    color: theme.palette.common.white,
  },
  "& .MuiPickersDay-dayDisabled": {
    color: theme.palette.grey[500],
  },
  "& .MuiPickersDay-dayOutsideMonth": {
    color: theme.palette.grey[500],
  },
  "& .MuiPickersDay-root": {
    borderRadius: "50%",
    fontSize: "0.8rem",
    padding: "4px",
    "&:hover": {
      backgroundColor: "#DE005D",
      color: theme.palette.common.white,
    },
  },
  "& .MuiTypography-h4": {
    color: "#DE005D", // accent
  },
  "& .MuiPickersLayout-root": {
    padding: "8px 0px",
    backgroundColor: theme.palette.background.paper,
  },
  // "& .MuiDateCalendar-root": {
  //   borderRadius: "0px", // Reset border-radius for internal container
  // },
}));

// Update the component to use the interface

const CustomDesctopDatePicker: React.FC<CustomDesctopDatePickerProps> = ({
  onChange,
  disablePast = false,
  views = ["year", "month", "day"],
  orientation = "portrait",
  openTo = "day",
}) => {
  const { form, handleCustomChange } = useFormStorage(
    {
      selectedDate: dayjs().format("MM/DD/YYYY"),
      time: dayjs().format("h:mm A"),
    },
    "formKey"
  );
  // const [value, setValue] = React.useState<Dayjs | null>(dayjs());
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());
  const [isDateCalendarOpen, setIsDateCalendarOpen] = React.useState(false);

  const handleDateChange = (date: Dayjs | null) => {
    handleCustomChange("selectedDate", date ? date.format("MM/DD/YYYY") : null);
    onChange(date);
    setSelectedDate(date);
    setIsDateCalendarOpen(false);
  };

  const handleDateButtonClick = () => {
    setIsDateCalendarOpen(!isDateCalendarOpen);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="relative w-[100px] mr-5 ">
        <button
          type="button"
          onClick={handleDateButtonClick}
          className="flex flex-col items-center"
        >
          <DateIcon />
          <span className="text-secondary">Choose Date</span>
        </button>
        {isDateCalendarOpen && (
          <div className="absolute -left-[18px] md:-left-[200px]  bottom-[22px] shadow-main-shadow rounded-xl w-[300px] md:w-[320px">
            <CustomCalendarWrapper>
              <StaticDatePicker
                value={dayjs(form.selectedDate as string, "MM/DD/YYYY")}
                onChange={handleDateChange}
                disablePast
                views={["year", "month", "day"]}
                orientation="portrait"
                openTo="day"
                slots={{
                  actionBar: () => null,
                }}
                sx={{
                  width: "100%",
                  "@media (max-width: 600px)": {
                    width: "100%",
                  },
                }}
              />
            </CustomCalendarWrapper>
          </div>
        )}
      </div>
    </LocalizationProvider>
  );
};
export default CustomDesctopDatePicker;
