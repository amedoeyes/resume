import Button from "@/components/styled/Button";
import { setResume } from "@/slices/resumeSlice";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

export default function UpdateButton() {
	const editor = useSelector((state: RootState) => state.editor);
	const dispatch = useDispatch<AppDispatch>();

	const updateResume = () => {
		dispatch(setResume(editor));
	};

	return <Button onClick={updateResume}>Update</Button>;
}
