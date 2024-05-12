import Textarea from "./UI/Textarea";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Image from "next/legacy/image";

import TalkImg from "../../public/icons/Friends_sitting_by_the_window_and_talking.png";

export default function SectionJustAsk() {
  return (
    <section className="mb-[60px] md:mb-[80px] lg:mb-[100px] xl:mb-[120px] ">
      <div className="container  flex flex-col lg:flex-row">
        <div className="">
          <h3 className="h3 text-main text-center mb-5 xl:mb-[60px]">
            Not sure? Just ask!
          </h3>
          <div className="mb-5 lg:mb-10 w-[335px] h-[36px] md:w-[519px] md:h-14 lg:w-[714px] lg:h-14 xl:w-[890px] xl:h-[72px]">
            <Input style="form-input" type="email" placeholder="Email*" />
          </div>
          <div className="w-[336px] md:w-[727px] lg:w-[464px] xl:w-[630px] h-[102px] md:h-[180px] lg:h-[207px] xl:h-[310px] mb-5 lg:mb-10">
            <Textarea placeholder="Your question" />
          </div>
          <div className="flex justify-end lg:justify-start">
            <Button style="send" type="button">
              <span className="text-white text-5 md:text-6 lg:text-[32px] font-bold">
                Send
              </span>
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="w-[335px] h-[268px] md:w-[529px] md:h-[501px] lg:w-[747px] lg:h-[511px] xl:w-[906px] xl:h-[667px]">
            <Image
              src={TalkImg}
              alt="happy friends tolking about something when their house is being cleaned by tye cleaning company Shine and Polish "
              width={365}
              height={268}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
