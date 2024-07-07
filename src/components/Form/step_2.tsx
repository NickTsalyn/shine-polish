"use client";
import { ExtrasOptions, ServicesOptions } from "@/data/booking-form/step_2";
import useFormStorage from "@/hooks/formStorage";
import RadioButton from "../UI/RadioButton";
import CheckBox from "../UI/Сheckbox";
import { useState, useEffect, useCallback } from "react";
import dayjs from "dayjs";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "@/types/interfaces";
interface StepProps {
  control: Control<FormValues>;
  setStepCompleted: (step: number) => void;
}

const Step2: React.FC<StepProps> = ({ control, setStepCompleted }) => {
  const { form, handleRadioChange, handleCheckboxChange, setForm } =
    useFormStorage({
      areas: "",
      bedroom: 1,
      bathroom: 1,
      frequency: "",
      homeAccess: "",
      aboutUs: "",
      specialInstructions: "",
      extras: [],
      services: "",
      selectedDate: dayjs().format("MM/DD/YYYY"),
      time: dayjs().format("h:mm A"),
      address: "",
      aptSuite: "",
      city: "",
      zipCode: "",
    });

  const [disable, setDisable] = useState(false);

  const handleDisable = useCallback(() => {
    if (form.services === "Basic Cleaning") {
      setDisable(false);
    } else if (
      form.services === "Deep Cleaning" ||
      form.services === "Move In/Move Out" ||
      form.services === "Post Constraction"
    ) {
      setDisable(true);
      const updatedForm = { ...form, extras: [] };
      setForm(updatedForm);
      localStorage.setItem("form", JSON.stringify(updatedForm));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.servises, setForm]);

  useEffect(() => {
    handleDisable();
  }, [handleDisable]);

  // const isStepCompleted = form.services;

  useEffect(() => {
    if (form.services) {
      setStepCompleted(2);
    }
  }, [form.services, setStepCompleted]);

  return (
    <div className="p-4 md:p-6 lg:p-9">
      <div className="container">
        <div className="max-w-[278px] m-auto">
          <h2 className="text-2xl md:text-4xl font-medium mb-5">
            Select Extras
          </h2>
          <p className="text-bookingSubText font-normal mb-5 leading-[14.4px] text-[12px]">
            Add extras to customize your cleaning service. Remember{" "}
            <span className=" font-bold">deep cleaning </span>
            is recommended for all first time cleans to prepare your home for
            routine services.
          </p>
          <p className="text-bookingSubText font-bold mb-5 leading-[14.4px] text-[12px]">
            **Beware: deep cleaning price may be variable depending on house
            condition.**
          </p>
          <p className="text-bookingSubText font-normal mb-5 leading-[14.4px] text-[12px]">
            <span className=" font-bold">Move In/Move Out</span> requires a
            vacant home with water and electricity for a proper cleaning.
          </p>
        </div>
        <ul className="flex gap-[16px] flex-col max-w-[278px] m-auto">
          <ul className="flex flex-wrap gap-5 lg:gap-6 lg:w-[562px] justify-center md:justify-around md:flex-nowrap lg:flex-wrap">
            {ServicesOptions.map(({ value, label }) => {
              return (
                <li
                  key={value}
                  className="flex justify-center items-center w-[128px] md:min-w-[160px] lg:min-w-[260px]"
                >
                  <Controller
                    name="services"
                    control={control}
                    rules={{ required: "This field is required" }}
                    render={({ field }) => (
                      <RadioButton
                        {...field}
                        style=" py-[10px] px-[20px] md:py-[8px] md:px-[10px] lg:py-[20px] h-full w-full"
                        isActive={value === form.services}
                        onClick={() => {
                          field.onChange(value);
                          handleRadioChange("services", value);
                        }}
                      >
                        <span className="inline-block lg:text-2xl">
                          {label}
                        </span>
                      </RadioButton>
                    )}
                  />
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-wrap gap-5 lg:gap-6 lg:w-[562px] md:justify-around md:flex-wrap lg:flex-wrap">
            {ExtrasOptions.map(({ value, label }) => {
              return (
                <li
                  key={value}
                  className="flex justify-center items-center w-[128px] md:min-w-[160px] lg:min-w-[260px]"
                >
                  <Controller
                    name="extras"
                    control={control}
                    render={({ field }) => (
                      <CheckBox
                        {...field}
                        disabled={disable}
                        value={value}
                        style=" py-[10px] px-[20px] md:py-[8px] md:px-[10px] lg:py-[20px] h-full w-full"
                        isActive={(form.extras as string[]).includes(value)}
                        onClick={() => {
                          const newValue = (field.value || []).includes(value)
                            ? field.value.filter((v) => v !== value)
                            : [...(field.value || []), value];
                          field.onChange(newValue);
                          handleCheckboxChange("extras", value);
                          // setStepCompleted(1);
                        }}
                      >
                        <span className="inline-block lg:text-2xl">
                          {label}
                        </span>
                      </CheckBox>
                    )}
                  />
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

// "use client";
// import { ExtrasOptions, ServicesOptions } from "@/data/booking-form/step_2";
// import useFormStorage from "@/hooks/formStorage";
// import RadioButton from "../UI/RadioButton";
// import CheckBox from "../UI/Сheckbox";
// import { useState, useEffect, useCallback } from "react";
// import dayjs from "dayjs";
// import { Control, Controller } from "react-hook-form";
// import { FormValues } from "@/types/interfaces";
// import { initialForm } from "@/data/booking-form/initialForm";
// interface StepProps {
//   control: Control<FormValues>;
//   setStepCompleted: (step: number) => void;
// }

// const Step2: React.FC<StepProps> = ({ control, setStepCompleted }) => {
//   const { form, handleRadioChange, handleCheckboxChange, setForm } =
//     useFormStorage( { areas: "",
//       bedroom: 1,
//       bathroom: 1,
//       frequency: "",
//       homeAccess: "",
//       aboutUs: "",
//       specialInstructions: "",
//       extras: [],
//       services: "",
//       name: "",
//       surname: "",
//       email: "",
//       phone: "",
//       remindersChecked: false,
//       selectedDate: dayjs().format("MM/DD/YYYY"),
//       time: dayjs().format("h:mm A"),
//       address: "",
//       aptSuite: "",
//       city: "",
//       zipCode: "",
//       completedSteps: [],
//       });

//   const [disable, setDisable] = useState(false);

//   const handleDisable = useCallback(() => {
//     if (form.services === "Basic Cleaning") {
//       setDisable(false);
//     } else if (
//       form.services === "Deep Cleaning" ||
//       form.services === "Move In/Move Out" ||
//       form.services === "Post Constraction"
//     ) {
//       setDisable(true);
//       const updatedForm = { ...form, extras: [] };
//       setForm(updatedForm);
//       localStorage.setItem("form", JSON.stringify(updatedForm));
//     }

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [form.servises, setForm]);

//   useEffect(() => {
//     handleDisable();
//   }, [handleDisable]);

//   const isStepCompleted = form.services;

//   useEffect(() => {
//     if (isStepCompleted) {
//       setStepCompleted(2);
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isStepCompleted]);

//   return (
//     <div className="p-4 md:p-6 lg:p-9">
//       <div className="container">
//         <div className="max-w-[278px] m-auto">
//           <h2 className="text-2xl md:text-4xl font-medium mb-5">
//             Select Extras
//           </h2>
//           <p className="text-bookingSubText font-normal mb-5 leading-[14.4px] text-[12px]">
//             Add extras to customize your cleaning service. Remember{" "}
//             <span className=" font-bold">deep cleaning </span>
//             is recommended for all first time cleans to prepare your home for
//             routine services.
//           </p>
//           <p className="text-bookingSubText font-bold mb-5 leading-[14.4px] text-[12px]">
//             **Beware: deep cleaning price may be variable depending on house
//             condition.**
//           </p>
//           <p className="text-bookingSubText font-normal mb-5 leading-[14.4px] text-[12px]">
//             <span className=" font-bold">Move In/Move Out</span> requires a
//             vacant home with water and electricity for a proper cleaning.
//           </p>
//         </div>
//         <ul className="flex gap-[16px] flex-col max-w-[278px] m-auto">
//           <ul className="flex flex-wrap gap-5 lg:gap-6 lg:w-[562px] justify-center md:justify-around md:flex-nowrap lg:flex-wrap">
//             {ServicesOptions.map(({ value, label }) => {
//               return (
//                 <li
//                   key={value}
//                   className="flex justify-center items-center w-[128px] md:min-w-[160px] lg:min-w-[260px]"
//                 >
//                   <Controller
//                     name="services"
//                     control={control}
//                     rules={{ required: "This field is required" }}
//                     render={({ field }) => (
//                       <RadioButton
//                         {...field}
//                         style=" py-[10px] px-[20px] md:py-[8px] md:px-[10px] lg:py-[20px] h-full w-full"
//                         isActive={value === form.services}
//                         onClick={() => {
//                           field.onChange(value);
//                           handleRadioChange("services", value);
//                         }}
//                       >
//                         <span className="inline-block lg:text-2xl">
//                           {label}
//                         </span>
//                       </RadioButton>
//                     )}
//                   />
//                 </li>
//               );
//             })}
//           </ul>
//           <ul className="flex flex-wrap gap-5 lg:gap-6 lg:w-[562px] md:justify-around md:flex-wrap lg:flex-wrap">
//             {ExtrasOptions.map(({ value, label }) => {
//               return (
//                 <li
//                   key={value}
//                   className="flex justify-center items-center w-[128px] md:min-w-[160px] lg:min-w-[260px]"
//                 >
//                   <Controller
//                     name="extras"
//                     control={control}
//                     render={({ field }) => (
//                       <CheckBox
//                         {...field}
//                         disabled={disable}
//                         value={value}
//                         style=" py-[10px] px-[20px] md:py-[8px] md:px-[10px] lg:py-[20px] h-full w-full"
//                         isActive={(form.extras as string[]).includes(value)}
//                         onClick={() => {
//                           const newValue = (field.value || []).includes(value)
//                             ? field.value.filter((v) => v !== value)
//                             : [...(field.value || []), value];
//                           field.onChange(newValue);
//                           handleCheckboxChange("extras", value);
//                         }}
//                       >
//                         <span className="inline-block lg:text-2xl">
//                           {label}
//                         </span>
//                       </CheckBox>
//                     )}
//                   />
//                 </li>
//               );
//             })}
//           </ul>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default Step2;
