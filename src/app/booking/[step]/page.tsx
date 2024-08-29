"use client";

import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import useFormStorage from "@/hooks/formStorage";
import { FormValues } from "@/types/interfaces";
import Loading from "@/app/loading";

import FormStepper from "@/components/Form/FormStepper";
const Step1 = dynamic(() => import("@/components/Form/step_1"), { loading: () => <Loading /> });
const Step2 = dynamic(() => import("@/components/Form/step_2"), { loading: () => <Loading /> });
const Step3 = dynamic(() => import("@/components/Form/step_3"), { loading: () => <Loading /> });
const Step4 = dynamic(() => import("@/components/Form/step_4"), { ssr: false, loading: () => <Loading /> });
const Step5 = dynamic(() => import("@/components/Form/step_5"), { loading: () => <Loading /> });
const Step6 = dynamic(() => import("@/components/Form/step_6"), { loading: () => <Loading /> });

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
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const { form } = useFormStorage();

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

  const setStepCompleted = (step: number) => {
    if (!completedSteps.includes(step)) {
      setCompletedSteps((prev) => [...prev, step]);
    }
    console.log(completedSteps);
  };

  const handlePrevious = () => {
    const prevStep = activeStep - 1;
    setActiveStep(prevStep);
    router.push(`/booking/${prevStep + 1}`);
  };

  const handleNext = async () => {
    const isValid = await validateStep();
    if (!isValid) {
      return;
    }
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
      <div className="p-4 md:p-6 xl:p-9 lg:pt-[90px] xl:pt-[102px] lg:h-screen ">
        <FormStepper
          activeStep={activeStep}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          handleStep={handleStep}
          completedSteps={completedSteps}
        >
          <StepComponent control={methods.control} setStepCompleted={setStepCompleted} />
        </FormStepper>
      </div>
    </FormProvider>
  );
};

export default BookingStep;
