import {
	Header,
	Meta,
	Resume,
	Section,
	Sections,
	SectionsOrder,
} from "@/types";
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

const editorSlice = createSlice({
	name: "editor",
	initialState: resume,
	reducers: {
		setHeader: (state, action: PayloadAction<Header>) => {
			state.header = action.payload;
		},
		setMeta: (state, action: PayloadAction<Meta>) => {
			state.meta = action.payload;
		},
		setSection: (
			state,
			action: PayloadAction<{
				section: keyof Sections;
				data: Section<any>;
			}>,
		) => {
			const { section, data } = action.payload;
			state.sections[section] = data;
		},
		setSectionsOrder: (state, action: PayloadAction<SectionsOrder>) => {
			state.sectionsOrder = action.payload;
		},
	},
});

export default editorSlice.reducer;

export const { setHeader, setMeta, setSection, setSectionsOrder } =
	editorSlice.actions;
