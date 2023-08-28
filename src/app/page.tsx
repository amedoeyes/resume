"use client";

import Header from "@/components/home/Header";
import { setEditorResume } from "@/features/editor/editorSlice";
import { setResume } from "@/features/resume/resumeSlice";
import { AppDispatch } from "@/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
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
		<main>
			<Header />
		</main>
	);
}
