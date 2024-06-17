import React from "react";
import Input from "../components/UI/Input";
import useFormStorage from "@/hooks/formStorage";

const AddressForm: React.FC = () => {
  const { form, handleInputChange } = useFormStorage(
    {
      address: "",
      aptSuite: "",
      city: "",
      zipCode: "",
      selectedDate: "",
      time: "",
    },
    "form"
  );

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
            />
          </div>
          <div className="md:w-full lg:w-1/2 md:h-[48px]">
            <Input
              type="text"
              style="form-input"
              placeholder="Apt/Suite#"
              onChange={handleInputChange}
              value={form.aptSuite as string}
              name="aptSuite"
            />
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
            />
          </div>
          <div className="md:w-1/4 md:h-[48px]">
            <Input
              type="text"
              style="form-input"
              placeholder="Zip Code*"
              onChange={handleInputChange}
              value={form.zipCode as number}
              name="zipCode"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
