import { ISections, SectionsOrder } from "@/types";
import { View } from "@react-pdf/renderer";
import { Fragment } from "react";
import styles from "../styles";
import CertificatesSection from "./sections/CertificatesSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

type SectionsProps = {
	sections: ISections;
	order: SectionsOrder;
};

export default function Sections(props: SectionsProps) {
	const sections = {
		experience: <ExperienceSection {...props.sections.experience} />,
		skills: <SkillsSection {...props.sections.skills} />,
		projects: <ProjectsSection {...props.sections.projects} />,
		certificates: <CertificatesSection {...props.sections.certificates} />,
		education: <EducationSection {...props.sections.education} />,
	};

	return (
		<View style={styles.sections}>
			{props.order.map((section, i) =>
				props.sections[section].items.length === 0 ? null : (
					<Fragment key={i}>{sections[section]}</Fragment>
				),
			)}
		</View>
	);
}
