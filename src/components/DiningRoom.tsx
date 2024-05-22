import Image from "next/legacy/image";
import { Tooltip, TooltipProps } from "@mui/material";
import BasicBreadcrumbs from "./UI/Breadcrumbs";
import { DINING_ROOM_SERVICES } from "@/global/dining-room";
import DiningRoomIMG from "../../public/images/diningroom@2x.jpg";
import IconPlus from "../../public/icons/Icon_plus-min.png";

const icons = [
  { title: "Icon-1", top: "23%", left: "33%" },
  { title: "Icon-2", top: "46%", left: "11%" },
  { title: "Icon-3", top: "57%", left: "35.5%" },
  { title: "Icon-4", top: "53%", left: "53%" },
  { title: "Icon-5", top: "25%", left: "66%" },
  { title: "Icon-6", top: "53%", left: "68%" },
  { title: "Icon-7", top: "82%", left: "72%" },
];

const CustomTooltip = (props: JSX.IntrinsicAttributes & TooltipProps) => (
  <Tooltip
    {...props}
    classes={{
      tooltip:
        " bg-[#E6BA95CC] text-white text-center text-xs md:text-sm lg:text-base rounded-xl w-20 md:w-28 lg:w-36 p-2",
    }}
  />
);

export default function DiningRoomServices() {
  const { title, paragraph, processes, frequencies, needs } = DINING_ROOM_SERVICES;
  
  return (
    <div className="body text-text">
      <h1 className=" h3 text-main mb-3 md:mb-[18px] lg:mb-7">{title}</h1>

      <BasicBreadcrumbs
        pageHref="cleaning-process"
        pageName="Cleaning Process"
        roomName="Living Room"
      />

      <div className="relative mb-5 md:mb-10 lg:mb-[60px]">
        <Image
          src={DiningRoomIMG}
          alt="photo of dining room"
          width={278}
          height={159}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
        />

        {icons.map((icon, index) => (
          <CustomTooltip key={index} title={icon.title} placement="right-end">
            <div
              className="absolute z-20  flex items-center justify-center size-5 md:size-9 lg:size-14"
              style={{ top: icon.top, left: icon.left }}
            >
              <Image src={IconPlus} alt="icon plus" />
            </div>
          </CustomTooltip>
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
            <p>{item.description}</p>
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
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <p className="mb-3 md:mb-[18px] lg:mb-7 indent-1.5 font-semibold">
        {needs.summary}
      </p>
    </div>
  );
}
