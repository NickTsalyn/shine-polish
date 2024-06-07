import { SelectChangeEvent } from "@mui/material";
import BasicSelect from "../UI/Select";
import { useState } from "react";
import RadioButton from "../UI/RadioButton";
import Image from "next/image";

import img_stub from "../../../public/images/service-area/image-map-stub.png";

const areaOptions = [
	{ value: "Downtown", label: "Downtown" },
	{ value: "Midtown", label: "Midtown" },
	{ value: "Buckhead", label: "Buckhead" },
	{ value: "Decatur", label: "Decatur" },
	{ value: "Sandy Springs", label: "Sandy Springs" },
	{ value: "Alpharetta", label: "Alpharetta" },
	{ value: "Dunwoody", label: "Dunwoody" },
	{ value: "Smyrna", label: "Smyrna" },
	{ value: "Marietta", label: "Marietta" },
	{ value: "Roswell", label: "Roswell" },
	{ value: "Johns Creek", label: "Johns Creek" },
];

const bedroomOptions = [
	{ value: "1", label: "1 bedroom" },
	{ value: "2", label: "2 bedroom" },
	{ value: "3", label: "3 bedroom" },
	{ value: "4", label: "4 bedroom" },
	{ value: "5", label: "5 bedroom" },
	{ value: "6", label: "6 bedroom" },
	{ value: "7", label: "7 bedroom" },
	{ value: "8", label: "8 bedroom" },
	{ value: "9", label: "9 bedroom" },
];

const bathroomOptions = [
	{ value: "1", label: "1 bathroom" },
	{ value: "2", label: "2 bathroom" },
	{ value: "3", label: "3 bathroom" },
	{ value: "4", label: "4 bathroom" },
	{ value: "5", label: "5 bathroom" },
	{ value: "6", label: "6 bathroom" },
	{ value: "7", label: "7 bathroom" },
	{ value: "8", label: "8 bathroom" },
	{ value: "9", label: "9 bathroom" },
];

const frequencyOptions = [
	{ value: "One-time service", label: "One-time service" },
	{ value: "Every week", label: "Every week" },
	{ value: "Every 2 weeks", label: "Every 2 weeks" },
	{ value: "Every 4 weeks", label: "Every 4 weeks" },
];

const Step1 = () => {
	const [areas, setAreas] = useState<string>("");
	const [bedrooms, setBedrooms] = useState<string>("");
	const [bathrooms, setBathrooms] = useState<string>("");

	const handleChange = (event: SelectChangeEvent<string | number>) => {
		const { name, value } = event.target;
		if (name === "areas") {
			setAreas(value as string);
			// const selectItem = areaOptions.find((item) => item.value === value);
			// console.log(selectItem?.label)
		} else if (name === "bedrooms") {
			setBedrooms(value as string);
			console.log(bedrooms);
		} else if (name === "bathrooms") {
			setBathrooms(value as string);
			console.log(bathrooms);
		}
	};

	return (
		<div className="p-4 md:p-6 lg:p-9 flex flex-col gap-6 md:gap-[26px] lg:grid lg:grid-flow-col lg:grid-cols-2 lg:gap-[80px]">
			<div className='md:flex md:flex-row md:justify-between lg:flex-col lg:gap-[33px] xl:gap-[30px] lg:col-span-2 lg:row-span-2'>
				<div className="flex flex-col gap-4 md:gap-6">
					<h2 className=" text-2xl md:text-4xl font-medium">Choose area</h2>
					<BasicSelect name="areas" value={areas} items={areaOptions} onChange={handleChange} />
				</div>
				<div className="hidden md:block h-full ">
					<Image
						src={img_stub}
						className="md:w-[338px] md:h-[330px] lg:w-[553px] lg:h-[454px] xl:w-[780px] xl:h-[494px]"
						alt="map"
						width={376}
						layout="responsive"
					/>
				</div>
			</div>
			<div className="flex flex-col gap-4 md:gap-6 lg:col-span-1">
				<h2 className="text-2xl md:text-4xl font-medium">How many rooms?</h2>
				<div className="flex flex-col gap-3">
					<BasicSelect name="bedrooms" value={bedrooms} items={bedroomOptions} onChange={handleChange} />
					<BasicSelect name="bathrooms" value={bathrooms} items={bathroomOptions} onChange={handleChange} />
				</div>
			</div>
			<div className="flex flex-col gap-4 md:gap-6 lg:col-span-1 mt-auto">
				<h2 className="text-2xl md:text-4xl font-medium">How often?</h2>
				<p className="hidden md:block">Scheduling is flexible. Cancel or reschedule anytime.</p>
				<ul className="flex flex-wrap gap-5 lg:gap-6 lg:w-[562px] md:flex-nowrap md:justify-around">
					{frequencyOptions.map((option) => {
						return (
							<li key={option.value} className="flex justify-center items-center min-w-[132px] md:min-w-[160px] lg:min-w-[260px]">
								<RadioButton
									value={option.value}
									style=" py-[10px] px-[26px] md:py-[16px] md:px-[20px] h-full w-full"
								>
									<span className="inline-block lg:text-2xl">{option.label}</span>
								</RadioButton>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Step1;
