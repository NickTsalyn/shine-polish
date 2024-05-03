type Props = {
  label?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
};

export default function Textarea(props: Props) {
  return (
    <textarea
      className="w-full h-[199px] outline-none px-4 py-3 flex items-center gap-2 border-2 border-solid border-orange-300 rounded-md bg-white resize-none"
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
    />
  );
}
