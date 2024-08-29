"use client";

import React, { useEffect } from "react";
import useFormStorage from "@/hooks/formStorage";

import { StepProps } from "@/types/interfaces";
import ContactInformation from "../ContactInformationForm";
import AdditionalInformation from "../AdditionalInformationForm";
import SpecialInstruction from "../SpecialInstruction";

const Step3 = ({ control, setStepCompleted }: StepProps) => {
  const { form } = useFormStorage();

  const isStepCompleted = form.name && form.surname && form.email && form.phone && form.homeAccess && form.aboutUs;

  useEffect(() => {
    if (isStepCompleted) setStepCompleted(3);
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
