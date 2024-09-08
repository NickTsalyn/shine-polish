import { FormValues } from "@/types/interfaces";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const signin = async (user: any) => {
  const res = await axios.post(`${BASE_URL}/auth/signin`, user);
  setAuthHeader(res.data.accessToken);
  return res;
};

interface ValidationError {
  message: string;
  errors: Record<string, string[]>;
}
export const signup = async (credentials: {}) => {
  const res = await axios.post(`${BASE_URL}/auth/signup`, credentials);
  setAuthHeader(res.data.accessToken);
  return res;
};
export const signout = async () => {
  const res = await axios.post(`${BASE_URL}/auth/signout`);
  clearAuthHeader();
  return res;
};

export const fetchClientBookings = async (id: string) => {
  const user: any = localStorage.getItem("user");
  if (user === null) {
    alert("Please sign in");
  } else {
    const objUser = JSON.parse(user);
    setAuthHeader(objUser.accessToken);
    const res = await axios.get(`${BASE_URL}/bookings/${id}`);
    return res.data;
  }
};
export const getBookingOptions = async () => {
  const user: any = localStorage.getItem("user");
  if (user === null) {
    alert("Please sign in");
  } else {
    const objUser = JSON.parse(user);
    setAuthHeader(objUser.accessToken);
    const res = await axios.get(`${BASE_URL}/bookings/options`);
    return res.data;
  }
};
export const repeatBooking = async (newBooking: FormValues) => {
  const user: any = localStorage.getItem("user");
  if (user === null) {
    alert("Please sign in");
  } else {
    const objUser = JSON.parse(user);
    setAuthHeader(objUser.accessToken);
    const res = await axios.post(`${BASE_URL}/bookings`, newBooking);
    return res.data;
  }
};

export const getOptions = async () => {
  const response = await axios.get(`${BASE_URL}/bookings/options`);
  return response.data;
};

export const addBooking = async (object: FormValues) => {
  const response = await axios.post(`${BASE_URL}/bookings`, object);
  return response.data;
};
