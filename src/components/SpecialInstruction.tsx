import React from "react";
import {Controller} from "react-hook-form";
import Textarea from "./UI/Textarea";
import useFormStorage from "@/hooks/formStorage";

const SpecialInstruction: React.FC<{control: any}> = ({control}) => {
 const {form, handleCustomChange} = useFormStorage();

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
       onChange={(e) => {
        field.onChange(e.target.value);
        handleCustomChange("specialInstructions", e.target.value);
       }}
      />
     )}
    />
   </div>
  </div>
 );
};
export default SpecialInstruction;
