import Image from "next/image";
import IconPlus from "../../public/icons/Icon_plus-min.png";
import { KITCHEN_SERVICES } from "@/global/kitchen";
import { Tooltip, TooltipProps } from "@mui/material";
import BasicBreadcrumbs from "./UI/Breadcrumbs";

const KitchenImage: React.FC = () => {
  return (
    <picture>
      <source
        srcSet="/images/kitchen/pexels-curtis-adams.webp, /images/kitchen/pexels-curtis-adams@2x.webp"
        sizes="(max-width:378px) 279px, (width: 768px) 720px, (width: 1440px) 1076px; (width:1920px) 1556px;"
        type="image/webp"
      />
      <source
        srcSet="/images/kitchen/pexels-curtis-adams.jpg, /images/kitchen/pexels-curtis-adams@2x.jpg.jpg"
        sizes="(max-width:378px) 279px, (width: 768px) 720px, (width: 1440px) 1076px; (width:1920px) 1556px;"
        type="image/jpg"
      />
      <Image
        src="/public/images/pexels-curtis-adams@2x.jpg"
        alt="Kitchen"
        layout="responsive"
        width={1556}
        height={896}
        objectFit="cover"
        objectPosition="center"
        className="rounted-xl"
      />
    </picture>
  );
};

const icons = [
  { title: "Clear Clutter", top: "70%", left: "58%" },
  { title: "Wash Dishes and Utensils", top: "53%", left: "42%" },
  { title: "Wipe Down Surfaces", top: "40%", left: "50%" },
  { title: "Clean Appliances", top: "55%", left: "65%" },
  { title: "Sanitize the Sink", top: "58%", left: "36%" },
  { title: "Clean and Degrease Stovetop", top: "50%", left: "55%" },
  { title: "Empty and Clean the Trash Can", top: "53%", left: "24%" },
  { title: "Wipe Down Cabinet Exteriors", top: "38%", left: "38%" },
  { title: "Clean and Disinfect High-Touch Areas", top: "50%", left: "78%" },
  { title: "Sweep and Mop Floors", top: "80%", left: "80%" },
  { title: "Clean Refrigerator", top: "50%", left: "7%" },
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

const KitchenServices: React.FC = () => {
  const { title, paragraph, processes, frequencies, needs } = KITCHEN_SERVICES;
  return (
    <div>
      <h1 className="h3 text-main mb-14">{title}</h1>
      <BasicBreadcrumbs
        pageHref="cleaning-processes"
        pageName="Cleaning Process"
        roomName="Kitchen"
      />
      <div className="relative mb-5 md:mb-10 lg:mb-[60px]">
        <KitchenImage />
        {icons.map((icon, index) => (
          <CustomTooltip key={index} title={icon.title} placement="right-end">
            <div
              key={index}
              style={{ top: icon.top, left: icon.left }}
              className="absolute z-20  flex items-center justify-center size-5 md:size-9 lg:p-3 lg:size-14"
            >
              <Image src={IconPlus} alt="icon with plus" />
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
      <ol className="flex flex-col gap-1.5 list-decimal pl-6">
        {processes.items.map((item, index) => (
          <li key={index}>
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p>{item.description}</p>
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
      <p className="mb-3 md:mb-[18px] lg:mb-7 ">{frequencies.summary}</p>

      <h2 className="text-main h4 mb-1 md:mb-2 lg:mb-4">{needs.title}</h2>
      <p className="mb-1">{needs.text}</p>
      <ol className="flex flex-col gap-1.5 mb-3 md:mb-[18px] lg:mb-7 list-decimal pl-6">
        {needs.items.map((item, index) => (
          <li key={index}>
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>
      <p className="mb-3 md:mb-[18px] lg:mb-7 font-semibold">{needs.summary}</p>
    </div>
  );
};

export default KitchenServices;
