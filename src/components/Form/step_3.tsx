"use client";
import React, { useEffect } from "react";
import useFormStorage from "@/hooks/formStorage";
import BasicSelect from "../UI/Select";
import Textarea from "../UI/Textarea";
import { aboutUs, homeAccess } from "@/data/booking-form/step_3";
import dayjs from "dayjs";
import Input from "../UI/Input";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { IMaskInput } from "react-imask";
import { Control, Controller,  useFormContext, useWatch } from "react-hook-form";
import { FormValues } from "@/types/interfaces";

interface StepProps {
  control: Control<FormValues>;
  setStepCompleted: (step: number) => void;
}

const ContactNumberMask = "(000) 000-0000";

const Step3: React.FC<StepProps> = ({ control, setStepCompleted }) => {
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

  const { setError, clearErrors } = useFormContext();
  const watchedForm = useWatch({ control });
 
  useEffect(() => {
    const checkStepCompletion = async () => {
      const isValid = await validateForm();
      if (isValid) {
        setStepCompleted(3);
      }
    };
    checkStepCompletion();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedForm, form]);
  
  
  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
      case "surname":
        if (!value) {
          setError(name, {
            type: "required",
            message: `${name === "name" ? "First" : "Last"} Name is required`,
          
          });
        } else {
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
      default:
        break;
    }
  };
  const validateForm = async() => {
    const fields: Array<keyof FormValues> = [
      "name",
      "surname",
      "email",
      "phone",
    ];
    fields.forEach((field) => {
      validateField(field, form[field]);
    });
    return fields.every((field) => !control.getFieldState(field)?.error);
  };

  // const schema = yup
  // .object()
  // .shape({
  //   name: yup.string().required("First Name is required"),
  //   surname: yup.string().required("Last Name is required"),
  //   email: yup
  //     .string()
  //     .email("Invalid email format")
  //     .required("Email is required"),
  //   phone: yup
  //     .string()
  //     .matches(/^\(\d{3}\) \d{3}-\d{4}$/, "Invalid phone number format")
  //     .required("Phone is required"),
  // });

  // const validateField = async (name: string, value: string) => {
  //   try {
  //     await schema.validateAt(name, { [name]: value });
  //     setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  //     return true;
  //   } catch (error) {
  //     if (error instanceof yup.ValidationError) {
  //       setErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
  //     }
  //     return false;
  //   }
  // };

  // const validateForm = async () => {
  //   const validations = await Promise.all([
  //     validateField("name", form.name),
  //     validateField("surname", form.surname),
  //     validateField("email", form.email),
  //     validateField("phone", form.phone),
  //   ]);
  //   return validations.every((valid) => valid);
  // };

  const handleFieldChange = (name: string, value: string) => {
    handleCustomChange(name, value);
    // validateField(name, value);
  };

  const handleCheckBoxChange = () => {
    handleCustomChange("remindersChecked", !form.remindersChecked);
  };

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
                rules={{ required: "First Name is required" }}
                render={({ field, fieldState: { error } }) => (
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
                rules={{ required: "Last Name is required" }}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input
                      {...field}
                      value={form.surname}
                      type="text"
                      onChange={(e) =>
                        handleFieldChange("surname", e.target.value)
                      }
                      placeholder="Last Name*"
                      style="form-input"
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
                rules={{ required: "This field is required" }}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input
                      {...field}
                      value={form.email}
                      type="email"
                      onChange={(e) =>
                        handleFieldChange("email", e.target.value)
                      }
                      placeholder="Email*"
                      style="form-input"
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
                rules={{
                  required: "Phone is required",
                  // pattern: {
                  //   value: /^\(\d{3}\) \d{3}-\d{4}$/,
                  //   message: "Invalid phone number format",
                  // },
                }}
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
                  render={({ field }) => (
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
                  )}
                />
              </div>
              <div className="md:w-1/2 lg:w-full">
                <Controller
                  name="aboutUs"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
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
