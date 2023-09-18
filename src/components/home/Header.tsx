import { openModal } from "@/slices/modalsSlice";
import { AppDispatch } from "@/store";
import {
	ArrowLeftIcon,
	Bars3Icon,
	DocumentIcon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";

export default function Header() {
	const dispatch = useDispatch<AppDispatch>();

	const openSideBar = () => dispatch(openModal("sideBar"));
	const openViewer = () => dispatch(openModal("viewer"));

	return (
		<header className="z-20 flex h-16 w-full items-center justify-between border-b border-b-primary border-opacity-25 bg-secondary p-4 md:hidden">
			<button className="p-2" onClick={openSideBar} aria-label="sidebar">
				<Bars3Icon className="h-6 w-6" />
			</button>

			<h2 className="select-none p-2 text-2xl font-medium">Résumé</h2>

			<button className="p-2" onClick={openViewer} aria-label="viewer">
				<DocumentIcon className="h-6 w-6" />
			</button>
		</header>
	);
}
