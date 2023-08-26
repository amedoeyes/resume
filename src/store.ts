import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./features/editor/editorSlice";
import resumeReducer from "./features/resume/resumeSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
	reducer: {
		resume: resumeReducer,
		editor: editorReducer,
	},
});

export default store;
