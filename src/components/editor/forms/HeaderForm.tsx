import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHeader } from "../../../features/editor/editorSlice";
import { AppDispatch, RootState } from "../../../store";
import { IHeader } from "../../../types";
import Button from "../../styled/Button";
import Input from "../../styled/Input";
import TextArea from "../../styled/TextArea";

export default function HeaderForm() {
	const { header } = useSelector((state: RootState) => state.resume);
	const dispatch = useDispatch<AppDispatch>();
	const [formValues, setFormValues] = useState(header);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const id = e.target.id;

		if (id === "links") {
			setFormValues({ ...formValues, links: e.target.value.split("\n") });

			return;
		}

		setFormValues({ ...formValues, [id]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const header: IHeader = {
			...formValues,
			links: formValues.links.filter((x) => x !== ""),
		};

		dispatch(setHeader(header));
	};

	return (
		<div className="w-full">
			<h3 className="mb-6 text-center text-2xl font-bold uppercase">
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
					rows={4}
					value={formValues.links.join("\n")}
					onChange={handleChange}
				/>

				<Button type="submit">Update</Button>
			</form>
		</div>
	);
}
