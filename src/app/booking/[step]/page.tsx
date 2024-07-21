"use client";

import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";

import FormStepper from "@/components/Form/FormStepper";
import Step1 from "@/components/Form/step_1";
import Step2 from "@/components/Form/step_2";
import Step3 from "@/components/Form/step_3";
import Step4 from "@/components/Form/step_4";
import Step5 from "@/components/Form/step_5";
import Step6 from "@/components/Form/step_6";
import dayjs from "dayjs";
import useFormStorage from "@/hooks/formStorage";
import { FormValues } from "@/types/interfaces";

const stepsComponents = [Step1, Step2, Step3, Step4, Step5, Step6];

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

  const { form, completedSteps, setStepCompleted } = useFormStorage(
);

  useEffect(() => {
    setActiveStep(stepNumber);
  }, [stepNumber]);

  const methods = useForm<FormValues>({
    defaultValues: form,
    mode: "onChange",
  });

  const validateStep = async () => {
    const result = await methods.trigger();
    return result;
  };

  const handlePrevious = () => {
    const prevStep = activeStep - 1;
    setActiveStep(prevStep);
    router.push(`/booking/${prevStep + 1}`);
  };

  const handleNext = async () => {
    const isValid = await validateStep();
    if (!isValid) return;

    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
    setStepCompleted(activeStep);
    router.push(`/booking/${nextStep + 1}`);
  };

  const handleStep = (step: number) => {
    if (completedSteps.includes(step) || step <= activeStep) {
      setActiveStep(step);
      router.push(`/booking/step_${step + 1}`);
    }
  };

  const StepComponent = stepsComponents[activeStep] || Step1;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(() => {})}>
        <div className="p-4 md:p-6 xl:p-9 lg:pt-[90px] xl:pt-[102px]">
          <FormStepper
            activeStep={activeStep}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            handleStep={handleStep}
            completedSteps={completedSteps}
          >
            <StepComponent
              control={methods.control}
              setStepCompleted={setStepCompleted}
            />
          </FormStepper>
        </div>
      </form>
    </FormProvider>
  );
};

export default BookingStep;
