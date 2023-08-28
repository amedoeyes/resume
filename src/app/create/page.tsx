"use client";

import Header from "@/components/create/Header";
import ResizeHandle from "@/components/create/ResizeHandle";
import { setEditorResume } from "@/features/editor/editorSlice";
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
			dispatch(setEditorResume(JSON.parse(storedResume)));
		}
	}, [dispatch]);

	if (loading) return <>Loading...</>;

	return (
		<>
			<Header />
			<main className="relative flex h-[calc(100vh-56px)]">
				<div id="editor" className="h-full w-2/3"></div>
				<ResizeHandle />
				<div id="viewer" className="h-full w-2/5"></div>
			</main>
		</>
	);
}
