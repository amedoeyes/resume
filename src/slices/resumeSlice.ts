import example from "@/example";
import { IResume } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
	name: "resume",
	initialState: example,
	reducers: {
		setResume: (state, action: PayloadAction<IResume>) => {
			state = action.payload;
			window.localStorage.setItem("resume", JSON.stringify(state));
			return state;
		},
	},
});

export const { setResume } = resumeSlice.actions;
export default resumeSlice;
