import { createSlice } from "@reduxjs/toolkit";
import example from "../../example";
import { IResume } from "../../types";

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

const resumeSlice = createSlice({
	name: "resume",
	initialState: storedResume || initialState,
	reducers: {
		setResume: (state, action: { payload: IResume }) => {
			state = action.payload;
			return state;
		},
	},
});

export default resumeSlice.reducer;

export const { setResume } = resumeSlice.actions;
