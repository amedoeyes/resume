import {
	Header,
	Meta,
	Resume,
	Section,
	Sections,
	SectionsOrder,
} from "@/types";
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

const editorSlice = createSlice({
	name: "editor",
	initialState,
	reducers: {
		setEditor: (state, action: PayloadAction<Resume>) => {
			state = action.payload;
			return state;
		},
		setHeader: (state, action: PayloadAction<Header>) => {
			state.header = action.payload;
			return state;
		},
		setMeta: (state, action: PayloadAction<Meta>) => {
			state.meta = action.payload;
			return state;
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
			return state;
		},
		setSectionsOrder: (state, action: PayloadAction<SectionsOrder>) => {
			state.sectionsOrder = action.payload;
			return state;
		},
	},
});

export default editorSlice.reducer;

export const {
	setEditor,
	setHeader,
	setMeta,
	setSection,
	setSectionsOrder,
} = editorSlice.actions;
