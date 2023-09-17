import Button from "@/components/styled/Button";
import { closeModal } from "@/slices/modalsSlice";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import {ArrowLeftIcon} from "@heroicons/react/24/outline";

export default function CloseModalButton() {
	const dispatch = useDispatch<AppDispatch>();

	const handleClose = () => dispatch(closeModal("viewer"));

	return (
		<button className="hidden max-md:block p-2" onClick={handleClose}>
			<ArrowLeftIcon className="h-6 w-6" />
		</button>
	);
}
