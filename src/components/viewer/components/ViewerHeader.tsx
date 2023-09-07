import DownloadButton from "./DownloadButton";
import UpdateButton from "./UpdateButton";

export default function ViewerHeader() {
	return (
		<header className="flex items-center gap-2 p-4">
			<UpdateButton />
			<DownloadButton />
		</header>
	);
}
