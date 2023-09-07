import Resume from "@/components/resume/Resume";
import Button from "@/components/styled/Button";
import { RootState } from "@/store";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useSelector } from "react-redux";

export default function DownloadButton() {
	const resume = useSelector((state: RootState) => state.resume);

	return (
		<PDFDownloadLink
			document={<Resume {...resume} />}
			fileName={resume.meta.title + ".pdf"}
		>
			<Button>Download</Button>
		</PDFDownloadLink>
	);
}
