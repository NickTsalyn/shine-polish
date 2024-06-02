import { useState, useContext } from "react";
import BasicSelect from "../UI/Select";
import { SelectChangeEvent } from "@mui/material";
import Textarea from "../UI/Textarea";
import { FormContext } from "../FormContext";

const homeAccess = [
	{ value: "I will leave a key", label: "I will leave a key" },
	{ value: "Someone will be home", label: "Someone will be home" },
	{ value: "Go to apartment office for key", label: "Go to apartment office for key" },
	{ value: "Other", label: "Other" },
];

const aboutUs = [
	{ value: "From friends", label: "From friends" },
	{ value: "Returning customer", label: "Returning customer" },
	{ value: "Google", label: "Google" },
	{ value: "Instagram", label: "Instagram" },
	{ value: "Facebook", label: "Facebook" },
	{ value: "Other", label: "Other" },
];

const Step3 = () => {
	const { form, setForm } = useContext(FormContext);

	const handleChange = (event: SelectChangeEvent<string | number>) => {
		const { name, value } = event.target;
		// if (name === "homeAccess") {
		// 	setHomeAccess(value as string);
		// 	const selectedItem = homeAccess.find((item) => item.value === value); // just to make sure that the value is correct
		// 	console.log(selectedItem?.label);
		// } else if (name === "aboutUs") {
		// 	setAbout(value as string);
		// 	const selectedItem = aboutUs.find((item) => item.value === value); // just to make sure that the value is correct
		// 	console.log(selectedItem?.label);
		// }
		setForm({ ...form, [name]: value });
		// let selectedItem;
		// if (name === "homeAccess") {
		// 	selectedItem = homeAccess.find((item) => item.value === value);
		// } else if (name === "aboutUs") {
		// 	selectedItem = aboutUs.find((item) => item.value === value);
		// }

		// if (selectedItem) {
		//   console.log( selectedItem.label);
		// }
	};

	const handleAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
		setForm({...form, [name]: value});
		// console.log(specialInstructions)
	};

	return (
		<div className="p-4 md:p-6 lg:p-9 flex flex-col gap-6 md:gap-[100px]">
			<div className=" flex flex-col gap-4 md:gap-8 lg:gap-10 ">
				<h2 className=" mb-2 h2 md:mb-0 lg:mb-[14px]">Additional information</h2>
				<BasicSelect
					name="homeAccess"
					items={homeAccess}
					value={form.homeAccess}
					onChange={handleChange}
					placeholder="How will access your home?* "
				/>
				<BasicSelect
					name="aboutUs"
					items={aboutUs}
					value={form.aboutUs}
					onChange={handleChange}
					placeholder="How did you hear about us?* "
				/>
			</div>
			<div>
				<h2 className=" mb-6 h2 md:mb-8 lg:mb-10">
					Anything else we should know to provide the best cleaning possible
				</h2>
				<div className=' h-[124px] md:h-[220px] lg:h-[250px]'>
					{" "}
					<Textarea
						placeholder="Special Instructions*"
						value={form.specialInstructions}
						name="specialInstructions"
						onChange={handleAreaChange}
					/>
				</div>
			</div>
		</div>
	);
};
export default Step3;
