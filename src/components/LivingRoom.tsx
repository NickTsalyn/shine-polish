import Image from "next/legacy/image";
import { LIVING_ROOM_SERVICES } from "@/global/living-room";
import RoomIMG from "../../public/images/living_room@2x.jpg";
import BasicBreadcrumbs from "./UI/Breadcrumbs";

export default function LivingRoomServices() {
  const { title, paragraph, processes, frequencies, needs } =
    LIVING_ROOM_SERVICES;
  return (
    <>
      <h1 className=" h3 text-main mb-3 md:mb-[18px] lg:mb-7">{title}</h1>
      <BasicBreadcrumbs roomName="Living Room" />
      <div className="mb-5 md:mb-10 lg:mb-[60px]">
        <Image
          src={RoomIMG}
          alt="photo of living room"
          width={278}
          height={159}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <ul className="flex flex-col gap-1.5 body text-text mb-3 md:mb-[18px] lg:mb-7">
        {paragraph.map((p, index) => (
          <li key={index}>
            <p className="indent-1.5">{p}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
