import { APPARTMENT_SERVICES } from "@/global/appartmen-cleaning";
import BasicBreadcrumbs from "./UI/Breadcrumbs";

export default function AppartmenrServices() {
  const { title, paragraphs, benefits, services, deepCleaning, aboutUs } =
    APPARTMENT_SERVICES;
  return (
    <div className=" body text-text flex flex-col justify-center items-center gap-y-4 ">
      <h1 className=" subtitle-booking text-main max-w-64 text-center">
        {title}
      </h1>

      <BasicBreadcrumbs
        pageHref="appartment-services"
        roomName="Professional Apartment Cleaning Service"
      />

      <div></div>
    </div>
  );
}
