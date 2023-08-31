import { DraggableProvided, DraggableStateSnapshot } from "@hello-pangea/dnd";

type DragHandleProps = {
	snapshot: DraggableStateSnapshot;
	provided: DraggableProvided;
};

export default function DragHandle(props: DragHandleProps) {
	return (
		<span
			className={`w-2 flex-shrink-0 rounded-sm bg-primary hover:bg-opacity-50 ${
				props.snapshot.isDragging ? "bg-opacity-100" : "bg-opacity-25"
			}`}
			{...props.provided.dragHandleProps}
		></span>
	);
}
