import React, {useEffect} from "react";
import {Controller, useFormContext, useWatch} from "react-hook-form";
import Textarea from "./UI/Textarea";
import useFormStorage from "@/hooks/formStorage";
import {validateField} from "@/helpers/validation";

interface InstructionProps {
 control: any;
 onChange: (name: string, value: any) => void;
 form: any;
}

const SpecialInstruction: React.FC<InstructionProps> = ({control, onChange}) => {
 const {form, handleCustomChange} = useFormStorage();
 const {setError, clearErrors, trigger} = useFormContext();
 const watchedForm = useWatch({control});
 const handleFieldChange = (name: string, value: string) => {
  validateField(name, value, setError, clearErrors);
  handleCustomChange(name, value);
 };

 return (
  <div className="flex flex-col lg:w-full">
   <h2 className="mb-4 md:mb-5 lg:mb-[26px] text-2xl md:text-4xl lg:text-4xl font-medium">
    Anything else we should know?
   </h2>
   <div className="h-[124px] md:h-[220px] lg:h-[160px]">
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
 );
};
export default SpecialInstruction;
