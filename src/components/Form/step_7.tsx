import useFormStorage from "@/hooks/formStorage";
import { getPrice } from "../../../formula";
import { useEffect, useState } from "react";

const Step7 = () => {
	const { form } = useFormStorage({});
	const [subTotal, setSubTotal] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		if (Object.keys(form).length === 0) {
			if (subTotal !== 0 || total !== 0) {
				setSubTotal(0);
				setTotal(0);
			}
			return;
		}

		const { bedroom, bathroom, areas, frequency } = form;

		const calculatedPrice = getPrice(Number(bedroom), Number(bathroom), Number(areas), Number(frequency));
		setSubTotal(calculatedPrice);
		
		const totalPrice = calculatedPrice * 1.06;
		setTotal(totalPrice);

	}, [form, subTotal, total]);

	return (
		<div className="p-4 md:p-6 lg:p-9 flex flex-col gap-5">
			<div>
				<h2 className=" text-black text-2xl text-center mb-2">BOOKING SUMMARY</h2>
				<p className="text-bookingSubText text-base">
					By clicking the Book Now button, you agree to our Terms of Service and Privacy Policy.
				</p>
			</div>
			<ul className="list-disc ml-6 flex flex-col gap-0.5">
				{Object.entries(form).map(([key, value]) => {
					if (value !== "") {
						return (
							<li key={key} className="text-base ">
								<span>{key === "bathroom" || key === "bedroom" ? `${value} ${key}(s)` : value}</span>
							</li>
						);
					}
				})}
			</ul>
			<div className="flex flex-col gap-2 ">
				<div className=" flex justify-between text-xl">
					<span>SUB-TOTAL</span>
					<span className=" ">$ {subTotal.toFixed(2)}</span>
				</div>
				<div className=" flex justify-between text-xl">
					<span>SALES TAX</span>
					<span className="">$ {(subTotal * 0.06).toFixed(2)}</span>
				</div>
				<div className=" flex justify-between text-xl text-main">
					<span>TOTAL</span>
					<span className="">$ {total.toFixed(2)}</span>
				</div>
			</div>
			<button
				className=" flex justify-center items-center text-white bg-accent rounded-xl py-1.5 w-3/4 m-auto"
				type="submit"
			>
				<span className="text-white text-2xl">BOOK NOW</span>
			</button>
		</div>
	);
};
export default Step7;
