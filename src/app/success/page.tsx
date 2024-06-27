"use client";

import { useEffect } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

const Success = () => {

  useEffect(() => {
    localStorage.clear();

    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    return () => clearTimeout(timer); // Очищення таймера при анмаунті
  }, []);

  return (
    <div className="container">
      <h1>Payment Successful</h1>
      <p>
        Thank you for your payment! Return to{" "}
        <Link href="/" className="text-main">
          Home
        </Link>
      </p>
      <p>You will be redirected to the homepage in 5 seconds.</p>
    </div>
  );
};

export default Success;
