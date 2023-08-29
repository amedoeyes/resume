import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMeta } from "../../../features/editor/editorSlice";
import { AppDispatch, RootState } from "../../../store";
import Input from "../../styled/Input";

export default function MetaForm() {
	const { meta } = useSelector((state: RootState) => state.editor);
	const dispatch = useDispatch<AppDispatch>();
	const [formValues, setFormValues] = useState(meta);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { id, value } = e.target;
		const newValues = { ...formValues, [id]: value };

		setFormValues(newValues);
		dispatch(setMeta(newValues));
	};

	return (
		<div className="w-full">
			<h3 className="my-6 text-center text-2xl font-bold uppercase">
				Meta
			</h3>
			<form className="flex flex-col gap-4">
				<Input
					className="w-full"
					id="title"
					label="Title"
					value={formValues.title}
					onChange={handleChange}
				/>
				<div className="flex items-center gap-2">
					<Input
						className="w-full"
						id="author"
						label="Author"
						value={formValues.author}
						onChange={handleChange}
					/>
					<Input
						className="w-full"
						id="subject"
						label="Subject"
						value={formValues.subject}
						onChange={handleChange}
					/>
				</div>
				<Input
					className="w-full"
					id="keywords"
					label="keywords"
					value={formValues.keywords}
					onChange={handleChange}
				/>
			</form>
		</div>
	);
}
