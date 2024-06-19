// "use client";

// import { Box } from "@mui/material";
// import Link from "next/link";

// const Step7 = () => {
//   return (
//     <div className="p-4 md:p-6 lg:p-9">
      
//       <Box className=" flex justify-center items-center w-[208px] h-[40px]">
//       <Link
//         href="https://buy.stripe.com/test_3cs8AldjBeZj61G9AA"
//         className="py-1.5 md:py-1 bg-accent text-white border border-solid border-accent rounded-xl w-full text-center "
//       >
//         BOOK NOW
//       </Link>
//       </Box>
//     </div>
//   );
// };
// export default Step7;

"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

const Step7 = () => {
  const [loading, setLoading] = useState(false);
  const origin = window.location.origin; // Отримати поточний URL звідки виконується код
  const handleCheckout = async () => {
    setLoading(true);

    // Отримайте остаточну ціну з вашої форми букінгу
    const price = 10000; // Наприклад, 50.00 USD

    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price }), // ціна у центах
    });

    const session = await response.json();

    const stripe = await stripePromise;

    if (!stripe) {
      console.error('Stripe has not been initialized');
      setLoading(false);
      return;
    }
    const { error } = await stripe.redirectToCheckout({ sessionId: session.id });

    if (error) {
      console.error('Error redirecting to checkout:', error);
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-9">
      <div className="flex justify-center items-center w-[208px] h-[40px]">
        <button
          onClick={handleCheckout}
          className="py-1.5 md:py-1 bg-accent text-white border border-solid border-accent rounded-xl w-full text-center"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'BOOK NOW'}
        </button>
      </div>
    </div>
  );
};

export default Step7;

