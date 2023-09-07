import DownloadButton from "./DownloadButton";
import UpdateButton from "./UpdateButton";

type ViewerHeaderProps = {
	pdfUrl: string | null;
};

export default function ViewerHeader(props: ViewerHeaderProps) {
	return (
		<header className="flex items-center gap-2 p-4">
			<UpdateButton />
			{props.pdfUrl && <DownloadButton url={props.pdfUrl} />}
		</header>
	);
}
