import Button from "@/components/styled/Button";
import Input from "@/components/styled/Input";
import Separator from "@/components/styled/Separator";
import DragItem from "@/components/util/DragItem";
import DragList from "@/components/util/DragList";
import { Section } from "@/types";
import { DropResult } from "@hello-pangea/dnd";
import { useState } from "react";
import DeleteItem from "./DeleteItem";

type SectionFormProps<T> = {
	title: string;
	values: Section<T>;
	toAdd: T;
	onUpdate: (updatedValues: Section<T>) => void;
	render: (
		index: number,
		item: T,
		handleChange: (
			e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		) => void,
	) => JSX.Element;
};

export default function SectionForm<T>(props: SectionFormProps<T>) {
	const [formValues, setFormValues] = useState(props.values);

	const handleDragEnd = (result: DropResult) => {
		if (!result.destination) return;

		const newOrder = [...props.values.items];
		const [removed] = newOrder.splice(result.source.index, 1);
		newOrder.splice(result.destination.index, 0, removed);

		const updatedValues = { ...props.values, items: newOrder };

		setFormValues(updatedValues);
		props.onUpdate(updatedValues);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { id, value } = e.target;
		const path = id.split(/[[\].]/).filter(Boolean);
		const updatedValues = structuredClone(props.values);
		const isArray = e.target.getAttribute("data-array") === "true";
		let updatedValuesP = updatedValues;

		for (let i = 0; i < path.length; i++) {
			const key = path[i];

			if (i === path.length - 1) {
				if (isArray) {
					updatedValuesP[key] = value.split("\n");
				} else {
					updatedValuesP[key] = value;
				}
			}

			if (updatedValuesP[key]) {
				updatedValuesP = updatedValuesP[key];
			}
		}

		setFormValues(updatedValues);
		props.onUpdate(updatedValues);
	};

	const handleDelete = (index: number) => () => {
		let updatedItems = [...props.values.items];
		updatedItems = updatedItems.filter((_, i) => i !== index);

		const updatedValues = { ...props.values, items: updatedItems };

		setFormValues(updatedValues);
		props.onUpdate(updatedValues);
	};

	const handleAdd = () => {
		const updatedItems = [...props.values.items];
		updatedItems.push(props.toAdd);

		const updatedValues = { ...props.values, items: updatedItems };

		setFormValues(updatedValues);
		props.onUpdate(updatedValues);
	};

	return (
		<div>
			<h3 className="my-6 text-center text-2xl font-bold uppercase">
				{props.title}
			</h3>

			<form className="flex flex-col gap-4">
				<Input
					id="title"
					name="title"
					label="Section Title"
					value={props.values.title}
					onChange={handleChange}
				/>

				<Separator />

				<DragList
					DragDropContextProps={{ onDragEnd: handleDragEnd }}
					containerProps={{ className: "flex flex-col gap-4" }}
				>
					{formValues.items.map((item, index) => (
						<DragItem
							key={index}
							DraggableProps={{ index: index }}
							handle
						>
							<div className="flex w-full flex-col gap-4 rounded-md border border-primary border-opacity-25 bg-secondary p-2">
								{props.render(index, item, handleChange)}

								<DeleteItem onDelete={handleDelete(index)} />
							</div>
						</DragItem>
					))}
				</DragList>

				<Button type="button" onClick={handleAdd}>
					Add
				</Button>
			</form>
		</div>
	);
}
