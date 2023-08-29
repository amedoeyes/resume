import Button from "@/components/styled/Button";
import Confirmation from "@/components/styled/Confirmation";
import { useState } from "react";

type DeleteItemProps = {
	onDelete: () => void;
};

export default function DeleteItem({ onDelete }: DeleteItemProps) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<Button
				className="w-full"
				type="button"
				onClick={() => setIsOpen(true)}
				variant="outlined"
			>
				Delete
			</Button>

			<Confirmation
				title="Delete"
				description="Are you sure you want to delete this item?"
				confirmButtonText="Delete"
				onClose={() => setIsOpen(false)}
				isOpen={isOpen}
				onConfirm={onDelete}
			/>
		</div>
	);
}
