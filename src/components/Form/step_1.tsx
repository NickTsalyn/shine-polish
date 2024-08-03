"use client";

import Image from "next/image";
import BasicSelect from "../UI/Select";
import RadioButton from "../UI/RadioButton";

import img_stub from "../../../public/images/service-area/image-map-stub.png";
import {
  areaOptions,
  bathroomOptions,
  bedroomOptions,
  frequencyOptions,
} from "@/data/booking-form/step_1";
import useFormStorage from "@/hooks/formStorage";
import { Controller } from "react-hook-form";
import { StepProps } from "@/types/interfaces";
import { useEffect } from "react";

const Step1: React.FC<StepProps> = ({ control, setStepCompleted }) => {
  const { form, handleSelectChange, handleRadioChange } = useFormStorage();

  const isStepCompleted =
    form.areas && form.bedroom && form.bathroom && form.frequency;
  useEffect(() => {
    isStepCompleted ? setStepCompleted(1) : setStepCompleted(0);
  }, [isStepCompleted, setStepCompleted]);

  return (
    <div
      className="py-4 md:py-6 lg:py-9 flex flex-col gap-6 md:gap-[26px] lg:grid lg:grid-flow-col lg:grid-cols-2 lg:gap-[66px] xl:gap-[80px] lg:h-[800px] xl:h-[980px]"
    >
      <div className="md:flex md:flex-row md:justify-between lg:flex-col lg:gap-[33px] xl:gap-[30px] lg:row-span-2">
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className=" text-2xl md:text-4xl font-medium">Choose area</h2>
          <div className="w-full md:w-[280px]">
            <Controller
              name="areas"
              control={control}
              rules={{ required: "Please select an area" }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <BasicSelect
                    {...field}
                    placeholder="Select an area*"
                    value={form.areas}
                    items={areaOptions}
                    onChange={(event) => {
                      const { value } = event.target as HTMLInputElement;
                      field.onChange(value);
                      handleSelectChange("areas", value);
                    }}
                  />
                  {error && (
                    <p className="text-accent-light text-xs lg:text-base pl-2  left-2 bottom-[-15px] ">
                      {error.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
        </div>

        <div className="hidden md:block md:w-[338px] md:h-[330px] lg:w-[560px] lg:h-[454px] xl:w-[758px] xl:h-[450px] relative">
          <Image
            src={img_stub}
            alt="map"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 md:gap-6 lg:col-span-1">
        <h2 className="text-2xl md:text-4xl font-medium">How many rooms?</h2>
        <div className="flex flex-col gap-3 md:gap-6">
          <Controller
            name="bedroom"
            control={control}
            rules={{ required: "Please select an option" }}
            render={({ field }) => (
              <BasicSelect
                {...field}
                value={form.bedroom}
                items={bedroomOptions}
                onChange={(event) => {
                  const { value } = event.target as HTMLInputElement;
                  field.onChange(value);
                  handleSelectChange("bedroom", value);
                }}
              />
            )}
          />
          <Controller
            name="bathroom"
            control={control}
            rules={{ required: "Please select an option" }}
            render={({ field }) => (
              <BasicSelect
                {...field}
                value={form.bathroom}
                items={bathroomOptions}
                onChange={(event) => {
                  const { value } = event.target as HTMLInputElement;
                  field.onChange(value);
                  handleSelectChange("bathroom", value);
                }}
              />
            )}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-6 lg:col-span-1 mt-auto">
        <h2 className="text-2xl md:text-4xl font-medium">How often?</h2>
        <p className="hidden md:block text-base lg:text-[26px] lg:font-medium text-bookingSubText">
          Scheduling is flexible. Cancel or reschedule anytime.
        </p>
        <ul className="flex flex-wrap justify-center gap-5 lg:gap-6 lg:w-[562px]  md:justify-around md:flex-nowrap lg:flex-wrap">
          {frequencyOptions.map(({ value, label }) => {
            return (
              <li
                key={value}
                className="flex justify-center items-center w-[132px] md:min-w-[160px] lg:min-w-[260px]"
              >
                <Controller
                  name="frequency"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <RadioButton
                      {...field}
                      style="py-[10px] px-[20px] md:py-[8px] md:px-[10px] lg:py-[20px] h-full w-full"
                      isActive={value === form.frequency}
                      onClick={() => {
                        field.onChange(value);
                        handleRadioChange("frequency", value);
                      }}
                    >
                      <span className="inline-block lg:text-2xl">{label}</span>
                    </RadioButton>
                  )}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Step1;
