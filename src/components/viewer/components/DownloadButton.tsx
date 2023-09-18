import Resume from "@/components/resume/Resume";
import Button from "@/components/styled/Button";
import { RootState } from "@/store";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useSelector } from "react-redux";

export default function DownloadButton() {
	const resume = useSelector((state: RootState) => state.resume);

	return (
		<PDFDownloadLink
			document={<Resume {...resume} />}
			fileName={resume.meta.title + ".pdf"}
		>
			<Button aria-label="Download">
				<ArrowDownTrayIcon className="h-5 w-5" />
				<span className="max-md:hidden">Download</span>
			</Button>
		</PDFDownloadLink>
	);
}
