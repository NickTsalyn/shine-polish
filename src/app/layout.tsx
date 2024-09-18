import LayoutComponent from "@/components/LayoutComponent";
import { Lato } from "next/font/google";
import "../styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const lato = Lato({
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body className={lato.className}>
				<NextIntlClientProvider messages={messages}>
					<LayoutComponent>{children}</LayoutComponent>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
