import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { pickersLayoutClasses } from "@mui/x-date-pickers/PickersLayout";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { PickersActionBarProps } from "@mui/x-date-pickers/PickersActionBar";
import dayjs, { Dayjs } from "dayjs";

function ActionList(props: PickersActionBarProps) {
  const { onAccept, onClear, onCancel, onSetToday, className } = props;
  const actions = [
    { text: "Accept", method: onAccept },
    { text: "Clear", method: onClear },
    { text: "Cancel", method: onCancel },
    { text: "Today", method: onSetToday },
  ];
  return (
    // Propagate the className such that CSS selectors can be applied
    <List className={className}>
      {actions.map(({ text, method }) => (
        <ListItem key={text} disablePadding>
          <ListItemButton onClick={method}>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

// Define the interface for the component props
interface CustomDesctopDatePickerProps {
  onChange: (date: Dayjs | null) => void;
}
const today = dayjs();
const yesterday = dayjs().subtract(1, "day");

// Update the component to use the interface
export default function CustomDesctopDatePicker({
  onChange,
}: CustomDesctopDatePickerProps) {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  const handleDateChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    onChange(newValue);
    console.log("Selected date:", newValue);
  };
  //   const handleDateChange = (date: Dayjs | null) => {
  //     setSelectedDate(date);
  //     console.log("Selected date:", date);
  //   };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        value={today}
        onChange={handleDateChange}
        disablePast
        views={["year", "month", "day"]}
        slotProps={{
          layout: {
            sx: {
              [`.${pickersLayoutClasses.actionBar}`]: {
                gridColumn: 1,
                gridRow: 2,
              },
            },
          },
        }}
        slots={{
          actionBar: ActionList,
        }}
      />
    </LocalizationProvider>
  );
}
