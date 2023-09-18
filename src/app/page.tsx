"use client";

import Editor from "@/components/editor/Editor";
import Header from "@/components/home/Header";
import ResizeHandle from "@/components/home/ResizeHandle";
import ResponsiveSideBar from "@/components/home/ResponsiveSideBar";
import ResponsiveViewer from "@/components/home/ResponsiveViewer";
import Settings from "@/components/settings/Settings";
import { setEditor } from "@/slices/editorSlice";
import { setResume } from "@/slices/resumeSlice";
import { AppDispatch } from "@/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Create() {
	const dispatch = useDispatch<AppDispatch>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
		const storedResume = window.localStorage.getItem("resume");

		if (storedResume) {
			dispatch(setResume(JSON.parse(storedResume)));
			dispatch(setEditor(JSON.parse(storedResume)));
		}
	}, [dispatch]);

	if (loading)
		return (
			<div className="flex h-screen w-full select-none flex-col items-center justify-center gap-4">
				<svg
					className="h-20 w-20 animate-spin text-primary"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					></circle>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
				<span className="text-2xl">Loading</span>
			</div>
		);

	return (
		<>
			<Header />
			<main className="flex">
				<div
					id="left-panel"
					className="flex h-full w-1/2 flex-shrink-0 max-md:w-full"
				>
					<ResponsiveSideBar />

					<div className="h-[calc(100vh-4rem)] w-full overflow-auto p-2">
						<Editor />
					</div>
				</div>

				<ResizeHandle />

				<ResponsiveViewer />

				<Settings />
			</main>
		</>
	);
}
