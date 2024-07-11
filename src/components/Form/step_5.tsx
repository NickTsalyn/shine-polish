import Button from '../UI/Button';
import Input from '../UI/Input';
import Textarea from '../UI/Textarea';

import useFormStorage from '@/hooks/formStorage';
import Image from 'next/image';
import tellAboutImg from '../../../public/images/tell-about-discount.png';
import {BannerImg, DiscontImg} from '../../global/images';

const Step5 = () => {
 const {form, handleInputChange} = useFormStorage({
  question: '',
  email: '',
  discountCode: '',
  tips: '',
 });

 console.log(form.email);
 return (
  <div className=" py-4 flex flex-col gap-6 lg:flex-row lg:flex-wrap justify-between">
   {/* question */}
   <div className=" flex flex-col gap-4 lg:w-[580px]">
    <h2 className=" text-2xl md:text-4xl font-medium">Have you any question?</h2>
    <p className=" body text-subtext ">
     If you have a question about our company, ask it in the next field. We’ll answer to you on email{' '}
    </p>
    <div className="h-56">
     <Textarea
      name="question"
      value={form.question as string}
      onChange={handleInputChange}
      placeholder="Your question"
     />
    </div>
   </div>
   {/* discount */}
   <form className=" flex flex-col justify-center gap-4 ">
    <h2 className="text-2xl md:text-4xl font-medium">Discount code</h2>

    <div className="flex  gap-4 lg:flex-col lg:w-[500px]">
     <div className="md:w-3/4 lg:w-full">
      <Input
       style="form-input"
       type="text"
       placeholder="Discount code (or leave this blank)"
       onChange={handleInputChange}
       name="discountCode"
       value={form.discountCode as string}
      />
     </div>
     <div className="flex justify-center md:w-1/4 lg:w-[500px] lg:justify-end">
      <Button
       type="submit"
       style="apply-btn-light"
      >
       <span className=" text-accent text-base leading-8 ">Accept</span>
      </Button>
     </div>
    </div>
   </form>
   {/* tips */}
   <div className=" flex flex-col lg:flex-row   lg:items-center lg:w-[580px] lg:gap-8">
    <div className=" hidden md:flex  md:w-[422px] md:h-[266px] lg:w-[360px]  ">
     <DiscontImg />
    </div>
    <div className="flex flex-col justify-end gap-12 ">
     <p className=" text-text body md:text-2xl md:text-right   md:text-accent">
      Tips are not expected but always appreciated <br />
      by our cleaners
     </p>
     <div className="md:h-10">
      <Input
       style="form-input"
       type="text"
       onChange={handleInputChange}
       name="tips"
       value={form.tips as string}
      />
     </div>
    </div>
   </div>
   {/* banner */}
   <div className=" lg:flex md:flex-col lg:w-[500px]">
    <h2 className="text-center text-rose-900 text-4xl font-bold ">Tell about us your friends and get discount!</h2>
    <div className=" flex justify-center">
     <BannerImg />
    </div>
   </div>
  </div>
 );
};
export default Step5;
