"use client";
import { fetchClientBookings } from "@/helpers/api";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LetterAvatar from "@/components/UI/LetterAvatar";
import { AddressIcon, EmailIcon } from "@/global/images";

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
  // const [clientBookings, setclientBookings] = useState<ClientBookingsProps>();
  const query = useQuery({
    queryKey: ["client-bookings", ownerId],
    queryFn: () => fetchClientBookings(ownerId),
  });
  
  const bookings = query.data;
  console.log(query.data);
 
  if (query.isError) {
    // console.log(query.error.message);
  }

  if (query.isPending) {
    return <span>Loading...</span>;
  }
  if (query.isSuccess && !bookings.length) {
    return <p>You do not have any bookings yet</p>;
  }
  const {
    name,
    surname,
    phone,
    email,
    address: { street, city, state, zip },
  } = bookings[0];
  return (
    query.isSuccess && (
      <div>
        <h2 className="text-accent h3-bookings font-bold mb-8">
          Hello, {name} {surname}
        </h2>

        <div className="w-[422px] shadow-main-shadow rounded-xl py-5 pl-16 pr-10 body flex flex-col gap-y-4 mb-3">
          <div className="hidden md:block text-[28px] lg:text-[32px] relative ">
            {name} {surname}
            <div className="absolute -top-0 -left-12">
              <LetterAvatar fullName={`${name} ${surname}`} />
            </div>
          </div>
          <p className="text-inherit relative">
            {phone}
            <PhoneIphoneIcon className="absolute top-0 -left-10" />
          </p>

          <div className="text-inherit relative">
            {street} {city} {state} {zip}
            <div className="absolute top-0 -left-10">
              <AddressIcon />
            </div>
          </div>
          <div className="text-inherit relative">
            {email}
            <div className="absolute top-0 -left-10">
              <EmailIcon />
            </div>
          </div>
        </div>

        <div className="w-[220px] shadow-main-shadow rounded-xl p-4">
          <h3 className="text-[20px] mb-5 text-accent text-center">
            Your bookings
          </h3>
          <ul className="flex flex-col gap-y-1">
            {bookings.map((booking: any, index: number) => (
              <li className="flex flex-col items-center text-[20px]" key={index}>
                {booking.createdAt.slice(0, 10).split("-").reverse().join("/")}
                <div className="w-[187px] h-0.5 bg-gray-300"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
}
