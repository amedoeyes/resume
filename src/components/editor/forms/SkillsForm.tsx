import { setSection } from "@/features/editor/editorSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { Section, SkillsItem } from "../../../types";
import Input from "../../styled/Input";
import TextArea from "../../styled/TextArea";
import SectionForm from "../components/SectionForm";

export default function SkillsForm() {
	const { skills } = useSelector((state: RootState) => state.editor.sections);
	const dispatch = useDispatch<AppDispatch>();

	const toAdd: SkillsItem = {
		title: "",
		skills: [],
	};

	const render = (
		index: number,
		item: SkillsItem,
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
				<TextArea
					id={`items[${index}].skills`}
					label="Skills"
					data-array={true}
					value={item.skills.join("\n")}
					onChange={handleChange}
				/>
			</>
		);
	};

	const handleUpdate = (updatedValues: Section<SkillsItem>) => {
		dispatch(setSection({ section: "skills", data: updatedValues }));
	};

	return (
		<SectionForm
			title="Skills"
			values={skills}
			toAdd={toAdd}
			render={render}
			onUpdate={handleUpdate}
		/>
	);
}
