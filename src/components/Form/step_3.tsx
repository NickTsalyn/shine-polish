
import useFormStorage from "@/hooks/formStorage";
import BasicSelect from "../UI/Select";
import Textarea from "../UI/Textarea";
import { aboutUs, homeAccess } from "@/data/booking-form/step_3";
import dayjs from "dayjs";

const Step3 = () => {
  const { form, handleInputChange } = useFormStorage({
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

  return (
    <div className="py-4 md:py-6 lg:py-9 flex flex-col gap-6 md:gap-[100px]">
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
    </div>
  );
};

export default Step3;