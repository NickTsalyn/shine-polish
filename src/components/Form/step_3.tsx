import useFormStorage from "@/hooks/formStorage";
import BasicSelect from "../UI/Select";
import Textarea from "../UI/Textarea";
import { aboutUs, homeAccess } from "@/data/booking-form/step_3";
import dayjs from "dayjs";
import Input from "../UI/Input";
import { useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { IMaskInput } from "react-imask";
import Button from "../UI/Button";

const ContactNumberMask = "(000)-000-0000";

const Step3 = () => {
  const { form, handleInputChange, handleRadioChange, handlePhoneChange } =
    useFormStorage({
      areas: "",
      bedroom: 1,
      bathroom: 1,
      frequency: "",
      homeAccess: "",
      aboutUs: "",
      specialInstructions: "",
      extras: [],
      services: "",
      selectedDate: dayjs().format("MM/DD/YYYY"),
      time: dayjs().format("h:mm A"),
      address: "",
      aptSuite: "",
      city: "",
      zipCode: "",
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
    <form className="py-4 md:py-6 lg:py-9 flex flex-col gap-6">
      <div className="py-4 md:py-6  lg:py-9 ">
        <h2 className="mb-4  md:mb-5 lg:mb-[26px] text-2xl md:text-4xl font-medium md:font-normal ">
          Contact information
        </h2>
        <p className=" text-subtext md:text-2xl mb-6 md:mb-8 lg:mb-5">
          This information will be used to contact you about service
        </p>
        <div className="flex flex-col gap-2 md:gap-5 lg:gap-10   ">
          <div className=" md:flex md:flex-row gap-6 md:h-10 lg:gap-[60px] lg:h-[48px] lg:w-auto">
            <div className=" md:w-1/2 lg:w-3/5   ">
              <Input
                name="name"
                value={form.name as string}
                onChange={handleInputChange}
                type="text"
                placeholder="First Name*"
                style="form-input"
              ></Input>
            </div>
            <div className="md:w-1/2 lg:w-2/5">
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

          <div className="flex flex-col lg:flex-row-reverse  gap-2 md:gap-5 lg:gap-[60px] lg:h-[48px] ">
            <div className=" lg:w-3/5 ">
              <Input
                name="email"
                value={form.email as string}
                onChange={handleInputChange}
                type="email"
                placeholder="Email*"
                style="form-input"
              ></Input>
            </div>
            <div className=" lg:w-2/5">
              <IMaskInput
                className="block mx-full mb-[10px] w-full hx-full h-full ${width} py-[8px] lg:py-[12px] px-[8px] lg:px-[16px] bg-transparent text-text border-solid border-2 focus:border-[3px] border-secondary rounded-[12px] focus:shadow-input-shadow outline-none xl:placeholder:text-[16px] placeholder:text-secondary-placeholder placeholder:opacity-50"
                mask={ContactNumberMask}
                placeholder="(470)-800-3249"
                onAccept={handlePhoneChange}
                value={form.phone as string}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" relative">
        <div className=" lg:flex lg:flex-row-reverse lg:gap-[60px]">
          <div className="flex flex-col lg:w-1/2 ">
            <h2 className="mb-6 md:mb-7 lg:mb-[26px] text-2xl md:text-4xl font-medium md:font-normal">
              Additional information
            </h2>
            <div className=" mb-10 md:mb-[60px] flex flex-col gap-4 md:flex-row lg:flex-col md:gap-6 md:h-10">
              <div className="md:w-1/2 lg:w-full xl:w-[656px]">
                <BasicSelect
                  name="homeAccess"
                  items={homeAccess}
                  value={form.homeAccess as string}
                  onChange={handleInputChange}
                  placeholder="How will access your home?* "
                />
              </div>
              <div className="md:w-1/2 lg:w-full xl:w-[656px]">
                <BasicSelect
                  name="aboutUs"
                  items={aboutUs}
                  value={form.aboutUs as string}
                  onChange={handleInputChange}
                  placeholder="How did you hear about us?* "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-1/2">
            <h2 className="mb-4  md:mb-5 lg:mb-[26px] text-2xl md:text-4xl font-medium md:font-normal ">
              Anything else we should know to provide the best and polish
              cleaning possible?
            </h2>
            <div className="h-[124px] md:h-[220px] lg:h-[250px]  xl:w-[684px]">
              <Textarea
                placeholder="Special Instructions*"
                value={form.specialInstructions as string}
                name="specialInstructions"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-5 lg:absolute right-1 top-[240px]">
          <button
            type="button"
            className="flex items-center justify-center p-0 w-4 md:w-6 h-4 md:h-6 rounded "
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
        <div className="ml-auto lg:absolute">
          <Button style="apply-btn-light-one" type="submit">
            <span className="text-accent text-xl">CONFIRM</span>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Step3;
