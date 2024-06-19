"use client";
import { ExtrasOptions, ServicesOptions } from "@/data/booking-form/step_2";
import useFormStorage from "@/hooks/formStorage";
import RadioButton from "../UI/RadioButton";
import CheckBox from "../UI/Сheckbox";
import { useState, useEffect } from "react";

const Step2 = () => {
  const { form, handleRadioChange, handleCheckboxChange } = useFormStorage({
    services: "",
    extras: [],
  });

  const [disable, setDisable] = useState(true);

  const handleDisable = () => {
    if (form.services === "Basic Cleaning") {
      setDisable(false);
    } else {
      setDisable(true);
      form.extras = [];
     
      
    }
  };
  useEffect(() => {
    handleDisable();
  }, [form.services]);

  return (
    <div className="p-4 md:p-6 lg:p-9">
      <h1>Little Form 2</h1>
      <ul>
        <ul className="flex flex-wrap gap-5 lg:gap-6 lg:w-[562px]  md:justify-around md:flex-nowrap lg:flex-wrap">
          {ServicesOptions.map(({ value, label }) => {
            return (
              <li
                key={value}
                className="flex justify-center items-center w-[128px] md:min-w-[160px] lg:min-w-[260px]"
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
        <ul className="flex flex-wrap gap-5 lg:gap-6 lg:w-[562px]  md:justify-around md:flex-nowrap lg:flex-wrap">
          {ExtrasOptions.map(({ value, label }) => {
            return (
              <li
                key={value}
                className="flex justify-center items-center w-[132px] md:min-w-[160px] lg:min-w-[260px]"
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
  );
};
export default Step2;

// import useFormStorage from "@/hooks/formStorage";
// import RadioButton from "../UI/RadioButton";
// import CheckBox from "../UI/Сheckbox";

// const Step2 = () => {
//   const { form, handleRadioChange, handleCheckboxChange } = useFormStorage({
//     services: "",
//     extras: [],
//   });
//   return (
//     <div className="p-4 md:p-6 lg:p-9">
//       <ul className="flex flex-wrap gap-5 lg:gap-6 md;jastify-around md:flex-nowrap lg:flex-wrap mb-4">
//         {ServicesOptions.map(({ value, label }) => {
//           return (
//             <li key={value}>
//               <RadioButton
//                 value={value}
//                 style=" py-[10px] px-[20px] md:py-[8px] md:px-[10px] lg:py-[20px] h-full w-full"
//                 isActive={value === form.services}
//                 onClick={() => handleRadioChange("services", value)}
//               >
//                 <span className="inline-block lg:text-2xl">{label}</span>
//               </RadioButton>
//             </li>
//           );
//         })}
//       </ul>
//       <ul className="flex flex-wrap gap-5 lg:gap-6 md;jastify-around md:flex-nowrap lg:flex-wrap">
//         {ExtrasOptions.map(({ value, label }) => {
//           return (
//             <li key={value}>
//               <CheckBox
//                 value={value}
//                 style=" py-[10px] px-[20px] md:py-[8px] md:px-[10px] lg:py-[20px] h-full w-full"
//                 isActive={value === form.extras}
//                 onClick={() => handleCheckboxChange("extras", value)}
//               >
//                 <span className="inline-block lg:text-2xl">{label}</span>
//               </CheckBox>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };
// export default Step2;
