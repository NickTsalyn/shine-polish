'use client'
import React, { useState } from "react";
import axios from "axios";

type Props = {};

const Auth = (props: Props) => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handlerChange = (e: any) => {
		const { name, value } = e.target;
		return setUser((prev) => ({ ...prev, [name]: value }));
	};

	const handlerSubmit = async (e: any) => {
		e.preventDefault
		try {
			const res = await axios.post("/api/register", user);
			console.log(res.data)
		} catch (error) {
			console.log(error)
		}
		finally {
			setUser({
				name: "",
				email: "",
				password: "",
			});
		}
		
	}

	return (
		<div>
			<form onSubmit={handlerSubmit}>
				<input type="text" name="name" className=" border-black  border-2" value={user.name} onChange={handlerChange} />
				<input
					type="text"
					name="email"
					className=" border-black  border-2"
					value={user.email}
					onChange={handlerChange}
				/>
				<input
					type="text"
					name="password"
					className=" border-black  border-2"
					value={user.password}
					onChange={handlerChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Auth;
