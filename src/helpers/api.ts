import { FormValues } from "@/types/interfaces";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
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

export const getOptions = async () => {
  const response = await axios.get(`${BASE_URL}/bookings/options`);
  return response.data;
};

export const addBooking = async (object: FormValues) => {
  const response = await axios.post(`${BASE_URL}/bookings`, object);
  return response.data;
};
