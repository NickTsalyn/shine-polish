"use client";
import { fetchClientBookings } from "@/helpers/api";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

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
    console.log(query.error.message);
  }

  if (query.isPending) {
    return <span>Loading...</span>;
  }
  if (query.isSuccess) {
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
        <p>
          Hello {name} {surname}
        </p>
        <div>
          <p>{phone}</p>
          <p>
            {street} {city} {state} {zip}
          </p>
          <p>{email}</p>
        </div>
      </div>
    )
  );
}
