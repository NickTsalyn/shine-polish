import Image from "next/legacy/image";
import { BATHROOM_SERVICES } from "@/global/bathroom";
import BasicBreadcrumbs from "./UI/Breadcrumbs";
import { Tooltip, TooltipProps } from "@mui/material";
import RoomIMG from "../../public/images/bathroom@2x.jpg";
import IconPlus from "../../public/icons/Icon_plus-min.png";

const icons = [
  { title: "Clean Floors", top: "90%", left: "23%" },
  { title: "Clean Toilet", top: "51%", left: "7%" },
  { title: "Clean Shower or Tub", top: "63%", left: "37%" },
  { title: "Empty Trash", top: "77%", left: "44%" },
  { title: "Clean Countertops and Sinks", top: "57%", left: "50%" },
  { title: "Declutter", top: "40%", left: "46%" },
  { title: "Clean Mirrors", top: "50%", left: "70%" },
  { title: "Clean and Disinfect High-Touch Areas", top: "80%", left: "71%" },
  { title: "Pre-Treat Surfaces", top: "76%", left: "11%" },
  { title: "Dust and Sweep", top: "24%", left: "32%" },
];

const CustomTooltip = (props: JSX.IntrinsicAttributes & TooltipProps) => (
  <Tooltip
    {...props}
    classes={{
      tooltip:
        " bg-[#E6BA95CC] text-white text-center text-xs md:text-sm lg:text-base rounded-xl w-20 md:w-28 lg:w-36 p-2",
    }}
  />
);

export default function BathroomServices() {
	const { title, paragraph, processes, frequencies, needs } = BATHROOM_SERVICES;
	return (
		<div className="body text-text">
			<h1 className=" h3 text-main mb-3 md:mb-[18px] lg:mb-7">{title}</h1>
      <BasicBreadcrumbs
        pageHref="cleaning-process"
        pageName="Cleaning Process"
        roomName="Bathroom"
      />
			<div className="mb-5 md:mb-10 lg:mb-[60px] relative">
				<Image
					src={RoomIMG}
					alt="photo of living room"
					width={278}
					height={159}
					layout="responsive"
					objectFit="cover"
					objectPosition="center"
				/>
        {icons.map((icon, index) => (
          <CustomTooltip key={index} title={icon.title} placement="right-end">
            <div
              className="absolute z-20  flex items-center justify-center size-5 md:size-9 lg:size-14"
              style={{ top: icon.top, left: icon.left }}
            >
              <Image src={IconPlus} alt="icon plus" />
            </div>
          </CustomTooltip>
        ))}
			</div>

			<ul className="flex flex-col gap-1.5 mb-3 md:mb-[18px] lg:mb-7">
				{paragraph.map((p, index) => (
					<li key={index}>
						<p className="indent-1.5">{p}</p>
					</li>
				))}
			</ul>

			<h2 className="text-main h4 mb-1 md:mb-2 lg:mb-4">{processes.title}</h2>
			<p className="mb-1">{processes.text}</p>
			<ol className="flex flex-col gap-1.5">
				{processes.items.map((item, index) => (
					<li key={index}>
						<h3 className="font-semibold mb-1">{item.title}</h3>
            <ol className="list-disc pl-9">{item.description.map((d, index) => (
              <li key={index}>
                <p className="indent-1.5">{d}</p>
              </li>
            ))}</ol>
						
					</li>
				))}
			</ol>
			<p className=" mt-3 mb-3 md:mb-[18px] lg:mb-7">{processes.summary}</p>

			<h2 className="text-main h4 mb-1 md:mb-2 lg:mb-4">{frequencies.title}</h2>
			<p className="mb-1">{frequencies.text}</p>
			<ul className="flex flex-col gap-1.5 mb-3 md:mb-[18px] lg:mb-7">
				{frequencies.items.map((item, index) => (
					<li key={index}>
						<h3 className="font-semibold text-main mb-1">{item.title}</h3>
						<ol className="list-disc pl-6">
							{item.description.map((d, index) => (
								<li key={index}>
									<p>{d}</p>
								</li>
							))}
						</ol>
					</li>
				))}
			</ul>

			<h2 className="text-main h4 mb-1 md:mb-2 lg:mb-4">{needs.title}</h2>
			<p className="mb-1">{needs.text}</p>
			<ul className="flex flex-col gap-1.5 mb-3 md:mb-[18px] lg:mb-7">
				{needs.items.map((item, index) => (
					<li key={index}>
						<h3 className="font-semibold mb-1">{item.title}</h3>
						<p className=" ml-4">{item.description}</p>
					</li>
				))}
			</ul>
			<p className="mb-3 md:mb-[18px] lg:mb-7 font-semibold">{needs.summary}</p>
		</div>
	);
}