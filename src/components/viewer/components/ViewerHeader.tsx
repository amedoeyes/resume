import CloseModalButton from "./CloseModalButton";
import DownloadButton from "./DownloadButton";
import OpenButton from "./OpenButton";
import UpdateButton from "./UpdateButton";

export default function ViewerHeader() {
	return (
		<header className="flex h-16 items-center justify-end gap-2 border-b border-b-primary border-opacity-25 p-4 max-md:justify-between">
			<div className="flex items-center">
				<CloseModalButton />
				<h2 className="hidden select-none p-2 text-2xl font-medium max-md:block">
					Viewer
				</h2>
			</div>

			<div className="flex gap-2">
				<UpdateButton />
				<DownloadButton />
				<OpenButton />
			</div>
		</header>
	);
}
