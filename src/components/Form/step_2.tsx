"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

import { Controller } from "react-hook-form";
import { ExtrasOptions } from "@/data/booking-form/stepsData";
import useFormStorage from "@/hooks/formStorage";
import RadioButton from "../UI/RadioButton";
import CheckBox from "../UI/Сheckbox";
import { Options, StepProps } from "@/types/interfaces";
import { useQuery } from "@tanstack/react-query";
import { getOptions } from "@/api";
import Loading from "@/app/loading";

const Step2: React.FC<StepProps> = ({ control, setStepCompleted }) => {
  const { form, handleRadioChange, handleCheckboxChange, setForm } =
    useFormStorage();

  const { data, error, isLoading } = useQuery<{
    extrasOptions: Options[];
    serviceOptions: Options[];
  }>({
    queryKey: ["getOptions"],
    queryFn: getOptions,
  });

  const services =
    data?.serviceOptions?.map((service) => {
      return {
        value: service.name,
        label: service.name,
      };
    }) || [];

  const combinedExtrasOptions =
    data?.extrasOptions.map((backendExtra) => {
      const frontEndExtra = ExtrasOptions.find(
        (extra) => extra.value === backendExtra.name
      );
      return {
        ...backendExtra,
        value: backendExtra.name,
        label: backendExtra.name,
        path: frontEndExtra?.path || "",
        style: frontEndExtra?.style || "",
      };
    }) || [];

  const [disable, setDisable] = useState(false);

  const handleDisable = useCallback(() => {
    if (form.service === "Basic Cleaning") {
      setDisable(false);
    } else if (
      form.service === "Deep Cleaning" ||
      form.service === "Move In/Move Out" ||
      form.service === "Post Constraction" ||
      form.service === "Visit property for estimate"
    ) {
      setDisable(true);
      const updatedForm = { ...form, extras: [] };
      setForm(updatedForm);
      localStorage.setItem("form", JSON.stringify(updatedForm));
    }
  }, [form, setForm]);

 useEffect(() => {
  handleDisable();
 }, [handleDisable]);

  useEffect(() => {
    form.service ? setStepCompleted(2) : setStepCompleted(1);
  }, [form.service, setStepCompleted]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {(error as Error).message}</p>;
  }

  return (
    <div className="p-4 md:p-6 lg:p-9 lg:h-[800px] xl:h-[980px]">
      <div className="max-w-[278px] md:max-w-[682px] lg:max-w-[1160px] xl:max-w-[1572px] m-auto mb-5 xl:mb-[35px]">
        <h2 className="text-2xl md:text-4xl font-medium mb-5">Select Extras</h2>
        <p className="text-bookingSubText font-normal mb-5 leading-[14.4px] text-[12px] md:text-[24px] md:leading-[32px] lg:leading-[28.8px] xl:hidden">
          Add extras to customize your cleaning service.
          <br className="hidden md:block lg:hidden" /> Remember{" "}
          <span className=" font-bold">deep cleaning </span>
          is recommended for all first time cleans to prepare your home for
          routine services.
        </p>
        <p className="text-bookingSubText font-bold mb-5 leading-[14.4px] text-[12px] md:text-[24px] md:leading-[32px] lg:leading-[28.8px] xl:hidden">
          **Beware: deep cleaning price may be variable depending on house
          condition.**
        </p>
        <p className="text-bookingSubText font-normal  leading-[14.4px] text-[12px] md:text-[24px] md:leading-[32px] lg:leading-[28.8px] xl:hidden">
          <span className=" font-bold">Move In/Move Out</span> requires a vacant
          home with water and electricity for a proper cleaning.
        </p>
        <p className="hidden xl:block text-bookingSubText font-normal lg:leading-[28.8px] md:text-[24px] ">
          Add extras to customize your cleaning service. Remember deep cleaning
          is recommended for all first time cleans to prepare your home for
          routine services. Move In/Move Out requires a vacant home with water
          and electricity for a proper cleaning
        </p>
      </div>
      <div className="flex gap-[16px] flex-col max-w-[278px] md:max-w-[682px] lg:max-w-[1160px] xl:max-w-[1572px] m-auto">
        <ul className="flex flex-wrap gap-5 md:gap-[22px] lg:gap-6 lg:w-[1160px] xl:w-[1572px] justify-center md:justify-around lg:justify-start md:flex-nowrap lg:flex-wrap ">
          {services.map(({ value, label }) => {
            return (
              <li
                key={value}
                className="flex justify-center items-center w-[128px] md:w-[150px] lg:w-[176px] xl:w-[246px] xl:min-h-[140px]"
              >
                <Controller
                  name="service"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <RadioButton
                      {...field}
                      value={value}
                      style=" py-[10px] px-[20px] md:py-[22px] md:px-[10px] lg:py-[20px] h-full w-full md:text-[24px] text-main md:text-accent md:leading-[28.8px]"
                      isActive={value === form.service}
                      onClick={() => {
                        field.onChange(value);
                        handleRadioChange("service", value);
                      }}
                    >
                      <span className="inline-block lg:text-2xl">{label}</span>
                    </RadioButton>
                  )}
                />
              </li>
            );
          })}
          <li
            key={"Visit property for estimate"}
            className="justify-center items-center w-[278px] md:w-[693px] lg:w-[176px] xl:w-[246px] xl:min-h-[140px] hidden lg:flex"
          >
            <Controller
              name="service"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <RadioButton
                  {...field}
                  value={"Visit property for estimate"}
                  style=" py-[10px] px-[20px] md:py-[22px] md:px-[10px] lg:py-[20px] h-full w-full text-accent md:text-accent md:text-[24px]  md:leading-[28.8px]"
                  isActive={"Visit property for estimate" === form.service}
                  onClick={() =>
                    handleRadioChange("services", "Visit property for estimate")
                  }
                >
                  <span className="inline-block lg:text-2xl">
                    {"Visit property for estimate"}
                  </span>
                </RadioButton>
              )}
            />
          </li>
        </ul>
        <ul className="flex flex-wrap justify-center  lg:justify-start gap-5 md:gap-[22px] lg:gap-6 lg:w-[1160px]  xl:w-[1572px] md:flex-wrap lg:flex-wrap ">
          {combinedExtrasOptions.map(({ value, label, path }) => {
            return (
              <li
                key={value}
                className="flex justify-center items-center w-[128px] md:w-[150px] lg:w-[176px] xl:w-[246px] md:min-h-[104px] xl:min-h-[140px]"
              >
                <Controller
                  name="extras"
                  control={control}
                  render={({ field }) => (
                    <CheckBox
                      {...field}
                      disabled={disable}
                      value={value}
                      style=" py-[10px] px-[20px] md:py-[8px] md:px-[10px] lg:py-[20px] h-full w-full"
                      isActive={(form.extras as string[]).includes(value)}
                      onClick={() => {
                        const newValue = (field.value || []).includes(value)
                          ? field.value.filter((v) => v !== value)
                          : [...(field.value || []), value];
                        field.onChange(newValue);
                        handleCheckboxChange("extras", value);
                      }}
                    >
                      <div
                        className={`md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]  hidden md:block relative`}
                      >
                        <Image
                          src={path}
                          alt="icons"
                          objectFit="cover"
                          layout="fill"
                        ></Image>
                      </div>
                      <span className="inline-block lg:text-2xl">{label}</span>
                    </CheckBox>
                  )}
                />
              </li>
            );
          })}
          <li
            key={"Visit property for estimate"}
            className="flex justify-center items-center w-[278px] md:w-[693px] lg:w-[176px] xl:w-[246px] xl:min-h-[140px] lg:hidden"
          >
            <Controller
              name="service"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <RadioButton
                  {...field}
                  value={"Visit property for estimate"}
                  style=" py-[10px] px-[20px] md:py-[22px] md:px-[10px] lg:py-[20px] h-full w-full text-accent md:text-accent md:text-[24px]  md:leading-[28.8px]"
                  isActive={"Visit property for estimate" === form.service}
                  onClick={() =>
                    handleRadioChange("services", "Visit property for estimate")
                  }
                >
                  <span className="inline-block lg:text-2xl">
                    {"Visit property for estimate"}
                  </span>
                </RadioButton>
              )}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Step2;
