"use client";

import store from "@/store";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";

type ProvidersProps = {
	children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
	return (
		<Provider store={store}>
			<ThemeProvider>{children}</ThemeProvider>
		</Provider>
	);
}
