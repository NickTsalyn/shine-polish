"use client";
import dayjs from "dayjs";

export const initialForm = {
  area: "",
  bedroom: 1,
  bathroom: 1,
  frequency: "",
  homeAccess: "",
  aboutUs: "",
  specialInstructions: "",
  extras: [],
  service: "",
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
  totalPrice: 0,
};
