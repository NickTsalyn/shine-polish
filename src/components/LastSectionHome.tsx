import Image from "next/legacy/image";

import bgPhoto from "../images/LastSectionPhoto*2x.jpg";
import Button from "./UI/Button";

export default function LastSectionHome() {
  return (
    <div className="mx-0 my-auto relative ">
      <div className="z-0">
        <Image
          src={bgPhoto}
          alt="photo of happy family"
          width={375}
          height={250}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="z-1 absolute top-0 left-0 right-0 h-[258px] md:h-[592px] lg:h-[740px] lg:min-w-[1440px] xl:h-[1040px] xl:min-w-[1920px]  bg-background-img-grad"></div>
      <div className="pb-5 px-5 pt-5 md:pt-8 lg:pt-16 xl:pt-18 md:py-10 lg:pl-[240px] xl:pl-[282px] absolute inset-0 flex flex-col z-10 top-1 ">
        <h2 className="text-white h2 text-center drop-shadow-md top-0">
          Enjoy the time spent with your <br />
          loved ones...
        </h2>

        <div className="flex  absolute inset-x-0 bottom-10 items-center z-10 justify-between px-5 md:px-7 	">
          <Button style="home-book-now" type="button">
            <span className="text-secondary text-5 md:text-8 lg:text-5xl xl:text-6xl drop-shadow-md">
              Book Now
            </span>
          </Button>
          <span className="h2 text-white"> ...in a clean house</span>
        </div>
      </div>
    </div>
  );
}
