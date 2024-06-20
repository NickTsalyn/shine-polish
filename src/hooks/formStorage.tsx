"use client";

import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { Dayjs } from "dayjs";
interface Form {
  selectedDate: Dayjs | string | number | any | null;
  time: Dayjs | string | number | any | null;
  [key: string]: string | number | boolean | string[];
}

interface HandlerReturn {
  form: Form;
  handleInputChange: (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string | number>
  ) => void;
  handleRadioChange: (name: string, value: string | boolean) => void;
  handleCheckboxChange: (name: string, value: string) => void;
  handleCustomChange: (name: string, value: any) => void;

  setForm: React.Dispatch<React.SetStateAction<Form>>;
}

const useFormStorage = (initialForm: Form, formKey = "form"): HandlerReturn => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    const savedForm = localStorage.getItem(formKey);
    if (savedForm) {
      setForm(JSON.parse(savedForm));
    }
  }, [formKey]);

  const handleInputChange = (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string | number>
  ) => {
    const { name, value, type, checked } = event.target as HTMLInputElement;
    const newValue = type === "checkbox" ? checked : value;
    const updatedForm = { ...form, [name]: newValue };
    setForm(updatedForm);
    localStorage.setItem(formKey, JSON.stringify(updatedForm));
  };

  const handleRadioChange = (name: string, value: string | boolean) => {
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    localStorage.setItem(formKey, JSON.stringify(updatedForm));
  };
  const handleCustomChange = (name: string, value: any) => {
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    localStorage.setItem(formKey, JSON.stringify(updatedForm));
  };

  const handleCheckboxChange = (name: string, value: string) => {
    const currentValues = form[name] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];
    const updatedForm = { ...form, [name]: newValues };
    setForm(updatedForm);
    localStorage.setItem(formKey, JSON.stringify(updatedForm));
  };

  return {
    form,
    handleInputChange,
    handleRadioChange,
    handleCheckboxChange,
    setForm,
    handleCustomChange,
  };
};

export default useFormStorage;
