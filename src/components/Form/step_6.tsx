import useFormStorage from "@/hooks/formStorage";
import Input from "../UI/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

interface DataInput {
  email: string;
  phone: string;
  name: string;
  surname: string;
}

const Step6: React.FC = () => {
  const { form, handleInputChange, handleRadioChange } = useFormStorage({
    name: "",
    surname: "",
    email: "",
    phone: "",
    remindersChecked: false,
  });
  const [remindersChecked, setRemindersChecked] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<DataInput>();

  const onSubmit: SubmitHandler<DataInput> = (data) => {
    console.log(data);
    // Handle form submission
  };

  const handleCheckBoxChange = () => {
    const updatedRemindersChecked = !remindersChecked;
    setRemindersChecked(updatedRemindersChecked);
    handleRadioChange("remindersChecked", updatedRemindersChecked);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("email", event.target.value, { shouldValidate: true });
    handleInputChange(event);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("phone", event.target.value, { shouldValidate: true });
    handleInputChange(event);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("name", event.target.value, { shouldValidate: true });
    handleInputChange(event);
  };

  const handleSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("surname", event.target.value, { shouldValidate: true });
    handleInputChange(event);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-4 md:py-6 lg:py-9">
      <h2 className="mb-4 md:mb-5 lg:mb-[26px] text-2xl md:text-4xl font-medium md:font-normal">
        Contact information
      </h2>
      <p className="text-subtext md:text-2xl mb-6 md:mb-8 lg:mb-[60px]">
        This information will be used to contact you about service
      </p>
      <div className="flex flex-col gap-2 md:gap-5 lg:gap-10 mb-4 md:mb-[350px] lg:mb-[90px]">
        <div className="flex flex-col lg:flex-row gap-2 md:gap-5 lg:gap-10">
          <div className="md:w-[340px] lg:w-[523px] relative">
            <Input
              {...register("name", { required: "First Name is required" })}
              name="name"
              value={form.name}
              onChange={handleNameChange}
              type="text"
              placeholder="First Name*"
              style="form-input"
            />
            {errors.name && (
              <p className="text-xs absolute bottom-[-8px] left-2">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="md:w-[340px] lg:w-[563px] relative">
            <Input
              {...register("surname", { required: "Last Name is required" })}
              name="surname"
              value={form.surname}
              onChange={handleSurnameChange}
              type="text"
              placeholder="Last Name*"
              style="form-input"
            />
            {errors.surname && (
              <p className="text-xs absolute bottom-[-8px] left-2">
                {errors.surname.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-col-reverse gap-2 md:gap-5 lg:gap-10">
          <div className="lg:w-[700px] lg:h-[57.5px] relative">
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              name="email"
              value={form.email}
              onChange={handleEmailChange}
              type="email"
              placeholder="Email*"
              style="form-input"
            />
            {errors.email && (
              <p className="text-xs absolute bottom-[-8px] left-2">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="md:w-[515px] lg:w-[390px] lg:h-[57.5px] relative">
            <Input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\(\d{3}\)\d{3}-\d{4}$/,
                  message: "Phone number must be in the format (999)999-9999",
                },
              })}
              name="phone"
              value={form.phone}
              onChange={handlePhoneChange}
              type="tel"
              placeholder="Phone*"
              style="form-input"
            />
            {errors.phone && (
              <p className="text-xs absolute bottom-[-8px] left-2">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-5">
        <button
          type="button"
          className="flex items-center justify-center p-0 w-4 md:w-6 h-4 md:h-6 rounded"
          onClick={handleCheckBoxChange}
        >
          {remindersChecked ? (
            <CheckBoxIcon className="w-full h-full fill-main" />
          ) : (
            <CheckBoxOutlineBlankIcon className="w-full h-full fill-main" />
          )}
        </button>
        <p className="text-secondary text-xs md:text-2xl">
          Send me reminders about my booking via email
        </p>
      </div>
    </form>
  );
};

export default Step6;
