import CloseModalButton from "./CloseModalButton";
import DownloadButton from "./DownloadButton";
import OpenButton from "./OpenButton";
import UpdateButton from "./UpdateButton";

export default function ViewerHeader() {
	return (
		<header className="flex h-16 items-center justify-between gap-2 overflow-hidden overflow-x-auto border-b border-b-primary border-opacity-25 p-4">
			<CloseModalButton />
			<div className="flex gap-2">
				<UpdateButton />
				<DownloadButton />
				<OpenButton />
			</div>
		</header>
	);
}
