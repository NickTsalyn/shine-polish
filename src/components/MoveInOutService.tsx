import { MOVE_INOUT_SERVICES } from "@/global/move-cleaning";
import BasicBreadcrumbs from "./UI/Breadcrumbs";

export default function MoveServices() {
  const {
    title,
    paragraphs,
    benefits,
    outServices,
    inServices,
    involves,
    aboutUs,
  } = MOVE_INOUT_SERVICES;
  return (
    <div className=" body text-text flex flex-col justify-center md:justify-start items-center md:items-start ">
      <h1 className=" subtitle-booking md:text-[32px] lg:text-6xl md:leading-6 text-main max-w-64 md:max-w-md lg:max-w-3xl text-center md:text-start mb-5 md:mb-10 lg:mb-7 ">
        {title}
      </h1>
      <div className=" mb-2 md:mb-5 lg:mb-0">
        <BasicBreadcrumbs
          pageHref="appartment-services"
          roomName="Professional Apartment Cleaning Service"
        />
      </div>
      <div className="max-w-64 md:max-w-3xl lg:max-w-6xl xl:max-w-screen-2xl">
        <ul className="flex flex-col gap-5 lg:gap-8 mb-5 lg:mb-8">
          {paragraphs.map((p, index) => (
            <li key={index}>
              <p>{p}</p>
            </li>
          ))}
        </ul>
        <h2 className=" text-xl text-main mb-5 lg:mb-8 ">
          {outServices.title}
        </h2>
        <ul className="flex flex-col gap-5 lg:gap-8 mb-5 lg:mb-8">
          {outServices.paragraphs.map((p, index) => (
            <li key={index}>
              <p>{p}</p>
            </li>
          ))}
        </ul>
        <h2 className=" text-xl text-main mb-5 lg:mb-8 ">{inServices.title}</h2>
        <p className="mb-5 lg:mb-8">{inServices.paragraphs}</p>
      </div>
    </div>
  );
}
