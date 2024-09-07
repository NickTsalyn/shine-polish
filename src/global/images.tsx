import Image from "next/image";

export const BackgroundImg = () => {
  return (
    <Image
      src="/images/last_section_photomin.jpg"
      alt="photo of happy family in the clean house"
      sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1440px, 1920px"
      width={1440}
      height={738}
    />
  );
};

export const FriendsIcon = () => {
  return (
    <>
      <Image
        src="/images/friends_sitting_by_the_window_and_talking-min.png"
        alt="happy friends tolking about something when their house is being cleaned by tye cleaning company Shine and Polish "
        width={900}
        height={900}
        sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
      />
    </>
  );
};
export const FooterLogo = () => {
  return (
    <>
      <Image src="/icons/logo/logo_dark_bg.svg" height={56} width={60} alt="logo"></Image>
    </>
  );
};

export const FooterImg = () => {
  return (
    <div className="relative -z-10">
      <Image src="/images/atlantaSkylineSecondarySmall.png" height={400} width={1920} alt="Footer Image"></Image>
    </div>
  );
};

export const CrossroadImage = () => {
  return (
    <>
      <Image src="/images/crossroad.png" alt="picture of road and buildings" width={400} height={300} />
    </>
  );
};

export const DateTimeImage = () => {
  return (
    <>
      <Image
        src="/images/planning-with-days-marked-on-calendar.png"
        alt="picture calendar and clock"
        width={400}
        height={300}
      />
    </>
  );
};

export const DateIcon = () => {
  return (
    <>
      <Image src="/icons/date.svg" alt="date icon" width={48} height={48} />
    </>
  );
};

export const TimeIcon = () => {
  return (
    <>
      <Image src="/icons/time.svg" alt="time icon" width={48} height={48} />
    </>
  );
};

export const ChecklistImg = () => {
  return (
    <Image
      className=" object-cover inset-0 "
      src="/images/checklist_icon.png"
      alt="Tell about us"
      objectFit="cover"
      layout="fill"
    />
  );
};

export const DiscontImg = () => {
  return <Image src="/images/girl_cleaning_mirror.png" alt="Discount" width={600} height={180} />;
};

export const BannerImg = () => {
  return (
    <Image
      src="/images/three_girlfriends_drink_tea.png"
      className="md:w-[394px] md:h-[236px]"
      alt="Three girlfriends drink tea at home and talk"
      width={700}
      height={400}
    />
  );
};
