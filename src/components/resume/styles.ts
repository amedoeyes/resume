import { Font, StyleSheet } from "@react-pdf/renderer";
import NotoSerifBlack from "../../../fonts/NotoSerif-Black.ttf";
import NotoSerifBold from "../../../fonts/NotoSerif-Bold.ttf";
import NotoSerifUltraLight from "../../../fonts/NotoSerif-ExtraLight.ttf";
import NotoSerifLight from "../../../fonts/NotoSerif-Light.ttf";
import NotoSerifMedium from "../../../fonts/NotoSerif-Medium.ttf";
import NotoSerifRegular from "../../../fonts/NotoSerif-Regular.ttf";
import NotoSerifSemiBold from "../../../fonts/NotoSerif-SemiBold.ttf";
import NotoSerifThin from "../../../fonts/NotoSerif-Thin.ttf";

Font.register({
	family: "NotoSerif",
	fonts: [
		{
			src: NotoSerifRegular,
		},
		{
			src: NotoSerifThin,
			fontWeight: "thin",
		},
		{
			src: NotoSerifUltraLight,
			fontWeight: "ultralight",
		},
		{
			src: NotoSerifLight,
			fontWeight: "light",
		},
		{
			src: NotoSerifMedium,
			fontWeight: "medium",
		},
		{
			src: NotoSerifSemiBold,
			fontWeight: "semibold",
		},
		{
			src: NotoSerifBold,
			fontWeight: "bold",
		},
		{
			src: NotoSerifBlack,
			fontWeight: "ultrabold",
		},
	],
});

const styles = StyleSheet.create({
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
		width: "auto",
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
