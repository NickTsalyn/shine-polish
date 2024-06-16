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
    "formKey"
  );

  return (
    <div>
      <form className="flex flex-col gap-5">
        <div className="md:flex flex-col lg:flex-row gap-5 min-w-[280px]">
          <div className="md:w-full lg:w-1/2 md:h-[40px]">
            <Input
              type="text"
              style="form-input"
              placeholder="Address*"
              onChange={handleInputChange}
              value={form.address as string}
              name="address"
            />
          </div>
          <div className="md:w-full lg:w-1/2 md:h-[40px]">
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
        <div className="md:flex gap-5">
          <div className="md:w-3/4 md:h-[40px]">
            <Input
              type="text"
              style="form-input"
              placeholder="City*"
              onChange={handleInputChange}
              value={form.city as string}
              name="city"
            />
          </div>
          <div className="md:w-1/4 md:h-[40px]">
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
