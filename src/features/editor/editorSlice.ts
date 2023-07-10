import { createSlice } from "@reduxjs/toolkit";
import example from "../../example";
import {
	ICertificates,
	IEducation,
	IExperience,
	IHeader,
	IProjects,
	IResume,
	ISectionsOrder,
	ISkills,
} from "../../types";

const storedResume = example;

const initialState: IResume = {
	header: {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		links: [],
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
		order: [
			"experience",
			"skills",
			"projects",
			"certificates",
			"education",
		],
	},
};

const editorSlice = createSlice({
	name: "editor",
	initialState: storedResume || initialState,
	reducers: {
		setHeader: (state, action: { payload: IHeader }) => {
			state.header = action.payload;
		},
		setExperience: (state, action: { payload: IExperience }) => {
			state.sections.experience = action.payload;
		},
		setSkills: (state, action: { payload: ISkills }) => {
			state.sections.skills = action.payload;
		},
		setProjects: (state, action: { payload: IProjects }) => {
			state.sections.projects = action.payload;
		},
		setCertificates: (state, action: { payload: ICertificates }) => {
			state.sections.certificates = action.payload;
		},
		setEducation: (state, action: { payload: IEducation }) => {
			state.sections.education = action.payload;
		},
		setSectionsOrder: (state, action: { payload: ISectionsOrder }) => {
			state.sections.order = action.payload;
		},
	},
});

export default editorSlice.reducer;

export const {
	setHeader,
	setExperience,
	setSkills,
	setProjects,
	setCertificates,
	setEducation,
	setSectionsOrder,
} = editorSlice.actions;
