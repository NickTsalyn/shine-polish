import Image from "next/image";
import BasicSelect from "../UI/Select";
import RadioButton from "../UI/RadioButton";
import dayjs from "dayjs";

import img_stub from "../../../public/images/service-area/image-map-stub.png";
import {
  areaOptions,
  bathroomOptions,
  bedroomOptions,
  frequencyOptions,
} from "@/data/booking-form/step_1";
import useFormStorage from "@/hooks/formStorage";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "@/types/interfaces";

interface Step1Props {
  control: Control<FormValues>;
}
const Step1: React.FC<Step1Props> = ({ control }) => {
  const { form, handleSelectChange, handleRadioChange } = useFormStorage({
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
    <div className="py-4 md:py-6 lg:py-9 flex flex-col gap-6 md:gap-[26px] lg:grid lg:grid-flow-col lg:grid-cols-2 lg:gap-[66px] xl:gap-[80px]">
      <div className="md:flex md:flex-row md:justify-between lg:flex-col lg:gap-[33px] xl:gap-[30px] lg:col-span-2 lg:row-span-2">
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className=" text-2xl md:text-4xl font-medium">Choose area</h2>
          <Controller
            name="areas"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <BasicSelect
                {...field}
                // name="areas"
                placeholder="Select an area*"
                value={form.areas}
                items={areaOptions}
                onChange={(event) => {
                  const { value } = event.target as HTMLInputElement;
                  field.onChange(value);
                  handleSelectChange("areas", value);
                }}
              />
            )}
          />

          <div className="hidden md:block md:w-[338px] md:h-[330px] lg:w-[540px] lg:h-[454px] xl:w-[780px] xl:h-[450px] relative">
            <Image
              src={img_stub}
              alt="map"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-6 lg:col-span-1">
          <h2 className="text-2xl md:text-4xl font-medium">How many rooms?</h2>
          <div className="flex flex-col gap-3 md:gap-6">
            <Controller
              name="bedroom"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <BasicSelect
                  {...field}
                  // name="bedroom"
                  value={form.bedroom}
                  items={bedroomOptions}
                  onChange={(event) => {
                    const { value } = event.target as HTMLInputElement;
                    field.onChange(value);
                    handleSelectChange("bedroom", value);
                  }}
                />
              )}
            />

            <Controller
              name="bathroom"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <BasicSelect
                  {...field}
                  // name="bathroom"
                  value={form.bathroom}
                  items={bathroomOptions}
                  onChange={(event) => {
                    const { value } = event.target as HTMLInputElement;
                    field.onChange(value);
                    handleSelectChange("bathroom", value);
                  }}
                />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-6 lg:col-span-1 mt-auto">
          <h2 className="text-2xl md:text-4xl font-medium">How often?</h2>
          <p className="hidden md:block text-base lg:text-[26px] lg:font-medium text-bookingSubText">
            Scheduling is flexible. Cancel or reschedule anytime.
          </p>
          <ul className="flex flex-wrap justify-center gap-5 lg:gap-6 lg:w-[562px]  md:justify-around md:flex-nowrap lg:flex-wrap">
            {frequencyOptions.map(({ value, label }) => {
              return (
                <li
                  key={value}
                  className="flex justify-center items-center w-[132px] md:min-w-[160px] lg:min-w-[260px]"
                >
                  <Controller
                    name="frequency"
                    control={control}
                    rules={{ required: "This field is required" }}
                    render={({ field }) => (
                      <RadioButton
                        {...field}
                        style="py-[10px] px-[20px] md:py-[8px] md:px-[10px] lg:py-[20px] h-full w-full"
                        isActive={field.value === value}
                        onClick={() => {
                          field.onChange(value);
                          handleRadioChange("frequency", value);
                        }}
                      >
                        <span className="inline-block lg:text-2xl">
                          {label}
                        </span>
                      </RadioButton>
                    )}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Step1;
