import Button from "@/components/styled/Button";
import DragHandle from "@/components/styled/DragHandle";
import Separator from "@/components/styled/Separator";
import DragItem from "@/components/util/DragItem";
import DragList from "@/components/util/DragList";
import { setSectionsOrder } from "@/slices/editorSlice";
import { closeModal, openModal } from "@/slices/modalsSlice";
import { AppDispatch, RootState } from "@/store";
import { DropResult } from "@hello-pangea/dnd";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type TabLinkProps = {
	link: string;
	isSelected: boolean;
	isDragging: boolean;
	children: React.ReactNode;
};

function TabLink(props: TabLinkProps) {
	return (
		<div className="flex h-8 w-full select-none overflow-hidden rounded-md bg-secondary text-center text-sm uppercase max-md:h-10">
			<Link
				className={`flex h-full w-full items-center justify-center bg-primary p-1 transition duration-200 ${
					props.isSelected && !props.isDragging
						? "text-secondary"
						: "bg-opacity-5 hover:bg-opacity-10"
				}`}
				href={props.link}
			>
				{props.children}
			</Link>
		</div>
	);
}

export default function SideBar() {
	const { sectionsOrder } = useSelector((state: RootState) => state.editor);
	const dispatch = useDispatch<AppDispatch>();
	const searchParams = useSearchParams();
	const selectedForm = searchParams.get("form") || "header";
	const [isDragging, setIsDragging] = useState(false);

	const handleDragStart = () => {
		setIsDragging(true);
	};

	const handleDragEnd = (result: DropResult) => {
		setIsDragging(false);

		if (!result.destination) return;

		const newOrder = [...sectionsOrder];
		const [removed] = newOrder.splice(result.source.index, 1);

		newOrder.splice(result.destination.index, 0, removed);
		dispatch(setSectionsOrder(newOrder));
	};

	const handleClose = () => dispatch(closeModal("sideBar"));
	const handleOpenSettings = () => {
		dispatch(closeModal("sideBar"));
		dispatch(openModal("settings"));

	};

	return (
		<div className="w-full">
			<div className="mb-2 flex h-16 items-center border-b border-b-primary border-opacity-25 p-4 md:justify-center">
				<button
					className="hidden p-2 max-md:block"
					onClick={handleClose}
				>
					<ArrowLeftIcon className="h-6 w-6" />
				</button>

				<h2 className="select-none p-2 text-2xl font-medium">Résumé</h2>
			</div>

			<div className="p-2 max-md:p-4">
				<div className="flex flex-col gap-2 max-md:gap-4">
					<TabLink
						isDragging={isDragging}
						isSelected={selectedForm === "header"}
						link="?form=header"
					>
						Header
					</TabLink>

					<TabLink
						isDragging={isDragging}
						isSelected={selectedForm === "meta"}
						link="?form=meta"
					>
						Meta
					</TabLink>
				</div>

				<Separator className="mt-2 max-md:mt-4" />

				<DragList
					DragDropContextProps={{
						onDragStart: handleDragStart,
						onDragEnd: handleDragEnd,
					}}
				>
					{sectionsOrder.map((section, i) => (
						<DragItem
							key={i}
							HandleElement={DragHandle}
							DraggableProps={{ index: i }}
							containerProps={{
								className: "flex gap-2 mt-2 max-md:mt-4",
							}}
						>
							<TabLink
								isDragging={isDragging}
								isSelected={section === selectedForm}
								link={"?form=" + section}
							>
								{section}
							</TabLink>
						</DragItem>
					))}
				</DragList>

				<Separator className="mt-2 max-md:mt-4" />

				<Button
					className="mt-2 w-full max-md:mt-4"
					onClick={handleOpenSettings}
				>
					Settings
				</Button>
			</div>
		</div>
	);
}
