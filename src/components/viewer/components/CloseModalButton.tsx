import { closeModal } from "@/slices/modalsSlice";
import { AppDispatch } from "@/store";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";

export default function CloseModalButton() {
	const dispatch = useDispatch<AppDispatch>();

	const handleClose = () => dispatch(closeModal("viewer"));

	return (
		<button className="hidden p-2 max-md:block" onClick={handleClose} aria-label="Close">
			<ArrowLeftIcon className="h-6 w-6" />
		</button>
	);
}
