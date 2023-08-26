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
		<html lang="en">
			<body className="bg-secondary">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
