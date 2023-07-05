import { PDFViewer } from "@react-pdf/renderer";

type PdfViewerProps = {
	Resume: JSX.Element;
};

export default function PdfViewer({ Resume }: PdfViewerProps) {
	return (
		<PDFViewer style={{ width: "100%", height: "100vh" }}>{Resume}</PDFViewer>
	);
}
