import { closeModal } from "@/slices/modalsSlice";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../styled/Modal";
import Viewer from "../viewer/Viewer";

export default function ResponsiveViewer() {
	const modals = useSelector((state: RootState) => state.modals);
	const dispatch = useDispatch<AppDispatch>();

	const handleClose = () => dispatch(closeModal("viewer"));

	return (
		<>
			<div id="right-panel" className="w-1/2 flex-grow max-md:hidden">
				<Viewer />
			</div>

			<Modal
				className="hidden max-md:block"
				open={modals.viewer}
				direction="right"
				onClose={handleClose}
			>
				<Viewer />
			</Modal>
		</>
	);
}
