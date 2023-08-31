import { DropResult } from "@hello-pangea/dnd";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSectionsOrder } from "../../features/editor/editorSlice";
import { AppDispatch, RootState } from "../../store";
import DragHandle from "../styled/DragHandle";
import Separator from "../styled/Separator";
import DragItem from "../util/DragItem";
import DragList from "../util/DragList";

type TabLinkProps = {
	link: string;
	isSelected: boolean;
	isDragging: boolean;
	children: React.ReactNode;
};

function TabLink(props: TabLinkProps) {
	return (
		<div className="flex h-8 w-full select-none overflow-hidden rounded-md bg-secondary text-center text-sm uppercase">
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

	return (
		<div>
			<h2 className="select-none p-2 text-center text-2xl font-medium">
				<Link href="/">Résumé</Link>
			</h2>

			<div className="flex flex-col gap-2">
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

			<Separator className="mt-2" />

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
							className: "flex gap-2 mt-2",
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
		</div>
	);
}
