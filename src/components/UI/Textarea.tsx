type Props = {
  label?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
};

export default function Textarea(props: Props) {
  return (
    <textarea
      className="w-full h-full outline-none body px-2 lg:px-4 py-2 lg:py-4 flex items-center gap-2 border-2 border-solid border-secondary rounded-xl bg-white resize-none text-text placeholder:text-secondary-placeholder placeholder:opacity-50"
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
    />
  );
}
