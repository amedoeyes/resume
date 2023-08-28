import {
	Dialog,
	DialogPanelProps,
	DialogProps,
	DialogTitleProps,
} from "@headlessui/react";
import { useRef } from "react";
import Button from "./Button";

type ConfirmationProps = {
	title: string;
	description: string;
	confirmButtonText?: string;
	cancelButtonText?: string;
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	DialogProps?: DialogProps<"div">;
	DialogPanelProps?: DialogPanelProps<"div">;
	DialogTitleProps?: DialogTitleProps<"h2">;
	DialogDescriptionProps?: React.HTMLAttributes<HTMLParagraphElement>;
};

export default function Confirmation(props: ConfirmationProps) {
	const cancelButtonRef = useRef(null);

	return (
		<Dialog
			{...props.DialogProps}
			className={`relative z-50 ${props.DialogProps?.className || ""}`}
			open={props.isOpen}
			onClose={props.onClose}
			initialFocus={cancelButtonRef}
		>
			<div className="fixed inset-0 bg-black/30" aria-hidden="true" />

			<div className="fixed inset-0 flex items-center justify-center">
				<Dialog.Panel
					{...props.DialogPanelProps}
					className={`flex flex-col gap-4 rounded-lg border border-primary border-opacity-25 bg-secondary p-6 ${
						props.DialogPanelProps?.className || ""
					}`}
				>
					<Dialog.Title
						{...props.DialogTitleProps}
						className={`text-center text-2xl font-medium ${
							props.DialogTitleProps?.className || ""
						}`}
					>
						{props.title}
					</Dialog.Title>

					<Dialog.Description
						{...props.DialogDescriptionProps}
						className={`text-center ${
							props.DialogDescriptionProps?.className || ""
						}`}
					>
						{props.description}
					</Dialog.Description>

					<div className="flex justify-between gap-4">
						<Button
							ref={cancelButtonRef}
							variant="outlined"
							className="w-full"
							onClick={props.onClose}
						>
							{props.cancelButtonText || "Cancel"}
						</Button>
						<Button
							className="w-full"
							onClick={() => {
								props.onConfirm();
								props.onClose();
							}}
						>
							{props.confirmButtonText || "Confirm"}
						</Button>
					</div>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
}
