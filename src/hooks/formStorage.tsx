"use client";

import {useEffect, useState} from "react";
import {initialForm} from "@/data/booking-form/initialForm";
import {Form} from "@/types/interfaces";

interface AddressDetails {
 street: string;
 city: string;
 state: string;
 zip: string;
 aptSuite: string;
}

interface HandlerReturn {
 form: Form;

 handleCheckboxChange: (name: string, value: string) => void;
 handleCustomChange: (name: string, value: string | number | boolean | string[] | null | AddressDetails) => void;
 setForm: (form: Form) => void;
}
const useFormStorage = (): HandlerReturn => {
 const [form, setForm] = useState(() => {
  if (typeof window !== "undefined") {
   const storedForm = localStorage.getItem("form");
   return storedForm ? JSON.parse(storedForm) : initialForm;
  } else {
   return initialForm;
  }
 });
 useEffect(() => {
  localStorage.setItem("form", JSON.stringify(form));
 }, [form]);

 const handleCheckboxChange = (name: string, value: any) => {
  setForm((prevForm: Form) => {
   const newValue = prevForm[name].includes(value)
    ? prevForm[name].filter((v: any) => v !== value)
    : [...prevForm[name], value];
   return {...prevForm, [name]: newValue};
  });
 };
 const handleCustomChange = (name: string, value: string | number | boolean | string[] | null | AddressDetails) => {
  setForm((prevForm: Form) => ({...prevForm, [name]: value}));
 };
 return {
  form,
  setForm,
  handleCheckboxChange,
  handleCustomChange,
 };
};
export default useFormStorage;

// "use client";

// import {ChangeEvent, FormEvent, useEffect, useState} from "react";
// import {SelectChangeEvent} from "@mui/material";
// import {initialForm} from "@/data/booking-form/initialForm";
// import {Form} from "@/types/interfaces";

// interface HandlerReturn {
//  form: Form;
//  handleInputChange: (
//   event:
//    | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//    | SelectChangeEvent<string | number>
//    | FormEvent<HTMLFormElement>
//  ) => void;
//  handleRadioChange: (name: string, value: string | boolean) => void;
//  handlePhoneChange: (value: string) => void;
//  handleCheckboxChange: (name: string, value: string) => void;
//  handleCustomChange: (name: string, value: any) => void;

//  handleSelectChange: (name: string, value: string | number) => void;
//  setForm: (form: Form) => void;
// //  completedSteps: number[];
// //  setStepCompleted: (step: number) => void;
// }

// const useFormStorage = (): HandlerReturn => {
//  const [form, setForm] = useState(() => {
//   if (typeof window !== "undefined") {
//    const storedForm = localStorage.getItem("form");
//    return storedForm ? JSON.parse(storedForm) : initialForm;
//   } else {
//    return initialForm;
//   }
//  });

// //  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

//  useEffect(() => {
//   localStorage.setItem("form", JSON.stringify(form));
//  }, [form]);

//  const handleInputChange = (
//   e:
//    | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//    | SelectChangeEvent<string | number>
//    | FormEvent<HTMLFormElement>
//  ) => {
//   const {name, value, type, checked} = e.target as HTMLInputElement;
//   const newValue = type === "checkbox" ? checked : value;
//   if (name === "aptSuite") {
//    setForm((prevForm: Form) => ({
//     ...prevForm,
//     address: {
//      ...prevForm.address,
//      aptSuite: newValue,
//     },
//    }));
//   } else {
//    setForm((prevForm: Form) => ({...prevForm, [name]: newValue}));
//   }
//  };

//  const handleSelectChange = (name: string, value: any) => {
//   setForm((prevForm: Form) => ({...prevForm, [name]: value}));
//  };

//  const handleRadioChange = (name: string, value: any) => {
//   setForm((prevForm: Form) => ({...prevForm, [name]: value}));
//  };

//  const handleCheckboxChange = (name: string, value: any) => {
//   setForm((prevForm: Form) => {
//    const newValue = prevForm[name].includes(value)
//     ? prevForm[name].filter((v: any) => v !== value)
//     : [...prevForm[name], value];
//    return {...prevForm, [name]: newValue};
//   });
//  };

//  const handleCustomChange = (name: string, value: any) => {
//   setForm((prevForm: Form) => ({...prevForm, [name]: value}));
//  };
//  const handlePhoneChange = (value: string) => {
//   setForm((prevForm: Form) => ({...prevForm, phone: value}));
//  };

// //  const setStepCompleted = (step: number) => {
// //   if (!completedSteps.includes(step)) {
// //    const newCompletedSteps = [...completedSteps, step];
// //    setCompletedSteps(newCompletedSteps);
// //    localStorage.setItem("completedSteps", JSON.stringify(newCompletedSteps));
// //   }
// //  };

//  return {
//   form,
//   // completedSteps,
//   setForm,
//   handleInputChange,
//   handleRadioChange,
//   handleCheckboxChange,
//   handleCustomChange,
//   handlePhoneChange,
//   handleSelectChange,
//   // setStepCompleted,
//  };
// };
// export default useFormStorage;
