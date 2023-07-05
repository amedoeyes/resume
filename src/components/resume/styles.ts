import { Font, StyleSheet } from "@react-pdf/renderer";

Font.register({
	family: "NotoSerif",
	fonts: [
		{
			src: "../fonts/NotoSerif-Regular.ttf",
		},
		{
			src: "../fonts/NotoSerif-Thin.ttf",
			fontWeight: "thin",
		},
		{
			src: "../fonts/NotoSerif-ExtraLight.ttf",
			fontWeight: "ultralight",
		},
		{
			src: "../fonts/NotoSerif-Light.ttf",
			fontWeight: "light",
		},
		{
			src: "../fonts/NotoSerif-Medium.ttf",
			fontWeight: "medium",
		},
		{
			src: "../fonts/NotoSerif-SemiBold.ttf",
			fontWeight: "semibold",
		},
		{
			src: "../fonts/NotoSerif-Bold.ttf",
			fontWeight: "bold",
		},
		{
			src: "../fonts/NotoSerif-Black.ttf",
			fontWeight: "ultrabold",
		},
	],
});

const styles = StyleSheet.create({
	viewer: {
		width: "100%",
		height: "100vh",
	},
	document: {
		fontFamily: "NotoSerif",
	},
	page: {
		padding: 40,
	},
	header: {
		marginBottom: 14,
	},
	name: {
		fontSize: 28,
		fontWeight: "light",
		letterSpacing: 1,
		textAlign: "center",
		textTransform: "uppercase",
	},
	contacts: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 4,
		flexWrap: "wrap",
	},
	section: {
		gap: 6,
	},
	sectionHeader: {
		fontSize: 10,
		textTransform: "uppercase",
		borderBottom: "1px solid black",
	},
	sections: {
		gap: 10,
	},
	sectionContent: {
		gap: 6,
		paddingLeft: 10,
	},
	stack: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 4,
	},
	fs1: {
		fontSize: 10,
	},
	fs2: {
		fontSize: 9,
	},
	fw1: {
		fontWeight: "medium",
	},
	op1: {
		opacity: 0.75,
	},
	op2: {
		opacity: 0.5,
	},
	link: {
		textDecoration: "none",
		color: "#000",
	},
	right: {
		textAlign: "right",
	},
	rhalf: {
		width: "50%",
	},
	lhalf: {
		width: "50%",
	},
});

export default styles;
