import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Résumé",
	description: "Online tool for crafting professional resumes",
};

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html suppressHydrationWarning lang="en" className={roboto.className}>
			<body className="overflow-hidden bg-secondary text-primary">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
