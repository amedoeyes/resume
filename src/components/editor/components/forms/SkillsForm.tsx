import Input from "@/components/styled/Input";
import TextArea from "@/components/styled/TextArea";
import { setSection } from "@/slices/editorSlice";
import { AppDispatch, RootState } from "@/store";
import { ISection, ISkillsItem } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import SectionForm from "../SectionForm";

export default function SkillsForm() {
	const { skills } = useSelector((state: RootState) => state.editor.sections);
	const dispatch = useDispatch<AppDispatch>();

	const toAdd: ISkillsItem = {
		title: "",
		skills: [],
	};

	const render = (
		index: number,
		item: ISkillsItem,
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

	const handleUpdate = (updatedValues: ISection<ISkillsItem>) => {
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
