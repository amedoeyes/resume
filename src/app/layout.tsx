import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
	title: "Résumé",
	description: "Web app to create Resumes",
};

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className="bg-secondary text-primary">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
