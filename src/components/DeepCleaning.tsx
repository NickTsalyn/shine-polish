import { DEEP_CLEANING } from "@/global/deep-cleaning";
import BasicBreadcrumbs from "./UI/Breadcrumbs";

export default function DeepCleaning() {
  const { title, paragraphs, services, homeNeeds, yourArea } = DEEP_CLEANING;
  return (
    <div className=" body text-text  flex flex-col justify-start items-start ">
      <h1 className=" subtitle-booking md:text-5xl lg:text-6xl md:leading-6 text-main max-w-64 md:max-w-[682px] lg:max-w-[920px] text-start mb-5 md:mb-10 lg:mb-7 ">
        {title}
      </h1>
      <div className=" mb-2 md:mb-5 lg:mb-0">
        <BasicBreadcrumbs roomName="Deep Cleaning" />
      </div>
      <div className="max-w-72 md:max-w-[693px] lg:max-w-[1080px] xl:max-w-screen-2xl">
        <ul className="flex flex-col gap-5 lg:gap-8 mb-5 lg:mb-8">
          {paragraphs.map((p, index) => (
            <li key={index}>
              <p>{p}</p>
            </li>
          ))}
        </ul>
        <h2 className=" text-main  ">{services.title}</h2>
        <p className=" mb-5 md:mb-8">
          {services.paragraphFirst} <span>{services.paragraphAccent}</span>{" "}
          {services.paragraphSecond}
        </p>
        <h3 className="text-main">{services.subtitleFirst}</h3>
        <ul className=" list-disc pl-5">
          {services.firstList.map((p, index) => (
            <li key={index}>{p}</li>
          ))}
        </ul>
        <p className=" mb-5 md:mb-8">{services.firstParagraph}</p>
      </div>
    </div>
  );
}
