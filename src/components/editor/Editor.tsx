import { useSearchParams } from "next/navigation";
import CertificatesForm from "./forms/CertificatesForm";
import EducationForm from "./forms/EducationForm";
import ExperienceForm from "./forms/ExperienceForm";
import HeaderForm from "./forms/HeaderForm";
import MetaForm from "./forms/MetaForm";
import ProjectsForm from "./forms/ProjectsForm";
import SkillsForm from "./forms/SkillsForm";

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
