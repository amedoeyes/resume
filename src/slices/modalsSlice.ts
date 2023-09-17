import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
	sideBar: boolean;
	viewer: boolean;
	settings: boolean;
};

const initialState: InitialState = {
	sideBar: false,
	viewer: false,
	settings: false,
};

const modalsSlice = createSlice({
	name: "modals",
	initialState,
	reducers: {
		openModal: (state, action: PayloadAction<keyof InitialState>) => {
			state[action.payload as keyof InitialState] = true;
		},
		closeModal: (state, action: PayloadAction<keyof InitialState>) => {
			state[action.payload as keyof InitialState] = false;
		},
	},
});

export const { openModal, closeModal } = modalsSlice.actions;

export default modalsSlice;
