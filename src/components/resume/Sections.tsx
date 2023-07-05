import { View } from "@react-pdf/renderer";
import { ISections } from "../../types";
import Certificates from "./sections/Certificates";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import styles from "./styles";

type SectionsOrderProps = {
	sections: ISections;
};

export default function Sections({ sections }: SectionsOrderProps) {
	return (
		<View style={styles.sections}>
			{sections.order.map((section) => {
				if (sections[section].items.length === 0) return <></>;

				switch (section) {
					case "experience":
						return (
							<Experience key={section} experience={sections.experience} />
						);
					case "skills":
						return <Skills key={section} skills={sections.skills} />;
					case "projects":
						return <Projects key={section} projects={sections.projects} />;
					case "certificates":
						return (
							<Certificates
								key={section}
								certificates={sections.certificates}
							/>
						);
					case "education":
						return <Education key={section} education={sections.education} />;
				}
			})}
		</View>
	);
}
