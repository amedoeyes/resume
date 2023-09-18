import Resume from "@/components/resume/Resume";
import Button from "@/components/styled/Button";
import { RootState } from "@/store";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { usePDF } from "@react-pdf/renderer";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function OpenButton() {
	const resume = useSelector((state: RootState) => state.resume);
	const pdf = usePDF({ document: <Resume {...resume} /> });

	return (
		<Link href={pdf[0].url || ""} target="_blank">
			<Button aria-label="Open">
				<ArrowTopRightOnSquareIcon className="h-5 w-5" />
				<span className="max-md:hidden">Open</span>
			</Button>
		</Link>
	);
}
