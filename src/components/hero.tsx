import mobileImage from "../images/xl1.webp";

import Button from "./UI/Button";

export default function Hero() {
  const backgroundImageUrl = mobileImage.src;

  return (
    <>
      <section
        className="p-5 lg:p-10 xl:p-16 relative bg-cover bg-center bg-no-repeat mb-[60px] md:mb-[80px] lg:mb-[120px] xl:mb-[120px]"
        style={{
          backgroundImage: `linear-gradient(185deg, rgba(10, 10, 10, 0.39) 2.66%, rgba(120, 120, 120, 0.00) 81.3%), url(${backgroundImageUrl})`,
        }}
      >
        <div>
          <h1 className=" h1 text-white text-shadow max-w-[282px] md:max-w-[730px] lg:max-w-[1124px] xl:max-w-[1348px] text-xl md:text-[52px] lg:text-[80px] xl:text-8xl md:leading-normal text-center font-medium mb-[138px] md:mb-[248px] lg:mb-[390px] xl:mb-[600px] mr-auto ml-auto">
            Spend time on your loved ones, not on cleaning
          </h1>

          <div className=" flex justify-between">
            <Button type="button" style="home-contact-us">
              <span className=" text-secondary text-xl md:text-4xl lg:text-[64px] lg:leading-none font-bold ">
                Contact Us
              </span>
            </Button>
            <Button type="button" style="home-book-now">
              <span className=" text-secondary text-xl md:text-4xl lg:text-[64px] lg:leading-none font-bold ">
                Book Now
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
