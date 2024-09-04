import { Dayjs } from "dayjs";
import { Control } from "react-hook-form";

interface Item {
  title: string;
  description: string;
}

interface Services {
  title: string;
  text: string;
  item: Item[];
  summary?: string;
}

type Paragraph = {
  p: string;
}

export interface RoomService {
  title: string;
  paragraph: Paragraph[];
  description: string;
  processes: Services[];
  frequencies: Services[];
  need: Services[];
}

export interface FormValues {
  area: string;
  bedroom: number;
  bathroom: number;
  frequency: string;
  homeAccess: string;
  aboutUs: string;
  specialInstructions: string;
  extras: string[];
  service: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  remindersChecked: boolean;
  selectedDate: string;
  endDate: string;
  time: string;
  address: Record<string, never>;
  question: string,
  discountCode: string,
  tips: string,
  totalPrice: number
}

export interface Form {
  [key: string]: string | number | boolean | string[] | Dayjs | null | any | object;
}

export interface StepProps {
  control: Control<FormValues>;
  setStepCompleted: (step: number) => void;
}

export interface Options {
  name: string;
  value: number | string;
}
