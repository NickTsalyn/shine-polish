import useFormStorage from "@/hooks/formStorage";
import { useEffect, useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import getPrice from "../../../formula";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

const getData = async () => {
	try {
		const response = await axios.get("https://shine-polish-server.onrender.com/bookings/options");
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

const Step6 = () => {
	const { form } = useFormStorage({});
	const [total, setTotal] = useState(0);
	const [data, setData] = useState<{
		areaOptions: { name: string; value: number }[];
		discountOptions: { name: string; value: number }[];
		serviceOptions: { name: string; value: number }[];
		extrasOptions: { name: string; value: number }[];
		base: number ,
		coff: number,
		bathPrice: number
	} | null>(null);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const result = await getData();
			if (result) {
				setData(result);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		const calculatePrices = async () => {
			if (!data) return;

			if (Object.keys(form).length === 0) {
				if (total !== 0) {
					setTotal(0);
				}
				return;
			}

			const { bedroom, bathroom, areas, frequency, services, extras } = form;

			const areaCoefficient = data.areaOptions.find((area) => area.name === areas)?.value || 1;
			const discountValue = data.discountOptions.find((discount) => discount.name === frequency)?.value || 1;
			const cleaningValue = data.serviceOptions.find((service) => service.name === services)?.value || 1;
			const extraValue = data.extrasOptions.reduce((acc, item) => {
				return (extras as string[]).includes(item.name) ? acc + item.value : acc;
			}, 0) || 0;

			const basePrice = await getPrice(Number(bedroom), Number(bathroom));
			const calculatedPrice = basePrice * areaCoefficient * discountValue * cleaningValue + extraValue;
			setTotal(calculatedPrice);

		};

		calculatePrices();
	}, [form, data, total]);

	const handleCheckout = async () => {
		setLoading(true);

		// Отримайте остаточну ціну з вашої форми букінгу
		const price = total * 100; // Наприклад, 50.00 USD

		const response = await fetch("/api/create-checkout-session", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ price }), // ціна у центах
		});

		const session = await response.json();

		const stripe = await stripePromise;

		if (!stripe) {
			console.error("Stripe has not been initialized");
			setLoading(false);
			return;
		}
		const { error } = await stripe.redirectToCheckout({ sessionId: session.id });

		if (error) {
			console.error("Error redirecting to checkout:", error);
			setLoading(false);
		}
	};

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
					if (["bedroom", "bathroom", "areas", "frequency", "services"].includes(key) && value !== "") {
						return (
							<li key={key} className="text-base ">
								<span>{key === "bathroom" || key === "bedroom" ? `${value} ${key}(s)` : value}</span>
							</li>
						);
					}
				})}
			</ul>
			{Array.isArray(form.extras) ? (
				<>
					<p>Extras</p>
					<ul className="list-disc ml-6 flex flex-col gap-0.5">
						{form.extras.map((extra, index) => (
							<li key={index} className="text-base">
								{extra}
							</li>
						))}
					</ul>
				</>
			) : null}
			<div className="flex flex-col gap-2 ">
				<div className=" flex justify-between text-xl text-main">
					<span>TOTAL</span>
					<span className="">$ {total.toFixed(2)}</span>
				</div>
			</div>
			<button
				className=" flex justify-center items-center text-white bg-accent rounded-xl py-1.5 w-3/4 m-auto"
				type="submit"
				onClick={handleCheckout}
				disabled={loading}
			>
				<span className="text-white text-2xl">BOOK NOW</span>
			</button>
		</div>
	);
};

export default Step6;
