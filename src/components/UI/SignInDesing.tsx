import Button from "./Button";
import Link from "next/link";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleIcon from "@mui/icons-material/Google";
import Image from "next/image";

export const SocialMediaSignIn = () => {
  return (
    <>
      {" "}
      <div
        className="rounded-full flex items-center justify-center w-[52px] h-[52px] lg:w-[64px] lg:h-[64px] border border-tertial"
        style={{
          backgroundImage:
            "linear-gradient(164deg, #006778 4.74%, #00BFDE 88.81%)",
        }}
      >
        <Button style="transparent-button" type="button">
          <Link href="/" />
          <span className="text-white w-[52px] h-[52px] text-center items-center  lg:w-[64px] lg:h-[64px]">
            <FacebookRoundedIcon className="w-[32px] h-[32px] lg:w-[56px] lg-h:[56px]" />
          </span>
        </Button>
      </div>
      <div
        className="rounded-full flex items-center justify-center w-[52px] h-[52px] lg:w-[64px] lg:h-[64px] border border-tertial"
        style={{
          backgroundImage:
            "linear-gradient(9deg, #00BFDE 5.7%, #008298 71.75%, #006778 83.33%)",
        }}
      >
        <Button style="transparent-button" type="button">
          <Link href="/" />
          <span className="text-white w-[32px] h-[32px] text-center items-center">
            <WhatsAppIcon className="w-[32px] h-[32px] lg:w-[56px] lg-h:[56px]" />
          </span>
        </Button>
      </div>
      <div
        className="rounded-full flex items-center justify-center w-[52px] h-[52px] lg:w-[64px] lg:h-[64px] border border-tertial"
        style={{
          backgroundImage:
            "linear-gradient(69deg, #00BFDE 8.52%, #006778 91.48%)",
        }}
      >
        <Button style="transparent-button" type="button">
          <Link href="/" />
          <span className="text-white w-[32px] h-[32px] text-center items-center">
            <GoogleIcon className="w-[32px] h-[32px] lg:w-[56px] lg-h:[56px]" />
          </span>
        </Button>
      </div>
    </>
  );
};

export const MobileScrinWaves = () => {
  return (
    <>
      <Image
        src="/icons/bgSignInForm/bgShine.png"
        alt="just color"
        width={324}
        height={251}
        className="z-0 rounded-b-[12px] md:hidden"
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
      ></Image>
      <Image
        src="/icons/bgSignInForm/bgDark.png"
        alt="just color"
        width={326}
        height={275}
        className="absolute z-1 bottom-0 left-0 rounded-b-[12px] md:hidden"
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
      ></Image>
    </>
  );
};

export const TabletScreenFirstWave = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="auto"
        height="auto"
        viewBox="0 0 380 178"
        fill="none"
        className="rounded-br-[50px]"
      >
        <path
          d="M118.912 138.444C163.869 114.288 192.981 78.3039 215.151 58.5261C237.321 38.7483 259.995 29.4649 309.374 43.9955C358.753 58.5261 391 0 391 0L382.938 178H0C0 178 77.1534 160.882 118.912 138.444Z"
          fill="#00BFDE"
          fill-opacity="0.32"
        />
      </svg>
    </>
  );
};

export const TabletScreenSecondWave = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="auto"
        height="auto"
        viewBox="0 0 380 181"
        fill="none"
        className="rounded-br-[50px] lg:hidden"
      >
        <path
          d="M0 0C0 0 108 64.5 171 120.5C234 176.5 391 181 391 181H0V0Z"
          fill="white"
          fill-opacity="0.32"
        />
      </svg>
    </>
  );
};

export const DesctopScreenFirstWave = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="480"
        height="250"
        viewBox="0 0 479 250"
        fill="none"
        className="rounded-br-[50px]"
      >
        <path
          d="M0 0C0 0 135.621 89.0884 214.734 166.436C293.847 243.785 491 250 491 250H0V0Z"
          fill="white"
          fill-opacity="0.32"
        />
      </svg>
    </>
  );
};

export const DesctopScreenSecondWave = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="480"
        height="204"
        viewBox="0 0 476 204"
        fill="none"
        className="rounded-br-[50px]"
      >
        <path
          d="M148.412 158.667C204.522 130.982 240.856 89.7415 268.526 67.0748C296.196 44.4082 324.495 33.7687 386.124 50.4218C447.753 67.0748 488 0 488 0L477.938 204H0C0 204 96.2938 184.382 148.412 158.667Z"
          fill="#00BFDE"
          fill-opacity="0.32"
        />
      </svg>
    </>
  );
};
