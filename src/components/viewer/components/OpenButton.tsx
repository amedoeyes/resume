import Resume from "@/components/resume/Resume";
import Button from "@/components/styled/Button";
import { RootState } from "@/store";
import { PDFDownloadLink, usePDF } from "@react-pdf/renderer";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function OpenButton() {
	const resume = useSelector((state: RootState) => state.resume);
	const pdf = usePDF({ document: <Resume {...resume} /> });

	return (
				<Link href={pdf[0].url || ""} target="_blank">
					<Button>Open</Button>
				</Link>
	);
}
