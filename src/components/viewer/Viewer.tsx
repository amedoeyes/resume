import { RootState } from "@/store";
import { BlobProvider } from "@react-pdf/renderer";
import { Document, Page, pdfjs } from "react-pdf";
import { useSelector } from "react-redux";
import Resume from "../resume/Resume";
import ViewerHeader from "./components/ViewerHeader";

const workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function Viewer() {
	const resume = useSelector((state: RootState) => state.resume);

	return (
		<BlobProvider document={<Resume {...resume} />}>
			{({ blob }) => {
				return (
					<>
						<ViewerHeader />
						<div className="h-[calc(100vh-4rem)] overflow-y-auto">
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
					</>
				);
			}}
		</BlobProvider>
	);
}
