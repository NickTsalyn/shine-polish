import React, {ChangeEvent, useEffect, useState} from "react";
import Autocomplete from "react-google-autocomplete";
import Input from "../components/UI/Input";
import useFormStorage from "@/hooks/formStorage";
import {Controller, useFormContext} from "react-hook-form";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
// const API_KEY = "AIzaSyCjw4zjS8V3L0IwDnqWwWz5bXh6w9b4Hc8";

interface AddressFormProps {
 onChange: (name: string, value: any) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({onChange}) => {
 const {form, handleCustomChange} = useFormStorage();
 const {control, trigger} = useFormContext();
 const [inputValue, setInputValue] = useState(form.address?.street || "");
 const [addressDetails, setAddressDetails] = useState({
  street: form.address?.street || "",
  city: form.address?.city || "",
  state: form.address?.state || "",
  zip: form.address?.zip || "",
  aptSuite: form.address?.aptSuite || "",
 });

 useEffect(() => {
  setAddressDetails({
   street: form.address?.street || "",
   city: form.address?.city || "",
   state: form.address?.state || "",
   zip: form.address?.zip || "",
   aptSuite: form.address?.aptSuite || "",
  });
 }, [form.address]);

 const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const {name, value} = e.target;
  const inputName = name.toString();

  setAddressDetails((prev) => ({
   ...prev,
   [inputName]: value,
  }));

  handleCustomChange("address", {...addressDetails, [inputName]: value});
  onChange("address", {...addressDetails, [inputName]: value});
 };

 const handlePlaceSelected = (place: google.maps.places.PlaceResult) => {
  const addressComponents = place.address_components || [];
  const streetNumber = addressComponents.find((c) => c.types.includes("street_number"))?.long_name || "";
  const streetName = addressComponents.find((c) => c.types.includes("route"))?.long_name || "";
  const city = addressComponents.find((c) => c.types.includes("locality"))?.long_name || "";
  const state = addressComponents.find((c) => c.types.includes("administrative_area_level_1"))?.short_name || "";
  const zip = addressComponents.find((c) => c.types.includes("postal_code"))?.long_name || "";
  const street = `${streetNumber} ${streetName}`.trim();

  const address = {
   street,
   city,
   state,
   zip,
   aptSuite: addressDetails.aptSuite,
  };

  setAddressDetails(address);
  handleCustomChange("address", address);
  onChange("address", address);
  setInputValue(street);
 };

 const handleAutoCompleteChange = (e: ChangeEvent<HTMLInputElement>) => {
  setInputValue(e.target.value);
 };

 const inputStyles =
  "block mx-full mb-[10px] w-full hx-full h-full py-[8px] lg:py-[12px] px-[8px] lg:px-[16px] bg-transparent text-text border-solid border-2 focus:border-[3px] border-secondary rounded-[12px] focus:shadow-input-shadow outline-none xl:placeholder:text-[16px] placeholder:text-secondary-placeholder placeholder-opacity-50";

 return (
  <div className="w-full">
   <div className="flex flex-col gap-5">
    <div className="flex gap-5 flex-col lg:flex-row min-w-[280px]">
     <div className="md:w-full lg:w-1/2 md:h-[48px] ">
      <Autocomplete
       name="street"
       apiKey={API_KEY}
       onPlaceSelected={handlePlaceSelected}
       options={{
        types: ["address"],
        componentRestrictions: {country: "us"},
       }}
       className={inputStyles}
       placeholder="Address*"
       value={inputValue}
       onChange={handleAutoCompleteChange}
      />
     </div>
     <div className="md:w-full lg:w-1/2 md:h-[48px]">
      <Input
       name="aptSuite"
       type="text"
       style="form-input"
       placeholder="Apt/Suite#"
       value={addressDetails.aptSuite}
       onChange={handleChange}
      />
     </div>
    </div>
    <div className="flex gap-5 flex-col md:flex-row">
     <div className="md:w-4/6 md:h-[48px] gap-5 ">
      <Input
       name="city"
       type="text"
       style="form-input"
       placeholder="City*"
       onChange={handleChange}
       value={addressDetails.city}
      />
     </div>
     <div className="md:w-1/6 md:h-[48px] gap-5">
      <Input
       name="state"
       type="text"
       style="form-input"
       placeholder="State*"
       onChange={handleChange}
       value={addressDetails.state}
      />
     </div>
     <div className="md:w-1/6 md:h-[48px]">
      <Input
       name="zip"
       type="text"
       style="form-input"
       placeholder="Zip Code*"
       value={addressDetails.zip}
       onChange={handleChange}
      />
     </div>
    </div>
   </div>
  </div>
 );
};

export default AddressForm;
