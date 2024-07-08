"use client";
import React, { useCallback, useEffect } from "react";
import useFormStorage from "@/hooks/formStorage";
import BasicSelect from "../UI/Select";
import Textarea from "../UI/Textarea";
import { aboutUs, homeAccess } from "@/data/booking-form/step_3";
import dayjs from "dayjs";
import Input from "../UI/Input";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { IMaskInput } from "react-imask";
import { Control, Controller, useFormContext, useWatch } from "react-hook-form";
import { FormValues } from "@/types/interfaces";

interface StepProps {
  control: Control<FormValues>;
  setStepCompleted: (step: number) => void;
}

const ContactNumberMask = "(000) 000-0000";

const Step3: React.FC<StepProps> = ({
  control,
  setStepCompleted,
}) => {
  const { form, handleCustomChange, handleSelectChange } = useFormStorage({
    areas: "",
    bedroom: 1,
    bathroom: 1,
    frequency: "",
    homeAccess: "",
    aboutUs: "",
    specialInstructions: "",
    extras: [],
    services: "",
    name: "",
    surname: "",
    email: "",
    phone: "",
    remindersChecked: false,
    selectedDate: dayjs().format("MM/DD/YYYY"),
    time: dayjs().format("h:mm A"),
    address: "",
    aptSuite: "",
    city: "",
    zipCode: "",
  });

  const { setError, clearErrors, trigger } = useFormContext();
  const watchedForm = useWatch({ control });

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) {
          setError(name, {
            type: "required",
            message: "First name is required",
          });
        } else if (value.length < 2) {
          setError(name, {
            type: "minLength",
            message: "First name must be at least 2 characters",
          });
        }
          else {
          clearErrors(name);
        }
        break;
      case "surname":
        if (!value.trim()) {
          setError(name, {
            type: "required",
            message: "Surname is required",            
          });
        } else if (value.length < 3) {
          setError(name, {
            type: "minLength",
            message: "Surname must be at least 3 characters",          
          });
        }
          else {
          clearErrors(name);
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          setError(name, {
            type: "pattern",
            message: "Invalid email format",
          });
        } else {
          clearErrors(name);
        }
        break;
      case "phone":
        if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(value)) {
          setError(name, {
            type: "pattern",
            message: "Invalid phone number format",
          });
        } else {
          clearErrors(name);
        }
         break;
      // case "homeAccess":
      //   if (!value) {
      //     setError(name, {
      //       type: "required",
      //       message: "Please select an option",
      //     });
      //   } else {
      //     clearErrors(name);
      //   }
      //   break;
      // case "aboutUs":
      //   if (!value) {
      //     setError(name, {
      //       type: "required",
      //       message: "Please select an option",
      //     });
      //   } else {
      //     clearErrors(name);
      //   }
      //   break;
      default:
        break;
    }
  };

  //  const validateField = async (fieldName:string) =>{
  //   const result = await trigger(fieldName);
  //  }
  // const validateField = async (fieldName: string) => {
  //   await trigger(fieldName);
  // };

  const handleFieldChange = (name: string, value: string) => {
    handleCustomChange(name, value);
    validateField(name, value);
  };

  const handleCheckBoxChange = () => {
    handleCustomChange("remindersChecked", !form.remindersChecked);
  };

const validateSteps = useCallback( async () => {
  const fields = ["name", "surname", "email", "phone"];
  const validationResults = await Promise.all(fields.map(field => trigger(field)));
  
  return validationResults.every(result => result);
}, [trigger]);

  useEffect(() => {
    const checkStepCompletion = async () => {
      const isValid = await validateSteps();
      if (isValid && form.homeAccess && form.aboutUs) {
       setStepCompleted(3);
      }
    
     checkStepCompletion();
  }}, [form.aboutUs, form.homeAccess, setStepCompleted, validateSteps, watchedForm]);

  return (
    <div className="py-4 md:py-6 lg:py-9 xl:pl-[60px] xl:pr-[150px] flex flex-col gap-6">
      <div className="py-4 md:py-6 lg:py-9">
        <h2 className="mb-4 md:mb-5 lg:mb-[26px] text-2xl md:text-4xl font-medium md:font-normal">
          Contact information
        </h2>
        <p className="text-subtext md:text-2xl mb-6 md:mb-8 lg:mb-5">
          This information will be used to contact you about service
        </p>
        <div className="flex flex-col gap-2 md:gap-5 lg:gap-10">
          <div className="md:flex md:flex-row gap-6  md:h-10 lg:gap-[60px] lg:h-[48px] lg:w-auto">
            <div className="md:w-1/2 md:h-[40px] lg:w-3/5 relative mb-4">
              <Controller
                name="name"
                control={control}                
                render={({ field, fieldState: { error }}) => (
                  <>
                    <Input
                      {...field}
                      value={form.name}
                      type="text"
                      placeholder="First Name*"
                      style="form-input"
                      onChange={(e) =>
                        handleFieldChange("name", e.target.value)
                      }
                    />
                    {error && (
                      <p className="text-secondary text-xs  absolute left-2 bottom-[-15px]">
                        {error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
            <div className="md:w-1/2 lg:w-2/5 relative">
              <Controller
                name="surname"
                control={control}               
                render={({ field, fieldState: { error }}) => (
                  <>
                    <Input
                      {...field}
                      value={form.surname}
                      type="text"
                      placeholder="Last Name*"
                      style="form-input"
                      onChange={(e) =>
                        handleFieldChange("surname", e.target.value)
                      }
                    />
                    {error && (
                      <p className="text-secondary text-xs  absolute left-2 bottom-[-15px]">
                        {error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse gap-2 md:gap-5 lg:gap-[60px] lg:h-[48px]">
            <div className="lg:w-3/5 lg:h-[40px] relative">
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input
                      {...field}
                      value={form.email}
                      type="email"
                      placeholder="Email*"
                      style="form-input"
                      onChange={(e) =>
                        handleFieldChange("email", e.target.value)
                      }
                    />
                    {error && (
                      <p className="text-secondary text-xs  absolute left-2 bottom-[-6px] lg:bottom-[-16px]">
                        {error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
            <div className="lg:w-2/5 lg:h-[40px] relative">
              <Controller
                name="phone"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <IMaskInput
                      {...field}
                      className="block mx-full mb-[10px] w-full hx-full h-full py-[8px] lg:py-[12px] px-[8px] lg:px-[16px] bg-transparent text-text border-solid border-2 focus:border-[3px] border-secondary rounded-[12px] focus:shadow-input-shadow outline-none xl:placeholder:text-[16px] placeholder:text-secondary-placeholder placeholder:opacity-50"
                      mask={ContactNumberMask}
                      placeholder="(000) 000-0000"
                      value={form.phone}
                      onChange={(e) => {
                        const target = e.target as HTMLInputElement;
                        handleFieldChange("phone", target.value);
                      }}
                    />
                    {error && (
                      <p className="text-secondary text-xs  absolute left-2 bottom-[-6px] lg:bottom-[-16px]">
                        {error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:relative">
        <div className="lg:flex lg:flex-row-reverse lg:gap-[60px]">
          <div className="flex flex-col lg:w-1/2">
            <h2 className="mb-6 md:mb-7 lg:mb-[26px] text-2xl md:text-4xl font-medium md:font-normal">
              Additional information
            </h2>
            <div className="mb-10 md:mb-[60px] flex flex-col gap-4 md:flex-row lg:flex-col md:gap-6 md:h-10">
              <div className="md:w-1/2 lg:w-full">
                <Controller
                  name="homeAccess"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <BasicSelect
                        {...field}
                        items={homeAccess}
                        value={form.homeAccess}
                        placeholder="How will access your home?* "
                        onChange={(event) => {
                          const { value } = event.target as HTMLInputElement;
                          field.onChange(value);
                          handleSelectChange("homeAccess", value);
                        }}
                      />
                      {error && (
                        <p className="text-secondary text-xs absolute bottom-[-16px]">
                          {error.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="md:w-1/2 lg:w-full">
                <Controller
                  name="aboutUs"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <BasicSelect
                        {...field}
                        items={aboutUs}
                        value={form.aboutUs}
                        placeholder="How did you hear about us?* "
                        onChange={(event) => {
                          const { value } = event.target as HTMLInputElement;
                          field.onChange(value);
                          handleSelectChange("aboutUs", value);
                        }}
                      />
                      {error && (
                        <p className="text-secondary text-xs absolute bottom-[-16px]">
                          {error.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-1/2">
            <h2 className="mb-4 md:mb-5 lg:mb-[26px] text-2xl md:text-4xl font-medium md:font-normal">
              Anything else we should know to provide the best and polish
              cleaning possible?
            </h2>
            <div className="h-[124px] md:h-[220px] lg:h-[250px]">
              <Textarea
                placeholder="Special Instructions*"
                value={form.specialInstructions}
                name="specialInstructions"
                onChange={(e) =>
                  handleFieldChange("specialInstructions", e.target.value)
                }
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-5 lg:absolute lg:right-0 lg:top-[240px]">
          <button
            type="button"
            className="flex items-center justify-center p-0 w-4 md:w-6 h-4 md:h-6 rounded"
            onClick={handleCheckBoxChange}
          >
            {form.remindersChecked ? (
              <CheckBoxIcon className="w-full h-full fill-main" />
            ) : (
              <CheckBoxOutlineBlankIcon className="w-full h-full fill-main" />
            )}
          </button>
          <p className="text-secondary text-xs md:text-2xl">
            Send me reminders about my booking via email
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step3;
