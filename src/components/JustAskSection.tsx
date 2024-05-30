import Textarea from "./UI/Textarea";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { FriendsIcon } from "@/global/images";

const SectionJustAsk: React.FC = () => {
  return (
    <section
      id="just-ask"
      // className="container"
      className="mb-[60px] md:mb-20 lg:mb-[120px] xl:mb-40 "
    >
      <div className=" container relative flex flex-col lg:flex-row mx-auto my-0 lg:gap-12 xl:gap-10 items-center justify-center">
        <div className="mb-3">
          <h3 className="h3 text-main text-center lg:text-left mb-10 xl:mb-[60px]">
            Not sure? Just ask!
          </h3>
          <div className="mb-5 lg:mb-10 w-auto md:w-[512px] h-[36px]  md:h-[52px] lg:w-[600px] lg:h-[52px] xl:w-[890px] xl:h-[60px] xl:placeholder:text-[16px]">
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
        <div className="flex justify-self-center lg:absolute top-0 lg:right-7 xl:absolute xl:right-0 w-[335px] h-[268px] md:w-[529px] md:h-[501px] lg:w-[747px] lg:h-[511px] xl:w-[906px] xl:h-[667px]">
          <FriendsIcon />
        </div>
      </div>
    </section>
  );
};

export default SectionJustAsk;
