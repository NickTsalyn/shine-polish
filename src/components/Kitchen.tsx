import { Breadcrumbs } from "@mui/material";
import Image from "next/image";
import IconPlus from "../../public/icons/Icon_plus-min.png";
import { KITCHEN_SERVICES } from "@/global/kitchen";

const KitchenImage: React.FC = () => {
  return (
    <picture>
      <source
        srcSet="/images/pexels-curtis-adams.webp, /images/pexels-curtis-adams@2x.webp"
        sizes="(max-width:378px) 279px, (width: 768px) 720px, (width: 1440px) 1076px; (width:1920px) 1556px;"
        type="image/webp"
      />
      <source
        srcSet="/images/pexels-curtis-adams.jpg, /images/pexels-curtis-adams@2x.jpg"
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
  { top: "48%", left: "13%" },
  { top: "24%", left: "36%" },
  { top: "56%", left: "38%" },
  { top: "3%", left: "54%" },
  { top: "60%", left: "56%" },
  { top: "50%", left: "68%" },
  { top: "90%", left: "80%" },
];

const KitchenServices: React.FC = () => {
  const { title, paragraph, processes, frequencies, needs } = KITCHEN_SERVICES;
  return (
    <div>
      <h1 className="h3 text-main mb-14">{title}</h1>
      <Breadcrumbs />
      {/* <BasicBreadcrumbs
        pageHref="cleaning-services"
        pageName="Cleaning Services"
        roomName="Living Room"
      /> */}
      <div className="relative mb-5 md:mb-10 lg:mb-[60px]">
        <KitchenImage />
        {icons.map((icon, index) => (
          <div
            key={index}
            style={{ top: icon.top, left: icon.left }}
            className="absolute z-20  flex items-center justify-center size-5 md:size-9 lg:size-14"
          >
            <Image src={IconPlus} alt="icon with plus" />
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
};

export default KitchenServices;
