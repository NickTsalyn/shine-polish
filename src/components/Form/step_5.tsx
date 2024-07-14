import Button from '../UI/Button';
import Input from '../UI/Input';
import Textarea from '../UI/Textarea';

import useFormStorage from '@/hooks/formStorage';
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
  <div className=" py-8 flex flex-col gap-6 lg:flex-row lg:flex-wrap justify-between">
   {/* question */}
   <div className=" flex flex-col gap-6 lg:min-w-[600px] mb-[40px] lg:mb-0 xl:w-[900px]">
    <h2 className=" text-2xl md:text-4xl font-medium">Have you any question?</h2>
    <p className=" body text-subtext ">
     If you have a question about our company, ask it in the next field. We’ll answer to you on email{' '}
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
   {/* discount */}
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
   <div className="lg:relative flex flex-col md:flex-row  md:w-full md:justify-between lg:flex-row lg:items-end lg:min-w-[600px] lg:max-w-[800px] lg:gap-8 mb-[40px] lg:mb-0 xl:w-[900px]">
    <div className=" hidden md:flex lg:w-[500px] lg:absolute lg:left-0 lg:bottom-0  ">
     <DiscontImg />
    </div>
    <div className="flex flex-col justify-end gap-5 md:w-[480px] lg:w-[300px] lg:absolute lg:right-0 lg:bottom-[6px] xl:w-[500px]">
     <p className=" body md:text-2xl md:text-right  text-accent">
      Tips are not expected but always appreciated <br />
      by our cleaners
     </p>
     <div className="h-[60px]">
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
    <h2 className="text-center text-rose-900 text-4xl mb-5">Tell about us your friends and get discount!</h2>
    <div className=" flex justify-center">
     <BannerImg />
    </div>
   </div>
  </div>
 );
};
export default Step5;
