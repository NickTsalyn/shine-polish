"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import localFont from 'next/font/local';
const kaufmann = localFont({src: '../../public/fonts/kaufmann-bt.ttf'})

import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./SwiperStyles.css";

// import required modules
import { FreeMode } from "swiper/modules";

const reviews = [
  {
    review:
      "Клінінгова компанія 'Чисто та охайно' вражає своєю професійністю та якістю послуг. Я задоволений результатом їхньої роботи.",
    author: "Олексій Петренко",
  },
  {
    review:
      "Професіоналізм та увага до деталей - ось основні якості, які роблять компанію 'Чисто та охайно' винятковою. Я рекомендую їх з впевненістю.",
    author: "Тетяна Іванова",
  },
  {
    review:
      "Команда 'Чисто та охайно' завжди виконує свою роботу на високому рівні. Їхня праця надає нам велике спокої та комфорту.",
    author: "Максим Коваленко",
  },
  {
    review:
      "Ми завжди можемо розраховувати на професіоналізм та якість послуг від компанії 'Чисто та охайно'. Вони зробили наш будинок надзвичайно чистим та охайним.",
    author: "Ірина Степанова",
  },
  {
    review:
      "Компанія 'Чисто та охайно' вразила нас своїм підходом та результатом. Я вдячний їм за їхню роботу та рекомендую їх всім своїм друзям.",
    author: "Андрій Мельник",
  },
  {
    review:
      "За кілька років співпраці з компанією 'Чисто та охайно' ми ніколи не були розчаровані. Вони завжди надають відмінні послуги.",
    author: "Олена Кравченко",
  },
  {
    review:
      "Команда 'Чисто та охайно' - це справжні професіонали своєї справи. Їхній рівень обслуговування завжди вище наших очікувань.",
    author: "Сергій Попов",
  },
];

export const Reviews: React.FC = () => {
  return (
    <div className="container mx-auto sm:mb-[60px] md:mb-[80px] lg:mb-[120px] xl:mb-[160px]">
      <h2 className="h2  text-center mb-[23px] text-main sm:text-[28px] md:text-[48px] lg:text-[64px] xl:text-[64px] sm:leading-34 md:leading-58 lg:leading-76 xl:leading-76 ">
        Reviews
      </h2>
      <div className="flex sm:gap-[53px] md:gap-[48px] lg:gap-20 xl:gap-20">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper  "
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              className="shadow-review-shadow border border-solid border-1  border-[#E6BA9540] sm:px-[12px] md:px-[28px] lg:px-5 xl:px-5 sm:py-[16px] md:py-[32px] lg:py-10 xl:py-10 relative"
              key={index}
            >
              <div>
                <p className={`${kaufmann.className}    text-center sm:text-[16px] md:text-[16px] lg:text-[24px] xl:text-[24px]  sm:leading-[19px] md:leading-[19px] lg:leading-[28px] xl:leading-[28px]  sm:mb-[9px] md:mb-[32px] lg:mb-[50px] xl:mb-[50px] `}>
                  {review.review}
                </p>
                <p className={`${kaufmann.className}  sm:text-[16px] md:text-[16px] lg:text-[24px] xl:text-[24px] sm:leading-[19px] md:leading-[19px] lg:leading-[28px] xl:leading-[28px]  text-right max-h-[29px] absolute sm:bottom-[10px] md:bottom-[28px] lg:bottom-10 xl:bottom-10 sm:right-[12px] md:right-[28px] lg:right-5 xl:right-5`}>
                  {review.author}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
