import { createSlice } from "@reduxjs/toolkit";
import { IResume } from "../../types";

const initialState: IResume = {
	header: {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		links: [],
	},
	sections: {
		experience: [],
		skills: [],
		projects: [],
		certificates: [],
		education: [],
	},
};

const resumeSlice = createSlice({
	name: "resume",
	initialState,
	reducers: {
		setHeader: (state, action) => {
			state.header = action.payload;
		},
		setExperience: (state, action) => {
			state.sections.experience = action.payload;
		},
		setSkills: (state, action) => {
			state.sections.skills = action.payload;
		},
		setProjects: (state, action) => {
			state.sections.projects = action.payload;
		},
		setCertificates: (state, action) => {
			state.sections.certificates = action.payload;
		},
		setEducation: (state, action) => {
			state.sections.education = action.payload;
		},
	},
});

export default resumeSlice.reducer;

export const {
	setHeader,
	setExperience,
	setSkills,
	setProjects,
	setCertificates,
	setEducation,
} = resumeSlice.actions;
