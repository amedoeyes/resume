import Button from "@/components/styled/Button";
import DragHandle from "@/components/styled/DragHandle";
import Input from "@/components/styled/Input";
import Separator from "@/components/styled/Separator";
import DragItem from "@/components/util/DragItem";
import DragList from "@/components/util/DragList";
import { setResume } from "@/slices/resumeSlice";
import { AppDispatch, RootState } from "@/store";
import { ISection } from "@/types";
import { DropResult } from "@hello-pangea/dnd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteItem from "./DeleteItem";

type SectionFormProps<T> = {
	title: string;
	values: ISection<T>;
	toAdd: T;
	onUpdate: (updatedValues: ISection<T>) => void;
	render: (
		index: number,
		item: T,
		handleChange: (
			e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		) => void,
	) => JSX.Element;
};

export default function SectionForm<T>(props: SectionFormProps<T>) {
	const editor = useSelector((state: RootState) => state.editor);
	const dispatch = useDispatch<AppDispatch>();
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

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		dispatch(setResume(editor));
	}

	return (
		<>
			<h3 className="my-6 text-center text-2xl font-bold uppercase">
				{props.title}
			</h3>

			<form className="flex flex-col" onSubmit={handleSubmit}>
				<Input
					id="title"
					name="title"
					label="Section Title"
					value={props.values.title}
					onChange={handleChange}
				/>

				<Separator className="mt-4" />

				<DragList DragDropContextProps={{ onDragEnd: handleDragEnd }}>
					{formValues.items.map((item, index) => (
						<DragItem
							key={index}
							HandleElement={DragHandle}
							DraggableProps={{ index: index }}
							containerProps={{
								className: "flex gap-2 mt-4",
							}}
						>
							<div className="flex w-full flex-col gap-4 rounded-md border border-primary border-opacity-25 bg-secondary p-2">
								{props.render(index, item, handleChange)}

								<DeleteItem onDelete={handleDelete(index)} />
							</div>
						</DragItem>
					))}
				</DragList>

				{props.values.items.length > 0 && (
					<Separator className="mt-4" />
				)}

				<input type="submit" hidden />
			</form>

			<Button className="mt-4 w-full" type="button" onClick={handleAdd}>
				Add
			</Button>
		</>
	);
}
