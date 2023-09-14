import Input from "@/components/styled/Input";
import TextArea from "@/components/styled/TextArea";
import { setHeader } from "@/slices/editorSlice";
import { setResume } from "@/slices/resumeSlice";
import { AppDispatch, RootState } from "@/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function HeaderForm() {
	const editor = useSelector((state: RootState) => state.editor);
	const dispatch = useDispatch<AppDispatch>();
	const [formValues, setFormValues] = useState(editor.header);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { id, type, value } = e.target;

		if (type === "textarea") {
			const newValues = { ...formValues, [id]: value.split("\n") };

			setFormValues(newValues);
			dispatch(setHeader(newValues));
		} else {
			const newValues = { ...formValues, [id]: value };

			setFormValues(newValues);
			dispatch(setHeader(newValues));
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		dispatch(setResume(editor));
	};

	return (
		<>
			<h3 className="my-6 text-center text-2xl font-bold uppercase">
				Header
			</h3>

			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<div className="flex items-center gap-2">
					<Input
						className="w-full"
						id="firstName"
						label="First Name"
						value={formValues.firstName}
						onChange={handleChange}
					/>
					<Input
						className="w-full"
						id="lastName"
						label="Last Name"
						value={formValues.lastName}
						onChange={handleChange}
					/>
				</div>
				<div className="flex items-center gap-2">
					<Input
						className="w-full"
						id="email"
						label="Email"
						value={formValues.email}
						onChange={handleChange}
					/>
					<Input
						className="w-full"
						id="phone"
						label="Phone"
						value={formValues.phone}
						onChange={handleChange}
					/>
				</div>
				<TextArea
					id="links"
					label="Links"
					data-array={true}
					value={formValues.links.join("\n")}
					onChange={handleChange}
				/>

				<input type="submit" hidden />
			</form>
		</>
	);
}
