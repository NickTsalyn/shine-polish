"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import FormStepper from "@/components/Form/FormStepper";
import Step4 from "@/components/Form/step_4";
import Step5 from "@/components/Form/step_5";
import Step6 from "@/components/Form/step_6";
import Step7 from "@/components/Form/step_7";
import Step3 from "@/components/Form/step_3";
import Step2 from "@/components/Form/step_2";
import Step1 from "@/components/Form/step_1";

const stepsComponents = [Step1, Step2, Step3, Step4, Step5, Step6, Step7];

interface BookingStepProps {
  params: {
    step: string | undefined;
  };
}

const BookingStep = ({ params }: BookingStepProps) => {
  const router = useRouter();
  const step = params.step || "1";
  const stepNumber = parseInt(step.replace("step_", ""), 10) - 1;
  const [activeStep, setActiveStep] = useState(stepNumber);

  useEffect(() => {
    setActiveStep(stepNumber);
  }, [stepNumber]);

  const handleNext = () => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
    router.push(`/booking/${nextStep + 1}`);
  };

  const handlePrevious = () => {
    const prevStep = activeStep - 1;
    setActiveStep(prevStep);
    router.push(`/booking/${prevStep + 1}`);
  };

  const StepComponent = stepsComponents[activeStep] || Step1;
  return (
    <div className="container py-4 md:py-6 lg:pt-[90px] xl:pt-[102px]">
      <FormStepper
        activeStep={activeStep}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      >
        <StepComponent />
      </FormStepper>
    </div>
  );
};

export default BookingStep;
