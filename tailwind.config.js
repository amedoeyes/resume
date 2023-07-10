/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			sans: ["Roboto"],
		},
		extend: {
			colors: {
				primary: "rgb(var(--primary) / <alpha-value>)",
				secondary: "rgb(var(--secondary) / <alpha-value>)",
			},
		},
	},
	plugins: [require("@headlessui/tailwindcss")],
};
