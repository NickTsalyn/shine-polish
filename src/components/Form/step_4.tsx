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
      selectedDate: dayjs().format("MM/DD/YYYY"),
      time: dayjs().format("h:mm a"),
    },
    "formKey"
  );

  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());
  const [isDateCalendarOpen, setIsDateCalendarOpen] = React.useState(false);
  const [isTimeCalendarOpen, setIsTimeCalendarOpen] = React.useState(false);
  console.log(form.time);
  console.log(form.selectedDate);

  const handleDateChange = (date: Dayjs | null): void => {
    const newDate = date ? date.format("MM/DD/YYYY") : null;
    handleCustomChange("selectedDate", newDate);
    console.log(newDate);
    setIsDateCalendarOpen(false);
  };

  const handleTimeChange = (time: Dayjs | null): void => {
    const newTime = time ? time.format("HH:mm") : null;
    handleCustomChange("time", newTime);
    console.log(newTime);
    setIsTimeCalendarOpen(false);
  };
  const handleApplyButtonClick = () => {
    localStorage.setItem("formKey", JSON.stringify(form));
    console.log(form);
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
          <div className="w-[280px]  md:w-[600px] lg:w-[680px] ">
            <DateTimeCleaning form={form} />
          </div>
          <div className="w-[200px] md:w-auto lg:w-[400px]">
            <button
              type="button"
              onClick={handleApplyButtonClick}
              className="w-auto lg:w-[400px] px-4 py-2 h-full rounded-xl bg-accent hover:bg-[#DE005D] text-white font-bold lg:text-[20px] lg:px-6 lg:py-3"
            >
              Yes, I want cleaning on this date
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Step4;
