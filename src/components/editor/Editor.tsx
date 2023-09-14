import { useSearchParams } from "next/navigation";
import CertificatesForm from "./components/forms/CertificatesForm";
import EducationForm from "./components/forms/EducationForm";
import ExperienceForm from "./components/forms/ExperienceForm";
import HeaderForm from "./components/forms/HeaderForm";
import MetaForm from "./components/forms/MetaForm";
import ProjectsForm from "./components/forms/ProjectsForm";
import SkillsForm from "./components/forms/SkillsForm";

export default function Editor() {
	const searchParams = useSearchParams();
	const selectedForm = searchParams.get("form") || "header";
	const Forms = {
		header: <HeaderForm />,
		meta: <MetaForm />,
		experience: <ExperienceForm />,
		skills: <SkillsForm />,
		projects: <ProjectsForm />,
		certificates: <CertificatesForm />,
		education: <EducationForm />,
	};

	return Forms[selectedForm as keyof typeof Forms];
}
