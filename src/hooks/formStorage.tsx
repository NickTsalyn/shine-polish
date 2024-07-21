"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
interface Form {
  [key: string]: string | number | boolean | string[] | Dayjs | null | any;
}

interface HandlerReturn {
  form: Form;
  handleRadioChange: (name: string, value: string | boolean) => void;
  handlePhoneChange: (value: string) => void;
  handleCheckboxChange: (name: string, value: string) => void;
  handleCustomChange: (name: string, value: any) => void;
  handleSelectChange: (name: string, value: string | number) => void;
  setForm: (form: Form) => void;
  completedSteps: number[];
  setStepCompleted: (step: number) => void;
}

const initialForm = {
  areas: "",
  bedroom: 1,
  bathroom: 1,
  frequency: "",
  homeAccess: "",
  aboutUs: "",
  specialInstructions: "",
  extras: [],
  services: "",
  name: "",
  surname: "",
  email: "",
  phone: "",
  remindersChecked: false,
  selectedDate: dayjs().format("MM/DD/YYYY"),
  time: dayjs().format("h:mm A"),
  address: "",
  aptSuite: "",
  city: "",
  zipCode: "",
};
const useFormStorage = ( formKey = "form"): HandlerReturn => {
  const [form, setForm] = useState(() => {
    if (typeof window !== "undefined") {
      const storedForm = localStorage.getItem(formKey);
      return storedForm ? JSON.parse(storedForm) : initialForm;
    } else {
      return initialForm;
    }
  });

  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    localStorage.setItem(formKey, JSON.stringify(form));
  }, [form, formKey]);

  const handleSelectChange = (name: string, value: any) => {
    setForm((prevForm: Form) => ({ ...prevForm, [name]: value }));
  };

  const handleRadioChange = (name: string, value: any) => {
    setForm((prevForm: Form) => ({ ...prevForm, [name]: value }));
  };

  const handleCheckboxChange = (name: string, value: any) => {
    setForm((prevForm: Form) => {
      const newValue = prevForm[name].includes(value)
        ? prevForm[name].filter((v: any) => v !== value)
        : [...prevForm[name], value];
      return { ...prevForm, [name]: newValue };
    });
  };

  const handleCustomChange = (name: string, value: any) => {
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    localStorage.setItem(formKey, JSON.stringify(updatedForm));
  };
  const handlePhoneChange = (value: string) => {
    const updatedForm = { ...form, phone: value };
    localStorage.setItem(formKey, JSON.stringify(updatedForm));
  };

  const setStepCompleted = (step: number) => {
    if (!completedSteps.includes(step)) {
      const newCompletedSteps = [...completedSteps, step];
      setCompletedSteps(newCompletedSteps);
      localStorage.setItem(
        `completedSteps`,
        JSON.stringify(newCompletedSteps)
      );
    }
  };

  return {
    form,
    completedSteps,
    setForm,
    handleRadioChange,
    handleCheckboxChange,
    handleCustomChange,
    handlePhoneChange,
    handleSelectChange,
    setStepCompleted,
  };
};
export default useFormStorage;

// "use client";

// import { SelectChangeEvent } from "@mui/material";
// import { ChangeEvent, FormEvent, useEffect, useState } from "react";
// import { Dayjs } from "dayjs";
// interface Form {
//   [key: string]: string | number | boolean | string[]| number[] | Dayjs | null | any;
// }

// interface HandlerReturn {
//   form: Form;
//   handleInputChange: (
//     event:
//       | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//       | SelectChangeEvent<string | number>
//       | FormEvent<HTMLFormElement>
//   ) => void;
//   handleRadioChange: (name: string, value: string | boolean) => void;
//   handlePhoneChange: (value: string) => void;
//   handleCheckboxChange: (name: string, value: string) => void;
//   handleCustomChange: (name: string, value: any) => void;
//   handleSelectChange: (name: string, value: string | number) => void;
//   setForm: (form: Form) => void;
//   // completedSteps: number[];
//   setStepCompleted: (step: number) => void;
// }

// const useFormStorage = (initialForm: Form, formKey = "form"): HandlerReturn => {
//   const [form, setForm] = useState(() => {
//     if (typeof window !== "undefined") {
//       const storedForm = localStorage.getItem("form");
//       return storedForm ? JSON.parse(storedForm) : initialForm;
//     } else {
//       return initialForm;
//     }
//   });

//   // const [completedSteps, setCompletedSteps] = useState<number[]>([]);

//   useEffect(() => {
//     localStorage.setItem("form", JSON.stringify(form));
//   }, [form]);

//   const handleInputChange = (
//     event:
//       | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//       | SelectChangeEvent<string | number>
//       | FormEvent<HTMLFormElement>
//   ) => {
//     const { name, value, type, checked } = event.target as HTMLInputElement;
//     const newValue = type === "checkbox" ? checked : value;
//     const updatedForm = { ...form, [name]: newValue };
//     setForm(updatedForm);
//     localStorage.setItem(formKey, JSON.stringify(updatedForm));
//   };

//   // added

//   const handleSelectChange = (name: string, value: any) => {
//     setForm((prevForm: Form) => ({ ...prevForm, [name]: value }));
//   };

//   const handleRadioChange = (name: string, value: any) => {
//     setForm((prevForm: Form) => ({ ...prevForm, [name]: value }));
//   };

//   const handleCheckboxChange = (name: string, value: any) => {
//     setForm((prevForm: Form) => {
//       const newValue = prevForm[name].includes(value)
//         ? prevForm[name].filter((v: any) => v !== value)
//         : [...prevForm[name], value];
//       return { ...prevForm, [name]: newValue };
//     });
//   };
//   // -----------------------------------

//   // const handleRadioChange = (name: string, value: string | boolean) => {
//   //   const updatedForm = { ...form, [name]: value };
//   //   setForm(updatedForm);
//   //   localStorage.setItem(formKey, JSON.stringify(updatedForm));
//   // };
//   // const handleSelectChange = (name: string, value: string | number) => {
//   //   const updatedForm = { ...form, [name]: value };
//   //   setForm(updatedForm);
//   //   localStorage.setItem(formKey, JSON.stringify(updatedForm));
//   // };
//   const handleCustomChange = (name: string, value: any) => {
//     const updatedForm = { ...form, [name]: value };
//     setForm(updatedForm);
//     localStorage.setItem(formKey, JSON.stringify(updatedForm));
//   };
//   const handlePhoneChange = (value: string) => {
//     const updatedForm = { ...form, phone: value };
//     localStorage.setItem(formKey, JSON.stringify(updatedForm));
//   };

//   // const handleCheckboxChange = (name: string, value: string) => {
//   //   const currentValues = form[name] as string[];
//   //   const newValues = currentValues.includes(value)
//   //     ? currentValues.filter((v) => v !== value)
//   //     : [...currentValues, value];
//   //   const updatedForm = { ...form, [name]: newValues };
//   //   setForm(updatedForm);
//   //   localStorage.setItem(formKey, JSON.stringify(updatedForm));
//   // };
//   // const setStepCompleted = (step: number) => {
//   //   if (!form.completedSteps.includes(step)) {
//   //     // const newCompletedSteps = [...form.completedSteps, stepIndex];
//   //     setForm((prevForm: Form) => ({ ...prevForm, completedSteps: stepIndex }));
//   //     // setCompletedSteps(newCompletedSteps);
//   //     // localStorage.setItem(
//   //     //   `${formKey}_steps`,
//   //     //   JSON.stringify(newCompletedSteps)
//   //     // );
//   //   }
//   // };
//   const setStepCompleted = (step: number) => {
//     setForm((prevForm: Form) => {
//       const newCompletedSteps = [...(prevForm?.completedSteps || [])];
//       if (!newCompletedSteps.includes(step)) {
//         newCompletedSteps.push(step);
//       }

//       const newForm = { ...prevForm, completedSteps: newCompletedSteps };
//       // localStorage.setItem("form", JSON.stringify(newForm));
//       // return newForm;
//     });
//   };

//   return {
//     form,
//     setForm,
//     handleInputChange,
//     handleRadioChange,
//     handleCheckboxChange,
//     handleCustomChange,
//     handlePhoneChange,
//     handleSelectChange,
//     // completedSteps,
//     setStepCompleted,
//   };
// };
// export default useFormStorage;
