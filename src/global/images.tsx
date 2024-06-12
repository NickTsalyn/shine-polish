import Image from "next/image";

export const KitchenImage: React.FC = () => {
  return (
    <picture>
      <source
        srcSet="/images/kitchen/pexels-curtis-adams.webp, /images/kitchen/pexels-curtis-adams@2x.webp"
        sizes="(max-width:378px) 279px, (width: 768px) 720px, (width: 1440px) 1076px; (width:1920px) 1556px;"
        type="image/webp"
      />
      <source
        srcSet="/images/kitchen/pexels-curtis-adams.jpg, /images/kitchen/pexels-curtis-adams@2x.jpg.jpg"
        sizes="(max-width:378px) 279px, (width: 768px) 720px, (width: 1440px) 1076px; (width:1920px) 1556px;"
        type="image/jpg"
      />
      <Image
        src="/public/images/pexels-curtis-adams@2x.jpg"
        alt="Kitchen"
        layout="responsive"
        width={1556}
        height={896}
        objectFit="cover"
        objectPosition="center"
        className="rounted-xl"
      />
    </picture>
  );
};

export const RoomImage = () => {
  return (
    <picture>
      <source
        srcSet="/images/living-room/living-room.webp 1x, /images/living-room/living-room@2x.webp 2x"
        type="image/webp"
        sizes="(max-width: 375px) 278px, (max-width: 768px) 716px, (max-width: 1440px) 1076px"
      />
      <source
        srcSet="/images/living-room/living-room1.jpg 1x, /images/living-room/living-room1@2x.jpg 2x"
        type="image/jpeg"
        sizes="(max-width: 375px) 278px, (max-width: 768px) 716px, (max-width: 1440px) 1076px"
      />
      <img
        src="/images/living-room/living-room1.jpg"
        alt="photo of living room"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </picture>
  );
};

export const BathroomImage = () => {
  return (
    <>
      <Image
        src="/images/bathroom@2x.jpg"
        alt="photo of living room"
        width={278}
        height={159}
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
      />
    </>
  );
};

export const BedroomImage = () => {
  return (
    <>
      <Image
        src="/images/bedroom/bedroom@2x.webp"
        alt="photo of bedroom"
        width={280}
        height={160}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </>
  );
};

export const DiningroomImage = () => {
  return (
    <>
      <Image
        src="/images/diningroom@2x.jpg"
        alt="photo of dining room"
        width={278}
        height={159}
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
      />
    </>
  );
};

export const BackgroundImg = () => {
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

export const FriendsIcon: React.FC = () => {
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
export const FooterLogo = () => {
  return (
    <>
      <Image
        src="/icons/logo/logo_dark_bg.svg"
        height={28}
        width={30}
        alt="logo"
        layout="responsive"
      ></Image>
    </>
  );
};

// export const FooterImg = () => {
//   return (
//     <div className="">
//       <Image
//         src="/images/atlantaSkylineSecondarySmall.png"
//         height={100}
//         width={1440}
//         layout="responsive"
//         objectFit="cover"
//         objectPosition="center"
//         alt="Footer Image"
//       ></Image>
//     </div>
//   );
// };

export const FooterImg = () => {
  return (
    <div className="z-[-1] absolute  bottom-0  opacity-60 w-full h-full ">
      <Image
        src="/images/atlantaSkylineSecondarySmall.png"
        // height={400}
        // width={1156}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="Footer Image"
      ></Image>
    </div>
  );
};

export const ChecklistImg = () => {
  return (
    <div className="z-[-1] absolute  bottom-0   w-full h-full ">
      <Image
        src="/images/CheckList-Icon.png"
        width={450}
        height={500}
        alt="Tell About Us"
        objectFit="cover"
        layout="responsive"
      ></Image>
    </div>
  );
};
