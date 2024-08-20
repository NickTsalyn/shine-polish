"use client";

import React, {useEffect} from "react";
import useFormStorage from "@/hooks/formStorage";

import {StepProps} from "@/types/interfaces";
import ContactInformation from "../ContactInformationForm";
import AdditionalInformation from "../AdditionalInformationForm";
import SpecialInstruction from "../SpecialInstruction";

const ContactNumberMask = "(404) 000-0000";

const Step3: React.FC<StepProps> = ({control, setStepCompleted}) => {
 const {form, handleCustomChange, handleSelectChange} = useFormStorage();

 const isStepCompleted = form.name && form.surname && form.email && form.phone && form.homeAccess && form.aboutUs;

 useEffect(() => {
  isStepCompleted ? setStepCompleted(3) : setStepCompleted(2);
 }, [isStepCompleted, setStepCompleted]);

 return (
  <div className="py-4 md:py-6 lg:py-9 lg:h-[80vh] lg:justify-between lg:gap-6">
   <ContactInformation control={control} />
   <AdditionalInformation control={control} />
   <SpecialInstruction control={control} />
  </div>
 );
};

export default Step3;
