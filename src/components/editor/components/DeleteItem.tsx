import Button from "@/components/styled/Button";
import Confirmation from "@/components/styled/Confirmation";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type DeleteItemProps = {
	onDelete: () => void;
};

export default function DeleteItem({ onDelete }: DeleteItemProps) {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button
				className="w-full"
				type="button"
				onClick={handleOpen}
				variant="outlined"
			>
				<XMarkIcon className="h-5 w-5" />
				Delete
			</Button>

			<Confirmation
				title="Delete"
				description="Are you sure you want to delete this item?"
				confirmButtonText="Delete"
				onClose={handleClose}
				open={open}
				onConfirm={onDelete}
			/>
		</div>
	);
}
