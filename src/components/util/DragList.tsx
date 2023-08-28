import {
	DragDropContext,
	DragDropContextProps,
	Droppable,
	DroppableProps,
} from "react-beautiful-dnd";

type DragListProps = {
	DragDropContextProps: Omit<DragDropContextProps, "children">;
	DroppableProps?: Omit<Omit<DroppableProps, "children">, "droppableId">;
	containerProps?: React.ComponentProps<"div">;
	children: React.ReactNode;
};

export default function DragList({
	DragDropContextProps,
	DroppableProps,
	containerProps,
	children,
}: DragListProps) {
	return (
		<DragDropContext {...DragDropContextProps}>
			<Droppable {...DroppableProps} droppableId="list">
				{(provided) => (
					<div
						ref={provided.innerRef}
						{...provided.droppableProps}
						{...containerProps}
					>
						{children}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
}
