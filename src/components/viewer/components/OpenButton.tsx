import Resume from "@/components/resume/Resume";
import Button from "@/components/styled/Button";
import { RootState } from "@/store";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function OpenButton() {
	const resume = useSelector((state: RootState) => state.resume);

	return (
		<PDFDownloadLink document={<Resume {...resume} />}>
			{({ url }) => (
				<Link href={url || ""} target="_blank">
					<Button>Open</Button>
				</Link>
			)}
		</PDFDownloadLink>
	);
}
