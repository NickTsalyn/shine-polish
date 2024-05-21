import React from "react";
import Input from "./UI/Input";

type Props = {};

const WorkWithUsForm = (props: Props) => {
	return (
		<div>
			<h3 className=" text-accent text-[56px] mb-[52px] text-center">Do you want to work with us?</h3>
			<p className=" text-black text-2xl mb-11 text-center font-normal leading-normal">
				Please leave a contact information<br/>We will connect with you
			</p>
			<div className=" flex flex-col gap-10">
				<label className=" flex flex-col gap-2">
					<span className=" text-main text-2xl ml-4">Name</span>
					<Input type="text" style="modal-input" placeholder="Enter your name" />
				</label>
				<label className=" flex flex-col gap-2">
				<span className=" text-main text-2xl ml-4">Phone</span>
					<Input type="tel" style="modal-input" placeholder="Enter your phone number" />
				</label>
				<label className=" flex flex-col gap-2">
				<span className=" text-main text-2xl ml-4">Email</span>
					<Input type="email" style="modal-input" placeholder="Enter your E-mail address" />
				</label>
				<button className=" bg-accent rounded-xl w-[430px] py-3 my-0 mx-auto">
					<span className="text-white text-center text-5xl">Send</span>
				</button>
			</div>
		</div>
	);
};

export default WorkWithUsForm;
