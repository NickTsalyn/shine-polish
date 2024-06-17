import * as React from "react";
import { DigitalClock, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { styled } from "@mui/material";
import { TimeIcon } from "@/global/images";
import useFormStorage from "@/hooks/formStorage";
import CustomCalendarWrapper from "./CalendarWrapper";

interface CustomTimePickerProps {
  onChange: (time: Dayjs | null) => void;
}

// const CustomTimePicker = styled("div")(({ theme }) => ({
//   borderRadius: "12px",
//   overflow: "hidden",

//   "& .MuiDigitalClock-item": {
//     borderRaius: "12px",
//     "&:hover": {
//       backgroundColor: "#DE005D",
//       color: theme.palette.common.white,
//     },
//   },

//   "& .MuiDigitalClock-Selected": {
//     backgroundColor: "#DE005D",
//     color: theme.palette.common.white,
//   },

//   "& .MuiButtonBase-root ": {
//     borderRadius: "12px",
//     "&:hover": {
//       backgroundColor: "#DE005D",
//       color: theme.palette.common.white,
//     },
//   },

//   "& .Mui-selected": {
//     backgroundColor: "#DE005D",
//   },
//   "& .MuiDigitalClock-root": {
//     padding: "8px 0px",
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

export default function TimePickerComponent({
  onChange,
}: CustomTimePickerProps) {
  const { form, handleCustomChange } = useFormStorage(
    {
      date: dayjs().format("dddd, MMMM D, YYYY"),
      time: dayjs().format("h:mm A"),
    },
    "form"
  );
  // const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());
  const [isTimeCalendarOpen, setIsTimeCalendarOpen] = React.useState(false);
  const [value, setValue] = React.useState<Dayjs | null>(
    form.time ? dayjs(form.time as string, "h:mm A") : dayjs()
  );
  const clockRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutsideClock = (event: MouseEvent) => {
      if (
        clockRef.current &&
        !clockRef.current.contains(event.target as Node)
      ) {
        setIsTimeCalendarOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutsideClock);
    return () => {
      document.removeEventListener("click", handleClickOutsideClock);
    };
  }, []);

  const handleTimeChange = (time: Dayjs | null) => {
    if (time) {
      handleCustomChange("time", time.format("h:mm A"));
      setValue(time);
      onChange(time);
      setIsTimeCalendarOpen(false);
    }
  };

  const handleTimeButtonClick = () => {
    setIsTimeCalendarOpen(!isTimeCalendarOpen);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="w-[100px] relative">
        <button
          type="button"
          onClick={handleTimeButtonClick}
          className="flex flex-col items-center"
        >
          <TimeIcon />
          <span className="text-secondary">Choose Time</span>
        </button>
        {isTimeCalendarOpen && (
          <div
            // ref={clockRef}
            className="absolute right-0 bottom-[22px] shadow-main-shadow rounded-xl"
          >
            <CustomCalendarWrapper>
              <DigitalClock
                value={value}
                onChange={handleTimeChange}
                skipDisabled
                minTime={dayjs("2022-04-17T08:00")}
                maxTime={dayjs("2022-04-17T16:30")}
                timeStep={30}
                // shouldDisableTime={shouldDisableTime}
                classes={
                  {
                    // selected: "custom-selected",
                    // disabled: "Mui-disabled",
                    // pin: "MuiPickersClock-pin",
                    // root: "MuiDigitalClock-root",
                    // selected: "Mui-selected",
                  }
                }
              />
            </CustomCalendarWrapper>
          </div>
        )}
      </div>
    </LocalizationProvider>
  );
}
