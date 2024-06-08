"use client";

import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

interface Form {
  [key: string]: string | number | boolean;
}

interface HandlerReturn {
  form: Form;
  handleInputChange: (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string | number>
  ) => void;
  handleRadioChange: (name: string, value: string) => void;
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
  const handleRadioChange = (name: string, value: string) => {
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    localStorage.setItem(formKey, JSON.stringify(updatedForm));
  };

  return { form, handleInputChange, handleRadioChange };
};

export default useFormStorage;
