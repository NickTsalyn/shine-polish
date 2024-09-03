"use client";
import React, {useEffect} from "react";
import BasicSelect from "../components/UI/Select";
import {Controller} from "react-hook-form";
import {homeAccess, aboutUs} from "@/data/booking-form/stepsData";
import useFormStorage from "@/hooks/formStorage";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

interface AdditionalProps {
 control: any;
 onChange: (name: string, value: any) => void;
 form: any;
 onChangeCheckBox: () => void;
}

const AdditionalInformation: React.FC<AdditionalProps> = ({control, onChange}) => {
 const {form, handleCustomChange, handleSelectChange} = useFormStorage();

 const handleCheckBoxChange = () => {
  handleCustomChange("remindersChecked", !form.remindersChecked);
 };
 return (
  <div className="flex flex-col lg:w-full mb-10 lg:mb-[60px]">
   <h2 className="mb-6 md:mb-7 lg:mb-5 text-2xl md:text-4xl font-medium">Additional information</h2>
   <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
    <div className="w-full lg:w-4/12 relative">
     <Controller
      name="homeAccess"
      control={control}
      render={({field, fieldState: {error}}) => (
       <>
        <BasicSelect
         {...field}
         items={homeAccess}
         value={form.homeAccess}
         placeholder="How will access your home?*"
         onChange={(event) => {
          handleSelectChange("homeAccess", event.target.value);
         }}
        />
        {error && <p className="text-accent-light left-2 text-xs absolute">{error.message}</p>}
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
 );
};
export default AdditionalInformation;
