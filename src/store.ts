import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./features/resume/resumeSlice";

const store = configureStore({
	reducer: {
		resumeReducer: resumeReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
