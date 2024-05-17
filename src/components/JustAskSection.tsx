import Textarea from "./UI/Textarea";
import Input from "./UI/Input";
import Button from "./UI/Button";

import Image from "next/image";

const FriendsIcon = () => {
  return (
    <picture>
      <source
        srcSet="/images/friends_sitting_by_the_window_and_talking.webp 375w, /images/friends_sitting_by_the_window_and_talking.webp 768w, /images/friends_sitting_by_the_window_and_talking.webp 1440w, "
        sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
        type="image/webp"
      />
      <source
        srcSet="/images/friends_sitting_by_the_window_and_talking-min.png 480w, /images/friends_sitting_by_the_window_and_talking-min.png 768w, /images/friends_sitting_by_the_window_and_talking-min.png 1200w"
        sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
        type="image/jpeg"
      />
      <Image
        src="/images/friends_sitting_by_the_window_and_talking-min.png"
        alt="happy friends tolking about something when their house is being cleaned by tye cleaning company Shine and Polish "
        layout="responsive"
        width={667}
        height={900}
        objectFit="cover"
        objectPosition="center"
      />
    </picture>
  );
};

export default function SectionJustAsk() {
  return (
    <section className="pb-5 px-5 pt-5 lg:pr-[40px] xl:pr-[80px] md:pt-8 lg:pt-16 xl:pt-18 md:py-10 lg:pl-[40px] xl:pl-[60px] mb-[60px] md:mb-[80px] lg:mb-[120px] xl:mb-[160px] ">
      <div className="relative flex flex-col lg:flex-row">
        <div className="">
          <h3 className="h3 text-main text-center lg:text-left mb-10 xl:mb-[60px]">
            Not sure? Just ask!
          </h3>
          <div className="mb-5 lg:mb-10 w-auto md:w-[520px] h-[36px]  md:h-[52px] lg:w-[600px] lg:h-[52px] xl:w-[890px] xl:h-[60px] xl:placeholder:text-[16px]">
            <Input style="form-input" type="email" placeholder="Email*" />
          </div>
          <div className="w-auto lg:w-[400px] xl:w-[630px] h-[102px] md:h-[180px] lg:h-[240px] xl:h-[324px] mb-5 lg:mb-10">
            <Textarea placeholder="Your question" />
          </div>
          <div className="flex justify-end lg:justify-start">
            <Button style="send" type="button">
              <span className="text-white text-5 md:text-6 lg:text-[32px] font-bold hover:text-accent">
                Send
              </span>
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center lg:absolute top-0 lg:right-7 xl:absolute xl:right-0">
          <div className="w-[335px] h-[268px] md:w-[529px] md:h-[501px] lg:w-[747px] lg:h-[511px] xl:w-[906px] xl:h-[667px]">
            <FriendsIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
