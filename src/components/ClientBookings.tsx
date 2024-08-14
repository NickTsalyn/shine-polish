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
  // const { _id, name, surname } = bookings;
  const bookings = query.data;
  console.log(query.data);
  // console.log(bookings[0].createdAt);

  if (query.isError) {
    // console.log(query.error.message);
  }

  if (query.isPending) {
    return <span>Loading...</span>;
  }
  if (query.isSuccess && !bookings.length) {
    return <p>You have no bookings yet</p>;
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

        <div className="w-[422px] shadow-main-shadow rounded-xl py-5 pl-16 pr-10 body flex flex-col gap-y-4">
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
      </div>
    )
  );
}
