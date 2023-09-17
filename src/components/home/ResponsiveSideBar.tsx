import { closeModal } from "@/slices/modalsSlice";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../styled/Modal";
import SideBar from "./components/SideBar";

export default function ResponsiveSideBar() {
	const modals = useSelector((state: RootState) => state.modals);
	const dispatch = useDispatch<AppDispatch>();

	const handleClose = () => {
		dispatch(closeModal("sideBar"));
	};

	return (
		<>
			<div className="w-36 border-r border-r-primary border-opacity-25 max-md:hidden">
				<SideBar />
			</div>

			<Modal
				className="hidden max-md:block"
				open={modals.sideBar}
				onClose={handleClose}
			>
				<SideBar />
			</Modal>
		</>
	);
}
