import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type ModalProps = {
	open: boolean;
	className?: string;
	direction?: "left" | "right";
	onClose: () => void;
	children: React.ReactNode;
};

export default function Modal(props: ModalProps) {
	const transition = {
		left: {
			enter: "transition ease-in-out duration-300 transform",
			enterFrom: "-translate-x-full",
			enterTo: "translate-x-0",
			leave: "transition ease-in-out duration-300 transform",
			leaveFrom: "translate-x-0",
			leaveTo: "-translate-x-full",
		},
		right: {
			enter: "transition ease-in-out duration-300 transform",
			enterFrom: "translate-x-full",
			enterTo: "translate-x-0",
			leave: "transition ease-in-out duration-300 transform",
			leaveFrom: "translate-x-0",
			leaveTo: "translate-x-full",
		},
	};

	return (
		<Transition as={Fragment} show={props.open}>
			<Dialog className={`fixed inset-0 z-50 ${props.className && props.className}`} onClose={props.onClose}>
				<Transition.Child
					as={Fragment}
					{...transition[props.direction || "left"]}
				>
					<Dialog.Panel className="h-full w-full bg-secondary">
						{props.children}
					</Dialog.Panel>
				</Transition.Child>
			</Dialog>
		</Transition>
	);
}
