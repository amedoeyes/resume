import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
	sideBar: boolean;
	viewer: boolean;
};

const initialState: InitialState = {
	sideBar: false,
	viewer: false,
};

const modalsSlice = createSlice({
	name: "modals",
	initialState,
	reducers: {
		openModal: (state, action) => {
			state[action.payload as keyof InitialState] = true;
		},
		closeModal: (state, action) => {
			state[action.payload as keyof InitialState] = false;
		},
	},
});

export const { openModal, closeModal } = modalsSlice.actions;

export default modalsSlice;
