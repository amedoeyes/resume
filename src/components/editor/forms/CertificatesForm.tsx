import { setSection } from "@/features/editor/editorSlice";
import { CertificatesItem, Section } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import Input from "../../styled/Input";
import SectionForm from "../components/SectionForm";

export default function CertificatesForm() {
	const { certificates } = useSelector(
		(state: RootState) => state.editor.sections,
	);
	const dispatch = useDispatch<AppDispatch>();

	const toAdd: CertificatesItem = {
		title: "",
		institution: "",
		id: "",
		startDate: "",
		endDate: "",
	};

	const render = (
		index: number,
		item: CertificatesItem,
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

	const handleUpdate = (updatedValues: Section<CertificatesItem>) => {
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
