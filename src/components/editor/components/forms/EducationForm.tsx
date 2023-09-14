import Input from "@/components/styled/Input";
import { setSection } from "@/slices/editorSlice";
import { AppDispatch, RootState } from "@/store";
import { IEducationItem, ISection } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import SectionForm from "../SectionForm";

export default function EducationForm() {
	const { education } = useSelector(
		(state: RootState) => state.editor.sections,
	);
	const dispatch = useDispatch<AppDispatch>();

	const toAdd: IEducationItem = {
		title: "",
		institution: "",
		gpa: "",
		startDate: "",
		endDate: "",
	};

	const render = (
		index: number,
		item: IEducationItem,
		handleChange: (
			e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		) => void,
	) => {
		return (
			<>
				<Input
					className="w-full"
					id={`items[${index}].title`}
					label="Title"
					value={item.title}
					onChange={handleChange}
				/>
				<div className="flex gap-4">
					<Input
						className="w-full"
						id={`items[${index}].institution`}
						label="Institution"
						value={item.institution}
						onChange={handleChange}
					/>
					<Input
						className="w-full"
						id={`items[${index}].gpa`}
						label="GPA"
						value={item.gpa}
						onChange={handleChange}
					/>
				</div>
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

	const handleUpdate = (updatedValues: ISection<IEducationItem>) => {
		dispatch(setSection({ section: "education", data: updatedValues }));
	};

	return (
		<SectionForm
			title="Education"
			values={education}
			toAdd={toAdd}
			render={render}
			onUpdate={handleUpdate}
		/>
	);
}
