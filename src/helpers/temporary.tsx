"use client";

import React, {useEffect} from "react";
import useFormStorage from "@/hooks/formStorage";
import BasicSelect from "../components/UI/Select";
import Textarea from "../components/UI/Textarea";
import {aboutUs, homeAccess} from "@/data/booking-form/stepsData";
import Input from "../components/UI/Input";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {IMaskInput} from "react-imask";
import {Controller, useFormContext, useWatch} from "react-hook-form";
import {StepProps} from "@/types/interfaces";
import {validateField} from "@/helpers/validation";

const ContactNumberMask = "(404) 000-0000";

const Step3: React.FC<StepProps> = ({control, setStepCompleted}) => {
 const {form, handleCustomChange, handleSelectChange} = useFormStorage();

 const {setError, clearErrors, trigger} = useFormContext();
 const watchedForm = useWatch({control});

 const handleFieldChange = (name: string, value: string) => {
  validateField(name, value, setError, clearErrors);
  handleCustomChange(name, value);
 };

 const handleCheckBoxChange = () => {
  handleCustomChange("remindersChecked", !form.remindersChecked);
 };

 const isStepCompleted = form.name && form.surname && form.email && form.phone && form.homeAccess && form.aboutUs;

 useEffect(() => {
  isStepCompleted ? setStepCompleted(3) : setStepCompleted(2);
 }, [isStepCompleted, setStepCompleted]);

 return (
  <div className="py-4 md:py-6 lg:py-9 lg:min-h-[600px] xl:h-[1000px] lg:justify-between">
   <div className="mb-10">
    <h2 className="mb-4 md:mb-5 lg:mb-[26px] text-2xl md:text-4xl font-medium md:font-normal">Contact information</h2>
    <p className="text-subtext md:text-2xl mb-6 md:mb-8 lg:mb-5">
     This information will be used to contact you about service
    </p>
    <div className="flex flex-col lg:flex-row  gap-4 lg:gap-6 lg:flex-nowrap mb-5 md:mb-6  ">
     {/* <div className="md:flex md:flex-row  md:gap-x-4 "> */}
     <div className="w-full md:w-full md:h-[48px] lg:w-2/4 relative">
      <Controller
       name="name"
       control={control}
       rules={{required: "This field is required"}}
       render={({field, fieldState: {error}}) => (
        <>
         <Input
          {...field}
          value={form.name}
          type="text"
          placeholder="First Name*"
          style="form-input"
          onChange={(e) => {
           const {value} = e.target as HTMLInputElement;
           field.onChange(value);
           handleFieldChange("name", value);
          }}
         />
         {error && (
          <p className="text-accent-light text-xs lg:text-base  absolute left-2 bottom-[-16px] lg:bottom-[-24px]">
           {error.message}
          </p>
         )}
        </>
       )}
      />
     </div>
     <div className="w-full md:w-3/4 lg:w-2/4 md:h-[48px] relative">
      <Controller
       name="surname"
       control={control}
       rules={{required: "This field is required"}}
       render={({field, fieldState: {error}}) => (
        <>
         <Input
          {...field}
          value={form.surname}
          type="text"
          placeholder="Last Name*"
          style="form-input"
          onChange={(e) => {
           const {value} = e.target as HTMLInputElement;
           field.onChange(value);
           handleFieldChange("surname", value);
          }}
         />
         {error && (
          <p className="text-accent-light text-xs lg:text-base  absolute left-2 bottom-[-16px] lg:bottom-[-24px]">
           {error.message}
          </p>
         )}
        </>
       )}
      />
     </div>
     {/* </div> */}
     {/* <div className="md:flex md:flex-row  md:gap-x-4 "> */}
     <div className="w-full md:w-2/4 lg:w-3/5 md:h-[48px] relative">
      <Controller
       name="email"
       control={control}
       rules={{required: "This field is required"}}
       render={({field, fieldState: {error}}) => (
        <>
         <Input
          {...field}
          value={form.email}
          type="email"
          placeholder="Email*"
          style="form-input"
          onChange={(e) => {
           const {value} = e.target as HTMLInputElement;
           field.onChange(value);
           handleFieldChange("email", value);
          }}
         />
         {error && (
          <p className="text-accent-light text-xs lg:text-base  absolute left-2 bottom-[-6px] lg:bottom-[-24px]">
           {error.message}
          </p>
         )}
        </>
       )}
      />
     </div>
     <div className="w-full md:w-1/4 lg:w-2/5 md:h-[48px] relative">
      <Controller
       name="phone"
       control={control}
       rules={{required: "This field is required"}}
       render={({field, fieldState: {error}}) => (
        <>
         <IMaskInput
          {...field}
          className="block mx-full mb-[10px] w-full hx-full h-full py-[8px] lg:py-[12px] px-[8px] lg:px-[16px] bg-transparent text-text border-solid border-2 focus:border-[3px] border-secondary rounded-[12px] focus:shadow-input-shadow outline-none xl:placeholder:text-[16px] placeholder:text-secondary-placeholder placeholder:opacity-50"
          mask={ContactNumberMask}
          placeholder="(404) 000-0000"
          value={form.phone}
          onChange={(e) => {
           const {value} = e.target as HTMLInputElement;
           field.onChange(value);
           handleFieldChange("phone", value);
          }}
         />
         {error && (
          <p className="text-accent-light text-xs lg:text-base  absolute left-2 bottom-[-6px] lg:bottom-[-24px]">
           {error.message}
          </p>
         )}
        </>
       )}
      />
     </div>
     {/* </div> */}
    </div>
   </div>

   {/* ADDITIONAL INFORMATION */}

   <div className="flex flex-col lg:w-full ">
    <div className="flex flex-col  lg:w-full h-auto lg:relative mb-10 lg:mb-[60px] ">
     <h2 className="mb-6 md:mb-7 lg:mb-5 text-2xl md:text-4xl font-medium md:font-normal">Additional information</h2>
     <div className=" flex flex-col lg:flex-row lg:flex-nowrap gap-4  md:gap-6 md:h-8">
      <div className="w-full lg:w-4/12  relative">
       <Controller
        name="homeAccess"
        control={control}
        rules={{required: "Please select an option"}}
        render={({field, fieldState: {error}}) => (
         <>
          <BasicSelect
           {...field}
           items={homeAccess}
           value={form.homeAccess}
           placeholder="How will access your home?* "
           onChange={(event) => {
            const {value} = event.target as HTMLInputElement;
            field.onChange(value);
            handleSelectChange("homeAccess", value);
           }}
          />
          {error && <p className="text-accent-light left-2 text-xs lg:text-base  absolute ">{error.message}</p>}
         </>
        )}
       />
      </div>
      <div className="w-full lg:w-4/12 relative">
       <Controller
        name="aboutUs"
        control={control}
        rules={{required: "Please select an option"}}
        render={({field, fieldState: {error}}) => (
         <>
          <BasicSelect
           {...field}
           items={aboutUs}
           value={form.aboutUs}
           placeholder="How did you hear about us?* "
           onChange={(event) => {
            const {value} = event.target as HTMLInputElement;
            field.onChange(value);
            handleSelectChange("aboutUs", value);
           }}
          />
          {error && <p className="text-accent-light left-2 text-xs lg:text-base  absolute ">{error.message}</p>}
         </>
        )}
       />
      </div>
      {/* SEND REMINDERS */}

      <div className="flex lg:h-[40px] items-center gap-2 md:gap-5 lg:w-3/12  ">
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
       <p className="text-secondary text-xs md:text-xl">Send me reminders about my booking via email</p>
      </div>
     </div>
    </div>

    {/* SPESIAL INSTRUCTION*/}

    <div className="flex flex-col lg:w-full">
     <h2 className="mb-4 md:mb-5 lg:mb-[26px] text-2xl md:text-4xl lg:text-4xl font-medium md:font-normal">
      Anything else we should know to provide the best cleaning possible?
     </h2>
     <div className="h-[124px] md:h-[220px] lg:h-[160px] lg:w-full">
      <Controller
       name="specialInstructions"
       control={control}
       render={({field}) => (
        <Textarea
         {...field}
         placeholder="Special Instructions"
         value={form.specialInstructions}
         name="specialInstructions"
         onChange={(e) => {
          const {value} = e.target;
          field.onChange(value);
          handleFieldChange("specialInstructions", value);
         }}
        />
       )}
      />
     </div>
    </div>
   </div>
  </div>
 );
};

export default Step3;
