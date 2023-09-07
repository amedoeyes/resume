"use client";

import Editor from "@/components/editor/Editor";
import ResizeHandle from "@/components/home/ResizeHandle";
import SideBar from "@/components/home/SideBar";
import Viewer from "@/components/viewer/Viewer";
import { setEditor } from "@/features/editor/editorSlice";
import { setResume } from "@/features/resume/resumeSlice";
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

	if (loading) return <>Loading...</>;

	return (
		<main className="relative flex h-screen">
			<div id="left-panel" className="flex h-full w-2/3 flex-shrink-0">
				<div className="w-36 border-r border-r-primary border-opacity-25 p-2">
					<SideBar />
				</div>

				<div className="w-full overflow-y-auto p-2">
					<Editor />
				</div>
			</div>

			<ResizeHandle />

			<div
				id="right-panel"
				className="h-full w-2/5 flex-grow overflow-auto"
			>
				<Viewer />
			</div>
		</main>
	);
}
