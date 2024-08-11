import Button from "../UI/Button";
import Input from "../UI/Input";
import Textarea from "../UI/Textarea";

import useFormStorage from "@/hooks/formStorage";
import {BannerImg, DiscontImg} from "../../global/images";
import {useEffect, useState} from "react";
import {StepProps} from "@/types/interfaces";
import {IMaskInput} from "react-imask";
const TipsNumberMask = "$ 0000";
const Step5: React.FC<StepProps> = ({setStepCompleted}) => {
 const {form, handleInputChange, handleCustomChange} = useFormStorage();
 useEffect(() => {
  setStepCompleted(5);
 }, [setStepCompleted]);

 const handleTipsChange = (value: string) => {
  handleCustomChange("tips", value);
 };

 return (
  <div className=" py-8 flex flex-col gap-6 lg:flex-row lg:flex-wrap justify-between lg:h-[800px]">
   <div className=" flex flex-col gap-6 lg:min-w-[500px] lg:max-w-[600px] w-full mb-[40px] lg:mb-0 xl:w-[900px]">
    <h2 className=" text-2xl md:text-4xl font-medium">Have you any question?</h2>
    <p className=" body text-subtext ">
     If you have a question about our company, ask it in the next field. We’ll answer to you on email{" "}
    </p>
    <div className="h-48">
     <Textarea
      name="question"
      value={form.question as string}
      onChange={handleInputChange}
      placeholder="Your question"
     />
    </div>
   </div>

   <form className=" flex flex-col justify-center lg:justify-start gap-4 mb-[40px]">
    <h2 className="text-2xl md:text-4xl font-medium lg:mb-5">Discount code</h2>

    <div className="md:flex  gap-4 lg:flex-col lg:w-[500px]">
     <div className="w-full md:w-3/4 lg:w-full h-[60px] mb-5">
      <Input
       style="form-input"
       type="text"
       placeholder="Discount code (or leave this blank)"
       onChange={handleInputChange}
       name="discountCode"
       value={form.discountCode as string}
      />
     </div>
     <div className="flex justify-center md:w-1/4 lg:w-[500px] lg:justify-end md:h-[60px]">
      <Button
       type="submit"
       style="apply-btn-light"
      >
       <span className=" text-accent text-base leading-8  ">Accept</span>
      </Button>
     </div>
    </div>
   </form>

   <div className="lg:relative flex flex-col md:flex-row  md:w-full md:justify-between lg:flex-row lg:items-end lg:w-[600px]  lg:gap-8 mb-[40px] lg:mb-0 xl:w-[900px]">
    <div className=" hidden md:flex lg:w-[500px] lg:absolute lg:left-0 lg:bottom-0  ">
     <DiscontImg />
    </div>
    <div className="flex flex-col justify-end gap-5 md:w-[480px] lg:w-[300px] lg:absolute lg:right-0 lg:bottom-[6px] xl:w-[500px]">
     <p className=" body md:text-2xl md:text-right  text-accent">
      Tips are not expected but always appreciated <br />
      by our cleaners
     </p>
     <div className=" h-[60px]">
      <IMaskInput
       name="tips"
       mask={TipsNumberMask}
       placeholder="$ 00"
       min={0}
       max={9999}
       value={form.tips}
       unmask={true}
       className="block mx-full mb-[10px] w-full hx-full h-full  py-[8px] lg:py-[12px] px-[8px] lg:px-[16px] bg-transparent text-text border-solid border-2 focus:border-[3px] border-secondary rounded-[12px] focus:shadow-input-shadow outline-none xl:placeholder:text-[16px] placeholder:text-secondary-placeholder placeholder:opacity-50"
       padFractionalZeros={true}
       onAccept={(value: string) => {
        handleTipsChange(value);
       }}
      />
     </div>
    </div>
   </div>

   <div className=" lg:flex md:flex-col lg:w-[500px]">
    <h2 className="text-center text-rose-900 text-4xl mb-5">Tell about us your friends and get discount!</h2>
    <div className=" flex justify-center">
     <BannerImg />
    </div>
   </div>
  </div>
 );
};
export default Step5;
