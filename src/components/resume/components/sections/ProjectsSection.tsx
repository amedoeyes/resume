import { IProjectsItem, ISection } from "@/types";
import styles from "../../styles";
import Section from "../Section";
import ProjectsItem from "../items/ProjectsItem";

export default function ProjectsSection(props: ISection<IProjectsItem>) {
	return (
		<Section title={props.title || "Projects"} style={styles.projects}>
			{props.items.map((item, index) => (
				<ProjectsItem key={index} {...item} />
			))}
		</Section>
	);
}
