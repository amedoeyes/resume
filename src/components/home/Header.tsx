import { openModal } from "@/slices/modalsSlice";
import { AppDispatch } from "@/store";
import { Bars3Icon, DocumentIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import Button from "../styled/Button";

export default function Header() {
	const dispatch = useDispatch<AppDispatch>();

	const openSideBar = () => dispatch(openModal("sideBar"));
	const openViewer = () => dispatch(openModal("viewer"));

	return (
		<header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b border-b-primary border-opacity-25 bg-secondary p-4 md:hidden">
			<Button onClick={openSideBar}>
				<Bars3Icon className="h-5 w-5" /> sidebar
			</Button>
			<Button onClick={openViewer}>
				<DocumentIcon className="h-5 w-5" /> viewer
			</Button>
		</header>
	);
}
