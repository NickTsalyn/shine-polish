"use client";
import Image from "next/image";
import img_stub from "../../public/images/service-area/image-map-stub.png";
import img_phone from "../../public/images/service-area/phone_map_service.png";
import { useQuery } from "@tanstack/react-query";
import { Options } from "@/types/interfaces";
import Loading from "@/app/loading";
import { getOptions } from "@/api";

type Props = {};

const ServiceAreas = (props: Props) => {

  const { data, error, isLoading } = useQuery<{
    areaOptions: Options[];
  }>({
    queryKey: ["getOptions"],
    queryFn: getOptions,
  });
  const areas =
    data?.areaOptions.map((area: Options) => {
      return {
        value: area.name,
        label: area.name,
      };
    }) || [];

    if (isLoading) {
      return <Loading/>;
    }
  
    if (error) {
      return <p>Error: {(error as Error).message}</p>;
    }

  return (
    <section
      id="service-areas"
      className="mb-[60px] md:mb-20 lg:mb-[120px] xl:mb-40"
    >
      <div className="container mx-auto my-0 flex flex-col lg:flex-row lg:gap-12 xl:gap-10 items-center justify-center">
        <div className=" mb-10 md:mb-14 lg:mb-0">
          <h2 className="h3 text-main text-center mb-8 md:mb-12 lg:mb-8">
            Service Areas
          </h2>

     <div className="flex gap-16 md:gap-20 xl:gap-24 items-center justify-center">
      <Image
       src={img_phone}
       className="lg:w-[200px] xl:w-[232px]"
       alt="phone with map"
       width={122}
      />

            <ul className="list-disc sm:grid md:grid-cols-2 md:gap-9 lg:grid-cols-1 lg:gap-0 xl:grid-cols-1 xl:gap-0 list-text text-text ">
              {/* Перша колонка */}
              <div className="sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
                {areas.slice(0, 5).map((area) => (
                  <li key={area.label}>{area.label}</li>
                ))}
              </div>

              {/* Друга колонка */}
              <div className="sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
                {areas.slice(5, 10).map((area) => (
                  <li key={area.label}>{area.label}</li>
                ))}
              </div>
            </ul>
          </div>
        </div>

    <Image
     src={img_stub}
     className="md:w-[726px] lg:w-[626px] lg:h-[500px] xl:w-[926px] xl:h-[540px]"
     alt="map"
     width={376}
    />
   </div>
  </section>
 );
};

export default ServiceAreas;
