"use client";

import ClientBookings from "@/components/ClientBookings";
import { fetchClientBookings } from "@/helpers/api";


export interface PageProps {
  params: { id: string };
}

// const bookings = {
//   _id: "66ae62a443b7c76e945c901e",
//   name: "Vasya",
//   surname: "Dirty",
//   owner: "6671f0a9bf6eb983867dcfdd",
//   //  owner:'6685cc15f940822f66ca8230'
// };

export default function Page({params}: PageProps) {

  return (
    <div className="py-5 md:p-7 lg:p-10 xl:p-16 lg:py-20 ">
      <ClientBookings ownerId={params.id} />
    </div>
  );
}
