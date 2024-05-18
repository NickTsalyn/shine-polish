import Image from "next/image";
import Button from "./UI/Button";

const BackgroundImg = () => {
  return (
    <picture>
      <source
        srcSet="/images/last_section_photo@2x.webp 375w, /images/last_section_photo@2x.webp 768w, /images/last_section_photo@2x.webp 1440w, "
        sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1440px, 1920px"
        type="image/webp"
      />
      <source
        srcSet="/images/last_section_photomin.jpg 480w, /images/last_section_photomin.jpg 768w, /images/last_section_photomin.jpg 1440w"
        sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1440px, 1920px"
        type="image/jpeg"
      />
      <Image
        src="/images/last_section_photomin.jpg"
        alt="photo of happy family in the clean house"
        layout="responsive"
        width={1440}
        height={738}
        objectFit="cover"
        objectPosition="center"
      />
    </picture>
  );
};

export default function LastSectionHome() {
  return (
    <section>
      <div className="mx-0 my-auto relative ">
        <div className="z-0">
          <BackgroundImg />
        </div>
        <div className="z-1 absolute top-0 left-0 right-0 h-[258px] md:h-[592px] lg:h-[740px] lg:min-w-[1240px] xl:h-[1040px] xl:min-w-[1680px]  bg-background-img-grad"></div>
        <div className="pb-5 px-5 pt-5 lg:pr-[40px] xl:pr-[80px] md:pt-8 lg:pt-16 xl:pt-18 md:py-10 lg:pl-[40px] xl:pl-[80px] absolute inset-0 flex flex-col z-10 top-1 ">
          <h2 className="text-white h2 text-center drop-shadow-md top-0">
            Enjoy the time spent with your <br />
            loved ones...
          </h2>

          <div className="flex  absolute inset-x-0 bottom-10 items-center z-10 justify-between  px-5 lg:pr-[40px] xl:pr-[80px] lg:pl-[40px] xl:pl-[80px]">
            <Button style="home-book-now" type="button">
              <span className="text-secondary text-5 font-bold md:text-[48px] lg:text-5xl xl:text-6xl drop-shadow-md">
                Book Now
              </span>
            </Button>
            <span className="h2 text-white"> ...in a clean house</span>
          </div>
        </div>
      </div>
    </section>
  );
}
