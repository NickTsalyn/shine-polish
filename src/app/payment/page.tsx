"use client";

import { FC, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const PaymentPage: FC = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create Intent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "payment" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error('Error:', error));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      <h1>Payment Page</h1>
      {clientSecret && (
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
       )}
    </div>
  );
};

export default PaymentPage;
