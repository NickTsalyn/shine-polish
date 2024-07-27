"use client";
import dayjs from "dayjs";

export const initialForm = {
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
  address: {},
  question: "",
  discountCode: "",
  tips: "",
};
