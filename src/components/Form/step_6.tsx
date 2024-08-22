"use client";
import useFormStorage from "@/hooks/formStorage";
import {useEffect, useState} from "react";
import {areas, discount, serviceOption, extrasOption, getPrice} from "../../helpers/formula";
import {loadStripe} from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

import {StepProps} from "@/types/interfaces";
import {CircularProgress} from "@mui/material";
import DateTimeCleaning from "../DateTimeCleaning";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const Step6: React.FC<StepProps> = () => {
 const {form, handleCustomChange} = useFormStorage();
 const [total, setTotal] = useState(0);

 const [loading, setLoading] = useState(false);

 useEffect(() => {
  if (Object.keys(form).length === 0) {
   if (total !== 0) {
    setTotal(0);
   }
   return;
  }

  const {bedroom, bathroom, area, frequency, service, extras, tips} = form;

  const areaCoefficient = areas.find((ar) => ar.name === area)?.value || 1;
  const discountValue = discount.find((discount) => discount.name === frequency)?.value || 1;
  const cleaningValue = serviceOption.find((serv) => serv.name === service)?.value || 1;
  const extraValue = extrasOption.reduce((acc, item) => {
   return (extras as string[]).includes(item.name) ? acc + item.value : acc;
  }, 0);

  const calculatedPrice =
   getPrice(Number(bedroom), Number(bathroom)) * areaCoefficient * discountValue * cleaningValue + extraValue;
  const totalWithTips = calculatedPrice + (Number(tips) || 0);
  setTotal(totalWithTips);
  handleCustomChange("totalPrice", totalWithTips);
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);

 const handleCheckout = async () => {
  setLoading(true);

  try {
   const price = total * 100;

   const response = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify({price, form}), // Send form data along with the price
   });

   const session = await response.json();

   const stripe = await stripePromise;

   if (!stripe) {
    console.error("Stripe has not been initialized");
    setLoading(false);
    return;
   }
   const {error} = await stripe.redirectToCheckout({
    sessionId: session.id,
   });

   if (error) {
    console.error("Error redirecting to checkout:", error);
    setLoading(false);
   }
  } catch (error) {
   console.error("Error during checkout:", error);
   setLoading(false);
  } finally {
   setLoading(false);
  }
 };

 return (
  <div className="p-4 md:p-6 lg:p-9 xl:py-12 flex flex-col gap-5 lg:h-[80vh] justify-between">
   <div>
    <h2 className=" text-black text-3xl text-center mb-2 lg:mb-5 xl:mb-12 xl:text-[48px]  ">BOOKING SUMMARY</h2>
    <p className="text-bookingSubText text-base lg:text-[24px] xl:text-[32px] ">
     By clicking the Book Now button, you agree to our Terms of Service and Privacy Policy.
    </p>
   </div>
   <div className="flex flex-col md:flex-row gap-16 xl:gap-20">
    <ul className="list-disc ml-6 flex flex-col gap-0.5 md:gap-1 ">
     {Object.entries(form).map(([key, value]) => {
      if (["bedroom", "bathroom", "area", "frequency", "service"].includes(key) && value !== "") {
       return (
        <li
         key={key}
         className="text-[20px] xl:text-[28px]"
        >
         <span>{key === "bathroom" || key === "bedroom" ? `${value} ${key}(s)` : value}</span>
        </li>
       );
      }
     })}
     {form.tips && Number(form.tips) > 0 && (
      <li className="text-[20px] xl:text-[28px]">
       <span>Tips $ {Number(form.tips).toFixed(2)}</span>
      </li>
     )}
    </ul>
    {Array.isArray(form.extras) && form.extras.length > 0 ? (
     <div className="flex flex-col  gap-2 ">
      {/* <p className="underline underline-offset-4 text-[20px] xl:text-[28px]">Extras</p> */}
      <ul className=" ml-6 flex flex-col gap-1  md:gap-x-8 md:gap-y-1 md:grid md:grid-rows-6 lg:grid-rows-5 md:grid-flow-col">
       {form.extras.map((extra, index) => (
        <li
         key={index}
         className="text-[16px] lg:text-[20px] xl:text-[28px] text-subtext break-inside-avoid"
        >
         <CheckRoundedIcon className="mr-2 text-green-500" />
         {extra}
        </li>
       ))}
      </ul>
     </div>
    ) : null}
   </div>
   <DateTimeCleaning form={form as any} />
   <div className="flex flex-col gap-2 ">
    <div className=" flex justify-between text-2xl text-main xl:text-4xl">
     <span>TOTAL</span>
     <span className="">$ {total.toFixed(2)}</span>
    </div>
   </div>

   <button
    className=" flex justify-center items-center text-white bg-accent rounded-xl py-1.5 w-3/4 mx-auto"
    type="submit"
    onClick={handleCheckout}
    disabled={loading}
   >
    {loading ? (
     <div className="flex justify-center items-center gap-5">
      <span className="text-white text-2xl xl:text-4xl">Processing...</span>
      <CircularProgress
       size={24}
       className="text-sand  flex-right justify-items-end"
      />
     </div>
    ) : (
     <span className="text-white text-2xl xl:text-4xl">BOOK NOW</span>
    )}
   </button>
  </div>
 );
};

export default Step6;
