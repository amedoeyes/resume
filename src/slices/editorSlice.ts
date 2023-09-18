import example from "@/example";
import {
	IHeader,
	IMeta,
	IResume,
	ISection,
	ISections,
	SectionsOrder,
} from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const editorSlice = createSlice({
	name: "editor",
	initialState: example,
	reducers: {
		setEditor: (state, action: PayloadAction<IResume>) => {
			state = action.payload;
			return state;
		},
		setHeader: (state, action: PayloadAction<IHeader>) => {
			state.header = action.payload;
			return state;
		},
		setMeta: (state, action: PayloadAction<IMeta>) => {
			state.meta = action.payload;
			return state;
		},
		setSection: (
			state,
			action: PayloadAction<{
				section: keyof ISections;
				data: ISection<any>;
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

export const { setEditor, setHeader, setMeta, setSection, setSectionsOrder } =
	editorSlice.actions;

export default editorSlice;
