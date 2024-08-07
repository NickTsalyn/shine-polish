"use client";
import React, { useEffect } from "react";

import dayjs, { Dayjs } from "dayjs";
import CustomDatePicker from "../UI/DatePicker";
import useFormStorage from "@/hooks/formStorage";
import TimePickerComponent from "../UI/TimePicker";
import DateTimeCleaning from "../DateTimeCleaning";
import AddressForm from "../AddressForm";
import { useFormContext } from "react-hook-form";
import { StepProps } from "@/types/interfaces";

const Step4: React.FC<StepProps> = ({ setStepCompleted }) => {
  const { form, handleCustomChange } = useFormStorage();

  const { control, setError, trigger } = useFormContext();
  const handleDateChange = (date: Dayjs | null): void => {
    handleCustomChange("selectedDate", date ? date.format("MM/DD/YYYY") : null);
  };

  const handleTimeChange = (time: Dayjs | null): void => {
    handleCustomChange("time", time ? time.format("h:mm A") : null);
  };

  const todayDate = dayjs().format("MM/DD/YYYY");
  const isAddressComplete =
    form.address.street &&
    form.address.city &&
    form.address.state &&
    form.address.zip;
  const isStepCompleted = isAddressComplete && form.selectedDate !== todayDate;

  useEffect(() => {
    isStepCompleted ? setStepCompleted(4) : null;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, setStepCompleted, todayDate]);

  return (
    <div className="py-4 md:py-6 lg:py-9">
      <div className="flex flex-col mb-[72px] lg:mb-[92px]">
        <h1 className="h1 md:text-[36px] mb-[32px]">
          Where would you like us to clean?
        </h1>
        {/* <div className="relative"> */}
          {/* <Controller
            name="street"
            control={control}
            rules={{ required: "Please enter an address" }}
            render={({ field }) => ( */}
              <AddressForm  onChange={handleCustomChange} />
             {/* )} */}
              {/* /> */}
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
              <CustomDatePicker
                onChange={handleDateChange}
                value={dayjs(form.selectedDate as string, "MM/DD/YYYY")}
              />
            </div>
            <div>
              <TimePickerComponent
                onChange={handleTimeChange}
                value={
                  form.selectedTime
                    ? dayjs(form.selectedTime as string, "h:mm A")
                    : null
                }
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center md:flex-row  md:justify-between md:items-end">
          <div className="w-[280px]  md:w-[600px] lg:w-[800px] ">
            <DateTimeCleaning form={form as any} />
          </div>
          <div className="w-[200px] md:w-auto lg:w-[400px]"></div>
        </div>
      </div>
    </div>
  );
};
export default Step4;
