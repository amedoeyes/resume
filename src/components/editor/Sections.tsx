import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import { DropResult } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSectionsOrder } from "../../features/editor/editorSlice";
import { AppDispatch, RootState } from "../../store";
import DragItem from "./util/DragItem";
import DragList from "./util/DragList";

export default function Sections() {
	const { sections } = useSelector((state: RootState) => state.editor);
	const dispatch = useDispatch<AppDispatch>();

	const [isDragging, setIsDragging] = useState(false);

	const handleDragStart = () => {
		setIsDragging(true);
	};

	const handleDragEnd = (result: DropResult) => {
		setIsDragging(false);

		if (!result.destination) return;

		const newOrder = Array.from(sections.order);
		const [removed] = newOrder.splice(result.source.index, 1);
		newOrder.splice(result.destination.index, 0, removed);

		dispatch(setSectionsOrder(newOrder));
	};

	const tabs = new Map();

	tabs.set("header", 0);

	sections.order.forEach((item, index) => {
		tabs.set(item, index + 1);
	});

	const [selected, setSelected] = useState(0);

	useEffect(() => {
		const url = window.location.pathname.split("/")[1];
		const indexOfUrl = tabs.get(url);

		setSelected(indexOfUrl);
	}, [sections.order]);

	const handleChange = (index: number) => {
		setSelected(index);
	};

	return (
		<DragList
			DragDropContextProps={{
				onDragStart: handleDragStart,
				onDragEnd: handleDragEnd,
			}}
		>
			<Tab.Group
				vertical
				selectedIndex={selected}
				onChange={handleChange}
			>
				<Tab.List className="flex flex-col gap-2">
					<Tab
						className={`select-none rounded-full p-2 text-center uppercase outline-none transition duration-200  ${
							!isDragging &&
							"hover:bg-primary hover:bg-opacity-10 ui-selected:bg-primary ui-selected:text-secondary"
						}`}
						as={Link}
						to="header"
					>
						header
					</Tab>
					{sections.order.map((section, index) => (
						<DragItem
							key={index}
							DraggableProps={{
								index: index,
							}}
							handle
						>
							<Tab
								className={`select-none rounded-full p-2 text-center uppercase outline-none transition duration-200  ${
									!isDragging &&
									"hover:bg-primary hover:bg-opacity-10 ui-selected:bg-primary ui-selected:text-secondary"
								}`}
								as={Link}
								to={section}
							>
								{section}
							</Tab>
						</DragItem>
					))}
				</Tab.List>
			</Tab.Group>
		</DragList>
	);
}
