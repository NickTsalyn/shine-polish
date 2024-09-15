import Button from "../UI/Button";
import Input from "../UI/Input";
import Textarea from "../UI/Textarea";

import useFormStorage from "@/hooks/formStorage";
import {BannerImg, DiscontImg} from "../../global/images";
import {useEffect} from "react";
import {StepProps} from "@/types/interfaces";
import {IMaskInput} from "react-imask";
const TipsNumberMask = "$ 0000";
const Step5: React.FC<StepProps> = ({setStepCompleted}: StepProps) => {
 const {form, handleCustomChange} = useFormStorage();

 useEffect(() => {
  setStepCompleted(5);
 }, [setStepCompleted]);

 const handleTipsChange = (value: string) => {
  handleCustomChange("tips", value);
 };

 return (
  <div className=" py-4 md:py-6 lg:py-9 lg:h-[80vh] flex flex-col gap-14 md:gap-20 lg:gap-10 xl:gap-20 justify-between items-between">
   <div className=" flex flex-col gap-6 w-full lg:flex-row">
    <div className="flex flex-col gap-4 lg:w-1/3">
     <h2 className=" text-2xl md:text-4xl font-medium lg:mb-5">Have you any question?</h2>
     <p className=" body text-subtext ">
      If you have a question about our company, ask it in the next field. We’ll answer to you on email{" "}
     </p>
    </div>
    <div className="h-48 xl:h-[200px] lg:w-2/3">
     <Textarea
      name="question"
      value={form.question as string}
      onChange={(e) => {
       const {value} = e.target as HTMLTextAreaElement;
       handleCustomChange("question", value);
      }}
      placeholder="Your question"
     />
    </div>
   </div>

   <div className="w-full flex flex-col lg:flex-row flex-nowrap gap-14 lg:gap-28 xl:gap-40 justify-between">
    <form className=" flex flex-col justify-between lg:w-1/2 xl:w-[40%] gap-6 mb-5 lg:mb-0 ">
     <h2 className="text-2xl md:text-4xl font-medium lg:mb-5">Discount code</h2>

     <div className="flex flex-col justify-end lg:flex-row  lg:justify-between gap-4 w-full ">
      <div className="w-full lg:w-4/6  h-[48px] xl:h-[56px]">
       <Input
        name="discountCode"
        value={form.discountCode as string}
        style="form-input"
        type="text"
        placeholder="Discount code (or leave this blank)"
        onChange={(e) => {
         const {value} = e.target as HTMLInputElement;
         handleCustomChange("discountCode", value);
        }}
       />
      </div>
      <div className="flex justify-end w-full lg:w-[160px] md:h-[48px] ">
       <Button
        type="submit"
        style="apply-btn-light"
       >
        <span className=" text-accent text-base leading-8">Accept</span>
       </Button>
      </div>
     </div>
    </form>

    <div className="flex flex-col justify-end items-stretch  gap-4 md:w-[480px] lg:w-1/2 xl:w-[50%] ">
     <p className="  text-[24px] md:text-2xl  xl:text-4xl text-accent hidden md:block lg:hidden">
      Tips are not expected but always appreciated <br />
      by our cleaners
     </p>
     <p className="  text-[24px] md:text-2xl  xl:text-4xl text-accent md:hidden lg:block">
      Tips are not expected but always appreciated by our cleaners
     </p>
     <div className=" h-[48px] xl:h-[56px]">
      <IMaskInput
       name="tips"
       mask={TipsNumberMask}
       placeholder="$ 00"
       min={0}
       max={9999}
       value={form.tips}
       unmask={true}
       className="block mx-full mb-[10px] w-full hx-full h-full  py-[8px] lg:py-[12px] px-[8px] lg:px-[16px] lg:w-[200px] lg:self-end bg-transparent text-text border-solid border-2 focus:border-[3px] border-secondary rounded-[12px] focus:shadow-input-shadow outline-none xl:placeholder:text-[16px] placeholder:text-secondary-placeholder placeholder:opacity-50 xl:h-[56px]"
       padFractionalZeros={true}
       onAccept={(value: string) => {
        handleCustomChange("tips", value);
       }}
      />
     </div>
    </div>
   </div>

   <div className="flex content-center flex-col lg:mx-auto lg:flex-row  gap-10">
    <h2 className="text-center self-center text-accent-light text-2xl md:text-4xl mb-5 lg:hidden xl:flex animate-wiggle-more animate-infinite animate-duration-[3000ms] animate-ease-in-out">
     Tell about us your friends and get discount!
    </h2>
    <h2 className="text-center self-center text-accent-light text-2xl mb-5 hidden md:text-4xl lg:block xl:hidden animate-wiggle-more animate-infinite animate-duration-[3000ms] animate-ease-in-out">
     Tell about us your friends <br /> and get discount!
    </h2>
    <div className=" flex justify-center lg:w-[500px] xl:w-[700px] h-auto">
     <BannerImg />
    </div>
   </div>
  </div>
 );
};
export default Step5;
