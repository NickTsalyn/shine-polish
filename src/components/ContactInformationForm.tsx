import React from "react";
import Input from "./UI/Input";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import useFormStorage from "@/hooks/formStorage";
import { validateField } from "@/helpers/validation";
import { IMaskInput } from "react-imask";

const ContactNumberMask = "(000) 000-0000";

const ContactInformation: React.FC<{ control: any }> = ({ control }) => {
  const { form, handleCustomChange } = useFormStorage();
  const { setError, clearErrors } = useFormContext();

  const handleFieldChange = (name: string, value: string) => {
    validateField(name, value, setError, clearErrors);
    handleCustomChange(name, value);
  };

  return (
    <div className="mb-10 xl:mb-20">
      <h2 className="mb-4 md:mb-5 lg:mb-[26px] text-2xl md:text-4xl font-medium md:font-normal">Contact information</h2>
      <p className="text-subtext md:text-2xl mb-6 md:mb-8 lg:mb-5">
        This information will be used to contact you about service
      </p>
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-4 lg:gap-6 mb-5 md:mb-6">
        <div className="w-full  md:w-[calc(50%-12px)] lg:w-2/4 relative">
          <Controller
            name="name"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Input
                  {...field}
                  value={form.name}
                  type="text"
                  placeholder="First Name*"
                  style="form-input"
                  onChange={(e) => {
                    const { value } = e.target as HTMLInputElement;
                    field.onChange(value);
                    handleFieldChange("name", value);
                  }}
                />
                {error && (
                  <p className="text-accent-light text-xs lg:text-base  absolute left-2 bottom-[-16px] lg:bottom-[-24px]">
                    {error.message}
                  </p>
                )}
              </>
            )}
          />
        </div>
        <div className="w-full md:w-[calc(50%-12px)] lg:w-2/4 md:h-[48px] relative">
          <Controller
            name="surname"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Input
                  {...field}
                  value={form.surname}
                  type="text"
                  placeholder="Last Name*"
                  style="form-input"
                  onChange={(e) => {
                    const { value } = e.target as HTMLInputElement;
                    field.onChange(value);
                    handleFieldChange("surname", value);
                  }}
                />
                {error && (
                  <p className="text-accent-light text-xs lg:text-base  absolute left-2 bottom-[-16px] lg:bottom-[-24px]">
                    {error.message}
                  </p>
                )}
              </>
            )}
          />
        </div>

        <div className="w-full md:w-[calc(50%-12px)] lg:w-3/5 md:h-[48px] relative">
          <Controller
            name="email"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Input
                  {...field}
                  value={form.email}
                  type="email"
                  placeholder="Email*"
                  style="form-input"
                  onChange={(e) => {
                    const { value } = e.target as HTMLInputElement;
                    field.onChange(value);
                    handleFieldChange("email", value);
                  }}
                />
                {error && (
                  <p className="text-accent-light text-xs lg:text-base  absolute left-2 bottom-[-6px] lg:bottom-[-24px]">
                    {error.message}
                  </p>
                )}
              </>
            )}
          />
        </div>
        <div className="w-full md:w-[calc(50%-12px)] lg:w-2/5 md:h-[48px] relative">
          <Controller
            name="phone"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field, fieldState: { error } }) => (
              <>
                <IMaskInput
                  {...field}
                  className="block mx-full mb-[10px] w-full hx-full h-full py-[8px] lg:py-[12px] px-[8px] lg:px-[16px] bg-transparent text-text border-solid border-2 focus:border-[3px] border-secondary rounded-[12px] focus:shadow-input-shadow outline-none xl:placeholder:text-[16px] placeholder:text-secondary-placeholder placeholder:opacity-50"
                  mask={ContactNumberMask}
                  placeholder="(000) 000-0000"
                  value={field.value}
                  onChange={(e) => {
                    const { value } = e.target as HTMLInputElement;
                    field.onChange(value);
                    handleFieldChange("phone", value);
                  }}
                />
                {error && (
                  <p className="text-accent-light text-xs lg:text-base  absolute left-2 bottom-[-6px] lg:bottom-[-24px]">
                    {error.message}
                  </p>
                )}
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
