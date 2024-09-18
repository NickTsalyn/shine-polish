import React, {forwardRef} from "react";

interface TextAreaProps {
 onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
 label?: string;
 placeholder?: string;
 required?: boolean;
 name?: string;
 value?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
 ({onChange, label, placeholder, required, name, value}, ref) => {
  return (
   <textarea
    ref={ref}
    className="w-full h-full outline-none body p-2 md:p-3 lg:p-4 gap-2 border-2 border-solid border-secondary rounded-xl bg-white resize-none text-text placeholder:text-secondary-placeholder placeholder:opacity-50"
    name={name}
    placeholder={placeholder}
    required={required}
    onChange={onChange}
    value={value}
   />
  );
 }
);

Textarea.displayName = "Textarea";

export default Textarea;
