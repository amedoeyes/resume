import { Outlet } from "react-router";
import Sections from "./Sections";

export default function PdfEditor() {
	return (
		<main className="flex w-full">
			<div className="p-4">
				<Sections />
			</div>
			<div className="flex w-full flex-col items-center p-8">
				<Outlet />
			</div>
		</main>
	);
}
