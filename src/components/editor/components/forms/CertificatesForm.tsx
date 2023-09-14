import Input from "@/components/styled/Input";
import { setSection } from "@/slices/editorSlice";
import { AppDispatch, RootState } from "@/store";
import { ICertificatesItem, ISection } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import SectionForm from "../SectionForm";

export default function CertificatesForm() {
	const { certificates } = useSelector(
		(state: RootState) => state.editor.sections,
	);
	const dispatch = useDispatch<AppDispatch>();

	const toAdd: ICertificatesItem = {
		title: "",
		institution: "",
		id: "",
		startDate: "",
		endDate: "",
	};

	const render = (
		index: number,
		item: ICertificatesItem,
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
					<Input
						className="w-full"
						id={`items[${index}].institution`}
						label="Institution"
						value={item.institution}
						onChange={handleChange}
					/>
				</div>
				<Input
					className="w-full"
					id={`items[${index}].id`}
					label="Id"
					value={item.id}
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

	const handleUpdate = (updatedValues: ISection<ICertificatesItem>) => {
		dispatch(setSection({ section: "certificates", data: updatedValues }));
	};

	return (
		<SectionForm
			title="Certificates"
			values={certificates}
			toAdd={toAdd}
			render={render}
			onUpdate={handleUpdate}
		/>
	);
}
