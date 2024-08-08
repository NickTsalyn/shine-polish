import axios from "axios";
import { FormValues } from "./types/interfaces";

const BASE_URL = "https://shine-polish-server.onrender.com";

export const getOptions = async () => {
  const response = await axios.get(`${BASE_URL}/bookings/options`);
  return response.data;
};

export const addBooking = async (object: FormValues) => {
  const response = await axios.post(`${BASE_URL}/bookings`, object);
  return response.data;
};
