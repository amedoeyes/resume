import { useDispatch, useSelector } from "react-redux";
import { setResume } from "../../features/resume/resumeSlice";
import { AppDispatch, RootState } from "../../store";
import Button from "../styled/Button";
import ExperienceForm from "./forms/ExperienceForm";
import HeaderForm from "./forms/HeaderForm";

export default function PdfEditor() {
	const editor = useSelector((state: RootState) => state.editor);
	const dispatch = useDispatch<AppDispatch>();

	const updateResume = () => {
		dispatch(setResume(editor));
	};

	return (
		<div>
			<header className="flex justify-between p-4">
				<h2 className="select-none text-3xl">Resume</h2>
				<Button onClick={updateResume}>Update</Button>
			</header>
			<main className="flex">
				<div className="h-screen w-60 bg-neutral-800"></div>
				<div className="flex w-full flex-col items-center p-8">
					<HeaderForm />
					<ExperienceForm />
				</div>
			</main>
		</div>
	);
}
