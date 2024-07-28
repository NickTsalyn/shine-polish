import axios from "axios";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};
// console.log(axios.defaults.headers.common.Authorization);
const BASE_URL = "https://shine-polish-server.onrender.com";

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
  // try {
  const res = await axios.post(`${BASE_URL}/auth/signup`, credentials);
  setAuthHeader(res.data.accessToken);
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
export const signout = async () => {
  const res = await axios.post(`${BASE_URL}/auth/signout`);
  clearAuthHeader();
  return res;
};
