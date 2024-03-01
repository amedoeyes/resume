import { useEffect, useRef, useState } from "react";

export default function ResizeHandle() {
	const [isResizing, setIsResizing] = useState(false);
	const animateIDRef = useRef<number>(0);

	const moveHandle = () => {
		const resizeHandle = document.getElementById("resize-handle");
		const leftPanel = document.getElementById("left-panel");

		if (!resizeHandle || !leftPanel) return;

		const editorWidth = leftPanel.getBoundingClientRect().width;
		resizeHandle.style.left = `${editorWidth - 4}px`;
	};

	const limitPanels = () => {
		const resizeHandle = document.getElementById("resize-handle");
		const leftPanel = document.getElementById("left-panel");
		const rightPanel = document.getElementById("right-panel");

		if (!resizeHandle || !leftPanel || !rightPanel) return;

		const editorWidth = leftPanel.getBoundingClientRect().width;
		const viewerWidth = rightPanel.getBoundingClientRect().width;
		const documentWidth = document.body.getBoundingClientRect().width;

		const EDITOR_MIN_WIDTH = documentWidth * 0.4;
		const VIEWER_MIN_WIDTH = documentWidth * 0.4;

		if (editorWidth <= EDITOR_MIN_WIDTH) {
			leftPanel.style.width = `${EDITOR_MIN_WIDTH}px`;
			moveHandle();
		}

		if (viewerWidth <= VIEWER_MIN_WIDTH) {
			leftPanel.style.width = `${documentWidth - VIEWER_MIN_WIDTH}px`;
			moveHandle();
		}
	};

	const handleMouseDown = () => {
		function animate() {
			limitPanels();
			animateIDRef.current = requestAnimationFrame(animate);
		}
		if (animateIDRef.current === 0) animate();

		setIsResizing(true);
	};
	const handleMouseUp = () => {
		cancelAnimationFrame(animateIDRef.current);
		animateIDRef.current = 0;
		setIsResizing(false);
	};

	useEffect(() => {
		window.addEventListener("resize", limitPanels);
		return () => {
			cancelAnimationFrame(animateIDRef.current);
			window.removeEventListener("resize", limitPanels);
		};
	}, []);

	useEffect(() => {
		const resizeHandle = document.getElementById("resize-handle");
		const leftPanel = document.getElementById("left-panel");
		const rightPanel = document.getElementById("right-panel");

		if (!resizeHandle || !leftPanel || !rightPanel) return;

		moveHandle();

		const handleMouseMove = (e: MouseEvent) => {
			if (!isResizing) return;

			const { clientX } = e;
			const documentWidth = document.body.getBoundingClientRect().width;

			leftPanel.style.width = `${clientX}px`;
			rightPanel.style.width = `${documentWidth - clientX}px`;
			moveHandle();
		};

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	});

	return (
		<span
			id="resize-handle"
			className="absolute z-20 flex h-full w-2 cursor-ew-resize select-none justify-center max-md:hidden"
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
		>
			<div className="h-full w-[1px] bg-primary bg-opacity-25"></div>
		</span>
	);
}
