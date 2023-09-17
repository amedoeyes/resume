import { closeModal } from "@/slices/modalsSlice";
import { AppDispatch, RootState } from "@/store";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../styled/Modal";
import SelectTheme from "./components/SelectTheme";

export default function Settings() {
	const modals = useSelector((state: RootState) => state.modals);
	const dispatch = useDispatch<AppDispatch>();

	const handleClose = () => dispatch(closeModal("settings"));

	return (
		<Modal open={modals.settings} onClose={handleClose}>
			<div className="mb-2 flex h-16 items-center border-b border-b-primary border-opacity-25 p-4">
				<button onClick={handleClose}>
					<ArrowLeftIcon className="h-6 w-6" />
				</button>

				<h2 className="select-none p-2 text-2xl font-medium">
					Settings
				</h2>
			</div>

			<div className="flex flex-col gap-4 p-4">
				<SelectTheme />
			</div>
		</Modal>
	);
}
