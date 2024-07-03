"use client";

import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Dayjs } from "dayjs";
interface Form {
  [key: string]: string | number | boolean | string[] | Dayjs | null | any;
}

interface HandlerReturn {
  form: Form;
  handleInputChange: (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string | number>
      | FormEvent<HTMLFormElement>
  ) => void;
  handleRadioChange: (name: string, value: string | boolean) => void;
  handlePhoneChange: (value: string) => void;
  handleCheckboxChange: (name: string, value: string) => void;
  handleCustomChange: (name: string, value: any) => void;
  handleSelectChange: (name: string, value: string | number) => void;
  setForm: (form: Form) => void;
  completedSteps: number[];
  setStepCompleted: (stepIndex: number) => void;
}

const useFormStorage = (initialForm: Form, formKey = "form"): HandlerReturn => {
  // const [form, setForm] = useState(initialForm);

  // const [form, setForm] = useState(() => {
  //   const storedForm = localStorage.getItem("form");
  //   return storedForm ? JSON.parse(storedForm) : initialForm;
  // });
  const [form, setForm] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedForm = localStorage.getItem("form");
      return storedForm ? JSON.parse(storedForm) : initialForm;
    } else {
      // Обробити випадок, коли `localStorage` недоступний
      return initialForm;
    }
  });

  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  
  // useEffect(() => {
  //   const savedForm = localStorage.getItem(formKey);
  //   const savedSteps = localStorage.getItem(`${formKey}_steps`);
  //   if (savedForm) {
  //     setForm(JSON.parse(savedForm));
  //   }
  //   if (savedSteps) {
  //     setCompletedSteps(JSON.parse(savedSteps));
  //   }
  // }, [formKey]);
  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(form));
  }, [form]);

  const handleInputChange = (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string | number>
      | FormEvent<HTMLFormElement>
  ) => {
    const { name, value, type, checked } = event.target as HTMLInputElement;
    const newValue = type === "checkbox" ? checked : value;
    const updatedForm = { ...form, [name]: newValue };
    setForm(updatedForm);
    localStorage.setItem(formKey, JSON.stringify(updatedForm));
  };

// added

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
// -----------------------------------


  // const handleRadioChange = (name: string, value: string | boolean) => {
  //   const updatedForm = { ...form, [name]: value };
  //   setForm(updatedForm);
  //   localStorage.setItem(formKey, JSON.stringify(updatedForm));
  // };
  // const handleSelectChange = (name: string, value: string | number) => {
  //   const updatedForm = { ...form, [name]: value };
  //   setForm(updatedForm);
  //   localStorage.setItem(formKey, JSON.stringify(updatedForm));
  // };
  const handleCustomChange = (name: string, value: any) => {
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    localStorage.setItem(formKey, JSON.stringify(updatedForm));
  };
  const handlePhoneChange = (value: string) => {
    const updatedForm = { ...form, phone: value };
    localStorage.setItem(formKey, JSON.stringify(updatedForm));
  };

  // const handleCheckboxChange = (name: string, value: string) => {
  //   const currentValues = form[name] as string[];
  //   const newValues = currentValues.includes(value)
  //     ? currentValues.filter((v) => v !== value)
  //     : [...currentValues, value];
  //   const updatedForm = { ...form, [name]: newValues };
  //   setForm(updatedForm);
  //   localStorage.setItem(formKey, JSON.stringify(updatedForm));
  // };
  const setStepCompleted = (stepIndex: number) => {
    if(!completedSteps.includes(stepIndex)) {
      const newCompletedSteps = [...completedSteps, stepIndex];
      setCompletedSteps(newCompletedSteps);
      localStorage.setItem(`${formKey}_steps`, JSON.stringify(newCompletedSteps));
    }    
  };

  return {
    form,
    setForm,
    handleInputChange,
    handleRadioChange,
    handleCheckboxChange,    
    handleCustomChange,
    handlePhoneChange,
    handleSelectChange,
    completedSteps,
    setStepCompleted,
  };
};
export default useFormStorage;