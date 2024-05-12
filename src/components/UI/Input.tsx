import React from "react";

interface InputProps {
  onChange?: () => void;
  type: "email" | "password" | "text" | "tel";
  placeholder?: string;
  style: "sign-in-input" | "sign-up-input" | "form-input" | "modal-input";
}

export default function Input({
  onChange,
  type,
  placeholder,
  style,
}: InputProps) {
  let styles = "";

  switch (style) {
    case "sign-in-input":
      styles =
        "block mx-auto mb-[10px] w-full md:w-[320px] py-[8px] lg:py-[12px] px-[9px] lg:px-[16px] bg-transparent text-main border-2 focus:border-[3px] border-solid border-tertial rounded-[12px] focus:shadow-input-shadow outline-none placeholder:text-main placeholder:opacity-50";
      break;
    case "sign-up-input":
      styles =
        "block mx-auto mb-[10px] w-full md:w-[300px] py-[8px] lg:py-[12px] px-[9px] lg:px-[16px] bg-transparent text-main border-2 focus:border-[3px] border-solid border-tertial rounded-[12px] focus:shadow-input-shadow outline-none placeholder:text-main placeholder:opacity-50 input-border-gradient-error";
      break;
    case "form-input":
      styles =
        "block mx-full mb-[10px] w-full   py-[8px] lg:py-[12px] px-[9px] lg:px-[16px] bg-transparent text-secondary border-solid border-2 focus:border-[3px] border-secondary rounded-[12px] focus:shadow-input-shadow outline-none placeholder:text-secondary-placeholder placeholder:opacity-50";
      break;
    case "modal-input":
      styles =
        "block mx-auto mb-[10px] w-full py-[25px] px-[50px] bg-transparent text-main border-solid border focus:border-[2px] border-main rounded-[12px] focus:shadow-input-shadow outline-none placeholder:text-main placeholder:opacity-35 input-border-gradient-modal";
      break;

    default:
      break;
  }
  return (
    <>
      <input
        className={styles}
        type={type}
        placeholder={placeholder}
        onChange={onChange} /*{...register("text")}*/
      />
    </>
  );
}
