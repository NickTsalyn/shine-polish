import * as React from "react";
import { DigitalClock, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { styled } from "@mui/material";
import { TimeIcon } from "@/global/images";
import useFormStorage from "@/hooks/formStorage";

interface CustomTimePickerProps {
  onChange: (time: Dayjs | null) => void;
}

const CustomTimePicker = styled("div")(({ theme }) => ({
  borderRadius: "12px",
  overflow: "hidden",

  "& .MuiPickersTime-Selected": {
    backgroundColor: "#DE005D",
    color: theme.palette.common.white,
  },

  "& .MuiButtonBase-root ": {
    borderRadius: "12px",
    "&:hover": {
      backgroundColor: "#DE005D",
      color: theme.palette.common.white,
    },
  },
  "& .Mui-disabled": {
    color: theme.palette.grey[500],
  },
  "& .MuiPickersTime-Disabled": {
    color: theme.palette.grey[500],
  },
  "& .MuiPickersClock-pin": {
    backgroundColor: "gray",
  },
}));

export default function TimePickerComponent({
  onChange,
}: CustomTimePickerProps) {
  const { form, handleCustomChange } = useFormStorage(
    {
      selectedDate: dayjs().format("MM/DD/YYYY"),
      time: dayjs().format("h:mm A"),
    },
    "formKey"
  );

  const [isTimeCalendarOpen, setIsTimeCalendarOpen] = React.useState(false);
  const [value, setValue] = React.useState<Dayjs | null>(
    form.time ? dayjs(form.time as string, "h:mm A") : dayjs()
  );

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
          <div className="absolute right-0 bottom-[22px] shadow-main-shadow rounded-xl">
            <CustomTimePicker>
              <DigitalClock
                value={value}
                onChange={handleTimeChange}
                skipDisabled
                minTime={dayjs("2022-04-17T08:00")}
                maxTime={dayjs("2022-04-17T16:30")}
                timeStep={30}
              />
            </CustomTimePicker>
          </div>
        )}
      </div>
    </LocalizationProvider>
  );
}

// import * as React from "react";
// import { DigitalClock, LocalizationProvider } from "@mui/x-date-pickers";
// import dayjs, { Dayjs } from "dayjs";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { styled } from "@mui/material";
// import { TimeIcon } from "@/global/images";
// import useFormStorage from "@/hooks/formStorage";

// // import useFormStorage from "@/hooks/formStorage";

// interface CustomTimePickerProps {
//   onChange: (time: Dayjs | null) => void;
// }
// const now = dayjs();

// const CustomTimePicker = styled("div")(({ theme }) => ({
//   borderRadius: "12px",
//   overflow: "hidden",

//   "& .MuiPickersTime-Selected": {
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
//   "& .Mui-disabled": {
//     color: theme.palette.grey[500],
//   },
//   "& .MuiPickersTime-Disabled": {
//     color: theme.palette.grey[500],
//   },
//   "& .MuiPickersClock-pin": {
//     backgroundColor: "gray",
//   },
// }));
// export default function TimePickerComponent({
//   onChange,
// }: CustomTimePickerProps) {
//   const { form } = useFormStorage(
//     {
//       time: dayjs().format("h:mm"),
//     },
//     "formKey"
//   );
//   const [value, setValue] = React.useState<Dayjs | null>(dayjs());
//   const [hoveredTime, setHoveredTime] = React.useState<Dayjs | null>(null);
//   // const [open, setOpen] = React.useState(false);
//   // const [tempValue, setTempValue] = React.useState<Dayjs | null>(null);
//   const [isTimeCalendarOpen, setIsTimeCalendarOpen] = React.useState(false);

//   const [selectedTime, setSelectedTime] = React.useState<Dayjs | null>(dayjs());
//   const handleTimeChange = (time: Dayjs | null) => {
//     setValue(time);
//     onChange(time);
//     setSelectedTime(time);

//     console.log("Selected time:", time);
//     setIsTimeCalendarOpen(false);
//   };
//   const handleTimeButtonClick = () => {
//     setIsTimeCalendarOpen(!isTimeCalendarOpen);
//   };

//   const shouldDisableTime = (time: Dayjs) => {
//     if (!hoveredTime) {
//       return false;
//     }
//     const threeHoursLater = hoveredTime.add(3, "hour");
//     return time.isAfter(threeHoursLater);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div className="w-[100px] relative">
//         <button
//           type="button"
//           onClick={handleTimeButtonClick}
//           className="flex flex-col items-center"
//         >
//           <TimeIcon />
//           <span className="text-secondary">Choose Time</span>
//         </button>
//         {isTimeCalendarOpen && (
//           <div className="absolute right-0 top-[72px] shadow-main-shadow rounded-xl">
//             <CustomTimePicker>
//               <DigitalClock
//                 value={dayjs(form.time as string, "h:mm a")}
//                 //   value={dayjs(form.selectedTime).format("h:mm a")}
//                 onChange={handleTimeChange}
//                 skipDisabled
//                 minTime={dayjs("2022-04-17T08:00")}
//                 maxTime={dayjs("2022-04-17T16:30")}
//                 timeStep={30}
//                 shouldDisableTime={shouldDisableTime}
//               />
//             </CustomTimePicker>
//           </div>
//         )}
//       </div>
//     </LocalizationProvider>
//   );
// }
