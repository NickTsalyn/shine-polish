import useFormStorage from "@/hooks/formStorage";
import { getPrice } from "../../../formula";
import { useContext, useEffect, useState } from "react";
// import { homeAccess } from "@/data/booking-form/step_3";
// import { aboutUs } from "@/data/booking-form/step_3";
import { area } from "../../../formula";
import { FormContext } from "../FormContext";

const Step7 = () => {
	const { form } = useFormStorage({});
	//   const {form, setForm} = useContext(FormContext);

	const [subTotal, setSubTotal] = useState(0);

	useEffect(() => {
		const { bedrooms, bathrooms, areas } = form;

		const areaObj = area.find((item) => item.name === areas);
		// console.log("Found area object:", areaObj?.value);
		console.log(form);

		const areaCoff = areaObj ? areaObj.value : 0;
		// const areaCoff = areaObj?.value
		console.log(areaCoff);

		const calculatedPrice = getPrice(Number(bedrooms), Number(bathrooms), areaCoff);
		setSubTotal(calculatedPrice);
		// console.log(calculatedPrice)
	}, [form]);

	//   useEffect(() => {
	//     const savedForm = localStorage.getItem("form");
	// 	  if (savedForm) {
	// 	    setForm(JSON.parse(savedForm));
	// 	  }
	//     console.log(form)
	//     // const areaObj = area.find((item) => item.name === form.areas);
	//     // // console.log(areaObj?.value)
	//     // const areaCoff = areaObj ? areaObj.value : 0;
	//     // const calculatedPrice = getPrice(Number(form.bedrooms), Number(form.bathrooms), areaCoff);
	//     // setSubTotal(calculatedPrice);
	//   }, [setForm]);

	return (
		<div className="p-4 md:p-6 lg:p-9">
			<div>
				<h2>BOOKING SUMMARY</h2>
				<p>By clicking the Book Now button, you agree to our Terms of Service and Privacy Policy.</p>
			</div>
			<ul className="list-disc ml-6">
				{Object.entries(form).map(([key, value]) => (
					<li key={key}>
						<span>{value}</span>
					</li>
				))}
			</ul>
			<div>
				<div>
					<span>SUB-TOTAL</span>
					<span>{subTotal}</span>
				</div>
				<div>
					<span>TOTAL</span>
					<span></span>
				</div>
			</div>
		</div>
	);
};
export default Step7;
