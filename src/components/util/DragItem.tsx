import {
	Draggable,
	DraggableProps,
	DraggingStyle,
	NotDraggingStyle,
} from "react-beautiful-dnd";

type DragItemProps = {
	DraggableProps: Omit<Omit<DraggableProps, "children">, "draggableId">;
	containerProps?: React.ComponentProps<"div">;
	handle?: boolean;
	handleProps?: React.ComponentProps<"span">;
	children: React.ReactNode;
};

function getStyle(style: DraggingStyle | NotDraggingStyle | undefined) {
	if (style?.transform) {
		const axisLockY = `translate(0px, ${style.transform.split(",")[1]}`;
		return {
			...style,
			transform: axisLockY,
		};
	}

	return style;
}

export default function DragItem({
	DraggableProps,
	containerProps,
	handle = false,
	handleProps,
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
					className="flex gap-2"
					{...provided.draggableProps}
					{...(!handle && provided.dragHandleProps)}
					{...containerProps}
					style={getStyle(provided.draggableProps.style)}
				>
					{handle && (
						<span
							className={`w-2 flex-shrink-0 rounded-sm bg-primary hover:bg-opacity-50  ${
								snapshot.isDragging
									? "bg-opacity-100"
									: "bg-opacity-25"
							}`}
							{...provided.dragHandleProps}
							{...handleProps}
						></span>
					)}
					{children}
				</div>
			)}
		</Draggable>
	);
}
