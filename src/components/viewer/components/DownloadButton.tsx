import Button from "@/components/styled/Button";
import Link from "next/link";

type DownloadButtonProps = {
	url: string;
};

export default function DownloadButton(props: DownloadButtonProps) {
	return (
		<Link href={props.url} target="_blank" download>
			<Button>Download</Button>
		</Link>
	);
}
