import Button from "../UI/Button";
import Input from "../UI/Input";
import Textarea from "../UI/Textarea";

import useFormStorage from "@/hooks/formStorage";
import Image from "next/image";
import tellAboutImg from "../../../public/images/tell-about-discount.png";
import discountImg from "../../../public/images/discount-img.png";

const Step5 = () => {
	const { form, handleInputChange } = useFormStorage({
		question: "",
		email: "",
		discountCode: "",
		tips: "",
	});

	console.log(form.email);
	return (
		<div className=" py-4 flex flex-col gap-6 md:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-4">
			<div className=" flex flex-col gap-4 md:col-span-1 md:row-span-2">
				<h2 className=" text-2xl md:text-4xl font-medium">Have you any question?</h2>
				<p className=" body text-subtext ">
					If you have a question about our company, ask it in the next field. We’ll answer to you on email{" "}
				</p>
				<Textarea name="question" value={form.question as string} onChange={handleInputChange} />
				<Input
					style="form-input"
					name="email"
					placeholder="Email*"
					type="text"
					onChange={handleInputChange}
					value={form.email as string}
				/>
			</div>
			<form className=" flex flex-col justify-center gap-4 lg:col-span-1 lg:row-span-2">
				<h2 className="text-2xl md:text-4xl font-medium">Discount code</h2>
				<Input
					style="form-input"
					type="text"
					placeholder="Discount code (or leave this blank)"
					onChange={handleInputChange}
					name="discountCode"
					value={form.discountCode as string}
				/>
				<div className="flex justify-center">
					<Button type="submit" style="apply-btn-light">
						<span className=" text-accent text-base leading-8">Accept</span>
					</Button>
				</div>
			</form>
			<div className=" flex flex-col gap-4 md:grid md:grid-flow-col md:grid-col-2 md:grid-rows-1 lg:items-center lg:col-span-3 lg:row-span-1 lg:gap-8">
				<div className=" hidden md:block md:row-span-3 md:w-[422px] md:h-[266px]">
					<Image
						src={discountImg}
						alt="Discount"
						className=" w-full h-full"
						layout="responsive"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>
				<p className=" text-text body md:text-2xl md:text-right md:col-span-1 md:row-span-1 md:text-accent">
					Tips are not expected but always appreciated by our cleaners
				</p>
				<div className="md:col-span-3 md:row-end-3 md:h-10">
					<Input style="form-input" type="text" onChange={handleInputChange} name="tips" value={form.tips as string} />
				</div>
			</div>
			<div className=" lg:flex md:flex-col justify-between lg:row-span-3 hidden">
				<h2 className="text-center text-rose-900 text-4xl font-bold ">Tell about us your friends and get discount!</h2>
				<div className="md:w-[394px] md:h-[236px]">
					<Image
						src={tellAboutImg}
						alt="Discount"
						className=" w-full h-full"
						layout="responsive"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>
			</div>
		</div>
	);
};
export default Step5;
