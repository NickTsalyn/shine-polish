import React from "react";
import Input from "../components/UI/Input";
import useFormStorage from "@/hooks/formStorage";
import { useForm } from "react-hook-form";
import BasicSelect from "./UI/Select";
import { usStates } from "@/data/booking-form/step_4";

type FormValues = {
  address: string;
  aptSuite: string;
  city: string;
  state: string;
  zipCode: string;
  selectedDate: string;
  time: string;
};

const AddressForm: React.FC = () => {
  const { form, handleInputChange } = useFormStorage(
    {
      address: "",
      aptSuite: "",
      city: "",
      state: "",
      zipCode: "",
      selectedDate: "",
      time: "",
    },
    "form"
  );
  const formData = useForm<FormValues>();

  const {
    register,

    control,
    formState: { errors },
  } = formData;

  return (
    <div className="w-full">
      <form className="flex flex-col gap-5">
        <div className=" flex gap-5  flex-col lg:flex-row min-w-[280px]">
          <div className="md:w-full lg:w-1/2 md:h-[48px] ">
            <Input
              type="text"
              style="form-input"
              placeholder="Address*"
              onChange={handleInputChange}
              value={form.address as string}
              name="address"
              // {...register("address", {
              //   required: "Address is required",
              //   // message: "Address is required",
              //   // onChange: (e) => {
              //   //   handleInputChange(e);
              //   // },

              // })}
            />
            {errors.address && (
              <p className="error" role="alert">
                {errors.address.message}
              </p>
            )}
          </div>
          <div className="md:w-full lg:w-1/2 md:h-[48px]">
            <Input
              type="text"
              style="form-input"
              placeholder="Apt/Suite#"
              onChange={handleInputChange}
              value={form.aptSuite as string}
              name="aptSuite"
              // {...register("aptSuite")}
              // error={errors.aptSuite?.message}

              // {...register("aptSuite", {
              //   onChange: (e) => {
              //     handleInputChange(e);
              //   },
              // })}
            />
            {errors.aptSuite && (
              <p className="error" role="alert">
                {errors.aptSuite.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-5  flex-col md:flex-row">
          <div className="md:w-3/4 md:h-[48px] gap-5">
            <Input
              type="text"
              style="form-input"
              placeholder="City*"
              onChange={handleInputChange}
              value={form.city as string}
              name="city"

              // {...register("city", {
              //   required: "City is required",
              //   onChange: (e) => {
              //     handleInputChange(e);
              //   },
              // })}
            />
            {errors.city && (
              <p className="error" role="alert">
                {errors.city.message}
              </p>
            )}
          </div>
          <div className="md:w-1/6 md:h-[48px]">
            <BasicSelect
              name="state"
              placeholder="GA*"
              value={form.state as string}
              onChange={handleInputChange}
              items={usStates}
            />
          </div>
          <div className="md:w-2/6 md:h-[48px]">
            <Input
              type="text"
              style="form-input"
              placeholder="Zip Code*"
              // onChange={handleInputChange}
              value={form.zipCode as number}
              // name="zipCode"
              {...register("zipCode", {
                required: "Zip Code is required",
                minLength: { value: 5, message: "Zip Code must be 5 digits" },
                maxLength: { value: 5, message: "Zip Code must be 5 digits" },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Zip Code must be numeric and 5 digits",
                },
                onChange: (e) => {
                  handleInputChange(e);
                },
              })}
            />
            {errors.zipCode && (
              <p className="text-red-500" role="alert">
                {errors.zipCode.message}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
