import Input from "@/components/styled/Input";
import TextArea from "@/components/styled/TextArea";
import { setSection } from "@/slices/editorSlice";
import { AppDispatch, RootState } from "@/store";
import { IProjectsItem, ISection } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import SectionForm from "../SectionForm";

export default function ProjectsForm() {
	const { projects } = useSelector(
		(state: RootState) => state.editor.sections,
	);
	const dispatch = useDispatch<AppDispatch>();

	const toAdd: IProjectsItem = {
		title: "",
		startDate: "",
		endDate: "",
		description: [],
	};

	const render = (
		index: number,
		item: IProjectsItem,
		handleChange: (
			e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		) => void,
	) => {
		return (
			<>
				<div className="flex gap-4">
					<Input
						className="w-full"
						id={`items[${index}].title`}
						label="Title"
						value={item.title}
						onChange={handleChange}
					/>
				</div>
				<TextArea
					id={`items[${index}].description`}
					label="Description"
					data-array={true}
					value={item.description.join("\n")}
					onChange={handleChange}
				/>
				<div className="flex gap-4">
					<Input
						className="w-full"
						id={`items[${index}].startDate`}
						label="Start Date"
						value={item.startDate}
						onChange={handleChange}
					/>
					<Input
						className="w-full"
						id={`items[${index}].endDate`}
						label="End Date"
						value={item.endDate}
						onChange={handleChange}
					/>
				</div>
			</>
		);
	};

	const handleUpdate = (updatedValues: ISection<IProjectsItem>) => {
		dispatch(setSection({ section: "projects", data: updatedValues }));
	};

	return (
		<SectionForm
			title="Projects"
			values={projects}
			toAdd={toAdd}
			render={render}
			onUpdate={handleUpdate}
		/>
	);
}
