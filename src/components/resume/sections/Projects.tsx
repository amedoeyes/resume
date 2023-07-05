import { IProjects } from "../../../types";
import Project from "./components/Project";
import Section from "./components/Section";

type ProjectsProps = {
	projects: IProjects;
};

export default function Projects({ projects }: ProjectsProps) {
	return (
		<Section title={projects.title || "Projects"}>
			{projects.items.map((item, index) => (
				<Project
					key={index}
					title={item.title}
					description={item.description}
					stack={item.stack}
					link={item.link}
				/>
			))}
		</Section>
	);
}
