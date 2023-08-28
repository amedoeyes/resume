import { useEffect, useState } from "react";

export default function ResizeHandle() {
	const [isResizing, setIsResizing] = useState(false);

	const handleMouseDown = () => setIsResizing(true);
	const handleMouseUp = () => setIsResizing(false);

	useEffect(() => {
		const handle = document.getElementById("resize-handle");
		const editor = document.getElementById("editor");
		const viewer = document.getElementById("viewer");

		const EDITOR_MIN_WIDTH = 750;
		const VIEWER_MIN_WIDTH = 550;

		if (!handle || !editor || !viewer) return;

		const moveHandle = () => {
			const editorWidth = editor.getBoundingClientRect().width;
			handle.style.left = `${editorWidth - 4}px`;
		};

		moveHandle();

		const handleMouseMove = (e: MouseEvent) => {
			if (!isResizing) return;

			const { clientX } = e;
			const editorWidth = editor.getBoundingClientRect().width;
			const viewerWidth = viewer.getBoundingClientRect().width;
			const documentWidth = document.body.getBoundingClientRect().width;

			if (editorWidth <= EDITOR_MIN_WIDTH && clientX < editorWidth)
				return;

			if (
				viewerWidth <= VIEWER_MIN_WIDTH &&
				documentWidth - clientX < viewerWidth
			)
				return;

			editor.style.width = `${clientX}px`;
			viewer.style.width = `${documentWidth - clientX}px`;
			moveHandle();
		};

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);
		window.addEventListener("resize", moveHandle);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
			window.removeEventListener("resize", moveHandle);
		};
	}, [isResizing]);

	return (
		<span
			id="resize-handle"
			className="absolute z-50 flex h-full w-2 cursor-ew-resize select-none justify-center"
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
		>
			<div className="h-full w-[1px] bg-primary bg-opacity-25"></div>
		</span>
	);
}
