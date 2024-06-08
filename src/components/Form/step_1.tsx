import { SelectChangeEvent } from "@mui/material";
import BasicSelect from "../UI/Select";
import { useState } from "react";
import RadioButton from "../UI/RadioButton";
import Image from "next/image";

import img_stub from "../../../public/images/service-area/image-map-stub.png";
import { areaOptions, bathroomOptions, bedroomOptions, frequencyOptions } from "@/data/booking-form/step_1";
import useFormStorage from "@/hooks/storageHandler";


const Step1 = () => {
  const { form, handleInputChange } = useFormStorage({
    areas: "",
    bedrooms: "",
    bathrooms: "",
    frequency: "",
  });
// 	const [areas, setAreas] = useState<string>("");
// 	const [bedrooms, setBedrooms] = useState<string>("");
// 	const [bathrooms, setBathrooms] = useState<string>("");
// 	const [frequency, setFrequency] = useState<string>("");
	

	// const handleChange = (event: SelectChangeEvent<string | number>) => {
	// 	const { name, value } = event.target;
	// 	if (name === "areas") {
	// 		setAreas(value as string);
	// 	} else if (name === "bedrooms") {
	// 		setBedrooms(value as string);
	// 	} else if (name === "bathrooms") {
	// 		setBathrooms(value as string);
	// 	}
	// };

	// const handleFrequencyChange = (value: string) => {
  //       setFrequency(value);
  //   };
  const handleFrequencyChange = (value: string) => {
    handleInputChange({ target: { name: "frequency", value } } as SelectChangeEvent<string>);
  };


	return (
		<div className="p-4 md:p-6 lg:p-9 flex flex-col gap-6 md:gap-[26px] lg:grid lg:grid-flow-col lg:grid-cols-2 lg:gap-[80px]">
			<div className="md:flex md:flex-row md:justify-between lg:flex-col lg:gap-[33px] xl:gap-[30px] lg:col-span-2 lg:row-span-2">
				<div className="flex flex-col gap-4 md:gap-6">
					<h2 className=" text-2xl md:text-4xl font-medium">Choose area</h2>
					<BasicSelect name="areas" value={form.areas as string} items={areaOptions} onChange={handleInputChange} />
				</div>
				<div className="hidden md:block h-full ">
					<Image
						src={img_stub}
						className="md:w-[338px] md:h-[330px] lg:w-[553px] lg:min-h-[454px] xl:w-[780px] xl:min-h-[494px]"
						alt="map"
						width={376}
						layout="responsive"
					/>
				</div>
			</div>
			<div className="flex flex-col gap-4 md:gap-6 lg:col-span-1">
				<h2 className="text-2xl md:text-4xl font-medium">How many rooms?</h2>
				<div className="flex flex-col gap-3 md:gap-6">
					<BasicSelect name="bedrooms" value={form.bedrooms as string} items={bedroomOptions} onChange={handleInputChange} />
					<BasicSelect name="bathrooms" value={form.bathrooms as string} items={bathroomOptions} onChange={handleInputChange} />
				</div>
			</div>
			<div className="flex flex-col gap-4 md:gap-6 lg:col-span-1 mt-auto">
				<h2 className="text-2xl md:text-4xl font-medium">How often?</h2>
				<p className="hidden md:block text-base lg:text-[26px] lg:font-medium text-bookingSubText">
					Scheduling is flexible. Cancel or reschedule anytime.
				</p>
				<ul className="flex flex-wrap gap-5 lg:gap-6 lg:w-[562px]  md:justify-around md:flex-nowrap lg:flex-wrap">
					{frequencyOptions.map(({value, label}) => {
						return (
							<li
								key={value}
								className="flex justify-center items-center w-[132px] md:min-w-[160px] lg:min-w-[260px]"
							>
								<RadioButton
									value={value}
									style=" py-[10px] px-[20px] md:py-[8px] md:px-[10px] lg:py-[20px] h-full w-full"
									isActive={value === form.frequency}
                                    onClick={() => handleFrequencyChange(value)}
								>
									<span className="inline-block lg:text-2xl">{label}</span>
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