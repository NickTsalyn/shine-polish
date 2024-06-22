import React, { ChangeEvent, useState } from "react";
import Autocomplete from "react-google-autocomplete";
import Input from "../components/UI/Input";
import useFormStorage from "@/hooks/formStorage";
import { useForm } from "react-hook-form";

// const API_KEY = process.env.GOOGLE_MAPS_API_KEY as string;
const API_KEY = "AIzaSyCjw4zjS8V3L0IwDnqWwWz5bXh6w9b4Hc8";

type FormValues = {
  address: string;
  aptSuite: string;
  city: string;
  zipCode: string;
  selectedDate: string;
  time: string;
};

const AddressForm: React.FC = () => {
  // const { form, handleInputChange, handleCustomChange } = useFormStorage(
  //   {
  //     address: "",
  //     aptSuite: "",
  //     city: "",
  //     zipCode: "",
  //     selectedDate: "",
  //     time: "",
  //   },
  //   "form"
  // );
  const formData = useForm<FormValues>();
  const [inputValue, setInputValue] = useState('');
  const [addressDetails, setAddressDetails] = useState({
    street: '',
    city: '',
    state: '',
    zip: ''
  });

  const {
    register,
    formState: { errors },
  } = formData;

  const handlePlaceSelected = (place: google.maps.places.PlaceResult) => {
    console.log("Place Selected: ", place)
    if (!place || !place.address_components) {
      return;
    }

    const addressComponents = place.address_components;
    let streetNumber = '';
    let streetName = '';
    let city = '';
    let state = '';
    let zip = '';

    addressComponents.forEach(component => {
      const types = component.types;
      if (types.includes('street_number')) {
        streetNumber = component.long_name;
      }
      if (types.includes('route')) {
        streetName = component.long_name;
      }
      if (types.includes('locality')) {
        city = component.long_name;
      }
      if (types.includes('administrative_area_level_1')) {
        state = component.short_name;
      }
      if (types.includes('postal_code')) {
        zip = component.long_name;
      }
  });
  const street = `${streetNumber} ${streetName}`.trim();
  setAddressDetails({ street, city, state, zip });
  setInputValue(street); // Set the input value to the full street address
  console.log("street: ", street)
}

const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  setInputValue(e.target.value);
  setAddressDetails({ ...addressDetails, street: e.target.value });
  console.log('input value: ', e.target.value)
};

const inputStyles = "block mx-full mb-[10px] w-full hx-full h-full py-[8px] lg:py-[12px] px-[8px] lg:px-[16px] bg-transparent text-text border-solid border-2 focus:border-[3px] border-secondary rounded-[12px] focus:shadow-input-shadow outline-none xl:placeholder:text-[16px] placeholder:text-secondary-placeholder placeholder-opacity-50";


  return (
    <div className="w-full">
      <form className="flex flex-col gap-5">
        <div className="flex gap-5 flex-col lg:flex-row min-w-[280px]">
          <div className="md:w-full lg:w-1/2 md:h-[48px]">
            <Autocomplete
              apiKey="AIzaSyA5V_Sg1fWA7QzML7JwdQmqu-wMSOomO0g"
              onPlaceSelected={handlePlaceSelected}
              options={{
                types: ['address'],
                componentRestrictions: { country: 'us' },
              }}
              className={inputStyles}
              placeholder="Address*"
              value={inputValue}
              // onChange={(e: ChangeEvent<HTMLInputElement>) => handleCustomChange("address", e.target.value)}
              onChange={handleInputChange}
              name="address"
            />
            {/* {errors.address && (
              <p className="error" role="alert">
                {errors.address.message}
              </p>
            )} */}
          </div>
          {/* <div className="md:w-full lg:w-1/2 md:h-[48px]">
            <Input
              type="text"
              style="form-input"
              placeholder="Apt/Suite#"
              onChange={handleInputChange}
              value={form.aptSuite as string}
              name="aptSuite"
            />
            {errors.aptSuite && (
              <p className="error" role="alert">
                {errors.aptSuite.message}
              </p>
            )}
          </div> */}
        </div>
        <div className="flex gap-5 flex-col md:flex-row">
          <div className="md:w-3/4 md:h-[48px] gap-5">
            <Input
              type="text"
              style="form-input"
              placeholder="City*"
              // onChange={handleInputChange}
              {...register("city", {
                required: "City is required",
                onChange: (e) => {
                  handleInputChange(e);
                }
              })}
              // onChange={handleInputChange}
              value={addressDetails.city}
              name="city"
            />
            {errors.city && (
              <p className="error" role="alert">
                {errors.city.message}
              </p>
            )}
          </div>
          <div className="md:w-full md:h-[48px] gap-5">
            <Input
              type="text"
              style="form-input"
              placeholder="State*"
              // onChange={handleInputChange}
              // {...register("state", {
              //   required: "State is required",
              //   onChange: (e) => {
              //     handleInputChange(e);
              //   }
              // })}
              // onChange={handleInputChange}
              value={addressDetails.state}
              name="state"
            />
            {errors.city && (
              <p className="error" role="alert">
                {errors.city.message}
              </p>
            )}
          </div>
          <div className="md:w-1/4 md:h-[48px]">
            <Input
              type="text"
              style="form-input"
              placeholder="Zip Code*"
              value={addressDetails.zip}
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


// import React, { ChangeEvent, useState } from "react";
// import Autocomplete from "react-google-autocomplete";
// import Input from "../components/UI/Input";
// import useFormStorage from "@/hooks/formStorage";
// import { useForm } from "react-hook-form";

// type FormValues = {
//   address: string;
//   aptSuite: string;
//   city: string;
//   zipCode: string;
//   selectedDate: string;
//   time: string;
// };

// const AddressForm: React.FC = () => {
//   const { form,  handleCustomChange, handleInputChange } = useFormStorage(
//     {
//       street: "",
//       aptSuite: "",
//       city: "",
//       zipCode: "",
//       state: "",
//       selectedDate: "",
//       time: "",
//     }
//   );
//   const formData = useForm<FormValues>();
//   const [inputValue, setInputValue] = useState('');
//   // const [addressDetails, setAddressDetails] = useState({
//   //   street: '',
//   //   city: '',
//   //   state: '',
//   //   zip: ''
//   // });

//   const {
//     register,
//     formState: { errors },
//   } = formData;

//   const handlePlaceSelected = (place: google.maps.places.PlaceResult) => {
//     console.log("Place Selected: ", place)
//     if (!place || !place.address_components) {
//       return;
//     }

//     const addressComponents = place.address_components;
//     let streetNumber = '';
//     let streetName = '';
//     let city = '';
//     let state = '';
//     let zip = '';

//     addressComponents.forEach(component => {
//       const types = component.types;
//       if (types.includes('street_number')) {
//         streetNumber = component.long_name;
//       }
//       if (types.includes('route')) {
//         streetName = component.long_name;
//       }
//       if (types.includes('locality')) {
//         city = component.long_name;
//       }
//       if (types.includes('administrative_area_level_1')) {
//         state = component.short_name;
//       }
//       if (types.includes('postal_code')) {
//         zip = component.long_name;
//       }
//   });
//   const street = `${streetNumber} ${streetName}`.trim();
//   // setAddressDetails({ street, city, state, zip });
  
//   setInputValue(street); 
//   console.log("street: ", street)
// }

// // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
// //   setInputValue(e.target.value);
// //   setAddressDetails({ ...addressDetails, street: e.target.value });
// //   console.log('input value: ', e.target.value)
// // };

// const inputStyles = "block mx-full mb-[10px] w-full hx-full h-full py-[8px] lg:py-[12px] px-[8px] lg:px-[16px] bg-transparent text-text border-solid border-2 focus:border-[3px] border-secondary rounded-[12px] focus:shadow-input-shadow outline-none xl:placeholder:text-[16px] placeholder:text-secondary-placeholder placeholder-opacity-50";


//   return (
//     <div className="w-full">
//       <form className="flex flex-col gap-5">
//         <div className="flex gap-5 flex-col lg:flex-row min-w-[280px]">
//           <div className="md:w-full lg:w-1/2 md:h-[48px]">
//             <Autocomplete
//               apiKey="AIzaSyA5V_Sg1fWA7QzML7JwdQmqu-wMSOomO0g"
//               onPlaceSelected={handlePlaceSelected}
//               options={{
//                 types: ['address'],
//                 componentRestrictions: { country: 'us' },
//               }}
//               className={inputStyles}
//               placeholder="Address*"
//               value={form.street as string}
//               onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
//               // onChange={handleInputChange}
//               name="street"
//             />
//             {/* {errors.address && (
//               <p className="error" role="alert">
//                 {errors.address.message}
//               </p>
//             )} */}
//           </div>
//           {/* <div className="md:w-full lg:w-1/2 md:h-[48px]">
//             <Input
//               type="text"
//               style="form-input"
//               placeholder="Apt/Suite#"
//               onChange={handleInputChange}
//               value={form.aptSuite as string}
//               name="aptSuite"
//             />
//             {errors.aptSuite && (
//               <p className="error" role="alert">
//                 {errors.aptSuite.message}
//               </p>
//             )}
//           </div> */}
//         </div>
//         <div className="flex gap-5 flex-col md:flex-row">
//           <div className="md:w-3/4 md:h-[48px] gap-5">
//             <Input
//               type="text"
//               style="form-input"
//               placeholder="City*"
//               // onChange={handleInputChange}
//               {...register("city", {
//                 required: "City is required",
//                 onChange: (e) => {
//                   handleInputChange(e);
//                 }
//               })}
//               // onChange={handleInputChange}
//               // value={addressDetails.city}
//               value={form.city as string}
//               name="city"
//             />
//             {errors.city && (
//               <p className="error" role="alert">
//                 {errors.city.message}
//               </p>
//             )}
//           </div>
//           <div className="md:w-full md:h-[48px] gap-5">
//             <Input
//               type="text"
//               style="form-input"
//               placeholder="State*"
//               // onChange={handleInputChange}
//               // {...register("state", {
//               //   required: "State is required",
//               //   onChange: (e) => {
//               //     handleInputChange(e);
//               //   }
//               // })}
//               // onChange={handleInputChange}
//               // value={addressDetails.state}
//               value={form.state as string}
//               name="state"
//             />
//             {errors.city && (
//               <p className="error" role="alert">
//                 {errors.city.message}
//               </p>
//             )}
//           </div>
//           <div className="md:w-1/4 md:h-[48px]">
//             <Input
//               type="text"
//               style="form-input"
//               placeholder="Zip Code*"
//               // value={addressDetails.zip}
//               value={form.zipCode as string}
//               {...register("zipCode", {
//                 required: "Zip Code is required",
//                 minLength: { value: 5, message: "Zip Code must be 5 digits" },
//                 maxLength: { value: 5, message: "Zip Code must be 5 digits" },
//                 pattern: {
//                   value: /^[0-9]+$/,
//                   message: "Zip Code must be numeric and 5 digits",
//                 },
//                 onChange: (e) => {
//                   handleInputChange(e);
//                 },
//               })}
//             />
//             {errors.zipCode && (
//               <p className="text-red-500" role="alert">
//                 {errors.zipCode.message}
//               </p>
//             )}
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddressForm;
