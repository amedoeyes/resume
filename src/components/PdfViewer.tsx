import { PDFViewer } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Resume from "./resume/Resume";

export default function PdfViewer() {
	const resume = useSelector((state: RootState) => state.resume);
	return (
		<PDFViewer style={{ width: "100%", height: "100%" }}>
			<Resume header={resume.header} sections={resume.sections} />
		</PDFViewer>
	);
}
