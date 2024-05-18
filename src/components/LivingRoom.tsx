import Image from "next/legacy/image";
import { LIVING_ROOM_SERVICES } from "@/global/living-room";
import RoomIMG from "../../public/images/living-room@2x.webp";
import IconPlus from "../../public/icons/Icon_plus.png";
import BasicBreadcrumbs from "./UI/Breadcrumbs";
const icons = [
  { top: "24%", left: "15%" },
  { top: "11%", left: "30%" },
  { top: "1%", right: "35%" },
  { top: "28%", left: "30%" },
  { bottom: "15%", right: "35%" },
  { bottom: "1%", right: "10%" },
];

export default function LivingRoomServices() {
  const { title, paragraph, processes, frequencies, needs } =
    LIVING_ROOM_SERVICES;
  return (
    <div className="body text-text">
      <h1 className=" h3 text-main mb-3 md:mb-[18px] lg:mb-7">{title}</h1>
      <BasicBreadcrumbs
        pageHref="cleaning-services"
        pageName="Cleaning Services"
        roomName="Living Room"
      />
      <div className="relative mb-5 md:mb-10 lg:mb-[60px]">
        <Image
          src={RoomIMG}
          alt="photo of living room"
          width={278}
          height={159}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
        />
        {/* <div className="absolute top-[94px] left-[42px] z-20 flex items-center justify-center">
        <Image  src={IconPlus} alt="icon plus" width={14} height={14} />
      </div>
      <div className="absolute top-[42px] left-[116px] z-20 flex items-center justify-center">
        <Image src={IconPlus} alt="icon plus" width={14} height={14} />
      </div>
      <div className="absolute top-[1px] right-[140px] z-20 flex items-center justify-center">
        <Image src={IconPlus} alt="icon plus" width={14} height={14} />
      </div>
      <div className="absolute top-[110px] left-[120px] z-20 flex items-center justify-center">
        <Image src={IconPlus} alt="icon plus" width={14} height={14} />
      </div>
      <div className="absolute bottom-[60px] right-[130px] z-20 flex items-center justify-center">
        <Image src={IconPlus} alt="icon plus" width={14} height={14} />
      </div>
      <div className="absolute bottom-[5px] right-[38px] z-20 flex items-center justify-center">
        <Image src={IconPlus} alt="icon plus" width={14} height={14} />
      </div> */}
        {icons.map((icon, index) => (
          <div
            key={index}
            className="absolute z-20 flex items-center justify-center w-[14px] md:w-[37px] lg:w-[56px]"
            style={{ ...icon, width: "14px", height: "14px" }}
          >
            <Image src={IconPlus} alt="icon plus" width={14} height={14} />
          </div>
        ))}
      </div>

      <ul className="flex flex-col gap-1.5 mb-3 md:mb-[18px] lg:mb-7">
        {paragraph.map((p, index) => (
          <li key={index}>
            <p className="indent-1.5">{p}</p>
          </li>
        ))}
      </ul>

      <h2 className="text-main h4 mb-1 md:mb-2 lg:mb-4">{processes.title}</h2>
      <p className="mb-1">{processes.text}</p>
      <ol className="flex flex-col gap-1.5">
        {processes.items.map((item, index) => (
          <li key={index}>
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="indent-1.5">{item.description}</p>
          </li>
        ))}
      </ol>
      <p className="mb-3 md:mb-[18px] lg:mb-7 indent-1.5">
        {processes.summary}
      </p>

      <h2 className="text-main h4 mb-1 md:mb-2 lg:mb-4">{frequencies.title}</h2>
      <p className="mb-1">{frequencies.text}</p>
      <ul className="flex flex-col gap-1.5">
        {frequencies.items.map((item, index) => (
          <li key={index}>
            <h3 className="font-semibold text-main mb-1">{item.title}</h3>
            <ol className="list-disc pl-6">
              {item.description.map((d, index) => (
                <li key={index}>
                  <p>{d}</p>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
      <p className="mb-3 md:mb-[18px] lg:mb-7 indent-1.5">
        {frequencies.summary}
      </p>

      <h2 className="text-main h4 mb-1 md:mb-2 lg:mb-4">{needs.title}</h2>
      <p className="mb-1">{needs.text}</p>
      <ul className="flex flex-col gap-1.5 mb-3 md:mb-[18px] lg:mb-7">
        {needs.items.map((item, index) => (
          <li key={index}>
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="indent-1.5">{item.description}</p>
          </li>
        ))}
      </ul>
      <p className="mb-3 md:mb-[18px] lg:mb-7 indent-1.5 font-semibold">
        {needs.summary}
      </p>
    </div>
  );
}
