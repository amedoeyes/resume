import PdfEditor from "./components/pdf_editor/PdfEditor";
import PdfViewer from "./components/PdfViewer";
import Resume from "./components/resume/Resume";
import example from "./example";

export default function App() {
	return (
		<div className="grid grid-cols-2">
			<PdfEditor />
			<PdfViewer
				Resume={<Resume header={example.header} sections={example.sections} />}
			/>
		</div>
	);
}
