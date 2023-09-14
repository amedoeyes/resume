import DownloadButton from "./DownloadButton";
import OpenButton from "./OpenButton";
import UpdateButton from "./UpdateButton";

export default function ViewerHeader() {
	return (
		<header className="flex items-center gap-2 p-4">
			<UpdateButton />
			<DownloadButton />
			<OpenButton />
		</header>
	);
}
