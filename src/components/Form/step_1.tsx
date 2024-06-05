import { SelectChangeEvent } from "@mui/material";
import BasicSelect from "../UI/Select";
import { useState } from "react";
import RadioButton from "../UI/RadioButton";

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
		<div className="p-4 md:p-6 lg:p-9 flex flex-col gap-6 md:gap-[26px]">
			<div className="flex flex-col gap-4">
				<h2 className=" mb-2 h2 md:mb-0 lg:mb-[14px]">Choose area</h2>
				<BasicSelect name="areas" value={areas} items={areaOptions} onChange={handleChange} />
			</div>
			<div className="flex flex-col gap-4">
				<h2 className=" mb-2 h2 md:mb-0 lg:mb-[14px]">How many rooms?</h2>
				<div className="flex flex-col gap-3">
					<BasicSelect name="bedrooms" value={bedrooms} items={bedroomOptions} onChange={handleChange} />
					<BasicSelect name="bathrooms" value={bathrooms} items={bathroomOptions} onChange={handleChange} />
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<h2 className=" mb-2 h2 md:mb-0 lg:mb-[14px]">How often?</h2>
				<ul className="flex flex-wrap gap-5">
					{frequencyOptions.map((option) => {
						return (
							<li key={option.value} className="flex justify-center items mb-5" >
								<RadioButton value={option.value} style="flex justify-center items-center w-[132px] py-[40px]">
									<span className='inline-block'>{option.label}</span>
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
