import { Font, StyleSheet } from "@react-pdf/renderer";

Font.register({
	family: "Noto Serif",
	fonts: [
		{
			src: "http://fonts.gstatic.com/s/notoserif/v22/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZqFCjwM0Lhq_Szw.ttf",
		},
		{
			src: "http://fonts.gstatic.com/s/notoserif/v22/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZmlCjwM0Lhq_Szw.ttf",
			weight: "medium",
		},
	],
});

const styles = StyleSheet.create({
	document: {
		fontFamily: "Noto Serif",
	},
	page: {
		padding: 40,
	},
	// Header
	header: {
		marginBottom: 14,
		gap: 4,
	},
	name: {
		fontSize: 22,
		fontWeight: "medium",
		letterSpacing: 1,
		textAlign: "center",
		textTransform: "uppercase",
	},
	contacts: {
		fontSize: 9,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 4,
		flexWrap: "wrap",
	},
	// Section
	section: {
		gap: 4,
	},
	sectionHeader: {
		fontSize: 8,
		textTransform: "uppercase",
		borderBottom: "1px solid black",
		paddingLeft: 6,
	},
	sectionBody: {
		paddingLeft: 6,
		paddingRight: 6,
	},
	sections: {
		gap: 10,
	},
	// Experience
	experience: {
		gap: 10,
	},
	experienceItem: {
		gap: 2,
	},
	experienceItemHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		fontSize: 10,
		fontWeight: "medium",
	},
	experienceItemDescription: {
		fontSize: 9,
		paddingRight: 20,
	},
	// Skills
	skills: {},
	skillsItem: {},
	skillsItemTitle: {
		fontSize: 10,
	},
	skillsItemItems: {
		fontSize: 9,
	},
	// Projects
	projects: {
		gap: 10,
	},
	projectsItem: {
		gap: 2,
	},
	projectsItemHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		fontSize: 10,
		fontWeight: "medium",
	},
	projectsItemDescription: {
		fontSize: 9,
		paddingRight: 20,
	},
	// Certificates
	certificates: {
		gap: 4,
	},
	certificatesItem: {},
	certificatesItemHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		fontSize: 10,
		fontWeight: "medium",
	},
	certificatesItemBody: {
		fontSize: 9,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	// Education
	education: {
		gap: 4,
	},
	educationItem: {},
	educationItemHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		fontSize: 10,
		fontWeight: "medium",
	},
	educationItemBody: {
		fontSize: 9,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	// Misc
	link: {
		width: "auto",
		textDecoration: "none",
		color: "#000",
	},
});

export default styles;
