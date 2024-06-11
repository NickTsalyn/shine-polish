"use client";

import Link from "next/link";
import { useState } from "react";
// import CheckoutForm from "../CheckoutForm";
// import BasicModal from "../UI/Modal";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Step7 = () => {

  // const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //     setOpen(true)
  // }

  // const handleClose = () => {
  //     setOpen(false)
  // }
  return (
    <div className="p-4 md:p-6 lg:p-9">
      <h1>Little Form 7</h1>
      <button type="button"  className="py-1.5 md:py-1 bg-accent text-white border border-solid border-accent rounded-xl w-[208px] h-[40px]">
        <Link href="/payment">BOOK NOW</Link></button>
      {/* <BasicModal open={open} onClose={handleClose}>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
        </Elements>
      </BasicModal> */}
    </div>
  );
};
export default Step7;
