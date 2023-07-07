import { IResume } from "./types";

const example: IResume = {
	header: {
		firstName: "First",
		lastName: "Last",
		email: "example@example.com",
		phone: "+123456789",
		links: ["example.com", "example.com"],
	},
	sections: {
		experience: {
			title: "",
			items: [
				{
					title: "Example",
					description: "Example",
					company: "Example",
					startDate: "xxxx",
					endDate: "xxxx",
				},
				{
					title: "Example",
					description: "Example",
					company: "Example",
					startDate: "xxxx",
					endDate: "xxxx",
				},
				{
					title: "Example",
					description: "Example",
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
					description: "Example",
					stack: ["Example", "Example", "Example"],
					link: "example.com",
				},
				{
					title: "Example",
					description: "Example",
					stack: ["Example", "Example", "Example"],
					link: "example.com",
				},
				{
					title: "Example",
					description: "Example",
					stack: ["Example", "Example", "Example"],
					link: "example.com",
				},
				{
					title: "Example",
					description: "Example",
					stack: ["Example", "Example", "Example"],
					link: "example.com",
				},
				{
					title: "Example",
					description: "Example",
					stack: ["Example", "Example", "Example"],
					link: "example.com",
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
					link: "example.com",
				},
				{
					title: "Example",
					institution: "Example",
					startDate: "xxxx",
					endDate: "xxxx",
					link: "example.com",
				},
				{
					title: "Example",
					institution: "Example",
					startDate: "xxxx",
					endDate: "xxxx",
					link: "example.com",
				},
			],
		},
		education: {
			title: "degrees",
			items: [
				{
					title: "Example",
					institution: "Example",
					startDate: "xxxx",
					endDate: "xxxx",
				},
			],
		},
		order: [
			"skills",
			"experience",
			"certificates",
			"education",
			"projects",
		],
	},
};

export default example;
