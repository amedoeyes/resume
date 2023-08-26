import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Resume",
	description: "Web app to create Resumes",
};

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
