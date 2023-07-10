import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ExperienceForm from "./components/editor/forms/ExperienceForm";
import HeaderForm from "./components/editor/forms/HeaderForm";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "header",
				element: <HeaderForm />,
			},
			{
				path: "experience",
				element: <ExperienceForm />,
			},
			{
				path: "skills",
				element: <></>,
			},
			{
				path: "projects",
				element: <></>,
			},
			{
				path: "certificates",
				element: <></>,
			},
			{
				path: "education",
				element: <></>,
			},
		],
	},
]);

export default router;
