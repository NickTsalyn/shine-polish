import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../UI/Input";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import useFormStorage from "@/hooks/formStorage";
import dayjs from "dayjs";
import Textarea from "../UI/Textarea";
import BasicSelect from "../UI/Select";
import { aboutUs, homeAccess } from "@/data/booking-form/step_3";

interface StepProps {
  formRef: (
    ref: {
      trigger: () => Promise<boolean>;
      getValues: () => any;
    } | null
  ) => void;
}

const Step3: React.FC<StepProps> = ({ formRef }) => {
  const { form, handleInputChange, handleRadioChange } = useFormStorage({
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
  });

  const [remindersChecked, setRemindersChecked] = useState(false);

  const handleCheckBoxChange = () => {
    const updatedRemindersChecked = !remindersChecked;
    setRemindersChecked(updatedRemindersChecked);
    handleRadioChange("remindersChecked", updatedRemindersChecked);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
    setValue,
  } = useForm({
    defaultValues: form,
  });

  useEffect(() => {
    formRef({
      trigger,
      getValues,
    });
  }, [formRef, trigger, getValues]);

  return (
    <>
      <div className="py-4 md:py-6 lg:py-9">
        <h2 className="mb-4 md:mb-5 lg:mb-[26px] text-2xl md:text-4xl font-medium md:font-normal">
          Contact information
        </h2>
        <p className="text-subtext md:text-2xl mb-6 md:mb-8 lg:mb-[60px]">
          This information will be used to contact you about service
        </p>
        <div className="flex flex-col gap-2 md:gap-5 lg:gap-10 mb-4 md:mb-[350px] lg:mb-[90px]">
          <div className="flex flex-col lg:flex-row gap-2 md:gap-5 lg:gap-10">
            <div className="md:w-[340px] lg:w-[523px]">
              <Input
                name="name"
                value={form.name as string}
                onChange={handleInputChange}
                type="text"
                placeholder="First Name*"
                style="form-input"
              />
            </div>
            <div className="md:w-[340px] lg:w-[563px]">
              <Input
                name="surname"
                value={form.surname as string}
                onChange={handleInputChange}
                type="text"
                placeholder="Last Name*"
                style="form-input"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-col-reverse gap-2 md:gap-5 lg:gap-10">
            <div className="lg:w-[700px] lg:h-[57.5px]">
              <Input
                name="email"
                value={form.email as string}
                onChange={handleInputChange}
                type="email"
                placeholder="Email*"
                style="form-input"
              />
            </div>
            <div className="md:w-[515px] lg:w-[390px] lg:h-[57.5px]">
              <Input
                name="phone"
                value={form.phone as string}
                onChange={handleInputChange}
                type="tel"
                placeholder="Phone*"
                style="form-input"
              />
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
      {/* <div className="py-4 md:py-6 lg:py-9 flex flex-col gap-6 md:gap-[100px]">
        <div className="flex flex-col gap-4 md:gap-8 lg:gap-10">
          <h2 className="mb-2 subtitle-booking md:mb-0 lg:mb-[14px]">
            Additional information
          </h2>
          <div className="lg:w-[480px] xl:w-[656px]">
            <BasicSelect
              name="homeAccess"
              items={homeAccess}
              value={form.homeAccess as string}
              onChange={handleInputChange}
              placeholder="How will access your home?* "
            />
          </div>
          <div className="lg:w-[480px] xl:w-[656px]">
            <BasicSelect
              name="aboutUs"
              items={aboutUs}
              value={form.aboutUs as string}
              onChange={handleInputChange}
              placeholder="How did you hear about us?* "
            />
          </div>
        </div>
        <div>
          <h2 className="mb-6 subtitle-booking md:mb-8 lg:mb-10">
            Anything else we should know to provide the best cleaning possible
          </h2>
          <div className="h-[124px] md:h-[220px] lg:h-[250px] lg:w-[532px] xl:w-[684px]">
            <Textarea
              placeholder="Special Instructions*"
              value={form.specialInstructions as string}
              name="specialInstructions"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Step3;
