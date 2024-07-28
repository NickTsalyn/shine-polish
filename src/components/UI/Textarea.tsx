interface TextAreaProps {
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  value?: string;
}

export default function Textarea({
  onChange,
  label,
  placeholder,
  required,
  name,
  value
}: TextAreaProps) {
  return (
    <textarea
      className="w-full h-full outline-none body p-2 md:p-3 lg:p-4 gap-2 border-2 border-solid border-secondary rounded-xl bg-white resize-none text-text placeholder:text-secondary-placeholder placeholder:opacity-50"
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      value={value}
    />
  );
}