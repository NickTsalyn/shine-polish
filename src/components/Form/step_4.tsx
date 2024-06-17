"use client";
import React from "react";

import dayjs, { Dayjs } from "dayjs";
import CustomDesctopDatePicker from "../UI/DatePicker";
import useFormStorage from "@/hooks/formStorage";
import TimePickerComponent from "../UI/TimePicker";
import DateTimeCleaning from "../DateTimeCleaning";
import AddressForm from "../AddressForm";

const Step4 = () => {
  const { form, handleCustomChange } = useFormStorage(
    {
      address: "",
      aptSuite: "",
      city: "",
      zipCode: "",
      date: dayjs().format("dddd, MMMM D, YYYY"),
      time: dayjs().format("h:mm A"),
    },
    "form"
  );

  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());
  const [isDateCalendarOpen, setIsDateCalendarOpen] = React.useState(false);
  const [isTimeCalendarOpen, setIsTimeCalendarOpen] = React.useState(false);
  console.log(form.time);
  console.log(form.selectedDate);

  const handleDateChange = (date: Dayjs | null): void => {
    const newDate = date ? date.format("dddd, MMMM D, YYYY") : null;
    handleCustomChange("date", newDate);
    console.log(newDate);
    setIsDateCalendarOpen(false);
  };

  const handleTimeChange = (time: Dayjs | null): void => {
    const newTime = time ? time.format("hh:mm A") : null;
    handleCustomChange("time", newTime);
    console.log(newTime);
    setIsTimeCalendarOpen(false);
  };

  return (
    <div className="py-4 md:py-6 lg:py-9">
      <div className="flex flex-col mb-[72px] lg:mb-[92px]">
        {/* <div className="flex flex-comd:mr-1 lg:mr-[164px]"> */}
        <h1 className="h1 md:text-[36px] mb-[32px]">
          Where would you like us to clean?
        </h1>

        <AddressForm />
        {/* </div> */}
      </div>
      <div>
        <h2 className="h1 md:text-[36px] mb-[32px]">
          When would you like us to clean?
        </h2>

        <div className="w-full  flex flex-wrap md:flex-nowrap justify-between items-start  mb-8 gap-20">
          <div className="w-full md:w-[400px] lg:w-[800px]">
            <p className="text-subtext text-4 md:text-[20px] lg:text-[24px] mb-5">
              Please select a date and time that is convenient for you. We want
              to accommodate your schedule as much as possible, so please choose
              a time that is most convenient for you.
            </p>
          </div>
          <div className="flex gap-5 w-full md:w-[400px] lg:w-[400px] justify-between items-center">
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
        </div>

        <div className="flex flex-col gap-5 justify-center items-center md:flex-row  md:justify-between md:items-end">
          <div className="w-[280px]  md:w-[600px] lg:w-[800px] ">
            <DateTimeCleaning form={form} />
          </div>
          <div className="w-[200px] md:w-auto lg:w-[400px]"></div>
        </div>
      </div>
    </div>
  );
};
export default Step4;
