import { BATHROOM_SERVICES } from "@/global/bathroom";
import BasicBreadcrumbs from "../UI/Breadcrumbs";
import { SynchronizedImage } from "../SynchronizedImage";

export default function BathroomServices() {
  const { title, paragraph, processes, frequencies, needs } = BATHROOM_SERVICES;
  return (
    <div className="body text-text lg:mb-[120px]">
      <h1 className=" h3 text-main mb-3 md:mb-[18px] lg:mb-7">{title}</h1>
      <BasicBreadcrumbs pageHref="cleaning-process" pageName="Cleaning Process" roomName="Bathroom" />
      <div className="relative mb-5 md:mb-10 lg:mb-[60px] min-w-[278px] md:min-w-[712px] lg:min-w-[1076px] xl:min-w-[1516px] 4xl:min-w-[2156px]">
        <SynchronizedImage src="/images/bathroom@2x.webp" roomType="bathroom" />
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
      <ol className="flex flex-col gap-1.5 marker:font-semibold">
        {processes.items.map((item, index) => (
          <li key={index}>
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <ol className="list-disc pl-9 ">
              {item.description.map((d, index) => (
                <li key={index}>
                  <p className="indent-1.5">{d}</p>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
      <p className=" mt-3 mb-3 md:mb-[18px] lg:mb-7">{processes.summary}</p>

      <h2 className="text-main h4 mb-1 md:mb-2 lg:mb-4">{frequencies.title}</h2>
      <p className="mb-1">{frequencies.text}</p>
      <ul className="flex flex-col gap-1.5 mb-3 md:mb-[18px] lg:mb-7">
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

      <h2 className="text-main h4 mb-1 md:mb-2 lg:mb-4">{needs.title}</h2>
      <p className="mb-1">{needs.text}</p>
      <ul className="flex flex-col gap-1.5 mb-3 md:mb-[18px] lg:mb-7">
        {needs.items.map((item, index) => (
          <li key={index}>
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className=" ml-4">{item.description}</p>
          </li>
        ))}
      </ul>
      <p className="mb-3 md:mb-[18px] lg:mb-7 font-semibold">{needs.summary}</p>
    </div>
  );
}
