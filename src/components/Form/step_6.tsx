import useFormStorage from "@/hooks/formStorage";
import Input from "../UI/Input";

import { useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Step6 = () => {
  const { form, handleInputChange, handleRadioChange } = useFormStorage({
    name: "",
    surname: "",
    email: "",
    phone: "",
    remindersChecked: false,
  });
  const [remindersChecked, setRemindersChecked] = useState(false);

  const handleCheckBoxChange = () => {
    const updatedRemindersChecked = !remindersChecked;
    setRemindersChecked(updatedRemindersChecked);
    handleRadioChange("remindersChecked", updatedRemindersChecked);
  };
  return (
    <div className="py-4 md:py-6  lg:py-9 ">
      <h2 className="mb-4  md:mb-5 lg:mb-[26px] text-2xl md:text-4xl font-medium md:font-normal ">
        Contact information
      </h2>
      <p className=" text-subtext md:text-2xl mb-6 md:mb-8 lg:mb-[60px]">
        This information will be used to contact you about service
      </p>
      <div className="flex flex-col gap-2 md:gap-5 lg:gap-10 mb-4 md:mb-[350px] lg:mb-[90px]">
        <div className="flex flex-col lg:flex-row gap-2 md:gap-5   lg:gap-10 ">
          <div className="md:w-[340px] lg:w-[523px] ">
            <Input
              name="name"
              value={form.name as string}
              onChange={handleInputChange}
              type="text"
              placeholder="First Name*"
              style="form-input"
            ></Input>
          </div>
          <div className="md:w-[340px] lg:w-[563px] ">
            <Input
              name="surname"
              value={form.surname as string}
              onChange={handleInputChange}
              type="text"
              placeholder="Last Name*"
              style="form-input"
            ></Input>
          </div>
        </div>
        <div className="flex flex-col lg:flex-col-reverse  gap-2 md:gap-5 lg:gap-10 ">
          <div className="lg:w-[700px] lg:h-[57.5px] ">
            <Input
              name="email"
              value={form.email as string}
              onChange={handleInputChange}
              type="email"
              placeholder="Email*"
              style="form-input"
            ></Input>
          </div>
          <div className="md:w-[515px] lg:w-[390px] lg:h-[57.5px] ">
            <Input
              name="phone"
              value={form.phone as string}
              onChange={handleInputChange}
              type="tel"
              placeholder="Phone*"
              style="form-input"
            ></Input>
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
    </div>
  );
};
export default Step6;
