"use client";
import React from "react";
// import {
//   CrossroadImage,
//   // DatePikerCustomIcon,
//   DateTimeImage,
//   DateIcon,
//   TimeIcon,
// } from "@/global/images";
import Input from "../UI/Input";
import dayjs, { Dayjs } from "dayjs";
import CustomDesctopDatePicker from "../UI/DateTimePicker";
import useFormStorage from "@/hooks/formStorage";
// import { DigitalClock } from "@mui/x-date-pickers";
import TimePickerComponent from "../UI/TimePicker";
// import TimePickerComponent from "../UI/TimePicker";
// import { register } from "module";

const Step4 = () => {
  const { form, handleInputChange, handleCustomChange } = useFormStorage(
    {
      adress: "",
      aptSuite: "",
      city: "",
      zipCode: "",
      selectedDate: dayjs().format("MM/DD/YYYY"),
      time: dayjs().format("h:mm"),
    },
    "formKey"
  );

  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());
  // const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const [selectedTime, setSelectedTime] = React.useState<Dayjs | null>(dayjs());
  const [isDateCalendarOpen, setIsDateCalendarOpen] = React.useState(false);
  const [isTimeCalendarOpen, setIsTimeCalendarOpen] = React.useState(false);
  // const [value, setValue] = React.useState<Dayjs | null>(dayjs());
  console.log(form.time);
  console.log(form.selectedDate);

  // Календар з датами

  // const handleDateChange = (date: Dayjs | null) => {
  //   setSelectedDate(date);
  //   console.log("Selected date:", date);
  //   setIsDateCalendarOpen(false);
  // };

  // const handleTimeChange = (time: Dayjs | null) => {
  //   setSelectedTime(time);
  //   console.log("Selected time_4:", time);
  //   setIsTimeCalendarOpen(false);
  // };

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
    handleCustomChange("selectedDate", date ? date.format("MM/DD/YYYY") : null);
    setIsDateCalendarOpen(false);
  };

  const handleTimeChange = (time: Dayjs | null) => {
    setSelectedTime(time);
    handleCustomChange("time", time ? time.format("h:mm a") : null);
    setIsTimeCalendarOpen(false);
  };

  return (
    <div className="p-4 md:p-6 lg:p-9 h-[1080px]">
      <div className="flex mb-[72px] lg:mb-[92px]">
        <div className="flex flex-col md:mr-1 lg:mr-[164px]">
          <h1 className="h1 md:text-[36px] mb-[32px]">
            Where would you like us to clean?
          </h1>
          <form className="flex flex-col gap-5">
            <div className="md:flex flex-col gap-5">
              <div className="md:w-[508px] lg:w-[774px] md:h-[40px] ">
                <Input
                  type="text"
                  style="form-input"
                  placeholder="Adress*"
                  onChange={handleInputChange}
                  value={form.adress as string}
                  name="adress"
                ></Input>
              </div>
              <div className="md:w-[444px] lg:w-[672px] md:h-[40px] ">
                <Input
                  type="text"
                  style="form-input"
                  placeholder="Apt/Suite#"
                  onChange={handleInputChange}
                  value={form.aptSuite as string}
                  name="aptSuite"
                ></Input>
              </div>
            </div>
            <div className="md:flex gap-5">
              <div className="md:w-[332px] lg:w-[504px] md:h-[40px] ">
                <Input
                  type="text"
                  style="form-input"
                  placeholder="City*"
                  onChange={handleInputChange}
                  value={form.city as string}
                  name="city"
                ></Input>
              </div>
              <div className="md:w-[128px] lg:w-[348px] md:h-[40px] ">
                <Input
                  type="text"
                  style="form-input"
                  placeholder="Zip Code*"
                  onChange={handleInputChange}
                  value={form.zipCode as number}
                  name="zipCode"
                ></Input>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="hidden lg:block md:w-[400px] md:h-[300px]">
          <CrossroadImage />
        </div> */}
      </div>
      <div>
        <h2 className="h1 md:text-[36px] mb-[32px]">
          When would you like us to clean?
        </h2>

        <div className="w-full md:w-[712px] flex flex-wrap md:flex-nowrap justify-between items-start  mb-4">
          <div className="w-[300px]">
            <p className="text-subtext text-4 lg:text-5 mb-5">
              Choose a date and time you would like to us to come.
            </p>
          </div>
          <div>
            <CustomDesctopDatePicker
              onChange={handleDateChange}
              value={selectedDate}
            />
          </div>
          <div>
            <TimePickerComponent onChange={handleTimeChange} />
          </div>
        </div>
        {/* <div className="w-[280px] md:w-[400px] md:h-[160px]">
          <DateTimeImage />
        </div> */}
        <div className="w-[200px] flex justify-end">
          <p className="text-accent text-[24px] lg:text-[32px] text-center">
            {selectedDate
              ? `Your cleaning date: ${form.selectedDate}`
              : "You did not choose a date and time for cleaning."}
            <br />
            {form.time ? ` ${form.time}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Step4;
