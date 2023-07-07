import PdfViewer from "./components/PdfViewer";
import PdfEditor from "./components/pdf_editor/PdfEditor";

export default function App() {
	return (
		<div className="flex max-sm:flex-col">
			<div className="h-screen w-full overflow-y-scroll">
				<PdfEditor />
			</div>
			<div className="h-screen w-full">
				<PdfViewer />
			</div>
		</div>
	);
}
