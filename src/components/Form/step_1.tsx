"use client";

import Image from "next/image";
import BasicSelect from "../UI/Select";
import RadioButton from "../UI/RadioButton";

import img_stub from "../../../public/images/service-area/image-map-stub.png";
import { bathroomOptions, bedroomOptions } from "@/data/booking-form/stepsData";
import useFormStorage from "@/hooks/formStorage";
import { Controller } from "react-hook-form";
import { Options, StepProps } from "@/types/interfaces";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getOptions } from "@/api";
import Loading from "@/app/loading";

const Step1 = ({ control, setStepCompleted }: StepProps) => {
  const { form, handleSelectChange, handleRadioChange } = useFormStorage();

  const { data, error, isLoading } = useQuery<{
    areaOptions: Options[];
    discountOptions: Options[];
  }>({
    queryKey: ["getOptions"],
    queryFn: getOptions,
  });

  const areas =
    data?.areaOptions.map((area: Options) => {
      return {
        value: area.name,
        label: area.name,
      };
    }) || [];

  const frequency =
    data?.discountOptions.map((item: Options) => {
      return {
        value: item.name,
        label: item.name,
      };
    }) || [];

  const isStepCompleted = form.area && form.bedroom && form.bathroom && form.frequency;
  useEffect(() => {
    if (isStepCompleted) setStepCompleted(1);
  }, [isStepCompleted, setStepCompleted]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {(error as Error).message}</p>;
  }

  return (
    <div className="py-4 md:py-6 lg:py-9 lg:h-[80vh]  flex flex-col gap-6 lg:gap-x-10 lg:gap-y-0  lg:flex-row  xl:gap-x-16 lg:justify-between ">
      <div className="md:flex md:flex-row lg:flex-col md:justify-between md:gap-6 lg:gap-[32px] xl:gap-[30px] lg:row-span-2  lg:w-1/2 ">
        <div className="flex flex-col gap-4 md:gap-6 ">
          <h2 className=" text-2xl md:text-4xl font-medium">Choose area</h2>
          <div className="w-full lg:w-[576px] xl:w-[800px]">
            <Controller
              name="area"
              control={control}
              rules={{ required: "Please select an area" }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <BasicSelect
                    {...field}
                    placeholder="Select an area*"
                    value={form.area}
                    items={areas}
                    onChange={(event) => {
                      const { value } = event.target as HTMLInputElement;
                      field.onChange(value);
                      handleSelectChange("area", value);
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

        <div className="hidden md:block md:min-w-[400px] md:max-w-[800px] md:h-[330px] lg:w-[576px] lg:h-[600px] xl:w-[800px] xl:h-[800px] relative">
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
      <div className="flex flex-col lg:h-[600px]  lg:w-1/2 justify-between">
        <div className="flex flex-col h-auto mb-10">
          <h2 className="text-2xl md:text-4xl font-medium mb-6">How many rooms?</h2>
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
        <div className="flex flex-col gap-4 md:gap-6 lg:col-span-1 mt-auto lg:w-full">
          <h2 className="text-2xl md:text-4xl font-medium">How often?</h2>
          <p className="hidden md:block text-base lg:text-[26px] lg:font-medium text-bookingSubText">
            Scheduling is flexible. Cancel or reschedule anytime.
          </p>
          <ul className="flex flex-wrap justify-center gap-5 lg:gap-6 lg:w-full md:justify-around lg:justify-between md:flex-nowrap lg:flex-wrap ">
            {frequency.map(({ value, label }) => {
              return (
                <li
                  key={value}
                  className="flex justify-center items-center w-[132px] md:min-w-[160px] lg:w-[calc(50%-12px)]"
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
    </div>
  );
};

export default Step1;
