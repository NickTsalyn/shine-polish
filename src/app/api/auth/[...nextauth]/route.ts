import NextAuth, { NextAuthOptions } from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/Users";
import bcrypt from "bcryptjs";

const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			id: "credentials",
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				await connect();
				try {
					const user = await User.findOne({ email: credentials?.email });
					if (user) {
						const isPasswordCorrect = await bcrypt.compare(credentials?.password || '', user.password);
						if (isPasswordCorrect) {
							return {
								id: user.id,
								name: user.username,
								email: user.email,
							};
						}
					}
					throw new Error("Invalid email or password");
				} catch (err) {
					throw new Error((err as Error).message || "Something went wrong");
				}
			},
		}),
	],
	callbacks: {
		async signIn({ account }: { account: Account | null }) {
			if (account?.provider === "credentials") {
				return true;
			}
			return false;
		},
		async jwt({ token, user }: { token: any; user: any }) {
			if (user) {
				token.id = user.id;
				token.email = user.email;
				token.name = user.name;
			}
			return token;
		},
	},
	pages: {
		signIn: "/auth/signin",
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
export default handler;
