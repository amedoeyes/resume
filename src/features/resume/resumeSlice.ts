import { Resume } from "@/types";
import getFromStorage from "@/util/getFromStorage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Resume = {
	header: {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		links: [],
	},
	meta: {
		title: "Resume",
		author: "",
		subject: "Resume",
		keywords: "Resume",
	},
	sections: {
		experience: {
			title: "",
			items: [],
		},
		skills: {
			title: "",
			items: [],
		},
		projects: {
			title: "",
			items: [],
		},
		certificates: {
			title: "",
			items: [],
		},
		education: {
			title: "",
			items: [],
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

const resume = getFromStorage("resume", initialState);

const resumeSlice = createSlice({
	name: "resume",
	initialState: resume,
	reducers: {
		setResume: (state, action: PayloadAction<Resume>) => {
			state = action.payload;
			window.localStorage.setItem("resume", JSON.stringify(state));
		},
	},
});

export default resumeSlice.reducer;

export const { setResume } = resumeSlice.actions;
