"use client";
import image1 from "../images/background/bathroom-4130000_1920.webp";
import image2 from "../images/background/kitchen-2565105_1920.webp";
import image3 from "../images/background/living-room-2583032_1920.webp";
import image4 from "../images/background/living-room-2605530_1920.webp";
import image5 from "../images/background/pexels-curtis-adams-11593489.webp";
import image6 from "../images/background/pexels-curtis-adams-15062084.webp";
import image7 from "../images/background/pexels-gustavo-fring-7489207.webp";
import image8 from "../images/background/pexels-gustavo-fring-3912353.webp";
import image9 from "../images/background/pexels-karolina-grabowska-4239109.webp";
import image10 from "../images/background/pexels-karolina-grabowska-4239113.webp";
import image11 from "../images/background/pexels-matilda-wormwood-4099467.webp";
import image12 from "../images/background/pexels-max-vakhtbovycn-6121088.webp";
import image13 from "../images/background/pexels-max-vakhtbovycn-6444979.webp";
import image14 from "../images/background/pexels-nathan-cowley-713297.webp";
import image15 from "../images/background/pexels-pixabay-271624.webp";
import image16 from "../images/background/pexels-pixabay-534151.webp";
import image17 from "../images/background/pexels-vitaly-gariev-20459085.webp";
import image18 from "../images/background/pexels-winding-knob-16932921.webp";
import image19 from "../images/background/stocksnap_ilpct4zz9k.webp";
import { useState, useEffect, useRef } from "react";

import Button from "./UI/Button";

export default function Hero() {
  const images = useRef([
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
  ]);

  const [backgroundImageUrl, setBackgroundImageUrl] = useState(
    images.current[0].src
  );

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.current.length;
      setBackgroundImageUrl(images.current[currentIndex].src);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
