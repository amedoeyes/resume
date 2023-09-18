import Button from "@/components/styled/Button";
import { setResume } from "@/slices/resumeSlice";
import { AppDispatch, RootState } from "@/store";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";

export default function UpdateButton() {
	const editor = useSelector((state: RootState) => state.editor);
	const dispatch = useDispatch<AppDispatch>();

	const updateResume = () => {
		dispatch(setResume(editor));
	};

	return (
		<Button onClick={updateResume} aria-label="Update">
			<ArrowPathIcon className="h-5 w-5" />
			<span className="max-md:hidden">Update</span>
		</Button>
	);
}
