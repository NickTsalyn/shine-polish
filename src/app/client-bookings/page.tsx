"use client";

import ClientBookings from "@/components/ClientBookings";
import { fetchClientBookings } from "@/helpers/api";

export interface PageProps {}

const bookings = {
  _id: "66ae62a443b7c76e945c901e",
  name: "Vasya",
  surname: "Dirty",
  owner:'6671f0a9bf6eb983867dcfdd'
};

export default function Page({}: PageProps) {

  return (
    <div className="py-5 md:p-7 lg:py-20">
      <ClientBookings /*bookings={bookings}*/ ownerId={bookings.owner} />
    </div>
  );
}
