import Image from "next/legacy/image";
import { Tooltip, TooltipProps } from "@mui/material";
import { LIVING_ROOM_SERVICES } from "@/global/living-room";
import IconPlus from "../../public/icons/icon_plus-min.png";
import BasicBreadcrumbs from "./UI/Breadcrumbs";

const icons = [
  { title: "Clean Furniture", top: "48%", left: "13%" },
  { title: "Dust and wipe down electronics", top: "24%", left: "36%" },
  { title: "Clean Furniture", top: "56%", left: "38%" },
  { title: "Clean Light Fixtures", top: "3%", left: "54%" },
  { title: "Declutter", top: "60%", left: "56%" },
  { title: "Address Pet Hair", top: "50%", left: "68%" },
  { title: "Vacuum and Sweep", top: "88%", left: "80%" },
];

const CustomTooltip = (props: JSX.IntrinsicAttributes & TooltipProps) => (
  <Tooltip
    {...props}
    classes={{
      tooltip:
        " bg-[#E6BA95CC] text-white text-center text-xs md:text-sm lg:text-base rounded-xl w-20 md:w-28 lg:w-36",
    }}
  />
);

const RoomImage = () => {
  return (
    <picture>
      <source
        srcSet="/images/living-room/living-room.webp 1x, /images/living-room/living-room@2x.webp 2x"
        type="image/webp"
        sizes="(max-width: 375px) 278px, (max-width: 768px) 716px, (max-width: 1440px) 1076px"
      />
      <source
        srcSet="/images/living-room/living-room1.jpg 1x, /images/living-room/living-room1@2x.jpg 2x"
        type="image/jpeg"
        sizes="(max-width: 375px) 278px, (max-width: 768px) 716px, (max-width: 1440px) 1076px"
      />
      <img
        src="/images/living-room/living-room1.jpg"
        alt="photo of living room"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </picture>
  );
};

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
        <RoomImage />
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
