"use client";
import { ExtrasOptions, ServicesOptions } from "@/data/booking-form/step_2";
import useFormStorage from "@/hooks/formStorage";
import RadioButton from "../UI/RadioButton";
import CheckBox from "../UI/Сheckbox";
import { useState, useEffect, useRef } from "react";

const Step2 = () => {
  // const initialFormState = () => {
  //   const formDataStr = localStorage.getItem("form");
  //   return formDataStr ? JSON.parse(formDataStr) : { services: "", extras: [] };
  // };
  const { form, handleRadioChange, handleCheckboxChange } = useFormStorage({
    services:  "",
    extras: [],
  });

  const [disable, setDisable] = useState(false);
  const [p, setP] =useState([])
  

  const handleDisable = () => {
    if (form.services === "Basic Cleaning") {
   
      console.log(form)
      setDisable(false);
    } 
     else if(form.services === 'Deep Cleaning' || form.services === 'Move In/Move Out' ) {
      setDisable(true);
  
      form.extras = [];
console.log(form.extras)

    }
  };

  
  useEffect(() => {
    // Запобігаємо оновленню, якщо services вже мають значення і нове значення порожнє
    // if (prevServices.current !== "" && form.services === "") {
    //   return
    // } else {
    //   prevServices.current = form.services;
      handleDisable();
     
    
  }, [form]);





  return (
    <div className="p-4 md:p-6 lg:p-9">
      <div className="container">
       
        <div className="max-w-[278px] m-auto">
        <h2 className="text-2xl md:text-4xl font-medium mb-5">Select Extras</h2>
        <p className="text-bookingSubText font-normal mb-5 leading-[14.4px] text-[12px]">
          Add extras to customize your cleaning service. Remember <span className=" font-bold">deep cleaning </span>
          is recommended for all first time cleans to prepare your home for
          routine services.
        </p>
        <p className="text-bookingSubText font-bold mb-5 leading-[14.4px] text-[12px]">
          **Beware: deep cleaning price may be variable depending on house
          condition.**
        </p>
        <p className="text-bookingSubText font-normal mb-5 leading-[14.4px] text-[12px]">
          <span className=" font-bold">Move In/Move Out</span> requires a vacant home with water and electricity for
          a proper cleaning.
        </p>
        </div>
        <ul className="flex gap-[16px] flex-col max-w-[278px] m-auto">
          <ul className="flex flex-wrap gap-5 lg:gap-6 lg:w-[562px] justify-center md:justify-around md:flex-nowrap lg:flex-wrap ">
            {ServicesOptions.map(({ value, label }) => {
              return (
                <li
                  key={value}
                  className="flex justify-center items-center w-[128px] md:min-w-[160px] lg:min-w-[260px]  "
                >
                  <RadioButton
                    value={value}
                    style=" py-[10px] px-[20px] md:py-[8px] md:px-[10px] lg:py-[20px] h-full w-full"
                    isActive={value === form.services}
                    onClick={() => handleRadioChange("services", value)}
                  >
                    <span className="inline-block lg:text-2xl">{label}</span>
                  </RadioButton>
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-wrap gap-5 lg:gap-6 lg:w-[562px]  md:justify-around md:flex-wrap lg:flex-wrap  ">
            {ExtrasOptions.map(({ value, label }) => {
              return (
                <li
                  key={value}
                  className="flex justify-center items-center w-[128px] md:min-w-[160px] lg:min-w-[260px]"
                >
                  <CheckBox
                    disabled={disable}
                    value={value}
                    style=" py-[10px] px-[20px] md:py-[8px] md:px-[10px] lg:py-[20px] h-full w-full"
                    isActive={(form.extras as string[]).includes(value)}
                    onClick={() => handleCheckboxChange("extras", value)}
                  >
                    <span className="inline-block lg:text-2xl">{label}</span>
                  </CheckBox>
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
    </div>
  );
};
export default Step2;


