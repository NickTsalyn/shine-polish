"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import localFont from "next/font/local";
const kaufmann = localFont({ src: "../../../public/fonts/kaufmann-bt.ttf" });

import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode } from "swiper/modules";
import { reviews } from "@/content/reviews";

export const Reviews: React.FC = () => {
  return (
    <section className="mx-auto md:mb-[20px] lg:mb-[60px] xl:mb-[100px]">
      <div className="container mx-auto">
        <h2
          className={`h2 text-center mb-[23px] text-main sm:text-[28px] md:text-[48px] lg:text-[64px] xl:text-[64px] sm:leading-34 md:leading-58 lg:leading-76 xl:leading-76 `}
        >
          Reviews
        </h2>
        <div className="flex">
          <Swiper
            slidesPerView={3}
            spaceBetween={53}
            freeMode={true}
            modules={[FreeMode]}
            className={`mySwiper !pb-[60px]`}
            breakpoints={{
              768: {
                spaceBetween: 48,
                slidesPerView: 2.5,
              },
              1440: {
                spaceBetween: 80,
                slidesPerView: 5,
              },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide
                className={`min-w-[220px] md:min-w-[296px] lg:min-w-[440px] md:max-w-[296px] max-h-[168px] md:min-h-[214px] lg:min-h-[300px] shadow-review-shadow border border-solid border-1  border-[#E6BA9540] px-[12px] md:px-[28px] lg:px-5 xl:px-5 py-[16px] md:py-[32px] lg:py-10 xl:py-10 relative rounded-xl `}
                key={index}
              >
                <div className={kaufmann.className}>
                  <p
                    className={`text-center sm:text-[16px] md:text-[16px] lg:text-[24px] xl:text-[24px]  sm:leading-[19px] md:leading-[19px] lg:leading-[28px] xl:leading-[28px]  sm:mb-[9px] md:mb-[32px] lg:mb-[50px] xl:mb-[50px] `}
                  >
                    <span className="text-[16px] leading-[19px] md:text-[40px] lg:leading-[46px] align-bottom">
                      {" "}
                      {"❝"}
                    </span>{" "}
                    {review.review}
                    {"❞"}
                  </p>
                  <p
                    className={`text-[16px] lg:text-[24px] leading-[19px] lg:leading-[29px] text-right max-h-[29px] absolute bottom-[10px] md:bottom-[28px] lg:bottom-10 xl:bottom-10 right-[12px] md:right-[28px] lg:right-5 xl:right-5`}
                  >
                    {review.author}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
