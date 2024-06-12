import { MobileDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface CustomDatePickerProps {
  className?: string;
}

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  className = "",
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker className={`w-full bg-white ${className}`} />
    </LocalizationProvider>
  );
};
