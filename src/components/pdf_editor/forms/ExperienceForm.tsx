import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExperience } from "../../../features/editor/editorSlice";
import { AppDispatch, RootState } from "../../../store";
import { IExperience, IJob } from "../../../types";
import Button from "../../styled/Button";
import Input from "../../styled/Input";
import TextArea from "../../styled/TextArea";

export default function ExperienceForm() {
	const { experience } = useSelector(
		(state: RootState) => state.editor.sections
	);
	const dispatch = useDispatch<AppDispatch>();

	const handleSubmit = (values: IExperience) => {
		dispatch(setExperience(values));
	};

	const formik = useFormik({
		initialValues: experience,
		onSubmit: handleSubmit,
	});

	useEffect(() => {
		dispatch(setExperience(formik.values));
	}, [formik.values]);

	const addItem = () => {
		const item: IJob = {
			title: "",
			description: "",
			company: "",
			startDate: "",
			endDate: "",
		};

		formik.setFieldValue("items", [...formik.values.items, item]);
	};

	const removeItem = (index: number) => () => {
		formik.setFieldValue(
			"items",
			formik.values.items.filter((_, i) => i !== index)
		);
	};

	return (
		<div className="w-full">
			<h3 className="mb-6 text-center text-2xl font-bold uppercase">
				Experinece
			</h3>
			<form
				className="flex flex-col gap-4"
				onSubmit={formik.handleSubmit}
			>
				<Input
					id="sectionTitle"
					name="title"
					label="Section Title"
					value={formik.values.title}
					onChange={formik.handleChange}
				/>

				<div className="h-[2px] w-full rounded-full bg-primary bg-opacity-25"></div>

				<div className="flex flex-col gap-4">
					{formik.values.items.map((item, index) => (
						<div key={index} className="flex flex-col gap-4">
							<div className="flex gap-4">
								<Input
									className="w-full"
									id={`items[${index}].title`}
									label="Title"
									value={item.title}
									onChange={formik.handleChange}
								/>
								<Input
									className="w-full"
									id={`items[${index}].company`}
									label="Company"
									value={item.company}
									onChange={formik.handleChange}
								/>
							</div>
							<TextArea
								id={`items[${index}].description`}
								label="Description"
								rows={3}
								value={item.description}
								onChange={formik.handleChange}
							/>
							<div className="flex gap-4">
								<Input
									className="w-full"
									id={`items[${index}].startDate`}
									label="Start Date"
									value={item.startDate}
									onChange={formik.handleChange}
								/>
								<Input
									className="w-full"
									id={`items[${index}].endDate`}
									label="End Date"
									value={item.endDate}
									onChange={formik.handleChange}
								/>
							</div>
							<Button type="button" onClick={removeItem(index)}>
								Remove
							</Button>

							<div className="h-[2px] w-full rounded-full bg-primary bg-opacity-25"></div>
						</div>
					))}
				</div>

				<Button type="button" onClick={addItem}>
					Add
				</Button>
			</form>
		</div>
	);
}
