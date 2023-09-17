import { configureStore } from "@reduxjs/toolkit";
import editorSlice from "./slices/editorSlice";
import modalsSlice from "./slices/modalsSlice";
import resumeSlice from "./slices/resumeSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
	reducer: {
		resume: resumeSlice.reducer,
		editor: editorSlice.reducer,
		modals: modalsSlice.reducer,
	},
});

export default store;
