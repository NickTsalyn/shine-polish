import React from "react";

interface InputProps /*extends React.InputHTMLAttributes<HTMLInputElement>*/ {
  onChange?: () => void;
  type: "email" | "password" | "text" | "tel";
  placeholder?: string;
  style: "sign-in-input" | "sign-up-input" | "form-input" | "modal-input";
  border?: "input-border-gradient";
}

export default function Input({
  onChange,
  type,
  placeholder,
  style,
  border,
}: InputProps) {
  let styles = "";

  switch (style) {
    case "sign-in-input":
      styles =
        "w-full md:w-[320px] py-[8px] lg:py-[12px] px-[9px] lg:px-[16px] bg-transparent text-main border-2 focus:border-[3px] border-solid border-tertial rounded-[12px] focus:shadow-input-shadow outline-none placeholder:text-main placeholder:opacity-50";
      break;
    case "sign-up-input":
      styles =
        "w-full md:w-[300px] py-[8px] lg:py-[12px] px-[9px] lg:px-[16px] bg-transparent text-main border-2 focus:border-[3px] border-solid border-tertial rounded-[12px] focus:shadow-input-shadow outline-none placeholder:text-main placeholder:opacity-50 ";
      break;
    case "form-input":
      styles =
        "w-full md:w-[600px] lg:w-[800px] py-[8px] lg:py-[12px] px-[9px] lg:px-[16px] bg-transparent text-secondary border-solid border-2 focus:border-[3px] border-secondary rounded-[12px] focus:shadow-input-shadow outline-none placeholder:text-secondary-placeholder placeholder:opacity-50";
      break;
    case "modal-input":
      styles =
        "w-full py-[25px] px-[50px] bg-transparent text-main border-solid border focus:border-[2px] border-main rounded-[12px] focus:shadow-input-shadow outline-none placeholder:text-main placeholder:opacity-35";
      break;

    default:
      break;
  }
  return (
    <>
      <input
        className={styles + " " + border}
        type={type}
        placeholder={placeholder}
        onChange={onChange} /*{...register("text")}*/
      />
    </>
  );
}
