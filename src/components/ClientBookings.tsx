"use client";
import { fetchClientBookings } from "@/helpers/api";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LetterAvatar from "@/components/UI/LetterAvatar";
import { AddressIcon, EmailIcon } from "@/global/images";
import { FormValues } from "@/types/interfaces";
import ReviewRating from "@/components/UI/ReviewRating";
import Link from "next/link";

interface ClientBookingsProps {
  // bookings: {
  //   _id: string;
  //   name: string;
  //   surname: string;
  // };
  ownerId: string;
}

export default function ClientBookings({
  // bookings,
  ownerId,
}: ClientBookingsProps) {
  const [clientBooking, setClientBooking] = useState<FormValues | null>(null);

  const { data, isError, isPending, isSuccess } = useQuery({
    queryKey: ["client-bookings", ownerId],
    queryFn: () => fetchClientBookings(ownerId),
  });

  console.dir(data);

  const bookings = data;
  useEffect(() => {
    if (data) {
      setClientBooking(data[data.length - 1]);
    }
  }, [data]);

  const handleChooseBooking = (
    event: React.MouseEvent<HTMLButtonElement>
  ): any => {
    const currentTarget = event.currentTarget as HTMLButtonElement;
    const index = Number(currentTarget.value);
    console.log(index);
    const selectedBooking = bookings.find(
      (booking: FormValues, idx: number): any => {
        if (index === idx) {
          return booking;
        }
      }
    );
    setClientBooking(selectedBooking);
  };

  if (isError) {
    // console.log(query.error.message);
    return <p>You are not authorized</p>;
  }

  if (isPending) {
    return <span>Loading...</span>;
  }
  if (isSuccess && !bookings.length) {
    return <p>You do not have any bookings yet</p>;
  }
  if (isSuccess) {
  }

  console.log(clientBooking);
  const {
    name,
    surname,
    phone,
    email,
    address: { street, city, state, zip },
  } = bookings[0];

  return (
    isSuccess &&
    clientBooking && (
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
        <div className="col-start-1 col-end-3">
          <h2 className="text-accent text-[28px] md:text-[40px] font-bold px-5 mb-8">
            Hello, {name} {surname}
          </h2>

          <div className="flex flex-col gap-y-4 w-[280px] md:w-[415px] shadow-main-shadow rounded-xl py-5 pl-16 pr-10 body mb-10 mx-auto">
            <div className="hidden md:block text-[16px] md:text-[28px] xl:text-[32px] relative ">
              {name} {surname}
              <div className="absolute -top-0 -left-12">
                <LetterAvatar fullName={`${name} ${surname}`} />
              </div>
            </div>
            <p className="text-[16px] md:text-[20px] relative">
              {phone}
              <PhoneIphoneIcon className="absolute top-0 -left-10" />
            </p>

            <div className="text-[16px] md:text-[20px] relative">
              {street}, {city}, {state} {zip}
              <div className="absolute top-0 -left-10">
                <AddressIcon />
              </div>
            </div>
            <div className="text-[16px] md:text-[20px] relative">
              {email}
              <div className="absolute top-0 -left-10">
                <EmailIcon />
              </div>
            </div>
          </div>
        </div>
        {/*list last bookings */}
        <div>
          <div className="w-[220px] shadow-main-shadow rounded-xl p-4 px-2 mb-10 mx-auto">
            <h3 className="text-[20px] mb-5 text-accent text-center">
              Your bookings
            </h3>
            <ul className="flex flex-col gap-y-1 max-h-[225px] md:max-h-[160px] overflow-y-auto overflow-x-hidden ">
              {bookings.map((booking: any, index: number) => (
                <li
                  className="flex flex-col items-center text-[20px]"
                  key={index}
                >
                  <button
                    type="button"
                    value={index}
                    onClick={(event) => handleChooseBooking(event)}
                  >
                    {booking.createdAt
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join("/")}
                    <div className="w-[187px] h-0.5 bg-gray-300"></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center mb-10">
            <div className="w-[120px] mb-3">
              <ReviewRating />
            </div>
            <Link href={""} className="text-accent text-[20px]">
              Send review
            </Link>
          </div>
        </div>
        {/* bokings detail*/}
        {/* Your question*/}
        <div className="w-[320px] md:w-[684px] px-5 mb-10 col-start-1 col-end-3 md:col-start-1 md:col-end-4">
          <h3 className="text-[20px] text-main mb-4">Your questions:</h3>
          <p className="text-[20px] leading-6 text-text overflow-y-hidden max-h-[76px] ">
            {clientBooking.specialInstructions}
          </p>
        </div>
        {/* Additional information*/}
        <div className="w-[320px] md:w-[684px] px-5 mb-10 col-start-1 col-end-3 md:col-start-1 md:col-end-4">
          <h3 className="text-[20px] text-main mb-4">
            Additional information:
          </h3>
          <p className="text-[20px] leading-6 text-text overflow-y-hidden max-h-[76px] ">
            {clientBooking.homeAccess}
          </p>
        </div>
        {/* Special Instructions:*/}
        <div className="w-[320px] md:w-[684px] px-5 mb-10 col-start-1 col-end-3 md:col-start-1 md:col-end-4">
          <h3 className="text-[20px] text-main mb-4">Special Instructions:</h3>
          <p className="text-[20px] leading-6 text-text overflow-y-hidden max-h-[76px] ">
            {clientBooking.specialInstructions}
          </p>
        </div>
        {/* Your last bookings*/}
        <div className="w-[320px] md:w-[684px] px-5 mb-10 col-start-1 col-end-3 md:col-start-1 md:col-end-4">
          <h3 className="text-[32px] text-accent mb-6">Your last bookings:</h3>
          <div className="text-[16px] leading-6 text-text grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4">
            <div className="flex flex-col gap-3">
              <p className="text-inherit">Bedrooms: {clientBooking.bedroom}</p>
              <p className="text-inherit ">
                Bathrooms: {clientBooking.bathroom}
              </p>
              <p className="text-main opacity-20">
                Extra Living Room/ <br /> Bonus Room
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-main">{clientBooking.service}</p>
              <p className="text-main">{clientBooking.frequency}</p>
              <p className="text-accent opacity-20">
                Visit to the facility for work evaluation
              </p>
            </div>
            <p className="text-inherit text-main text-center col-start-1 col-end-3 md:col-span-1">
              You haven’t cleaning supplies <br />
              (we cab bring it with us)
            </p>
            <ul className="grid gap-4 col-span-4 grid-flow-col justify-items-center md:justify-items-start">
              {clientBooking.extras.map((item: any, index: number) => (
                <li key={index} className="text-main text-center">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
}
