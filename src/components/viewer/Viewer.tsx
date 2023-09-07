import { BlobProvider } from "@react-pdf/renderer";
import { Document, Page, pdfjs } from "react-pdf";
import Resume from "../resume/Resume";
import ViewerHeader from "./components/ViewerHeader";

const workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function Viewer() {
	return (
		<BlobProvider document={<Resume />}>
			{({ blob, url }) => {
				return (
					<div>
						<ViewerHeader pdfUrl={url} />
						<Document file={blob} loading="" noData="">
							<Page
								className="w-full !bg-secondary [&>canvas]:!h-auto [&>canvas]:!w-full"
								pageNumber={1}
								scale={2}
								loading=""
								renderTextLayer={false}
								renderAnnotationLayer={false}
							/>
						</Document>
					</div>
				);
			}}
		</BlobProvider>
	);
}
