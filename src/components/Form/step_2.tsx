'use client';
import {ExtrasOptions, ServicesOptions} from '@/data/booking-form/step_2';
import useFormStorage from '@/hooks/formStorage';
import RadioButton from '../UI/RadioButton';
import CheckBox from '../UI/Сheckbox';
import {useState, useEffect, useCallback} from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';

const Step2 = () => {
 const {form, handleRadioChange, handleCheckboxChange, setForm} = useFormStorage({
  areas: '',
  bedroom: 1,
  bathroom: 1,
  frequency: '',
  homeAccess: '',
  aboutUs: '',
  specialInstructions: '',
  extras: [],
  services: '',
  selectedDate: dayjs().format('MM/DD/YYYY'),
  time: dayjs().format('h:mm A'),
  address: '',
  aptSuite: '',
  city: '',
  zipCode: '',
 });

 const [disable, setDisable] = useState(false);

 const handleDisable = useCallback(() => {
  if (form.services === 'Basic Cleaning') {
   setDisable(false);
  } else if (
   form.services === 'Deep Cleaning' ||
   form.services === 'Move In/Move Out' ||
   form.services === 'Post Constraction' ||
   form.services === 'Visit property for estimate'
  ) {
   setDisable(true);
   const updatedForm = {...form, extras: []};
   setForm(updatedForm);
   localStorage.setItem('form', JSON.stringify(updatedForm));
  }
 }, [form, setForm]);

 useEffect(() => {
  handleDisable();
 }, [handleDisable]);

 return (
  <div className="p-4 md:p-6 lg:p-9 lg:h-[800px] xl:h-[980px]">
   {/* <div className="container"> */}
   {/* <div className="  mb-5 xl:mb-[35px]"> */}
   <h2 className="text-2xl md:text-4xl font-medium mb-5">Select Extras</h2>
   <p className="text-bookingSubText font-normal mb-5 leading-[14.4px] text-[12px] md:text-[24px] md:leading-[32px] lg:leading-[28.8px] w-full">
    Add extras to customize your cleaning service.
    <br className="hidden md:block lg:hidden" /> Remember <span className=" font-bold">deep cleaning </span>
    is recommended for all first time cleans to prepare your home for routine services.
   </p>
   <p className="text-bookingSubText font-bold mb-5 leading-[14.4px] text-[12px] md:text-[24px] md:leading-[32px] lg:leading-[28.8px]">
    **Beware: deep cleaning price may be variable depending on house condition.**
   </p>
   <p className="text-bookingSubText font-normal  leading-[14.4px] text-[12px] md:text-[24px] md:leading-[32px] lg:leading-[28.8px] mb-10">
    <span className="font-bold">Move In/Move Out</span> requires a vacant home with water and electricity for a proper
    cleaning.
   </p>
   <p className="hidden xl:block text-bookingSubText font-normal lg:leading-[28.8px] md:text-[24px] ">
    Add extras to customize your cleaning service. Remember deep cleaning is recommended for all first time cleans to
    prepare your home for routine services. Move In/Move Out requires a vacant home with water and electricity for a
    proper cleaning
   </p>
   {/* </div> */}
   <ul className="flex gap-[16px] flex-col mb-10">
    <ul className="flex flex-wrap gap-5 md:gap-[22px]  justify-center md:justify-around lg:justify-start md:flex-nowrap lg:flex-wrap">
     {ServicesOptions.map(({value, label}) => {
      return (
       <li
        key={value}
        className="flex justify-center items-center w-[128px] md:w-[160px] lg:w-[176px] xl:w-[246px]  xl:min-h-[140px]"
       >
        <RadioButton
         value={value}
         style=" py-[10px] px-[20px] md:py-[22px] md:px-[10px] lg:py-[20px] h-[136px]  lg:h-[72px]w-full md:text-[24px] text-main md:text-accent md:leading-[28.8px]"
         isActive={value === form.services}
         onClick={() => handleRadioChange('services', value)}
        >
         <span className="inline-block lg:text-2xl">{label}</span>
        </RadioButton>
       </li>
      );
     })}
     <li
      key={'Visit property for estimate'}
      className="justify-center items-center w-[278px] md:w-[693px] lg:w-[176px] xl:w-[246px] xl:min-h-[140px] hidden lg:flex"
     >
      <RadioButton
       value={'Visit property for estimate'}
       style=" py-[10px] px-[20px] md:py-[22px] md:px-[10px] lg:py-[20px] h-full w-full text-accent md:text-accent md:text-[24px]  md:leading-[28.8px]"
       isActive={'Visit property for estimate' === form.services}
       onClick={() => handleRadioChange('services', 'Visit property for estimate')}
      >
       <span className="inline-block lg:text-2xl">{'Visit property for estimate'}</span>
      </RadioButton>
     </li>
    </ul>
    <ul className="flex flex-wrap gap-5 md:gap-[22px] lg:gap-6 lg:w-[1160px]  xl:w-[1572px] md:flex-wrap lg:flex-wrap">
     {ExtrasOptions.map(({value, label, style, path}) => {
      return (
       <li
        key={value}
        className="flex  w-[128px] md:w-[152px] lg:w-[176px] xl:w-[246px] md:min-h-[124px] xl:min-h-[140px]"
       >
        <CheckBox
         disabled={disable}
         value={value}
         style=" py-2 px-2  h-full w-full"
         isActive={(form.extras as string[]).includes(value)}
         onClick={() => handleCheckboxChange('extras', value)}
        >
         <div
          className={` md:h-[48px] md:w-[48px] lg:h-[52px] lg:w-[52px] xl:w-[56px] xl:h-[56px] hidden md:block relative`}
         >
          <Image
           src={path}
           alt="icons"
           // width={48}
           // height={48}
           className="mb-4"
           fill
           // objectFit="cover"
           // layout="fill"
          ></Image>
         </div>
         <span className="inline-block lg:text-[16px]">{label}</span>
        </CheckBox>
       </li>
      );
     })}
     <li
      key={'Visit property for estimate'}
      className="flex justify-center items-center w-[278px] md:w-[693px] lg:w-[176px] xl:w-[246px] xl:min-h-[140px] lg:hidden"
     >
      <RadioButton
       value={'Visit property for estimate'}
       style=" py-2 px-[20px] md:py-4 md:px-[10px] lg:py-5 h-full w-full text-accent md:text-accent md:text-[24px]  md:leading-[28.8px]"
       isActive={'Visit property for estimate' === form.services}
       onClick={() => handleRadioChange('services', 'Visit property for estimate')}
      >
       <span className="inline-block lg:text-2xl">{'Visit property for estimate'}</span>
      </RadioButton>
     </li>
    </ul>
   </ul>
   {/* </div> */}
  </div>
 );
};
export default Step2;
