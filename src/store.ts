import { configureStore } from "@reduxjs/toolkit";
import resumeSlice from "./slices/resumeSlice";
import editorSlice from "./slices/editorSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
	reducer: {
		resume: resumeSlice.reducer,
		editor: editorSlice.reducer,
	},
});

export default store;
