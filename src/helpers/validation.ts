import { UseFormSetError, UseFormClearErrors } from "react-hook-form";

export const validateField = (
  name: string,
  value: string,
  setError: UseFormSetError<any>,
  clearErrors: UseFormClearErrors<any>
) => {
  switch (name) {
    case "name":
      if (value === "") {
        setError(name, {
          type: "required",
          message: "First name is required",
        });
      } else if (value.length < 2) {
        setError(name, {
          type: "minLength",
          message: "First name must be at least 2 characters",
        });
      } else {
        clearErrors(name);
      }
      break;
    case "surname":
      if (value === "") {
        setError(name, {
          type: "required",
          message: "Surname is required",
        });
      } else if (value.length < 3) {
        setError(name, {
          type: "minLength",
          message: "Surname must be at least 3 characters",
        });
      } else {
        clearErrors(name);
      }
      break;
    case "email":
      if (value === "") {
        setError(name, {
          type: "required",
          message: "Email is required",
        });
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setError(name, {
          type: "pattern",
          message: "Invalid email format",
        });
      } else {
        clearErrors(name);
      }
      break;
    case "phone":
      if (value === "") {
        setError(name, {
          type: "required",
          message: "Phone number is required",
        });
      } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(value)) {
        setError(name, {
          type: "pattern",
          message: "Invalid phone number format",
        });
      } else {
        clearErrors(name);
      }
      break;
    case "homeAccess":
      if (value === "") {
        setError(name, {
          type: "required",
          message: "Please select an option",
        });
      } else {
        clearErrors(name);
      }
      break;
    case "aboutUs":
      if (value === "") {
        setError(name, {
          type: "required",
          message: "Please select an option",
        });
      } else {
        clearErrors(name);
      }
      break;
    default:
      break;
  }
};
