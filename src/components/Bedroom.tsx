import Image from "next/image";
import { BEDROOM_SERVICES } from "@/global/bedroom";
import RoomIMG from "../../public/images/bedroom/bedroom@2x.webp";
import BasicBreadcrumbs from "./UI/Breadcrumbs";
import IconPlus from "../../public/icons/Icon_plus-min.png";
import { Tooltip, TooltipProps } from "@mui/material";

const icons = [
  { title: "Freshen Up", top: "41%", left: "55%" },
  { title: "Dusting", top: "25%", left: "34%" },
  { title: "Bedding", top: "57%", left: "37%" },
  { title: "Clean Window Treatments", top: "38%", left: "92%" },
  { title: "Clean Furniture", top: "52%", left: "66%" },
  { title: "Clean Light Fixtures", top: "5%", left: "53%" },
  { title: "Vacuum and Clean Floors", top: "82%", left: "10%" },
];

const CustomTooltip = (props: JSX.IntrinsicAttributes & TooltipProps) => (
  <Tooltip
    {...props}
    classes={{
      tooltip:
        "bg-[#E6BA95CC] text-white text-center text-xs md:text-sm lg:text-base rounded-xl w-20 md:w-28 lg:w-36 p-2 lg:p-3",
    }}
  />
);

export default function Bedroom() {
  const { title, paragraph, processes, frequencies, needs } = BEDROOM_SERVICES;
  return (
    <div className="body text-text">
      <h1 className="h3 text-main mb-3 md:mb-[18px] lg:mb-7">{title}</h1>
      <BasicBreadcrumbs
        pageHref="cleaning-process"
        pageName="Cleaning Process"
        roomName="Bedroom"
      />
      <div className="mb-5 md:mb-10 lg:mb-[60px] relative">
        <Image
          src={RoomIMG}
          alt="photo of bedroom"
          width={280}
          height={160}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
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
            <p>{p}</p>
          </li>
        ))}
      </ul>

      <h2 className="text-main h4 mb-1 md:mb-2 lg:mb-4">{processes.title}</h2>
      <p className="mb-1">{processes.text}</p>
      <ol className="flex flex-col gap-1.5 list-decimal marker:font-semibold pl-6 md:pl-8 mb-3">
        {processes.items.map((item, index) => (
          <li key={index}>
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <ol className="list-disc pl-4">
              <li>
                <p>{item.description}</p>
              </li>
            </ol>
          </li>
        ))}
      </ol>
      <p className="mb-3 md:mb-[18px] lg:mb-7">{processes.summary}</p>

      <h2 className="text-main h4 mb-1 md:mb-2 lg:mb-4">{frequencies.title}</h2>
      <p className="mb-1">{frequencies.text}</p>
      <ul className="flex flex-col gap-1.5">
        {frequencies.items.map((item, index) => (
          <li key={index}>
            <h3 className="font-semibold text-main mb-1">{item.title}</h3>
            <ol className="flex flex-col gap-1.5 list-decimal marker:font-semibold pl-4 md:pl-8 mb-3">
              {item.subtitle.map((sub, index) => (
                <li key={index}>
                  <h3 className="font-semibold mb-1">{sub}</h3>
                  <ol className="list-disc pl-4">
                    <li>
                      <p>{item.description[index]}</p>
                    </li>
                  </ol>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
      <p className="mb-3 md:mb-[18px] lg:mb-7">{frequencies.summary}</p>

      <h2 className="text-main h4 mb-1 md:mb-2 lg:mb-4">{needs.title}</h2>
      <p className="mb-1.5">{needs.text}</p>
      <ol className="flex flex-col gap-1.5 list-decimal marker:font-semibold pl-4 md:pl-8 mb-3 md:mb-[18px] lg:mb-7">
        {needs.items.map((item, index) => (
          <li key={index}>
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <ol className="list-disc pl-4">
              <li>
                <p>{item.description}</p>
              </li>
            </ol>
          </li>
        ))}
      </ol>
      <p className="mb-3 md:mb-[18px] lg:mb-7 font-semibold">{needs.summary}</p>
    </div>
  );
}
