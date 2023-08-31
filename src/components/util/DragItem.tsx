import {
	Draggable,
	DraggableProps,
	DraggableProvided,
	DraggableStateSnapshot,
} from "@hello-pangea/dnd";

type DragItemProps = {
	DraggableProps: Omit<Omit<DraggableProps, "children">, "draggableId">;
	containerProps?: React.ComponentProps<"div">;
	HandleElement?: ({
		snapshot,
	}: {
		snapshot: DraggableStateSnapshot;
		provided: DraggableProvided;
	}) => JSX.Element;
	children: React.ReactNode;
};

export default function DragItem({
	DraggableProps,
	containerProps,
	HandleElement,
	children,
}: DragItemProps) {
	return (
		<Draggable
			{...DraggableProps}
			draggableId={DraggableProps.index.toString()}
		>
			{(provided, snapshot) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...(!HandleElement && provided.dragHandleProps)}
					{...containerProps}
				>
					{HandleElement && (
						<HandleElement
							snapshot={snapshot}
							provided={provided}
						/>
					)}
					{children}
				</div>
			)}
		</Draggable>
	);
}
