import {
	Dialog,
	DialogPanelProps,
	DialogProps,
	DialogTitleProps,
	Transition,
} from "@headlessui/react";
import { Fragment, useRef } from "react";
import Button from "./Button";

type ConfirmationProps = {
	title: string;
	description: string;
	confirmButtonText?: string;
	cancelButtonText?: string;
	open: boolean;
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
		<Transition show={props.open} as={Fragment}>
			<Dialog
				{...props.DialogProps}
				className={`fixed inset-0 z-50 ${
					props.DialogProps?.className || ""
				}`}
				onClose={props.onClose}
				initialFocus={cancelButtonRef}
			>
				<Transition.Child
					as={Fragment}
						enter="ease-in-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
				>
					<div
						className="fixed inset-0 bg-black/30"
						aria-hidden="true"
					/>
				</Transition.Child>

				<div className="fixed inset-0 flex items-center justify-center">
					<Transition.Child
						as={Fragment}
					enter="ease-in-out duration-300"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="ease-in-out duration-200"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
					>
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
									props.DialogDescriptionProps?.className ||
									""
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
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
}
