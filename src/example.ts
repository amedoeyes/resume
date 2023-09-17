import { IResume } from "./types";

const example: IResume = {
	header: {
		firstName: "First",
		lastName: "Last",
		email: "example@example.com",
		phone: "+1234567890",
		links: ["example.com", "example.com"],
	},
	meta: {
		title: "Resume",
		author: "Example",
		subject: "Resume",
		keywords: "Resume",
	},
	sections: {
		experience: {
			title: "",
			items: [
				{
					title: "Example",
					description: ["- Example", "- Example", "- Example"],
					company: "Example",
					startDate: "xxxx",
					endDate: "xxxx",
				},
				{
					title: "Example",
					description: ["- Example", "- Example", "- Example"],
					company: "Example",
					startDate: "xxxx",
					endDate: "xxxx",
				},
				{
					title: "Example",
					description: ["- Example", "- Example", "- Example"],
					company: "Example",
					startDate: "xxxx",
					endDate: "xxxx",
				},
			],
		},
		skills: {
			title: "",
			items: [
				{
					title: "Example",
					skills: ["Example", "Example", "Example"],
				},
				{
					title: "Example",
					skills: ["Example", "Example", "Example"],
				},
				{
					title: "Example",
					skills: ["Example", "Example", "Example"],
				},
				{
					title: "Example",
					skills: ["Example", "Example", "Example"],
				},
			],
		},
		projects: {
			title: "",
			items: [
				{
					title: "Example",
					description: ["- Example", "- Example", "- Example"],
					startDate: "xxxx",
					endDate: "xxxx",
				},
				{
					title: "Example",
					description: ["- Example", "- Example", "- Example"],
					startDate: "xxxx",
					endDate: "xxxx",
				},
				{
					title: "Example",
					description: ["- Example", "- Example", "- Example"],
					startDate: "xxxx",
					endDate: "xxxx",
				},
			],
		},
		certificates: {
			title: "",
			items: [
				{
					title: "Example",
					institution: "Example",
					startDate: "xxxx",
					endDate: "xxxx",
					id: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
				},
				{
					title: "Example",
					institution: "Example",
					startDate: "xxxx",
					endDate: "xxxx",
					id: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
				},
				{
					title: "Example",
					institution: "Example",
					id: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
					startDate: "xxxx",
					endDate: "xxxx",
				},
			],
		},
		education: {
			title: "",
			items: [
				{
					title: "Example",
					institution: "Example",
					gpa: "x.xx",
					startDate: "xxxx",
					endDate: "xxxx",
				},
			],
		},
	},
	sectionsOrder: [
		"experience",
		"skills",
		"projects",
		"certificates",
		"education",
	],
};

export default example;
