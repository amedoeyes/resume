import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PdfViewer from "./components/PdfViewer";
import Editor from "./components/editor/Editor";
import Button from "./components/styled/Button";
import { setResume } from "./features/resume/resumeSlice";
import { AppDispatch, RootState } from "./store";

export default function App() {
	const editorRef = useRef<HTMLDivElement>(null);
	const viewerRef = useRef<HTMLDivElement>(null);
	const [isResizing, setIsResizing] = useState(false);

	const handleMouseDown = () => {
		setIsResizing(true);

		if (viewerRef.current) viewerRef.current.style.pointerEvents = "none";
	};

	const handleMouseUp = () => {
		setIsResizing(false);

		if (viewerRef.current) viewerRef.current.style.pointerEvents = "auto";
	};

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!isResizing || !editorRef.current || !viewerRef.current) return;

			const editorWidth = editorRef.current.getBoundingClientRect().width;
			const viewerWidth = viewerRef.current.getBoundingClientRect().width;
			const documentWidth = document.body.getBoundingClientRect().width;
			const { x } = e;

			console.log(x, editorWidth);

			if (editorWidth <= 500 && x < editorWidth) return;
			if (viewerWidth <= 500 && documentWidth - x < viewerWidth) return;

			editorRef.current.style.width = `${x}px`;
			viewerRef.current.style.width = `${documentWidth - x}px`;
		};

		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, [isResizing]);

	const editor = useSelector((state: RootState) => state.editor);
	const dispatch = useDispatch<AppDispatch>();

	const updateResume = () => {
		dispatch(setResume(editor));
	};

	return (
		<div>
			<header className="sticky top-0 z-20 flex h-16 w-full justify-between bg-secondary p-4 shadow-md">
				<h2 className="select-none text-2xl">Resume</h2>
				<Button
					className="flex h-8 items-center"
					onClick={updateResume}
				>
					Update
				</Button>
			</header>
			<div className="flex h-[calc(100vh-64px)] max-sm:flex-col">
				<div ref={editorRef} className="h-full w-2/3 overflow-y-scroll">
					<Editor />
				</div>
				<span
					className="flex max-h-full w-[2px] flex-shrink-0 cursor-ew-resize select-none items-center justify-center bg-primary  text-secondary duration-200 hover:px-1"
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}
				></span>
				<div ref={viewerRef} className="h-full w-1/3">
					<PdfViewer />
				</div>
			</div>
		</div>
	);
}
