import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
	title: "Resume",
	description: "Web app to create Resumes",
};

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<Providers>
			<html lang="en">
				<body>{children}</body>
			</html>
		</Providers>
	);
}
