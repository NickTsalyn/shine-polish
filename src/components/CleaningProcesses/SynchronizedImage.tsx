import { useState } from "react";
import Image from "next/image";
import IconPlus from "../../../public/icons/Icon_plus-min.png";
import Loading from "@/app/loading";
import * as icons from "@/content/cleaning-process/plus-icon-positioning";
import { CustomTooltip } from "../UI/Tooltip";

interface Props {
  src: string;
  roomType: string;
}

export const SynchronizedImage = ({ src, roomType }: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handlerLoaded = () => {
    setImageLoaded(true);
  };

  const getIconPosition = (roomType: string) => {
    switch (roomType) {
      case "living room":
        return icons.livingRoomIcons;
      case "bedroom":
        return icons.bedroomIcons;
      case "kitchen":
        return icons.kitchenIcons;
      case "bathroom":
        return icons.bathroomIcons;
      case "diningroom":
        return icons.diningroomIcons;
      default:
        return null;
    }
  };

  const roomIcons = getIconPosition(roomType);

  return (
    <div className="relative rounded-xl bg-slate-100 z-[-1]">
      {!imageLoaded && (
        <div className="flex items-center justify-center w-full h-full absolute top-0 left-0 py-[28%]">
          <Loading />
        </div>
      )}

      <Image
        src={src}
        alt="Photo of the room"
        width={3114}
        height={1792}
        onLoad={handlerLoaded}
        style={{ display: imageLoaded ? "block" : "hidden" }}
      />
      {imageLoaded && (
        <>
          {roomIcons?.map((icon, index) => (
            <CustomTooltip key={index} title={icon.title} placement="right-end">
              <div
                className="absolute z-20 flex items-center justify-center size-5 md:size-9 lg:size-14"
                style={{ top: icon.top, left: icon.left }}
              >
                <Image src={IconPlus} alt="icon plus" />
              </div>
            </CustomTooltip>
          ))}
        </>
      )}
    </div>
  );
};
