import  connect  from "../../../../utils/config/dbConfig";
import User from "@/models/auth";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {

	try {
		const { name, email, password } = await request.json();

		const ifUserExists = await User.findOne({ email });
		if (ifUserExists) {
			return NextResponse.json({ error: "User already exists" }, { status: 400 });
		}

		const salt = await bcryptjs.getSalt("10");
		const hashedPassword = await bcryptjs.hash(password, salt);

		const newUser = new User({
			name,
			email,
			password: hashedPassword,
		});

        const savedUser = await newUser.save();

		return NextResponse.json({ message: "User registered successfully", success: true, savedUser }, { status: 201 });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
