import axios, { AxiosError } from "axios";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const BASE_URL = "https://shine-polish-server.onrender.com";

export const signin = async (user: any) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/signin`, user);
    setAuthHeader(data.token);
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (error) {
    return error;
  }
};

interface ValidationError {
  message: string;
  errors: Record<string, string[]>;
}
export const signup = async (credentials: {}) => {
  // try {
    const res = await axios.post(`${BASE_URL}/auth/signup`, credentials);
  //   console.log(res);
    return res;
  // } catch (error) {
  //   if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
  //     console.log(error.response?.status);
  //     return error.response?.data.message;
  //     // Do something with this error...
  //   } else {
  //     console.log(error);
  //   }
  // }
};
