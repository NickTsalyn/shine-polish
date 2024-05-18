import Image from "next/image";
import { BEDROOM_SERVICES } from "@/global/bedroom";
import RoomIMG from "../../public/images/cleaning-services/cs-bedroom.png";
import BasicBreadcrumbs from "./UI/Breadcrumbs";

export default function CleaningServicesBedroom() {
  const { title, paragraph, processes, frequencies, needs } = BEDROOM_SERVICES;
  return (
    <div className="body text-text">
      <h1 className=" h3 text-main mb-3 md:mb-[18px] lg:mb-7">{title}</h1>
      <BasicBreadcrumbs
        pageHref="cleaning-services"
        pageName="Cleaning Services"
        roomName="Bedroom"
      />
      <div className="mb-5 md:mb-10 lg:mb-[60px]">
        <Image
          src={RoomIMG}
          alt="photo of bedroom"
          width={278}
          height={159}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
        />
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
      <ol className="flex flex-col gap-1.5 list-decimal marker:font-semibold pl-8">
        {processes.items.map((item, index) => (
          <li key={index}>
            <h3 className="font-semibold mb-1 ml-2">{item.title}</h3>
            <ol className="list-disc pl-5">
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
