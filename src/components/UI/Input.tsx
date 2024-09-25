import React, {FC, forwardRef} from "react";

type InputProps = {
 value?: string | number;
 onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 type: "email" | "password" | "text" | "tel" | "checkbox";
 placeholder?: string;
 style: "sign-in-input" | "sign-up-input" | "form-input" | "modal-input" | string;
 width?: string;
 name?: string;
};

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
 ({onChange, type, placeholder, style, width, value, name, ...props}, ref) => {
  let styles = "";

  switch (style) {
   case "sign-in-input":
    styles = `block mx-auto w-full md:w-[320px] md:h-[40px] py-[8px] lg:py-[12px] px-[9px] lg:px-[16px] mb-[18px] bg-transparent text-main border-2 focus:border-[3px] border-solid border-tertial rounded-[12px] focus:shadow-input-shadow outline-none placeholder:text-main placeholder:opacity-50 focus:invalid:input-border-gradient-error invalid:input-border-gradient-error aria-required:input-border-gradient-error transition-all duration-300`;
    break;
   case "sign-up-input":
    styles = `block mx-auto w-full md:w-[300px] ${width} py-[8px] lg:py-[12px] px-[9px] lg:px-[16px] bg-transparent text-main border-2 focus:border-[3px] border-solid border-tertial rounded-[12px] focus:shadow-input-shadow outline-none placeholder:text-main placeholder:opacity-50 input-border-gradient focus:invalid:input-border-gradient-error invalid:input-border-gradient-error aria-required:input-border-gradient-error transition-all duration-300`;
    break;
   case "form-input":
    styles = `block mx-full  w-full hx-full h-full ${width} py-[8px] lg:py-[12px] px-[8px] lg:px-[16px] bg-transparent text-text border-solid border-2  border-secondary rounded-[12px] hover:border-[3px] hover:shadow-input-shadow focus:border-[3px] focus:shadow-input-shadow outline-none xl:placeholder:text-[16px] placeholder:text-secondary-placeholder placeholder:opacity-50 transition-all duration-300`;
    break;
   case "modal-input":
    styles = `block mx-auto w-full py-[12px] md:py-[20px] lg:py-[24px] px-[16px] bg-transparent text-main border-solid border focus:border-[2px] border-main rounded-[12px] focus:shadow-input-shadow outline-none placeholder:text-main placeholder:opacity-35 input-border-gradient-modal focus:invalid:input-border-gradient-error invalid:input-border-gradient-error hover:shadow-input-shadow focus:border-[3px] focus:shadow-input-shadow transition-all duration-300`;
    break;

   default:
    break;
  }
  return (
   <input
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    className={styles}
    value={value}
    name={name}
    ref={ref}
    {...props}
   />
  );
 }
);
Input.displayName = "Input";
export default Input;
